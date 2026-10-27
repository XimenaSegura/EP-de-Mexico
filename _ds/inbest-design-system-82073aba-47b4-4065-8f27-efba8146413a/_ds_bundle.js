/* @ds-bundle: {"format":3,"namespace":"INBestDesignSystem_82073a","components":[],"sourceHashes":{"ui_kits/website/app.jsx":"602d707b9717","ui_kits/website/components.jsx":"a9f9f2d96ea6","ui_kits/website/content.js":"ab60ac17717e","ui_kits/website/sections.jsx":"b240cef9e487"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.INBestDesignSystem_82073a = window.INBestDesignSystem_82073a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/app.jsx
try { (() => {
/* iNBest Website UI Kit — app assembly */
const {
  useState: useAppState
} = React;
function App() {
  const [lang, setLang] = useAppState("en");
  const copy = window.IB_COPY[lang];
  return /*#__PURE__*/React.createElement("div", {
    className: "inbest k-app" + (lang === "es" ? " is-es" : "")
  }, /*#__PURE__*/React.createElement(Ticker, {
    items: copy.shell.ticker
  }), /*#__PURE__*/React.createElement(Nav, {
    copy: copy,
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    copy: copy
  }), /*#__PURE__*/React.createElement(Deployment, {
    copy: copy
  }), /*#__PURE__*/React.createElement(Process, {
    copy: copy
  }), /*#__PURE__*/React.createElement(Services, {
    copy: copy
  }), /*#__PURE__*/React.createElement(Products, {
    copy: copy
  }), /*#__PURE__*/React.createElement(Partners, {
    copy: copy
  }), /*#__PURE__*/React.createElement(Operated, {
    copy: copy
  }), /*#__PURE__*/React.createElement(FinalCTA, {
    copy: copy,
    lang: lang
  })), /*#__PURE__*/React.createElement(Footer, {
    copy: copy
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components.jsx
try { (() => {
/* iNBest Website UI Kit — shared components
   Recreation of the production "V2" marketing site
   (iNBest-cloud/www.inbest.cloud · client/src/components/v2).
   Cosmetic recreation: real layout + styles, simplified logic. */

const {
  useState,
  useRef,
  useEffect
} = React;

/* ---- Button: pill with trailing arrow glyph ---- */
function IBButton({
  href = "#",
  variant = "primary",
  children,
  onClick
}) {
  const cls = ["ib-button", variant === "ghost" ? "ib-button--ghost" : "", variant === "accent" ? "ib-button--accent" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("a", {
    className: cls,
    href: href,
    onClick: onClick
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "ib-arrow"
  }, "->"));
}

/* ---- Eyebrow + Section header (220px label / content split) ---- */
function Eyebrow({
  children,
  dot = true
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ib-eyebrow"
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "ib-dot"
  }), children);
}
function SectionHead({
  eyebrow,
  title,
  lede
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "k-sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "ib-h2"
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    className: "ib-lede",
    style: {
      marginTop: 22,
      maxWidth: "62ch"
    }
  }, lede)));
}

/* ---- Ticker ---- */
function Ticker({
  items
}) {
  const track = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    className: "ib-ticker",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ib-ticker__inner k-ticker-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ib-ticker__live"
  }, "LIVE"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", null, "FIELD OPS"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("div", {
    className: "k-ticker-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-ticker-track"
  }, track.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginRight: 36
    }
  }, t, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 18
    }
  }, "\u2022")))))));
}

