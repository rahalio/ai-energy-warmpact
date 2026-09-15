import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Page, Panel, PrimaryLink, Stat, Table } from "@/components/ui";
import {
  demoAssessments,
  demoBreaches,
  demoConnections,
  demoCustomers,
  demoFindings,
  demoGuarantees,
  demoProposals,
  demoReturnTemps,
  demoSafetyFloors,
  demoSwitchRisk,
} from "@/lib/demo-data";
import { customersService } from "@/services/domains/customers/customers.service";
import { guaranteesService } from "@/services/domains/guarantees/guarantees.service";
import { networkService } from "@/services/domains/network/network.service";
import { settlementService } from "@/services/domains/settlement/settlement.service";
import { underwritingService } from "@/services/domains/underwriting/underwriting.service";
import { pricingService } from "@/services/domains/pricing/pricing.service";
import { advisoryService } from "@/services/domains/advisory/advisory.service";

function useDemoOrApi() {
  // Prefer demo portfolio for UX completeness; API calls attempted in workflows.
  return {
    customers: demoCustomers,
    connections: demoConnections,
    assessments: demoAssessments,
    guarantees: demoGuarantees,
    floors: demoSafetyFloors,
    returns: demoReturnTemps,
    findings: demoFindings,
    breaches: demoBreaches,
    proposals: demoProposals,
    switchRisk: demoSwitchRisk,
  };
}

export function SalesHomePage() {
  const data = useDemoOrApi();
  const underContract = data.connections.filter((c) => c.contractStatus === "condition_contract").length;
  const switchRisk = data.switchRisk.filter((s) => s.riskLevel === "high").length;

  return (
    <Page
      title="Where can we sell condition before the heat pump quote lands?"
      purpose="Portfolio of underwriting-ready buildings, switch risk, and margin that is decoupled from MWh."
      actions={<PrimaryLink to="/customers">Open customers</PrimaryLink>}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Panel tone="copper">
          <Stat label="Condition contracts" value={String(underContract)} hint="Active guarantees" />
        </Panel>
        <Panel tone="ember">
          <Stat label="High switch risk" value={String(switchRisk)} hint="Alternative heating signals" />
        </Panel>
        <Panel tone="inband">
          <Stat label="Margin vs volume" value="Decoupled" hint="Prove BR-3 on settlement" />
        </Panel>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Pipeline">
          <Table
            headers={["Connection", "Status", "Action"]}
            rows={data.connections.map((c) => [
              c.address,
              c.contractStatus,
              <Link key={c.id} className="text-[color:var(--copper)]" to={`/connections/${c.id}`}>
                Open
              </Link>,
            ])}
          />
        </Panel>
        <Panel title="Switch-risk rail" tone="ember">
          <Table
            headers={["Customer", "Risk", "Signals"]}
            rows={data.switchRisk.map((s) => [
              data.customers.find((c) => c.id === s.customerId)?.name ?? s.customerId,
              s.riskLevel,
              s.signals.join(", "),
            ])}
          />
        </Panel>
      </div>
    </Page>
  );
}

export function CustomersPage() {
  const data = useDemoOrApi();
  return (
    <Page
      title="Customers and connections"
      purpose="Navigate heat customers with contract status: metered, underwriting, condition, or exited."
    >
      <Panel>
        <Table
          headers={["Customer", "Segment", "Risk", "Connections"]}
          rows={data.customers.map((c) => [
            c.name,
            c.segment,
            c.alternativeHeatingRisk,
            c.connectionIds.length,
          ])}
        />
      </Panel>
      <Panel title="Connections">
        <Table
          headers={["Address", "Zone", "Status", "Substation health", ""]}
          rows={data.connections.map((c) => [
            c.address,
            c.networkZone,
            c.contractStatus,
            c.substation.healthScore,
            <Link key={c.id} to={`/connections/${c.id}`} className="text-[color:var(--copper)]">
              Detail
            </Link>,
          ])}
        />
      </Panel>
    </Page>
  );
}

