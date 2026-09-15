/**
 * Pricing — product entry into Warmpact console
 */
import { Link } from "react-router-dom";
import type { PricingViewProps } from "./types";

export function PricingView({}: PricingViewProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">Pricing</h1>
      <p>Flat-rate construction and tariff comparability.</p>
      <Link className="text-[color:var(--copper)]" to="/offers">
        Open in Warmpact console
      </Link>
    </div>
  );
}
