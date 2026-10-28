import type { Metadata } from "next";
import PendingMigrationPage from "@/components/PendingMigrationPage";
export const metadata: Metadata = { title: "Edital de Notificação de Autuação nº 03/2025" };
export default function EditalNotificacaoPage() {
  return <PendingMigrationPage section="Transparência e prestação de contas" title="Edital de Notificação de Autuação nº 03/2025" description="Registro do edital de notificação de autuação nº 03/2025." backHref="/notificacao-de-atuacao" backLabel="Editais de Notificação de Autuação" />;
}
