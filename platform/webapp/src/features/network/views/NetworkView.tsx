/**
 * Network — product entry into Warmpact console
 */
import { Link } from "react-router-dom";
import type { NetworkViewProps } from "./types";

export function NetworkView({}: NetworkViewProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">Network</h1>
      <p>Setpoints, return temperatures, binding connections.</p>
      <Link className="text-[color:var(--copper)]" to="/ops">
        Open in Warmpact console
      </Link>
    </div>
  );
}
