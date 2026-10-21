"use client";

import { Button } from "@uigovpe/components";

type SiteButtonProps = {
  label: string;
  href: string;
  severity?: "secondary" | "danger";
  outlined?: boolean;
  link?: boolean;
  plain?: boolean;
  icon?: string;
  size?: "small" | "large";
  rounded?: boolean;
};

/** Botão oficial do Design System do Governo de Pernambuco com navegação do portal. */
export default function SiteButton({
  label,
  href,
  severity,
  outlined = false,
  link = false,
  plain = false,
  icon,
  size,
  rounded = false,
}: SiteButtonProps) {
  return (
    <Button
      label={label}
      severity={severity}
      outlined={outlined}
      link={link}
      plain={plain}
      icon={icon}
      size={size}
      rounded={rounded}
      onClick={() => {
        window.location.assign(href);
      }}
    />
  );
}
