/**
 * Guarantees — product entry into Warmpact console
 */
import { Link } from "react-router-dom";
import type { GuaranteesViewProps } from "./types";

export function GuaranteesView({}: GuaranteesViewProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">Guarantees</h1>
      <p>Condition products, guarantees, and exit packages.</p>
      <Link className="text-[color:var(--copper)]" to="/offers">
        Open in Warmpact console
      </Link>
    </div>
  );
}
