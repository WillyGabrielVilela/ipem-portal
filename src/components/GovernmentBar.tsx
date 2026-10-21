"use client";

import { useState } from "react";
import { Button, Dialog, GovBar } from "@uigovpe/components";

/** Barra oficial de identidade e acessibilidade do Governo de Pernambuco. */
export default function GovernmentBar() {
  const [cookiesDialogVisible, setCookiesDialogVisible] = useState(false);

  return (
    <>
      <GovBar
        showCookies
        cookiesAction={() => setCookiesDialogVisible(true)}
      />

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
            <Button
              label="Fechar"
              onClick={() => setCookiesDialogVisible(false)}
            />
          </div>
        </div>
      </Dialog>
    </>
  );
}
