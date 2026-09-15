/**
 * Identity — product entry into Warmpact console
 */
import { Link } from "react-router-dom";
import type { IdentityViewProps } from "./types";

export function IdentityView({}: IdentityViewProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">Identity</h1>
      <p>API keys and operator users (sandbox).</p>
      <Link className="text-[color:var(--copper)]" to="/">
        Open in Warmpact console
      </Link>
    </div>
  );
}
