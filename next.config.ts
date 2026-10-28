import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/area-principal-da-transparencia-2", destination: "/transparencia/area-principal", permanent: true },
      { source: "/duvidas-frequentes", destination: "/perguntas-frequentes", permanent: true },
      { source: "/quem-e-quem", destination: "/diretoria", permanent: true },
      { source: "/plano_de_metas_gogm", destination: "/plano-de-metas/gogm-2023", permanent: true },
      { source: "/plano_de_metas_gogp_goaf_goaaf", destination: "/plano-de-metas/gogp-goaf-goaaf-2023", permanent: true },
    ];
  },
};

export default nextConfig;
