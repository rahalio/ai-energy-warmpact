import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function Page({
  title,
  purpose,
  children,
  actions,
}: {
  title: string;
  purpose: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--copper)]">
            Warmpact
          </p>
          <h1 className="mt-1 text-3xl text-[color:var(--slate-950)]">{title}</h1>
          <p className="mt-2 max-w-2xl text-[color:var(--slate-700)]">{purpose}</p>
        </div>
        {actions}
      </div>
      {children}
    </section>
  );
}

export function Panel({
  title,
  children,
  tone = "default",
}: {
  title?: string;
  children: ReactNode;
  tone?: "default" | "copper" | "ember" | "inband";
}) {
  const border =
    tone === "copper"
      ? "border-[color:var(--copper)]/40"
      : tone === "ember"
        ? "border-[color:var(--ember)]/40"
        : tone === "inband"
          ? "border-[color:var(--inband)]/40"
          : "border-[color:var(--slate-300)]/70";
  return (
    <div className={`rounded-xl border ${border} bg-white/70 p-5 shadow-sm backdrop-blur`}>
      {title ? (
        <h2 className="mb-3 text-lg text-[color:var(--slate-900)]">{title}</h2>
      ) : null}
      {children}
    </div>
  );
}

export function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-[color:var(--slate-500)]">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-[color:var(--slate-950)]">{value}</div>
      {hint ? <div className="mt-1 text-sm text-[color:var(--slate-500)]">{hint}</div> : null}
    </div>
  );
}

export function PrimaryLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center rounded-md bg-[color:var(--copper)] px-3 py-2 text-sm font-medium text-white transition hover:bg-[color:var(--copper-bright)]"
    >
      {children}
    </Link>
  );
}

export function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: Array<Array<ReactNode>>;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-[color:var(--slate-300)] text-[color:var(--slate-500)]">
            {headers.map((h) => (
              <th key={h} className="px-2 py-2 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[color:var(--slate-100)]">
              {row.map((cell, j) => (
                <td key={j} className="px-2 py-2.5 align-top text-[color:var(--slate-900)]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
