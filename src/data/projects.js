import traumaImg from '../assets/projects/traumatologia-dashboard.png'
import dynamicsImg from '../assets/projects/dynamics-dashboard.png'
import conciliacionImg from '../assets/projects/conciliacion-fondos.png'
import datamartImg from '../assets/projects/datamart-tributario.png'
import clinicaAppImg from '../assets/projects/clinica-app-winforms.png'

export const featuredProject = {
  es: {
    title: "Níspero Tech",
    subtitle: "Plataforma comercial multiempresa",
    categoryLabel: "Desarrollo · Producto",
    site: "https://nisperotech.com/",
    intro:
      "Construí una base común para desarrollar sitios y herramientas comerciales para distintos clientes sin empezar de cero cada vez.",
    built:
      "Cada negocio puede tener identidad visual, catálogo, productos, imágenes, usuarios, configuración y módulos propios, manteniendo una misma base tecnológica.",
    stack: ["React", "JavaScript", "Supabase", "PostgreSQL", "REST APIs", "JSON", "Vercel"],
    implementations: [
      {
        name: "Killa Joyas",
        site: "https://killajoyas.com/",
        description:
          "Sitio comercial y catálogo adaptado a la identidad visual, productos e imagen del negocio."
      },
      {
        name: "Puerto Pizza",
        site: "",
        description:
          "Implementación para gastronomía con catálogo/menu digital, experiencia mobile-first y estructura preparada para operación comercial."
      }
    ]
  },
  en: {
    title: "Níspero Tech",
    subtitle: "Multi-company commercial platform",
    categoryLabel: "Development · Product",
    site: "https://nisperotech.com/",
    intro:
      "I built a shared foundation to develop commercial sites and tools for different clients without starting from scratch every time.",
    built:
      "Each business can define its own visual identity, catalog, products, images, users, configuration and modules while keeping the same technical base.",
    stack: ["React", "JavaScript", "Supabase", "PostgreSQL", "REST APIs", "JSON", "Vercel"],
    implementations: [
      {
        name: "Killa Joyas",
        site: "https://killajoyas.com/",
        description:
          "Commercial site and catalog adapted to the business visual identity, products and brand image."
      },
      {
        name: "Puerto Pizza",
        site: "",
        description:
          "Food business implementation with digital catalog/menu, mobile-first experience and structure prepared for commercial operation."
      }
    ]
  }
}

