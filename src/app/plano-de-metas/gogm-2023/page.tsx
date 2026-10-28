import type { Metadata } from "next";
import PendingMigrationPage from "@/components/PendingMigrationPage";

export const metadata: Metadata = { title: "Plano de Metas IPEM-PE — GOGM" };

export default function PlanoDetalhePage() {
  return <PendingMigrationPage section="Transparência e prestação de contas" title="Plano de Metas IPEM-PE — GOGM" description="Referência de período avaliativo: junho de 2022 a maio de 2023." backHref="/plano-de-metas" backLabel="Plano de Metas" />;
}
