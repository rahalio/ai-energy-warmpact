/**
 * Demo portfolio used when API sandboxes return empty lists.
 * Keeps WEBAPP workflows demonstrable without Dynamo Local.
 */

export type Role =
  | "sales"
  | "underwriting"
  | "ops"
  | "technician"
  | "advisor"
  | "billing"
  | "governance"
  | "building_manager";

export const ROLE_HOME: Record<Role, string> = {
  sales: "/",
  underwriting: "/underwriting",
  ops: "/ops",
  technician: "/field",
  advisor: "/advisory",
  billing: "/settlement",
  governance: "/governance",
  building_manager: "/portal",
};

export const ROLE_LABEL: Record<Role, string> = {
  sales: "Heat sales",
  underwriting: "Underwriting analyst",
  ops: "Network ops",
  technician: "Technician",
  advisor: "Energy advisor",
  billing: "Billing / RA",
  governance: "Tariff / governance",
  building_manager: "Building manager",
};

export const demoCustomers = [
  {
    id: "cst_demo_helsinki_asoy",
    name: "As Oy Helsinki Merituuli",
    segment: "housing_company",
    alternativeHeatingRisk: "high",
    connectionIds: ["con_merituuli_1"],
  },
  {
    id: "cst_demo_espoo_public",
    name: "Espoo Schools Campus",
    segment: "public_organisation",
    alternativeHeatingRisk: "medium",
    connectionIds: ["con_espoo_1"],
  },
];

export const demoConnections = [
  {
    id: "con_merituuli_1",
    customerId: "cst_demo_helsinki_asoy",
    address: "Merituulentie 12, Helsinki",
    heatedFloorAreaM2: 4200,
    buildYear: 1978,
    networkZone: "HEL-N",
    contractStatus: "under_underwriting",
    annualHeatDemandMwh: 510,
    substation: {
      id: "sub_merituuli",
      connectionId: "con_merituuli_1",
      heatExchangerCapacityKw: 420,
      remotelyReadable: true,
      healthScore: 3,
    },
  },
  {
    id: "con_espoo_1",
    customerId: "cst_demo_espoo_public",
    address: "Kamreerintie 3, Espoo",
    heatedFloorAreaM2: 9800,
    buildYear: 1994,
    networkZone: "ESP-C",
    contractStatus: "condition_contract",
    annualHeatDemandMwh: 1180,
    substation: {
      id: "sub_espoo",
      connectionId: "con_espoo_1",
      heatExchangerCapacityKw: 900,
      remotelyReadable: true,
      healthScore: 4,
    },
  },
];

export const demoAssessments = [
  {
    id: "uwr_merituuli",
    connectionId: "con_merituuli_1",
    decision: "remediate_first",
    substationHealthScore: 3,
    envelopeConditionGrade: "C",
    modelledAnnualHeatMwh: 528,
    deliverabilityConfidence: 0.71,
  },
];

export const demoGuarantees = [
  {
    id: "grt_espoo",
    connectionId: "con_espoo_1",
    conditionProductId: "prd_comfort_band",
    status: "active",
    flatMonthlyRate: { amount: 18400, currency: "EUR" },
    termMonths: 36,
    exitTermsSummary: "Transferable exit package with 90-day notice.",
  },
];

export const demoSafetyFloors = [
  {
    name: "minimum_indoor_temperature",
    floorValue: 18,
    unit: "degC",
    basis: "tenancy_obligation",
    overridable: false,
  },
  {
    name: "minimum_domestic_hot_water_temperature",
    floorValue: 55,
    unit: "degC",
    basis: "legionella_control",
    overridable: false,
  },
];

export const demoReturnTemps = [
  {
    id: "rt_merituuli",
    connectionId: "con_merituuli_1",
    returnTemperatureC: 48.2,
    networkCostIndex: 0.91,
    recordedAt: "2026-09-14T06:00:00Z",
  },
  {
    id: "rt_espoo",
    connectionId: "con_espoo_1",
    returnTemperatureC: 39.4,
    networkCostIndex: 0.42,
    recordedAt: "2026-09-14T06:00:00Z",
  },
];

export const demoFindings = [
  {
    id: "dia_valve_1",
    connectionId: "con_merituuli_1",
    summary: "Control valve hunting — elevated return temperature",
    severity: "high",
    evidence: ["return_temp_48C", "valve_cycle_rate"],
  },
];

export const demoBreaches = [
  {
    id: "stl_breach_1",
    guaranteeId: "grt_espoo",
    connectionId: "con_espoo_1",
    indoorTempC: 17.4,
    detectedAt: "2026-09-10T04:20:00Z",
    creditAmount: { amount: 612, currency: "EUR" },
    status: "credited",
  },
];

export const demoProposals = [
  {
    id: "adv_rem_1",
    connectionId: "con_merituuli_1",
    title: "Balance valves + attic insulation top-up",
    longRunAnnualExpenditureDelta: { amount: -2400, currency: "EUR" },
    heatSalesVolumeImpactMwh: -38,
    status: "proposed",
  },
];

export const demoSwitchRisk = [
  {
    id: "swr_1",
    customerId: "cst_demo_helsinki_asoy",
    connectionId: "con_merituuli_1",
    riskLevel: "high",
    signals: ["heat_pump_quote", "renovation_project"],
    detectedAt: "2026-09-12T10:00:00Z",
  },
];
