import type { Metadata } from "next";
import PendingMigrationPage from "@/components/PendingMigrationPage";
export const metadata: Metadata = { title: "Edital de Notificação de Autuação nº 01/2026" };
export default function EditalNotificacaoPage() {
  return <PendingMigrationPage section="Transparência e prestação de contas" title="Edital de Notificação de Autuação nº 01/2026" description="Registro do edital de notificação de autuação nº 01/2026." backHref="/notificacao-de-atuacao" backLabel="Editais de Notificação de Autuação" />;
}