export const projects = {
  es: [
    {
      title: "DataMart Tributario en Azure Databricks",
      category: "data",
      categoryLabel: "Data & BI",
      role: "Data Analyst / Data Engineering",
      image: datamartImg,
      context:
        "El consumo de tablas tributarias normalizadas requería múltiples joins manuales y reconstrucción de lógica fiscal.",
      contribution:
        "Construí una capa analítica en Azure Databricks con notebooks SQL, Delta Tables y jobs para consolidar padrones, deuda, exenciones, facturación y pagos.",
      impact:
        "Criterios reutilizables y menos consultas manuales repetitivas sobre grandes volúmenes de registros.",
      stack: ["Azure Databricks", "SQL", "Delta Tables", "Notebooks", "Jobs", "DataMart", "Data Modeling"]
    },
    {
      title: "Sistema Gestión Clínica — .NET + Supabase",
      category: "development",
      categoryLabel: "Desarrollo",
      role: "Desarrollo Full Stack",
      image: clinicaAppImg,
      context:
        "El servicio necesitaba registrar pacientes, atenciones, cirugías, seguimientos y maestros de forma ordenada.",
      contribution:
        "Desarrollé una aplicación de escritorio en C# con WinForms, login, ABM, validaciones, Supabase/PostgreSQL y estructura modular.",
      impact:
        "Sistema funcional con interfaz, lógica de negocio y persistencia cloud para gestión clínica.",
      stack: ["C#", ".NET Framework", "WinForms", "Supabase", "PostgreSQL", "POO", "CRUD"]
    },
    {
      title: "Dashboard Ejecutivo Integrado — Dynamics 365",
      category: "data",
      categoryLabel: "Data & BI",
      role: "BI Analyst / Data Analytics",
      image: dynamicsImg,
      context:
        "La migración de Planner hacia Dynamics 365 rompía la continuidad histórica de indicadores.",
      contribution:
        "Diseñé un modelo Power BI que integra histórico de Planner y operación actual en Dataverse con esquema estrella y métricas DAX.",
      impact:
        "KPIs centralizados y seguimiento más consistente para mandos medios y dirección.",
      stack: ["Power BI", "DAX", "Dynamics 365", "Dataverse", "Star Schema"]
    },
    {
      title: "Conciliación de Fondos",
      category: "automation",
      categoryLabel: "Data & BI / Automatización",
      role: "Data Analyst / Integraciones",
      image: conciliacionImg,
      context:
        "Los depósitos bancarios no permitían identificar de forma directa el origen de cada transacción para aproximadamente 150 municipios.",
      contribution:
        "Diseñé un proceso en Oracle DWH con tablas intermedias, reglas por fecha/convenio, refresh diario vía gateway y alertas por correo.",
      impact:
        "El proceso pasó de aproximadamente un mes a una semana, con mayor trazabilidad financiera.",
      stack: ["Oracle DWH", "SQL", "Power BI", "Gateway", "Automatización"]
    },
    {
      title: "Dashboard Guardia de Traumatología",
      category: "data",
      categoryLabel: "Data & BI",
      role: "BI Analyst",
      image: traumaImg,
      context:
        "El servicio necesitaba centralizar indicadores clínicos y operativos para revisar actividad e intervenciones.",
      contribution:
        "Diseñé un dashboard en Looker para seguimiento de cirugías, pacientes, coberturas, evolución mensual y casuísticas.",
      impact:
        "Indicadores clínicos y administrativos disponibles en un punto común para análisis operativo.",
      stack: ["Looker", "SQL", "KPIs", "Healthcare Analytics"]
    },
    {
      title: "Integraciones de Datos mediante APIs REST",
      category: "automation",
      categoryLabel: "Automatización & APIs",
      role: "Desarrollo de Automatización e Integraciones",
      context:
        "Aplicaciones y procesos analíticos necesitaban consumir o compartir datos sin carga manual.",
      contribution:
        "Integré servicios mediante requests HTTP, procesamiento JSON y uso de datos externos dentro de aplicaciones y análisis.",
      impact:
        "Conexiones prácticas entre APIs públicas, Supabase, JavaScript/C# y procesos de datos.",
      stack: ["REST APIs", "HTTP", "JSON", "C#", "JavaScript", "SQL", "Supabase"]
    },
    {
      title: "Implementación ERP y Automatización de Procesos",
      category: "systems",
      categoryLabel: "Sistemas",
      role: "ERP / Análisis Funcional",
      context:
        "La implementación de sistemas empresariales exige comprender circuitos administrativos, contables y operativos.",
      contribution:
        "Trabajo en análisis funcional, soporte, parametrización, troubleshooting y validación de procesos sobre Oracle, SQL y PL/SQL.",
      impact:
        "Mejor trazabilidad de incidentes y comprensión directa de circuitos empresariales reales.",
      stack: ["Oracle", "PL/SQL", "SQL", "ERP", "Análisis funcional", "Soporte", "Integraciones"]
    },
    {
      title: "Portfolio Profesional — React + Vite",
      category: "development",
      categoryLabel: "Desarrollo",
      role: "Desarrollo Frontend",
      context:
        "Necesitaba una presencia digital que explique rápido mi recorrido en datos, sistemas y desarrollo.",
      contribution:
        "Diseñé y desarrollé un portfolio bilingüe con React, Vite, navegación por secciones, CV por idioma y formulario con Formspree.",
      impact:
        "Sitio responsive para presentar proyectos, stack técnico y experiencia profesional a recruiters.",
      stack: ["React", "Vite", "Tailwind", "JavaScript", "Git", "Vercel"]
    }
  ],

  en: [
    {
      title: "Tax DataMart in Azure Databricks",
      category: "data",
      categoryLabel: "Data & BI",
      role: "Data Analyst / Data Engineering Support",
      image: datamartImg,
      context:
        "Consuming normalized tax tables required multiple manual joins and fiscal logic reconstruction.",
      contribution:
        "I built an analytical layer in Azure Databricks with SQL notebooks, Delta Tables and jobs to consolidate registries, debt, exemptions, billing and payments.",
      impact:
        "Reusable criteria and fewer repetitive manual queries over large datasets.",
      stack: ["Azure Databricks", "SQL", "Delta Tables", "Notebooks", "Jobs", "DataMart", "Data Modeling"]
    },
    {
      title: "Clinical Management System — .NET + Supabase",
      category: "development",
      categoryLabel: "Development",
      role: "Full Stack Developer",
      image: clinicaAppImg,
      context:
        "The service needed to register patients, appointments, surgeries, follow-ups and master data in an orderly way.",
      contribution:
        "I developed a C# WinForms desktop application with login, CRUD operations, validations, Supabase/PostgreSQL and a modular structure.",
      impact:
        "Functional system with interface, business logic and cloud persistence for clinical management.",
      stack: ["C#", ".NET Framework", "WinForms", "Supabase", "PostgreSQL", "OOP", "CRUD"]
    },
    {
      title: "Integrated Executive Dashboard — Dynamics 365",
      category: "data",
      categoryLabel: "Data & BI",
      role: "BI Analyst / Data Analytics",
      image: dynamicsImg,
      context:
        "The migration from Planner to Dynamics 365 broke historical continuity across indicators.",
      contribution:
        "I designed a Power BI model that connects adapted Planner history with current Dataverse operations using a star schema and DAX metrics.",
      impact:
        "Centralized KPIs and more consistent tracking for middle management and leadership.",
      stack: ["Power BI", "DAX", "Dynamics 365", "Dataverse", "Star Schema"]
    },
    {
      title: "Funds Reconciliation",
      category: "automation",
      categoryLabel: "Data & BI / Automation",
      role: "Data Analyst / Data Integration",
      image: conciliacionImg,
      context:
        "Bank deposits could not directly identify the source of each transaction for approximately 150 municipalities.",
      contribution:
        "I designed an Oracle DWH process with intermediate tables, rules by date/agreement, daily gateway refresh and email alerts.",
      impact:
        "The process moved from approximately one month to one week, with better financial traceability.",
      stack: ["Oracle DWH", "SQL", "Power BI", "Gateway", "Automation"]
    },
    {
      title: "Trauma Care Service Dashboard",
      category: "data",
      categoryLabel: "Data & BI",
      role: "BI Analyst",
      image: traumaImg,
      context:
        "The service needed to centralize clinical and operational indicators to review activity and procedures.",
      contribution:
        "I designed a Looker dashboard to monitor surgeries, patients, coverage, monthly evolution and case distribution.",
      impact:
        "Clinical and administrative indicators available in one place for operational analysis.",
      stack: ["Looker", "SQL", "KPIs", "Healthcare Analytics"]
    },
    {
      title: "Data Integrations through REST APIs",
      category: "automation",
      categoryLabel: "Automation & APIs",
      role: "Automation / Integration Developer",
      context:
        "Applications and analytical processes needed to consume or share data without manual work.",
      contribution:
        "I integrated services through HTTP requests, JSON processing and use of external data inside applications and analysis.",
      impact:
        "Practical connections between public APIs, Supabase, JavaScript/C# and data workflows.",
      stack: ["REST APIs", "HTTP", "JSON", "C#", "JavaScript", "SQL", "Supabase"]
    },
    {
      title: "ERP Implementation and Process Automation",
      category: "systems",
      categoryLabel: "Systems",
      role: "ERP / Functional Analyst",
      context:
        "Enterprise system implementation requires understanding administrative, accounting and operational flows.",
      contribution:
        "I work on functional analysis, support, parameterization, troubleshooting and process validation using Oracle, SQL and PL/SQL.",
      impact:
        "Clearer incident traceability and direct understanding of real enterprise workflows.",
      stack: ["Oracle", "PL/SQL", "SQL", "ERP", "Functional Analysis", "Support", "Integrations"]
    },
    {
      title: "Professional Portfolio — React + Vite",
      category: "development",
      categoryLabel: "Development",
      role: "Frontend Developer",
      context:
        "I needed a digital presence that quickly explains my path across data, systems and development.",
      contribution:
        "I designed and developed a bilingual portfolio with React, Vite, section navigation, language-based CV downloads and a Formspree form.",
      impact:
        "Responsive site to present projects, technical stack and professional experience to recruiters.",
      stack: ["React", "Vite", "Tailwind", "JavaScript", "Git", "Vercel"]
    }
  ]
}
