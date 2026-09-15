import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "@/app/auth";
import { ROLE_LABEL, type Role } from "@/lib/demo-data";

const NAV = [
  { to: "/", label: "Sales home" },
  { to: "/customers", label: "Customers" },
  { to: "/underwriting", label: "Underwriting" },
  { to: "/offers", label: "Offers" },
  { to: "/ops", label: "Network ops" },
  { to: "/settlement", label: "Settlement" },
  { to: "/advisory", label: "Advisory" },
  { to: "/governance", label: "Governance" },
  { to: "/portal", label: "Portal" },
  { to: "/field", label: "Field" },
  { to: "/exit", label: "Exit package" },
];

export function AppShell() {
  const auth = useAuth();

  return (
    <div className="min-h-screen">
      <header className="border-b border-[color:var(--slate-300)]/60 bg-[color:var(--slate-950)] text-[color:var(--slate-100)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-3">
            <div
              className="brand text-2xl text-[color:var(--copper-bright)]"
              aria-label="Warmpact"
            >
              Warmpact
            </div>
            <span className="hidden text-sm text-[color:var(--slate-500)] sm:inline">
              Condition as a service
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <label className="flex items-center gap-2">
              <span className="text-[color:var(--slate-500)]">Role</span>
              <select
                className="rounded-md border border-[color:var(--slate-700)] bg-[color:var(--slate-900)] px-2 py-1"
                value={auth.role}
                onChange={(e) => auth.setRole(e.target.value as Role)}
              >
                {(Object.keys(ROLE_LABEL) as Role[]).map((r) => (
                  <option key={r} value={r}>
                    {ROLE_LABEL[r]}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-3 pb-3">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition",
                  isActive
                    ? "bg-[color:var(--copper)]/20 text-[color:var(--copper-bright)]"
                    : "text-[color:var(--slate-300)] hover:bg-white/5",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <div className="border-b border-[color:var(--ember)]/30 bg-[color:var(--slate-900)] px-5 py-2 text-center text-xs text-[color:var(--slate-300)]">
        Safety floors are non-dismissible — indoor and DHW minima cannot be overridden for commercial optimisation.
      </div>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <Outlet />
      </main>
    </div>
  );
}
