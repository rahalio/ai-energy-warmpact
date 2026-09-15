/**
 * Advisory — product entry into Warmpact console
 */
import { Link } from "react-router-dom";
import type { AdvisoryViewProps } from "./types";

export function AdvisoryView({}: AdvisoryViewProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">Advisory</h1>
      <p>Remediation, benchmarks, condition reports.</p>
      <Link className="text-[color:var(--copper)]" to="/advisory">
        Open in Warmpact console
      </Link>
    </div>
  );
}
