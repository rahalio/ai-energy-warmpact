/**
 * Underwriting — product entry into Warmpact console
 */
import { Link } from "react-router-dom";
import type { UnderwritingViewProps } from "./types";

export function UnderwritingView({}: UnderwritingViewProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">Underwriting</h1>
      <p>Offer, decline, or remediate-first assessments.</p>
      <Link className="text-[color:var(--copper)]" to="/underwriting">
        Open in Warmpact console
      </Link>
    </div>
  );
}
