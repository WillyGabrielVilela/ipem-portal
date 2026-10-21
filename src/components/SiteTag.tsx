import { Tag } from "@uigovpe/components";

type SiteTagProps = { value: string; severity?: "success" | "info" | "warning" | "danger"; };

/** Etiqueta oficial para destacar categorias e estados informativos. */
export default function SiteTag({ value, severity = "info" }: SiteTagProps) {
  return <Tag value={value} severity={severity} />;
}
