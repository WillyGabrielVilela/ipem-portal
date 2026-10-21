import { Message } from "@uigovpe/components";

type SiteMessageProps = { text: string; severity?: "success" | "info" | "warn" | "error"; };

/** Aviso informativo usando o componente oficial Message. */
export default function SiteMessage({ text, severity = "info" }: SiteMessageProps) {
  return <div className="site-message"><Message severity={severity} text={text} /></div>;
}