/* ---- Top nav (sticky, blurred), with working EN/ES toggle ---- */
function Nav({
  copy,
  lang,
  setLang
}) {
  const nav = copy.shell.nav;
  return /*#__PURE__*/React.createElement("header", {
    className: "k-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-nav__inner ib-wrap"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "k-brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "ib-logo",
    src: "../../assets/logo-inbest.webp",
    alt: "iNBest"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "k-nav__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#deployment"
  }, nav.deployment), /*#__PURE__*/React.createElement("a", {
    href: "#process"
  }, nav.process), /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, nav.services), /*#__PURE__*/React.createElement("a", {
    href: "#work"
  }, nav.work), /*#__PURE__*/React.createElement("a", {
    href: "#partners"
  }, nav.trust)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ib-locale",
    role: "group",
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ib-locale__opt" + (lang === "en" ? " is-active" : ""),
    onClick: () => setLang("en")
  }, /*#__PURE__*/React.createElement("span", {
    className: "ib-locale__flag ib-locale__flag--us"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ib-locale__label"
  }, "EN")), /*#__PURE__*/React.createElement("button", {
    className: "ib-locale__opt" + (lang === "es" ? " is-active" : ""),
    onClick: () => setLang("es")
  }, /*#__PURE__*/React.createElement("span", {
    className: "ib-locale__flag ib-locale__flag--mx"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ib-locale__label"
  }, "ES"))), /*#__PURE__*/React.createElement("span", {
    className: "k-nav__cta"
  }, /*#__PURE__*/React.createElement(IBButton, {
    variant: "ghost",
    href: "#products"
  }, copy.common.guidancePlex)), /*#__PURE__*/React.createElement(IBButton, {
    href: "#talk"
  }, copy.common.talkToEngineer)));
}

