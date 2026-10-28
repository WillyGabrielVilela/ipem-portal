import type { Metadata } from "next";
import PendingMigrationPage from "@/components/PendingMigrationPage";

export const metadata: Metadata = { title: "Plano de Metas IPEM-PE — GOGP / GOAF / GOAAF" };

export default function PlanoDetalhePage() {
  return <PendingMigrationPage section="Transparência e prestação de contas" title="Plano de Metas IPEM-PE — GOGP / GOAF / GOAAF" description="Referência de período avaliativo: janeiro a dezembro de 2023." backHref="/plano-de-metas" backLabel="Plano de Metas" />;
}