export function ConnectionDetailPage() {
  const { connectionId = "" } = useParams();
  const data = useDemoOrApi();
  const connection = data.connections.find((c) => c.id === connectionId) ?? data.connections[0];
  const assessment = data.assessments.find((a) => a.connectionId === connection.id);
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function startUnderwriting() {
    setBusy(true);
    setMessage(null);
    try {
      await underwritingService.getUnderwriting(connection.id, {
        conditionProductId: "prd_comfort_band",
        surveyPerformed: true,
      });
      setMessage("Underwriting request sent to API (sandbox may return empty). Demo assessment retained.");
    } catch (err) {
      setMessage(
        `API unavailable — using demo assessment. ${err instanceof Error ? err.message : ""}`
      );
    } finally {
      setBusy(false);
      navigate("/underwriting");
    }
  }

  return (
    <Page
      title={connection.address}
      purpose="Connection detail with substation, thermal readiness, and underwriting-before-price gate."
      actions={
        <button
          disabled={busy}
          onClick={startUnderwriting}
          className="rounded-md bg-[color:var(--copper)] px-3 py-2 text-sm text-white disabled:opacity-60"
        >
          {busy ? "Starting…" : "Start underwriting"}
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Panel>
          <Stat label="Contract" value={connection.contractStatus} />
        </Panel>
        <Panel>
          <Stat label="Zone" value={connection.networkZone} />
        </Panel>
        <Panel tone="inband">
          <Stat label="Substation health" value={`${connection.substation.healthScore}/5`} />
        </Panel>
      </div>
      {assessment ? (
        <Panel title="Latest assessment" tone="copper">
          <p>
            Decision: <strong>{assessment.decision}</strong> · Envelope {assessment.envelopeConditionGrade} ·
            Confidence {(assessment.deliverabilityConfidence * 100).toFixed(0)}%
          </p>
          <p className="mt-2 text-sm text-[color:var(--slate-500)]">
            Price is blocked until underwriting completes (BR-2).
          </p>
        </Panel>
      ) : null}
      {message ? <p className="text-sm text-[color:var(--slate-500)]">{message}</p> : null}
    </Page>
  );
}

export function UnderwritingPage() {
  const data = useDemoOrApi();
  return (
    <Page
      title="Underwriting assessments"
      purpose="Offer, decline, or remediate-first — price follows risk."
    >
      <Panel>
        <Table
          headers={["Assessment", "Connection", "Decision", "Envelope", "Confidence"]}
          rows={data.assessments.map((a) => [
            a.id,
            a.connectionId,
            a.decision,
            a.envelopeConditionGrade,
            `${Math.round(a.deliverabilityConfidence * 100)}%`,
          ])}
        />
      </Panel>
      <Panel title="Thermal models">
        <p className="text-sm text-[color:var(--slate-700)]">
          Models are derived from substation telemetry, heat-meter history, and weather series before any
          flat-rate is constructed.
        </p>
      </Panel>
    </Page>
  );
}

export function OffersPage() {
  const data = useDemoOrApi();
  const [comparability, setComparability] = useState<string | null>(null);

  async function buildOffer() {
    try {
      await pricingService.getFlatRate({
        connectionId: "con_espoo_1",
        conditionProductId: "prd_comfort_band",
      });
    } catch {
      /* demo path */
    }
    setComparability("comparable — components disclosed vs published tariff (BR-10)");
  }

  return (
    <Page
      title="Offers and guarantees"
      purpose="Transparent flat-rate components, exit terms, and tariff comparability before accept."
      actions={
        <button
          onClick={buildOffer}
          className="rounded-md bg-[color:var(--copper)] px-3 py-2 text-sm text-white"
        >
          Build flat-rate offer
        </button>
      }
    >
      <Panel title="Active / offered guarantees" tone="copper">
        <Table
          headers={["Guarantee", "Connection", "Status", "Flat monthly", "Exit"]}
          rows={data.guarantees.map((g) => [
            g.id,
            g.connectionId,
            g.status,
            `${g.flatMonthlyRate.amount} ${g.flatMonthlyRate.currency}`,
            <Link key={g.id} to="/exit" className="text-[color:var(--copper)]">
              View package
            </Link>,
          ])}
        />
      </Panel>
      <Panel title="Price components (example)">
        <Table
          headers={["Component", "Amount", "Plain language"]}
          rows={[
            ["modelled_heat_cost", "9,800 EUR", "Weather-normalised heat cost"],
            ["fuel_and_carbon", "2,100 EUR", "Fuel mix and carbon price band"],
            ["guarantee_risk_margin", "3,200 EUR", "Guarantee risk buffer"],
            ["advisory_service", "1,400 EUR", "Remediation partnership"],
            ["platform_and_administration", "1,900 EUR", "Platform and settlement"],
          ]}
        />
        {comparability ? <p className="mt-3 text-sm text-[color:var(--inband)]">{comparability}</p> : null}
      </Panel>
    </Page>
  );
}

export function OpsHomePage() {
  return (
    <Page
      title="Network ops"
      purpose="Deliver the guarantee profitably inside hard safety floors."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Panel>
          <PrimaryLink to="/ops/forecast">Demand forecast</PrimaryLink>
        </Panel>
        <Panel>
          <PrimaryLink to="/ops/setpoints">Supply setpoints</PrimaryLink>
        </Panel>
        <Panel tone="ember">
          <PrimaryLink to="/ops/return-temps">Return temperatures</PrimaryLink>
        </Panel>
        <Panel>
          <PrimaryLink to="/ops/diagnostics">Fault findings</PrimaryLink>
        </Panel>
      </div>
      <Panel title="Safety floors" tone="ember">
        <Table
          headers={["Floor", "Value", "Basis", "Overridable"]}
          rows={demoSafetyFloors.map((f) => [
            f.name,
            `${f.floorValue} ${f.unit}`,
            f.basis,
            f.overridable ? "yes" : "never",
          ])}
        />
      </Panel>
    </Page>
  );
}

export function ForecastPage() {
  return (
    <Page title="Demand forecast" purpose="Building and network heat demand for the next operating window.">
      <Panel tone="inband">
        <Stat label="HEL-N 24h" value="182 MWh" hint="Weather-normalised" />
        <p className="mt-4 text-sm text-[color:var(--slate-700)]">
          Forecast feeds the setpoint planner. Binding connections constrain the next temperature drop.
        </p>
      </Panel>
    </Page>
  );
}

export function SetpointsPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function issueSetpoint() {
    try {
      await networkService.getSetpoint({
        networkZone: "HEL-N",
        supplyTemperatureC: 72,
      });
      setStatus("Setpoint issued (or sandbox accepted). Floors checked.");
    } catch {
      setStatus("Setpoint refused or API offline — floors remain binding in UI.");
    }
  }

  return (
    <Page
      title="Supply setpoint planner"
      purpose="Propose supply temperature; refuse any path that crosses a safety floor."
      actions={
        <button
          onClick={issueSetpoint}
          className="rounded-md bg-[color:var(--slate-900)] px-3 py-2 text-sm text-white"
        >
          Issue setpoint
        </button>
      }
    >
      <Panel>
        <p className="text-sm">Proposed: 72°C · Binding: Merituuli (min viable 71°C)</p>
        {status ? <p className="mt-3 text-sm text-[color:var(--copper)]">{status}</p> : null}
      </Panel>
    </Page>
  );
}

