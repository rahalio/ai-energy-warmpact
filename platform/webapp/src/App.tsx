import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "@/app/shell";
import { useAuth } from "@/app/auth";
import {
  AdvisoryPage,
  ConnectionDetailPage,
  CustomersPage,
  DiagnosticsPage,
  ExitPackagePage,
  FieldPage,
  ForecastPage,
  GovernancePage,
  OffersPage,
  OpsHomePage,
  PortalPage,
  ReturnTempsPage,
  SalesHomePage,
  SetpointsPage,
  SettlementPage,
  UnderwritingPage,
} from "@/pages/console";
import { ROLE_HOME } from "@/lib/demo-data";

function RoleHomeRedirect() {
  const { role } = useAuth();
  return <Navigate to={ROLE_HOME[role]} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<SalesHomePage />} />
        <Route path="home" element={<RoleHomeRedirect />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="connections/:connectionId" element={<ConnectionDetailPage />} />
        <Route path="underwriting" element={<UnderwritingPage />} />
        <Route path="offers" element={<OffersPage />} />
        <Route path="ops" element={<OpsHomePage />} />
        <Route path="ops/forecast" element={<ForecastPage />} />
        <Route path="ops/setpoints" element={<SetpointsPage />} />
        <Route path="ops/return-temps" element={<ReturnTempsPage />} />
        <Route path="ops/diagnostics" element={<DiagnosticsPage />} />
        <Route path="settlement" element={<SettlementPage />} />
        <Route path="advisory" element={<AdvisoryPage />} />
        <Route path="governance" element={<GovernancePage />} />
        <Route path="portal" element={<PortalPage />} />
        <Route path="field" element={<FieldPage />} />
        <Route path="exit" element={<ExitPackagePage />} />
      </Route>
    </Routes>
  );
}
