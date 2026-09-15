/**
 * Settlement — product entry into Warmpact console
 */
import { Link } from "react-router-dom";
import type { SettlementViewProps } from "./types";

export function SettlementView({}: SettlementViewProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">Settlement</h1>
      <p>Breaches, credits, invoices, margin.</p>
      <Link className="text-[color:var(--copper)]" to="/settlement">
        Open in Warmpact console
      </Link>
    </div>
  );
}
