"use client";

import { useCallback, useState, type MouseEvent } from "react";
import { Button, Dialog, GovBar } from "@uigovpe/components";

/**
 * Mantém a GovBar oficial e garante comportamento para os controles de
 * acessibilidade mesmo quando a versão instalada da biblioteca não conecta
 * automaticamente as ações dos ícones.
 */
export default function GovernmentBar() {
  const [cookiesDialogVisible, setCookiesDialogVisible] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);

  const handleAccessibilityClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const control = target.closest<HTMLElement>("button, a, [role='button']");
    if (!control) return;

    const label = [
      control.getAttribute("aria-label"),
      control.getAttribute("title"),
      control.getAttribute("data-testid"),
      control.className,
      control.textContent,
    ].filter(Boolean).join(" ").toLowerCase();

    let nextScale: number | null = null;
    if (/text.?decrease|decrease.?text|diminuir.*texto|diminuir.*fonte|font.?minus|text.?minus/.test(label)) {
      nextScale = Math.max(0.875, Math.round((fontScale - 0.125) * 1000) / 1000);
    } else if (/text.?increase|increase.?text|aumentar.*texto|aumentar.*fonte|font.?plus|text.?plus/.test(label)) {
      nextScale = Math.min(1.5, Math.round((fontScale + 0.125) * 1000) / 1000);
    } else if (/text.?format|reset.*text|restaurar.*texto|tamanho.*original|texto.*normal/.test(label)) {
      nextScale = 1;
    } else if (/contrast|contraste/.test(label)) {
      event.preventDefault();
      event.stopPropagation();
      setHighContrast((current) => {
        const next = !current;
        document.documentElement.classList.toggle("a11y-high-contrast", next);
        return next;
      });
      return;
    }

    if (nextScale !== null) {
      event.preventDefault();
      event.stopPropagation();
      setFontScale(nextScale);
      document.documentElement.style.fontSize = `${16 * nextScale}px`;
    }
  }, [fontScale]);

  return (
    <div onClickCapture={handleAccessibilityClick}>
      <GovBar showCookies cookiesAction={() => setCookiesDialogVisible(true)} />
      <Dialog
        visible={cookiesDialogVisible}
        header="Cookies e privacidade"
        onHide={() => setCookiesDialogVisible(false)}
        onShow={() => undefined}
      >
        <div className="cookies-dialog-content">
          <p>
            Este portal está em fase de homologação. As informações sobre o uso
            de cookies e as preferências de privacidade ainda precisam ser
            validadas pelo IPEM-PE.
          </p>
          <p>
            Neste momento, esta janela é apenas informativa e não registra nem
            altera preferências de consentimento.
          </p>
          <div className="cookies-dialog-actions">
            <Button label="Fechar" onClick={() => setCookiesDialogVisible(false)} />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