/* ---- Hero (with the brand's CSS ASCII-fallback background) ---- */
function Hero({
  copy
}) {
  const hero = copy.home.hero;
  const proof = copy.home.proof;
  return /*#__PURE__*/React.createElement("section", {
    className: "k-hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-ascii",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-ascii-veil",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-hero__inner ib-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ib-tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ib-dot"
  }), hero.tag), /*#__PURE__*/React.createElement("h1", {
    className: "k-hero__h1"
  }, hero.title.map((line, i) => i === 2 ? /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("em", {
    className: "ib-em"
  }, line), /*#__PURE__*/React.createElement("br", null)) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, line, /*#__PURE__*/React.createElement("br", null)))), /*#__PURE__*/React.createElement("div", {
    className: "k-hero__meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, hero.eyebrow), /*#__PURE__*/React.createElement("p", {
    className: "t-mono",
    style: {
      fontSize: 12,
      color: "var(--muted)",
      marginTop: 10,
      lineHeight: 1.5
    }
  }, hero.definition)), /*#__PURE__*/React.createElement("p", {
    className: "k-hero__sub"
  }, hero.lede), /*#__PURE__*/React.createElement("div", {
    className: "k-hero__actions"
  }, /*#__PURE__*/React.createElement(IBButton, {
    href: "#products"
  }, hero.primary), /*#__PURE__*/React.createElement(IBButton, {
    variant: "ghost",
    href: "#talk"
  }, copy.common.talkToEngineer))), /*#__PURE__*/React.createElement("div", {
    className: "k-proof"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, proof.eyebrow)), /*#__PURE__*/React.createElement("div", {
    className: "ib-proof__row"
  }, proof.cells.map(c => /*#__PURE__*/React.createElement("div", {
    className: "ib-proof__cell",
    key: c.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "ib-proof__num"
  }, c.value, c.suffix && /*#__PURE__*/React.createElement("sup", null, c.suffix)), /*#__PURE__*/React.createElement("div", {
    className: "ib-proof__label"
  }, c.label)))))));
}
Object.assign(window, {
  IBButton,
  Eyebrow,
  SectionHead,
  Ticker,
  Nav,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.js
try { (() => {
/* iNBest copy — bilingual, lifted from client/src/content/v2Content.ts */
window.IB_COPY = {
  en: {
    common: {
      talkToEngineer: "Talk to an engineer",
      seeDeployments: "See deployments",
      guidancePlex: "GuidancePlex"
    },
    shell: {
      finalCta: {
        eyebrow: "[ Engage ]",
        titlePrefix: "Start with",
        lede: "Every project begins with a focused diagnostic: one workflow, one owner, one deployment path, and one measurable outcome.",
        primary: "Start today"
      },
      ticker: ["16+ years in the field", "3K+ clients deployed", "130+ certified professionals", "AWS / Azure / Google Cloud", "GuidancePlex", "Obok", "FinOps / AI / Security"],
      nav: {
        deployment: "Deployment",
        process: "Process",
        services: "Services",
        work: "Work",
        trust: "Trust",
        fieldNotes: "Field notes"
      },
      footer: {
        tagline: "Forward deployed engineers for AI, cloud, and security.",
        deploy: "Deploy",
        products: "Products",
        company: "Company",
        work: "Work",
        leadership: "Leadership",
        certifications: "Certifications",
        industries: "Industries",
        legal: "Legal",
        privacy: "Privacy",
        codeOfEthics: "Code of Ethics",
        riskPrevention: "Risk Prevention",
        rights: "All rights reserved."
      }
    },
    home: {
      hero: {
        tag: "Forward deployed / AI / Cloud / Security",
        title: ["Forward", "deployed", "engineers", "for AI, cloud,", "and security."],
        eyebrow: "[ 001 ] — Definition",
        definition: "iNBest is the forward deployed AI, cloud, and security partner for Mexico.",
        lede: "We embed engineers and architects inside your hardest operational problems, then build and run production systems through GuidancePlex, purpose-built products, and strategic technology partners.",
        primary: "Start with GuidancePlex"
      },
      proof: {
        eyebrow: "[ 002 ] — Proof",
        cells: [{
          value: "16",
          suffix: "+",
          label: "Years in field"
        }, {
          value: "3K",
          suffix: "+",
          label: "Clients deployed"
        }, {
          value: "130",
          suffix: "+",
          label: "Certified professionals"
        }, {
          value: "3",
          suffix: "",
          label: "AWS / Azure / Google Cloud"
        }]
      },
      deployment: {
        eyebrow: "[ 004 ] — Forward Deployed Engineering",
        titlePrefix: "What is",
        titleEm: "forward deployed engineering.",
        lede: "Forward deployed engineering means engineers work directly inside the client problem. They learn the workflow, build with the people who own it, deploy into the real environment, and turn what works into a repeatable capability.",
        items: [{
          n: "01",
          title: "Engineers in the room",
          body: "The team works inside the client context with the people who own the process."
        }, {
          n: "02",
          title: "GuidancePlex",
          body: "We define the problem, constraints, owners, data, risks, and success metric before delivery starts."
        }, {
          n: "03",
          title: "Products accelerate patterns",
          body: "Obok, accelerators, and repeatable playbooks carry the parts already solved in the field."
        }, {
          n: "04",
          title: "Partners provide scale",
          body: "AWS, Microsoft, Google Cloud, SAP, and the broader ecosystem provide enterprise foundations."
        }, {
          n: "05",
          title: "Operate after launch",
          body: "Managed services, security, and FinOps keep the system reliable, secure, and cost-aware."
        }, {
          n: "06",
          title: "Generalize what works",
          body: "When a deployment proves value, the pattern becomes a rollout, feature, product, or service."
        }]
      },
      process: {
        eyebrow: "[ 005 ] — Process",
        titlePrefix: "How we",
        titleEm: "work.",
        lede: "Five stages for every project, every workflow, every client.",
        outputLabel: "Output",
        stages: [{
          n: "01",
          title: "GuidancePlex",
          body: "A focused diagnostic that turns ambition into a deployable plan.",
          output: "Use case / owner / architecture / risk view / success metric"
        }, {
          n: "02",
          title: "Build",
          body: "A forward deployed team builds with the client, not away from the client.",
          output: "Prototype / integrations / controls / adoption path"
        }, {
          n: "03",
          title: "Deploy",
          body: "From proof to production inside the real environment.",
          output: "Production / access / monitoring / ownership"
        }, {
          n: "04",
          title: "Operate",
          body: "We stay close after launch so the system keeps improving.",
          output: "Support / security / FinOps / improvements"
        }, {
          n: "05",
          title: "Generalize",
          body: "Turn what works into a repeatable capability.",
          output: "Rollout / product pattern / enablement / next workflow"
        }]
      },
      services: {
        eyebrow: "[ 006 ] — Service Architecture",
        titlePrefix: "Four ways to",
        titleEm: "deploy",
        titleSuffix: "with iNBest.",
        lede: "Services are not the lead story. They are the capabilities we compose behind one accountable forward deployed team.",
        items: [{
          mark: "FD/01",
          title: "Forward Deployed AI",
          body: "AI workflows, agents, copilots, data products, decision systems, and automation built in your environment.",
          list: ["Agents", "Copilots", "RAG", "Evals", "Model ops"]
        }, {
          mark: "FD/02",
          title: "Forward Deployed Cloud",
          body: "Migrations, modernization, DevOps, platform engineering, and multicloud operations across AWS, Azure, and Google Cloud.",
          list: ["Landing zones", "Migrations", "DevOps", "SRE", "Data platforms"]
        }, {
          mark: "FD/03",
          title: "Forward Deployed Security",
          body: "Cybersecurity, AI security posture, cloud posture, identity, compliance, and incident response for the systems we deploy.",
          list: ["CSPM", "Identity", "SOC", "Compliance", "Response"]
        }, {
          mark: "FD/04",
          title: "Forward Deployed FinOps",
          body: "Cost visibility, cloud optimization, budget governance, and engineering accountability wired into production workflows.",
          list: ["Visibility", "Budgets", "Optimization", "Unit economics", "Reviews"]
        }]
      },
      products: {
        eyebrow: "[ 007 ] — Products",
        titlePrefix: "We do not rebuild what should already be a",
        titleEm: "product.",
        lede: "iNBest products capture repeatable field patterns so each deployment starts further along.",
        items: [{
          mark: "Anchor product",
          title: "GuidancePlex",
          body: "Our proprietary consulting process for mapping process, data readiness, security constraints, owners, and the success metric before delivery starts."
        }, {
          mark: "Cloud intelligence",
          title: "Obok",
          body: "Cloud intelligence, FinOps, cybersecurity, and posture management for multicloud estates running in production."
        }, {
          mark: "Autonomous security testing",
          title: "AI Hackers",
          body: "Unleash a swarm of autonomous AI hackers on your own systems, before a real attacker finds them first."
        }]
      },
      partners: {
        eyebrow: "[ 008 ] — Technology Partners",
        titlePrefix: "Built on the",
        titleEm: "platforms",
        titleSuffix: "your business already runs on.",
        lede: "We help clients choose, integrate, and operate the right platform, then stay accountable for the system deployed on top of it.",
        items: [["AWS", "Advanced Tier / MSP"], ["Microsoft Azure", "Solutions Partner"], ["Google Cloud", "Premier Partner"], ["SAP Business One", "Partner"], ["Microsoft 365", "Productivity cloud"], ["Datacenter", "Operated infrastructure"]]
      },
      operated: {
        eyebrow: "[ 010 ] — Operated Outcomes",
        titlePrefix: "Deployment is not the",
        titleEm: "finish line.",
        lede: "We stay accountable for systems that run, improve, and create measurable business value.",
        items: [{
          mark: "OPS/01",
          title: "Managed cloud",
          body: "AWS, Azure, and Google Cloud estates kept reliable, governed, and aligned to product needs."
        }, {
          mark: "OPS/02",
          title: "Managed AI",
          body: "Model and workflow operations with evaluations, guardrails, and improvement cadence."
        }, {
          mark: "OPS/03",
          title: "Managed security",
          body: "Detection, response, identity, and posture across the systems we deploy."
        }, {
          mark: "OPS/04",
          title: "FinOps in production",
          body: "Cost telemetry tied to unit economics and engineering accountability."
        }]
      }
    }
  },
  es: {
    common: {
      talkToEngineer: "Habla con un ingeniero",
      seeDeployments: "Ver despliegues",
      guidancePlex: "GuidancePlex"
    },
    shell: {
      finalCta: {
        eyebrow: "[ Contacto ]",
        titlePrefix: "Empieza con",
        lede: "Cada proyecto inicia con un diagnóstico enfocado: un flujo, un responsable, una ruta de despliegue y un resultado medible.",
        primary: "Empieza hoy"
      },
      ticker: ["16+ años de experiencia en campo", "3K+ clientes atendidos", "130+ profesionales certificados", "AWS / Azure / Google Cloud", "GuidancePlex", "Obok", "FinOps / IA / Seguridad"],
      nav: {
        deployment: "Despliegue",
        process: "Proceso",
        services: "Servicios",
        work: "Casos",
        trust: "Credenciales",
        fieldNotes: "Field notes"
      },
      footer: {
        tagline: "Ingenieros en campo para IA, cloud y seguridad.",
        deploy: "Despliegue",
        products: "Productos",
        company: "Empresa",
        work: "Casos",
        leadership: "Liderazgo",
        certifications: "Certificaciones",
        industries: "Industrias",
        legal: "Legal",
        privacy: "Privacidad",
        codeOfEthics: "Código de Ética",
        riskPrevention: "Prevención de riesgos",
        rights: "Todos los derechos reservados."
      }
    },
    home: {
      hero: {
        tag: "En campo / IA / Cloud / Seguridad",
        title: ["Ingenieros", "en campo", "para IA,", "cloud,", "y seguridad."],
        eyebrow: "[ 001 ] — Definición",
        definition: "iNBest lleva equipos de ingeniería al campo para resolver problemas de IA, cloud y seguridad en México.",
        lede: "Integramos ingenieros y arquitectos en tus problemas operativos más importantes. Después construimos y operamos sistemas productivos con GuidancePlex, productos propios y alianzas tecnológicas.",
        primary: "Empieza con GuidancePlex"
      },
      proof: {
        eyebrow: "[ 002 ] — Evidencia",
        cells: [{
          value: "16",
          suffix: "+",
          label: "Años en campo"
        }, {
          value: "3K",
          suffix: "+",
          label: "Clientes atendidos"
        }, {
          value: "130",
          suffix: "+",
          label: "Profesionales certificados"
        }, {
          value: "3",
          suffix: "",
          label: "AWS / Azure / Google Cloud"
        }]
      },
      deployment: {
        eyebrow: "[ 004 ] — Forward Deployed Engineering",
        titlePrefix: "Qué es",
        titleEm: "forward deployed engineering.",
        lede: "Forward deployed engineering significa que los ingenieros trabajan dentro del problema del cliente. Aprenden el flujo, construyen con quienes lo operan, despliegan en el entorno real y convierten lo que funciona en una capacidad repetible.",
        items: [{
          n: "01",
          title: "Forward deployed engineers",
          body: "El equipo trabaja dentro del contexto del cliente con las personas responsables del proceso."
        }, {
          n: "02",
          title: "GuidancePlex",
          body: "Definimos problema, restricciones, responsables, datos, riesgos y métrica de éxito antes de iniciar."
        }, {
          n: "03",
          title: "Productos que aceleran lo repetible",
          body: "Obok, aceleradores y guías repetibles integran lo que ya resolvimos en campo."
        }, {
          n: "04",
          title: "Alianzas que escalan la entrega",
          body: "AWS, Microsoft, Google Cloud, SAP y el ecosistema proveen bases empresariales."
        }, {
          n: "05",
          title: "Operar después del lanzamiento",
          body: "Servicios administrados, seguridad y FinOps mantienen el sistema confiable, seguro y costo-eficiente."
        }, {
          n: "06",
          title: "Escalar lo que funciona",
          body: "Cuando un despliegue demuestra valor, el patrón se vuelve expansión, funcionalidad, producto o servicio."
        }]
      },
      process: {
        eyebrow: "[ 005 ] — Proceso",
        titlePrefix: "Cómo",
        titleEm: "trabajamos.",
        lede: "Cinco etapas para cada proyecto, cada flujo y cada cliente.",
        outputLabel: "Resultado",
        stages: [{
          n: "01",
          title: "GuidancePlex",
          body: "Un diagnóstico enfocado que convierte una intención en un plan desplegable.",
          output: "Caso de uso / responsable / arquitectura / riesgo / métrica"
        }, {
          n: "02",
          title: "Construir",
          body: "El equipo construye con el cliente, no desde afuera.",
          output: "Prototipo / integraciones / controles / adopción"
        }, {
          n: "03",
          title: "Desplegar",
          body: "De piloto a producción dentro del entorno real.",
          output: "Producción / accesos / monitoreo / propiedad"
        }, {
          n: "04",
          title: "Operar",
          body: "Nos mantenemos cerca después del lanzamiento para que el sistema mejore.",
          output: "Soporte / seguridad / FinOps / mejoras"
        }, {
          n: "05",
          title: "Generalizar",
          body: "Convertir lo que funciona en una capacidad repetible.",
          output: "Expansión / patrón de producto / habilitación / siguiente flujo"
        }]
      },
      services: {
        eyebrow: "[ 006 ] — Arquitectura de Servicio",
        titlePrefix: "Cuatro formas de",
        titleEm: "desplegar",
        titleSuffix: "con iNBest.",
        lede: "Los servicios no son la historia principal. Son las capacidades que articulamos detrás de un equipo en campo con responsabilidad clara.",
        items: [{
          mark: "FD/01",
          title: "IA en Campo",
          body: "Flujos de IA, agentes, copilotos, productos de datos, sistemas de decisión y automatización construidos en tu entorno.",
          list: ["Agentes", "Copilots", "RAG", "Evaluaciones", "Modelos"]
        }, {
          mark: "FD/02",
          title: "Cloud en Campo",
          body: "Migraciones, modernización, DevOps, ingeniería de plataforma y operaciones multicloud en AWS, Azure y Google Cloud.",
          list: ["Landing zones", "Migraciones", "DevOps", "SRE", "Datos"]
        }, {
          mark: "FD/03",
          title: "Seguridad en Campo",
          body: "Ciberseguridad, postura de seguridad de IA y cloud, identidad, cumplimiento y respuesta para los sistemas que desplegamos.",
          list: ["CSPM", "Identidad", "SOC", "Cumplimiento", "Respuesta"]
        }, {
          mark: "FD/04",
          title: "FinOps en Campo",
          body: "Visibilidad de costos, optimización cloud, gobierno presupuestal y responsabilidad de ingeniería conectados a producción.",
          list: ["Visibilidad", "Presupuestos", "Optimización", "Economía unitaria", "Revisiones"]
        }]
      },
      products: {
        eyebrow: "[ 007 ] — Productos",
        titlePrefix: "No reconstruimos lo que ya debe ser un",
        titleEm: "producto.",
        lede: "Los productos de iNBest capturan patrones repetibles de campo para que cada despliegue no empiece desde cero.",
        items: [{
          mark: "Producto ancla",
          title: "GuidancePlex",
          body: "Nuestro proceso propio de consultoría para mapear proceso, datos, seguridad, responsables y métrica de éxito antes de iniciar."
        }, {
          mark: "Cloud intelligence",
          title: "Obok",
          body: "Inteligencia cloud, FinOps, ciberseguridad y gestión de postura para entornos multicloud en producción."
        }, {
          mark: "Pruebas autónomas de seguridad",
          title: "AI Hackers",
          body: "Prueba tus propios sistemas con agentes autónomos de seguridad antes de que un atacante real encuentre la ruta primero."
        }]
      },
      partners: {
        eyebrow: "[ 008 ] — Alianzas Tecnológicas",
        titlePrefix: "Construido sobre las",
        titleEm: "plataformas",
        titleSuffix: "donde ya opera tu negocio.",
        lede: "Ayudamos a elegir, integrar y operar la plataforma correcta, y nos mantenemos responsables por el sistema desplegado encima.",
        items: [["AWS", "Advanced Tier / MSP"], ["Microsoft Azure", "Solutions Partner"], ["Google Cloud", "Premier Partner"], ["SAP Business One", "Partner"], ["Microsoft 365", "Productivity cloud"], ["Datacenter", "Infraestructura operada"]]
      },
      operated: {
        eyebrow: "[ 010 ] — Resultados en Operación",
        titlePrefix: "El despliegue no es la",
        titleEm: "meta final.",
        lede: "Nos mantenemos responsables por sistemas en operación que mejoran y crean valor medible.",
        items: [{
          mark: "OPS/01",
          title: "Operación cloud administrada",
          body: "Entornos AWS, Azure y Google Cloud confiables, gobernados y alineados a producto."
        }, {
          mark: "OPS/02",
          title: "IA administrada",
          body: "Operación de modelos y flujos con evaluaciones, controles y cadencia de mejora."
        }, {
          mark: "OPS/03",
          title: "Seguridad administrada",
          body: "Detección, respuesta, identidad y postura en los sistemas que desplegamos."
        }, {
          mark: "OPS/04",
          title: "FinOps en producción",
          body: "Telemetría de costos ligada a economía unitaria y responsabilidad de ingeniería."
        }]
      }
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.js", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* iNBest Website UI Kit — page sections */

const {
  useState: useStateS
} = React;

/* ---- Generic card grid (deployment / services / products / operated) ---- */
function CardGrid({
  cols = 3,
  items,
  dark = false,
  withList = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ib-grid-" + cols
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    className: "ib-card",
    key: i,
    href: it.href || "#"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ib-card__mark"
  }, "[ ", it.mark || it.n, " ]"), /*#__PURE__*/React.createElement("h3", null, it.title), it.body && /*#__PURE__*/React.createElement("p", null, it.body), withList && it.list && /*#__PURE__*/React.createElement("ul", {
    className: "ib-list"
  }, it.list.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, l))))));
}
function Deployment({
  copy
}) {
  const d = copy.home.deployment;
  return /*#__PURE__*/React.createElement("section", {
    className: "k-section ib-wrap",
    id: "deployment"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: d.eyebrow,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, d.titlePrefix, " ", /*#__PURE__*/React.createElement("em", {
      className: "ib-em"
    }, d.titleEm)),
    lede: d.lede
  }), /*#__PURE__*/React.createElement(CardGrid, {
    cols: 3,
    items: d.items
  }));
}
function Process({
  copy
}) {
  const p = copy.home.process;
  return /*#__PURE__*/React.createElement("section", {
    className: "k-section ib-wrap",
    id: "process"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: p.eyebrow,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, p.titlePrefix, " ", /*#__PURE__*/React.createElement("em", {
      className: "ib-em"
    }, p.titleEm)),
    lede: p.lede
  }), /*#__PURE__*/React.createElement("div", null, p.stages.map(s => /*#__PURE__*/React.createElement("div", {
    className: "k-stage",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "ib-card__mark",
    style: {
      margin: 0
    }
  }, "[ ", s.n, " ]"), /*#__PURE__*/React.createElement("h3", {
    className: "k-stage__title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "k-stage__body"
  }, s.body), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: false
  }, p.outputLabel), /*#__PURE__*/React.createElement("p", {
    className: "t-mono",
    style: {
      fontSize: 12,
      color: "var(--muted)",
      marginTop: 10,
      textTransform: "uppercase"
    }
  }, s.output))))));
}
function Services({
  copy
}) {
  const s = copy.home.services;
  return /*#__PURE__*/React.createElement("section", {
    className: "k-section ib-wrap",
    id: "services"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: s.eyebrow,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, s.titlePrefix, " ", /*#__PURE__*/React.createElement("em", {
      className: "ib-em"
    }, s.titleEm), " ", s.titleSuffix),
    lede: s.lede
  }), /*#__PURE__*/React.createElement(CardGrid, {
    cols: 4,
    items: s.items,
    withList: true
  }));
}
function Products({
  copy
}) {
  const p = copy.home.products;
  return /*#__PURE__*/React.createElement("section", {
    className: "k-section ib-wrap",
    id: "products"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: p.eyebrow,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, p.titlePrefix, " ", /*#__PURE__*/React.createElement("em", {
      className: "ib-em"
    }, p.titleEm)),
    lede: p.lede
  }), /*#__PURE__*/React.createElement(CardGrid, {
    cols: 3,
    items: p.items
  }));
}
function Partners({
  copy
}) {
  const p = copy.home.partners;
  const logos = {
    "AWS": "../../assets/partners/aws.svg",
    "Microsoft Azure": "../../assets/partners/azure.svg",
    "Google Cloud": "../../assets/partners/google-cloud.svg",
    "SAP Business One": "../../assets/partners/sap.svg"
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "k-section ib-wrap",
    id: "partners"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: p.eyebrow,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, p.titlePrefix, " ", /*#__PURE__*/React.createElement("em", {
      className: "ib-em"
    }, p.titleEm), " ", p.titleSuffix),
    lede: p.lede
  }), /*#__PURE__*/React.createElement("div", {
    className: "ib-grid-3"
  }, p.items.map(([name, tier]) => /*#__PURE__*/React.createElement("div", {
    className: "ib-card",
    key: name,
    style: {
      minHeight: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ib-card__mark"
  }, tier), logos[name] ? /*#__PURE__*/React.createElement("img", {
    src: logos[name],
    alt: name,
    className: "k-partner-logo"
  }) : /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 8
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14
    }
  }, name)))));
}
function Operated({
  copy
}) {
  const o = copy.home.operated;
  return /*#__PURE__*/React.createElement("section", {
    className: "k-section ib-dark",
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ib-wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: o.eyebrow,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, o.titlePrefix, " ", /*#__PURE__*/React.createElement("em", {
      className: "ib-em"
    }, o.titleEm)),
    lede: o.lede
  }), /*#__PURE__*/React.createElement(CardGrid, {
    cols: 4,
    items: o.items,
    dark: true
  })));
}