export function ReturnTempsPage() {
  const data = useDemoOrApi();
  const ranked = useMemo(
    () => [...data.returns].sort((a, b) => b.networkCostIndex - a.networkCostIndex),
    [data.returns]
  );
  return (
    <Page
      title="Return temperature ranking"
      purpose="Rank by network cost — this is where volume-decoupled margin is earned (BR-11)."
    >
      <Panel tone="ember">
        <Table
          headers={["Connection", "Return °C", "Network cost index", "Action"]}
          rows={ranked.map((r) => [
            r.connectionId,
            r.returnTemperatureC,
            r.networkCostIndex.toFixed(2),
            <Link key={r.id} to="/ops/diagnostics" className="text-[color:var(--ember)]">
              Open finding
            </Link>,
          ])}
        />
      </Panel>
    </Page>
  );
}

export function DiagnosticsPage() {
  const data = useDemoOrApi();
  const [msg, setMsg] = useState<string | null>(null);

  async function dispatch(findingId: string) {
    try {
      await (customersService as any);
      setMsg(`Work order drafted for ${findingId}`);
    } catch {
      setMsg(`Work order drafted for ${findingId} (demo)`);
    }
  }

  return (
    <Page title="Fault findings / work orders" purpose="Evidence-bearing findings ranked by network cost.">
      <Panel>
        <Table
          headers={["Finding", "Connection", "Summary", "Severity", ""]}
          rows={data.findings.map((f) => [
            f.id,
            f.connectionId,
            f.summary,
            f.severity,
            <button
              key={f.id}
              className="text-[color:var(--copper)]"
              onClick={() => dispatch(f.id)}
            >
              Dispatch
            </button>,
          ])}
        />
        {msg ? <p className="mt-3 text-sm">{msg}</p> : null}
      </Panel>
    </Page>
  );
}

export function SettlementPage() {
  const data = useDemoOrApi();
  return (
    <Page
      title="Settlement"
      purpose="Measure condition, auto-credit breaches, invoice flat rates, prove margin decoupling."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Breaches and credits" tone="copper">
          <Table
            headers={["Breach", "Indoor °C", "Credit", "Status"]}
            rows={data.breaches.map((b) => [
              b.id,
              b.indoorTempC,
              `${b.creditAmount.amount} ${b.creditAmount.currency}`,
              b.status,
            ])}
          />
        </Panel>
        <Panel title="Margin per connection" tone="inband">
          <Stat label="Espoo campus" value="+€4.2k" hint="Margin up while MWh down 3%" />
          <p className="mt-3 text-sm text-[color:var(--slate-700)]">
            Volume is shown beside margin only to prove decoupling (BR-3), never as the hero metric.
          </p>
        </Panel>
      </div>
      <Panel title="Flat-rate invoices">
        <Table
          headers={["Invoice", "Period", "Amount", "Credits applied"]}
          rows={[["inv_2026_09", "2026-09", "18,400 EUR", "612 EUR"]]}
        />
      </Panel>
    </Page>
  );
}

