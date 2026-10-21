"use client";

import { GovBar } from "@uigovpe/components";

/** Barra oficial de identidade e acessibilidade do Governo de Pernambuco. */
export default function GovernmentBar() {
  return (
    <GovBar
      showCookies
      cookiesAction={() => {
        window.alert(
          "O gerenciamento de cookies ainda precisa ser integrado à política de cookies do portal IPEM-PE."
        );
      }}
    />
  );
}
