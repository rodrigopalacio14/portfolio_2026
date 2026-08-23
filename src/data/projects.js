import traumaImg from '../assets/projects/traumatologia-dashboard.png'
import dynamicsImg from '../assets/projects/dynamics-dashboard.png'
import conciliacionImg from '../assets/projects/conciliacion-fondos.png'
import datamartImg from '../assets/projects/datamart-tributario.png'
import clinicaAppImg from '../assets/projects/clinica-app-winforms.png'

export const projects = {
  es: [
    {
      title: "Níspero Tech — Plataforma comercial multiempresa",
      category: "development",
      categoryLabel: "Development / Product",
      role: "Full Stack Developer / Product Builder",
      featured: true,
      site: "https://nisperotech.com/",
      context:
        "Muchos pequeños negocios necesitan presencia digital y herramientas de gestión, pero desarrollar una aplicación distinta desde cero para cada cliente no es escalable.",
      contribution:
        "Diseñé una plataforma reutilizable que permite desplegar experiencias comerciales para distintos negocios sobre una misma arquitectura. Cada cliente puede tener identidad visual propia, catálogo, productos, imágenes, configuración, usuarios, módulos comerciales e información del negocio.",
      impact:
        "La base separa frontend, persistencia, autenticación, storage y configuración para adaptar implementaciones sin rehacer el producto completo.",
      stack: ["React", "JavaScript", "Supabase", "PostgreSQL", "REST APIs", "JSON", "Git", "Vercel"],
      links: { site: "https://nisperotech.com/" },
      implementations: [
        {
          name: "Killa Joyas",
          site: "https://killajoyas.com/",
          image: "",
          description:
            "Sitio comercial y catálogo desarrollado sobre la arquitectura multiempresa, adaptando identidad visual, catálogo y experiencia de navegación al negocio."
        },
        {
          name: "Puerto Pizza",
          site: "",
          image: "",
          description:
            "Implementación para gastronomía con catálogo/menu digital, experiencia mobile-first y estructura preparada para operación comercial."
        }
      ]
    },
    {
      title: "DataMart Tributario en Azure Databricks",
      category: "data",
      categoryLabel: "Data & BI",
      role: "Data Analyst / Data Engineering Support",
      image: datamartImg,
      context:
        "El consumo de tablas tributarias normalizadas requería múltiples joins manuales y reconstrucción de lógica fiscal.",
      contribution:
        "Construí una capa analítica de consumo en Azure Databricks con notebooks SQL, Delta Tables y jobs, consolidando padrones por convenio, titulares vigentes, deuda, exenciones, facturación y pagos.",
      impact:
        "Criterios fiscales reutilizables, menos consultas manuales repetitivas y padrones municipales generados sobre grandes volúmenes de registros.",
      stack: ["Azure Databricks", "SQL", "Delta Tables", "Notebooks", "Jobs", "DataMart", "Data Modeling"]
    },
    {
      title: "Sistema Gestión Clínica — .NET + Supabase",
      category: "development",
      categoryLabel: "Development",
      role: "Full Stack Developer",
      image: clinicaAppImg,
      context:
        "El servicio requería registrar pacientes, atenciones, cirugías, seguimientos postquirúrgicos y maestros de manera estructurada.",
      contribution:
        "Desarrollé una aplicación de escritorio en C# con WinForms, POO, login, ABM, validaciones, conexión a Supabase/PostgreSQL y estructura modular por clases.",
      impact:
        "Sistema funcional con gestión clínica, seguimiento de registros y persistencia cloud, integrando interfaz, lógica de negocio y base de datos.",
      stack: ["C#", ".NET Framework", "WinForms", "Supabase", "PostgreSQL", "POO", "CRUD"]
    },
    {
      title: "Dashboard Ejecutivo Integrado — Dynamics 365",
      category: "data",
      categoryLabel: "Data & BI",
      role: "BI Analyst / Data Analytics",
      image: dynamicsImg,
      context:
        "La migración de Planner hacia Dynamics 365 rompía la continuidad histórica de los indicadores.",
      contribution:
        "Diseñé un modelo analítico unificado en Power BI, integrando histórico adaptado de Planner y operación actual en Dataverse bajo esquema estrella y métricas DAX con reglas de negocio.",
      impact:
        "KPIs estratégicos centralizados, menos validaciones manuales y seguimiento más consistente para mandos medios y dirección.",
      stack: ["Power BI", "DAX", "Dynamics 365", "Dataverse", "Star Schema"]
    },
    {
      title: "Conciliación de Fondos",
      category: "automation",
      categoryLabel: "Data & BI / Automation",
      role: "Data Analyst / Data Integration",
      image: conciliacionImg,
      context:
        "Los depósitos bancarios no permitían identificar de forma directa el origen de cada transacción para aproximadamente 150 municipios.",
      contribution:
        "Diseñé un proceso de conciliación en Oracle Data Warehouse con tablas intermedias, reglas de agregación por fecha y convenio, refresh diario vía gateway y alertas automáticas por correo.",
      impact:
        "El proceso pasó de aproximadamente un mes a una semana, con mayor trazabilidad financiera y detección temprana de diferencias.",
      stack: ["Oracle DWH", "SQL", "Power BI", "Gateway", "Automatización"]
    },
    {
      title: "Dashboard Guardia de Traumatología",
      category: "data",
      categoryLabel: "Data & BI",
      role: "BI Analyst",
      image: traumaImg,
      context:
        "El servicio necesitaba centralizar indicadores clínicos y operativos para revisar actividad, evolución histórica e intervenciones.",
      contribution:
        "Diseñé un dashboard analítico en Looker para seguimiento de cirugías, pacientes, coberturas, progresión mensual y casuísticas por cirujano.",
      impact:
        "Indicadores clínicos y administrativos disponibles en un punto común para análisis operativo del servicio.",
      stack: ["Looker", "SQL", "KPIs", "Healthcare Analytics"]
    },
    {
      title: "Integraciones de Datos mediante APIs REST",
      category: "automation",
      categoryLabel: "Automation & APIs",
      role: "Automation / Integration Developer",
      context:
        "Aplicaciones y procesos analíticos necesitan consumir información externa o compartir datos entre servicios sin carga manual.",
      contribution:
        "Integré servicios externos mediante requests HTTP, procesamiento de JSON y uso de esa información dentro de aplicaciones y procesos analíticos.",
      impact:
        "Experiencia práctica conectando APIs públicas, Supabase y procesamiento JSON dentro de soluciones de software y datos.",
      stack: ["REST APIs", "HTTP", "JSON", "C#", "JavaScript", "SQL", "Supabase"]
    },
    {
      title: "Implementación ERP y Automatización de Procesos",
      category: "systems",
      categoryLabel: "Systems",
      role: "ERP / Functional Analyst",
      context:
        "La implementación de sistemas empresariales exige comprender procesos administrativos, contables y operativos.",
      contribution:
        "Trabajo en análisis funcional, soporte, parametrización, troubleshooting, validación de procesos e interacción con equipos de desarrollo sobre Oracle, SQL y PL/SQL.",
      impact:
        "Mejor trazabilidad de incidentes y comprensión directa de circuitos administrativos y operativos reales.",
      stack: ["Oracle", "PL/SQL", "SQL", "ERP", "Análisis funcional", "Soporte", "Integraciones"]
    },
    {
      title: "Portfolio Profesional — React + Vite",
      category: "development",
      categoryLabel: "Development",
      role: "Frontend Developer",
      context:
        "Necesitaba una presencia digital que explique rápido mi recorrido en datos, sistemas y desarrollo.",
      contribution:
        "Diseñé y desarrollé un portfolio bilingüe con React, Vite y Tailwind, navegación por secciones, CV dinámico por idioma y formulario con Formspree.",
      impact:
        "Sitio responsive y mantenible para presentar proyectos reales, stack técnico y experiencia profesional a recruiters.",
      stack: ["React", "Vite", "Tailwind", "JavaScript", "Git", "Vercel"]
    }
  ],

  en: [
    {
      title: "Níspero Tech — Multi-company commercial platform",
      category: "development",
      categoryLabel: "Development / Product",
      role: "Full Stack Developer / Product Builder",
      featured: true,
      site: "https://nisperotech.com/",
      context:
        "Many small businesses need a digital presence and management tools, but building a different application from scratch for every client is not scalable.",
      contribution:
        "I designed a reusable platform that deploys commercial experiences for different businesses on the same architecture. Each client can have its own visual identity, catalog, products, images, configuration, users, commercial modules and business information.",
      impact:
        "The base separates frontend, persistence, authentication, storage and configuration so implementations can be adapted without rebuilding the whole product.",
      stack: ["React", "JavaScript", "Supabase", "PostgreSQL", "REST APIs", "JSON", "Git", "Vercel"],
      links: { site: "https://nisperotech.com/" },
      implementations: [
        {
          name: "Killa Joyas",
          site: "https://killajoyas.com/",
          image: "",
          description:
            "Commercial site and catalog built on the multi-company architecture, adapting visual identity, catalog and navigation experience to the business."
        },
        {
          name: "Puerto Pizza",
          site: "",
          image: "",
          description:
            "Food business implementation with digital catalog/menu, mobile-first experience and structure prepared for commercial operation."
        }
      ]
    },
    {
      title: "Tax DataMart in Azure Databricks",
      category: "data",
      categoryLabel: "Data & BI",
      role: "Data Analyst / Data Engineering Support",
      image: datamartImg,
      context:
        "Consuming normalized tax tables required multiple manual joins and fiscal logic reconstruction.",
      contribution:
        "I built an analytical consumption layer in Azure Databricks with SQL notebooks, Delta Tables and jobs, consolidating registries by agreement, active owners, debt, exemptions, billing and payments.",
      impact:
        "Reusable tax criteria, fewer repetitive manual queries and municipal registries generated over large datasets.",
      stack: ["Azure Databricks", "SQL", "Delta Tables", "Notebooks", "Jobs", "DataMart", "Data Modeling"]
    },
    {
      title: "Clinical Management System — .NET + Supabase",
      category: "development",
      categoryLabel: "Development",
      role: "Full Stack Developer",
      image: clinicaAppImg,
      context:
        "The service needed to register patients, appointments, surgeries, post-surgical follow-ups and master data in a structured way.",
      contribution:
        "I developed a C# WinForms desktop application with OOP, login, CRUD operations, validations, Supabase/PostgreSQL connection and modular class structure.",
      impact:
        "Functional system with clinical management, record tracking and cloud persistence, integrating interface, business logic and database.",
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
        "I designed a unified analytical model in Power BI, integrating adapted Planner history with current Dataverse operations through a star schema and DAX metrics with business rules.",
      impact:
        "Centralized strategic KPIs, fewer manual validations and more consistent tracking for middle management and leadership.",
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
        "I designed a reconciliation process in Oracle Data Warehouse with intermediate tables, aggregation rules by date and agreement, daily gateway refresh and automated email alerts.",
      impact:
        "The process moved from approximately one month to one week, with better financial traceability and early difference detection.",
      stack: ["Oracle DWH", "SQL", "Power BI", "Gateway", "Automation"]
    },
    {
      title: "Trauma Care Service Dashboard",
      category: "data",
      categoryLabel: "Data & BI",
      role: "BI Analyst",
      image: traumaImg,
      context:
        "The service needed to centralize clinical and operational indicators to review activity, historical evolution and procedures.",
      contribution:
        "I designed an analytical dashboard in Looker to monitor surgeries, patients, coverage, monthly progression and case distribution by surgeon.",
      impact:
        "Clinical and administrative indicators available in one place for operational analysis of the service.",
      stack: ["Looker", "SQL", "KPIs", "Healthcare Analytics"]
    },
    {
      title: "Data Integrations through REST APIs",
      category: "automation",
      categoryLabel: "Automation & APIs",
      role: "Automation / Integration Developer",
      context:
        "Applications and analytical processes need to consume external information or share data between services without manual work.",
      contribution:
        "I integrated external services through HTTP requests, JSON processing and use of that information inside applications and analytical processes.",
      impact:
        "Practical experience connecting public APIs, Supabase and JSON processing inside software and data solutions.",
      stack: ["REST APIs", "HTTP", "JSON", "C#", "JavaScript", "SQL", "Supabase"]
    },
    {
      title: "ERP Implementation and Process Automation",
      category: "systems",
      categoryLabel: "Systems",
      role: "ERP / Functional Analyst",
      context:
        "Enterprise system implementation requires understanding administrative, accounting and operational processes.",
      contribution:
        "I work on functional analysis, support, parameterization, troubleshooting, process validation and interaction with development teams using Oracle, SQL and PL/SQL.",
      impact:
        "Clearer incident traceability and direct understanding of real administrative and operational flows.",
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
        "I designed and developed a bilingual portfolio with React, Vite and Tailwind, section navigation, language-based CV downloads and a Formspree contact form.",
      impact:
        "Responsive and maintainable site to present real projects, technical stack and professional experience to recruiters.",
      stack: ["React", "Vite", "Tailwind", "JavaScript", "Git", "Vercel"]
    }
  ]
}
