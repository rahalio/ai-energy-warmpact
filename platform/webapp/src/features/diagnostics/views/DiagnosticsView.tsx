/**
 * Diagnostics — product entry into Warmpact console
 */
import { Link } from "react-router-dom";
import type { DiagnosticsViewProps } from "./types";

export function DiagnosticsView({}: DiagnosticsViewProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">Diagnostics</h1>
      <p>Fault findings and work orders.</p>
      <Link className="text-[color:var(--copper)]" to="/ops/diagnostics">
        Open in Warmpact console
      </Link>
    </div>
  );
}