/* ---- Final CTA with a working (fake) lead form ---- */
function FinalCTA({
  copy,
  lang
}) {
  const f = copy.shell.finalCta;
  const [sent, setSent] = useStateS(false);
  const t = lang === "es" ? {
    title: "Cuéntanos qué necesitas mover.",
    sub: "Un ingeniero revisará el contexto y responderá con un siguiente paso práctico.",
    email: "Correo de trabajo",
    need: "¿Qué necesitas mover?",
    send: "Enviar",
    thanks: "Gracias. Un ingeniero te contactará.",
    ph1: "tu@empresa.com",
    ph2: "Un flujo, un responsable"
  } : {
    title: "Tell us what you need to move.",
    sub: "A field engineer will review the context and reply with a practical next step.",
    email: "Work email",
    need: "What do you need to move?",
    send: "Send",
    thanks: "Thank you. A field engineer will be in touch.",
    ph1: "you@company.com",
    ph2: "One workflow, one owner"
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "k-final ib-wrap",
    id: "talk"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-final__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, f.eyebrow)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "ib-h2",
    style: {
      fontSize: "clamp(40px,5vw,72px)"
    }
  }, f.titlePrefix, " ", /*#__PURE__*/React.createElement("em", {
    className: "ib-em"
  }, "GuidancePlex.")), /*#__PURE__*/React.createElement("p", {
    className: "k-hero__sub",
    style: {
      marginTop: 26
    }
  }, f.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(IBButton, {
    variant: "accent",
    href: "#talk"
  }, f.primary), /*#__PURE__*/React.createElement(IBButton, {
    variant: "ghost",
    href: "#products"
  }, copy.common.guidancePlex))), /*#__PURE__*/React.createElement("div", {
    className: "ib-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ib-card__mark",
    style: {
      color: "var(--accent-on-dark)",
      marginBottom: 18
    }
  }, lang === "es" ? "[ Contacto ]" : "[ Lead capture ]"), sent ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 500
    }
  }, t.thanks)) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 12px",
      fontSize: 24,
      fontWeight: 500,
      lineHeight: 1.1
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 20px",
      color: "rgba(234,241,250,0.72)",
      fontSize: 14,
      lineHeight: 1.55
    }
  }, t.sub), /*#__PURE__*/React.createElement("div", {
    className: "ib-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ib-label"
  }, t.email), /*#__PURE__*/React.createElement("input", {
    className: "ib-input",
    type: "email",
    required: true,
    placeholder: t.ph1
  })), /*#__PURE__*/React.createElement("div", {
    className: "ib-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ib-label"
  }, t.need), /*#__PURE__*/React.createElement("input", {
    className: "ib-input",
    required: true,
    placeholder: t.ph2
  })), /*#__PURE__*/React.createElement("button", {
    className: "ib-button ib-button--accent",
    type: "submit",
    style: {
      marginTop: 8
    }
  }, t.send, " ", /*#__PURE__*/React.createElement("span", {
    className: "ib-arrow"
  }, "->"))))));
}
function Footer({
  copy
}) {
  const f = copy.shell.footer;
  const year = new Date().getFullYear();
  const cols = [[f.deploy, ["AI", "Cloud", "Security", "FinOps"]], [f.products, ["GuidancePlex", "Obok", "AI Hackers"]], [f.company, [f.work, f.leadership, f.certifications, f.industries]], [f.legal, [f.privacy, f.codeOfEthics, f.riskPrevention]]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "k-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ib-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-footer__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-inbest.webp",
    className: "ib-logo ib-logo--invert",
    style: {
      width: 132
    },
    alt: "iNBest"
  }), /*#__PURE__*/React.createElement("p", {
    className: "k-footer__tag"
  }, f.tagline)), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("p", {
    className: "k-footer__h"
  }, h), /*#__PURE__*/React.createElement("ul", null, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    className: "k-footer__low"
  }, "\xA9 ", year, " iNBest. ", f.rights)));
}
Object.assign(window, {
  CardGrid,
  Deployment,
  Process,
  Services,
  Products,
  Partners,
  Operated,
  FinalCTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

})();
