import type { Metadata } from "next";
import PendingMigrationPage from "@/components/PendingMigrationPage";
export const metadata: Metadata = { title: "Portaria nº 05/2026/IPEM/PE/PR" };
export default function PortariaPage() {
  return <PendingMigrationPage section="Transparência e prestação de contas" title="Portaria nº 05/2026/IPEM/PE/PR" description="Registro da portaria que consta na listagem de atos do IPEM-PE." backHref="/editais-e-portarias" backLabel="Editais e Portarias" />;
}
