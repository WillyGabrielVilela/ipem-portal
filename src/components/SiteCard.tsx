"use client";

import type { ReactNode } from "react";
import { Card } from "@uigovpe/components";

type SiteCardProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  elevation?: "low" | "medium" | "high";
  children: ReactNode;
  className?: string;
};

/** Cartão baseado no componente oficial Card do Design System do Governo de Pernambuco. */
export default function SiteCard({
  title,
  subtitle,
  header,
  footer,
  elevation = "low",
  children,
  className = "",
}: SiteCardProps) {
  return (
    <div className={`site-card-shell ${className}`.trim()}>
      <Card
        title={title}
        subTitle={subtitle}
        header={header}
        footer={footer}
        elevation={elevation}
      >
        {children}
      </Card>
    </div>
  );
}