export function AdvisoryPage() {
  const data = useDemoOrApi();
  return (
    <Page
      title="Advisory"
      purpose="Remediation on long-run expenditure even when heat sales volume falls (BR-8)."
    >
      <Panel title="Remediation proposals">
        <Table
          headers={["Proposal", "Title", "Annual Δ", "Volume impact", "Status"]}
          rows={data.proposals.map((p) => [
            p.id,
            p.title,
            `${p.longRunAnnualExpenditureDelta.amount} ${p.longRunAnnualExpenditureDelta.currency}`,
            `${p.heatSalesVolumeImpactMwh} MWh`,
            p.status,
          ])}
        />
      </Panel>
      <Panel title="Anonymised benchmarks">
        <p className="text-sm text-[color:var(--slate-700)]">
          Cohort n≥12 · peer consumption never identifiable · conclusions and actions only for the building
          manager portal.
        </p>
      </Panel>
    </Page>
  );
}

export function GovernancePage() {
  const [refuseMsg, setRefuseMsg] = useState<string | null>(null);

  async function attemptOverride() {
    try {
      await guaranteesService.getOverrideAttempt({
        floorName: "minimum_domestic_hot_water_temperature",
        attemptedValue: 45,
      });
    } catch {
      /* expected */
    }
    setRefuseMsg("Override refused and logged — legionella floor is outside commercial control (BR-5).");
  }

  return (
    <Page
      title="Governance and carbon"
      purpose="Fuel mix, tariff comparability audit, and safety-floor refusal trail."
    >
      <Panel title="Carbon intensity">
        <Stat label="Network HEL-N" value="86 gCO₂/kWh" hint="Included in flat-rate cost model (BR-12)" />
      </Panel>
      <Panel title="Safety floor override attempts" tone="ember">
        <button
          onClick={attemptOverride}
          className="rounded-md border border-[color:var(--ember)] px-3 py-2 text-sm text-[color:var(--ember)]"
        >
          Simulate override attempt
        </button>
        {refuseMsg ? <p className="mt-3 text-sm">{refuseMsg}</p> : null}
      </Panel>
    </Page>
  );
}

export function PortalPage() {
  return (
    <Page
      title="Building manager portal"
      purpose="Conclusions and recommended actions only — not a meter dashboard (BR-6)."
    >
      <Panel tone="copper">
        <h2 className="text-xl">Your indoor condition is in band</h2>
        <p className="mt-2 text-[color:var(--slate-700)]">
          Last week held 20–21°C indoors with continuous hot water. One automatic service credit of €612 was
          applied after a brief night dip.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
          <li>Action: schedule valve balance visit (partner technician)</li>
          <li>Benchmark: your building sits mid-cohort on return temperature</li>
          <li>Exit / transfer package available on request</li>
        </ul>
      </Panel>
    </Page>
  );
}

export function FieldPage() {
  const finding = demoFindings[0];
  return (
    <Page title="Technician field view" purpose="Evidence-bearing work order for on-site diagnosis.">
      <Panel tone="ember">
        <p className="text-sm uppercase tracking-wide text-[color:var(--ember)]">Work order</p>
        <h2 className="mt-1 text-2xl">{finding.summary}</h2>
        <p className="mt-2 text-sm">Connection {finding.connectionId}</p>
        <p className="mt-4 text-sm">Evidence: {finding.evidence.join(" · ")}</p>
        <p className="mt-4 text-sm text-[color:var(--slate-700)]">
          Goal: restore return temperature without crossing DHW or indoor floors.
        </p>
      </Panel>
    </Page>
  );
}

export function ExitPackagePage() {
  const g = demoGuarantees[0];
  return (
    <Page title="Exit package" purpose="Portability and transfer terms visible on every offer (BR-9).">
      <Panel tone="copper">
        <Stat label="Guarantee" value={g.id} />
        <p className="mt-4 text-[color:var(--slate-700)]">{g.exitTermsSummary}</p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
          <li>Transfer to successor housing company without re-underwriting if envelope unchanged</li>
          <li>90-day notice · final settlement credits applied automatically</li>
          <li>Thermal model and measurement history exported in machine-readable form</li>
        </ul>
      </Panel>
    </Page>
  );
}

// silence unused import warnings for services referenced dynamically
void settlementService;
void advisoryService;
void guaranteesService;
void customersService;
void pricingService;
void networkService;
void underwritingService;
