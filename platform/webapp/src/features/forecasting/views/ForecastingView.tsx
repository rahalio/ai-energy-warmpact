/**
 * Forecasting — product entry into Warmpact console
 */
import { Link } from "react-router-dom";
import type { ForecastingViewProps } from "./types";

export function ForecastingView({}: ForecastingViewProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">Forecasting</h1>
      <p>Demand forecasts for network ops.</p>
      <Link className="text-[color:var(--copper)]" to="/ops/forecast">
        Open in Warmpact console
      </Link>
    </div>
  );
}
