/**
 * Customers — product entry into Warmpact console
 */
import { Link } from "react-router-dom";
import type { CustomersViewProps } from "./types";

export function CustomersView({}: CustomersViewProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">Customers</h1>
      <p>Heat customers, connections, and switch risk.</p>
      <Link className="text-[color:var(--copper)]" to="/customers">
        Open in Warmpact console
      </Link>
    </div>
  );
}
