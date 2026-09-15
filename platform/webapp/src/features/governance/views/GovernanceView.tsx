/**
 * Governance — product entry into Warmpact console
 */
import { Link } from "react-router-dom";
import type { GovernanceViewProps } from "./types";

export function GovernanceView({}: GovernanceViewProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">Governance</h1>
      <p>Carbon intensity and audit events.</p>
      <Link className="text-[color:var(--copper)]" to="/governance">
        Open in Warmpact console
      </Link>
    </div>
  );
}
