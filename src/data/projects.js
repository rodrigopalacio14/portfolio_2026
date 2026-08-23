import traumaImg from '../assets/projects/traumatologia-dashboard.png'
import dynamicsImg from '../assets/projects/dynamics-dashboard.png'
import conciliacionImg from '../assets/projects/conciliacion-fondos.png'
import datamartImg from '../assets/projects/datamart-tributario.png'
import clinicaAppImg from '../assets/projects/clinica-app-winforms.png'

export const projects = {
  es: [
    {
      title: "Plataforma E-commerce Multiempresa",
      category: "development",
      categoryLabel: "Development",
      role: "Full Stack Developer",
      problem:
        "Distintos negocios necesitaban una base reutilizable para vender y administrar productos sin reconstruir la aplicacion desde cero para cada cliente.",
      solution:
        "Desarrollo de una plataforma web multiempresa con catalogo, carrito, stock, ventas, usuarios, administracion de contenidos, storage, autenticacion y configuracion dinamica por cliente.",
      stack: ["React", "JavaScript", "Supabase", "PostgreSQL", "HTML", "CSS", "Git", "Vercel"],
      result:
        "Base cloud reutilizable para operar catalogo y ventas, con CRUD, persistencia y configuracion adaptable a diferentes clientes y negocios."
    },

    {
      title: "Sistema de Gestión Clínica — .NET + Supabase",
      category: "development",
      categoryLabel: "Development",
      role: "Full Stack Developer",
      image: clinicaAppImg,
      problem:
        "El servicio requería registrar pacientes, atenciones, cirugías, seguimientos postquirúrgicos y maestros de manera estructurada.",
      solution:
        "Desarrollo de aplicación de escritorio en C# con WinForms, aplicando POO, login, ABM, validaciones, conexión a Supabase/PostgreSQL y estructura modular por clases.",
      stack: ["C#", ".NET Framework", "WinForms", "Supabase", "PostgreSQL", "POO", "CRUD"],
      result:
        "Sistema funcional con gestión clínica, seguimiento de registros y persistencia cloud, integrando interfaz, lógica de negocio y base de datos."
    },

    {
      title: "DataMart Tributario en Azure Databricks",
      category: "data",
      categoryLabel: "Data & BI",
      role: "Data Analyst / Data Engineering Support",
      image: datamartImg,
      problem:
        "El consumo de tablas tributarias normalizadas requería múltiples joins manuales y reconstrucción de lógica fiscal, generando demoras, diferencias de criterio y dependencia del conocimiento individual.",
      solution:
        "Construcción de una capa analítica de consumo en Azure Databricks mediante notebooks SQL, Delta Tables y jobs, consolidando padrones por convenio, titulares vigentes, deuda, exenciones, facturación y pagos.",
      stack: ["Azure Databricks", "SQL", "Delta Tables", "Notebooks", "Jobs", "DataMart", "Data Modeling"],
      result:
        "Estandarización de criterios fiscales reutilizables, reducción de consultas manuales repetitivas y generación confiable de padrones municipales sobre millones de registros."
    },

    {
      title: "Integración y Conciliación de Fondos",
      category: "automation",
      categoryLabel: "Data & BI / Automation",
      role: "Data Analyst / Data Integration",
      image: conciliacionImg,
      problem:
        "Los depósitos bancarios no permitían identificar de forma directa el origen de cada transacción, dificultando la conciliación entre sistema interno, banco y portal externo para aproximadamente 150 municipios.",
      solution:
        "Diseño de un proceso de conciliación en Oracle Data Warehouse con tablas intermedias, reglas de agregación por fecha y convenio, refresh diario vía gateway y alertas automáticas por correo.",
      stack: ["Oracle DWH", "SQL", "Power BI", "Gateway", "Automatización"],
      result:
        "Reducción del proceso de conciliación de aproximadamente un mes a una semana, mayor trazabilidad financiera y detección temprana de diferencias."
    },

    {
      title: "Dashboard Ejecutivo Integrado — Dynamics 365",
      category: "data",
      categoryLabel: "Data & BI",
      role: "BI Analyst / Data Analytics",
      image: dynamicsImg,
      problem:
        "La organización migró desde Planner hacia Dynamics 365, generando cambios en modelos de datos, estados y procesos. Esto dificultaba mantener la comparabilidad histórica y el seguimiento consistente de indicadores.",
      solution:
        "Diseño de un modelo analítico unificado en Power BI, integrando histórico adaptado de Planner y operación actual en Dataverse, bajo esquema estrella y métricas DAX con reglas de negocio.",
      stack: ["Power BI", "DAX", "Dynamics 365", "Dataverse", "Star Schema"],
      result:
        "Centralización de KPIs estratégicos, reducción de validaciones manuales y mejor toma de decisiones para mandos medios y dirección."
    },

    {
      title: "Dashboard Guardia de Traumatología",
      category: "data",
      categoryLabel: "Data & BI",
      role: "BI Analyst",
      image: traumaImg,
      problem:
        "El servicio necesitaba centralizar indicadores clínicos y operativos para visualizar actividad, evolución histórica, intervenciones, pacientes y distribución de casuísticas médicas.",
      solution:
        "Diseño y desarrollo de dashboard analítico en Looker para seguimiento de cirugías, pacientes, coberturas, progresión mensual y distribución de casuísticas por cirujano.",
      stack: ["Looker", "SQL", "KPIs", "Healthcare Analytics"],
      result:
        "Mayor visibilidad operativa y disponibilidad centralizada de indicadores clínicos y administrativos para análisis del servicio."
    },

    {
      title: "Integraciones de Datos mediante APIs REST",
      category: "automation",
      categoryLabel: "Automation & APIs",
      role: "Automation / Integration Developer",
      problem:
        "Aplicaciones y procesos analíticos necesitan consumir información externa o compartir datos entre servicios sin carga manual.",
      solution:
        "Consumo e integración de servicios externos mediante requests HTTP, procesamiento de respuestas JSON y utilización de la información dentro de aplicaciones y procesos analíticos.",
      stack: ["REST APIs", "HTTP", "JSON", "C#", "JavaScript", "SQL", "Supabase"],
      result:
        "Experiencia práctica integrando APIs públicas, Supabase y procesamiento de JSON para conectar servicios dentro de soluciones de software y datos."
    },

    {
      title: "Implementación ERP y Automatización de Procesos",
      category: "systems",
      categoryLabel: "Systems",
      role: "ERP / Functional Analyst",
      problem:
        "La implementación de sistemas empresariales requiere comprender procesos administrativos, contables y operativos, validar reglas y resolver incidencias sin exponer información interna.",
      solution:
        "Análisis funcional, soporte, parametrización, troubleshooting, validación de procesos e interacción con equipos de desarrollo sobre Oracle, SQL y PL/SQL.",
      stack: ["Oracle", "PL/SQL", "SQL", "ERP", "Análisis funcional", "Soporte", "Integraciones"],
      result:
        "Acompañamiento funcional de procesos empresariales, mejor trazabilidad de incidentes y comprensión end-to-end de circuitos administrativos y operativos."
    },

    {
      title: "Portfolio Profesional — React + Vite",
      category: "development",
      categoryLabel: "Development",
      role: "Frontend Developer",
      problem:
        "Necesitaba construir una presencia digital profesional que comunique experiencia en datos, BI, sistemas y desarrollo de soluciones de forma clara y moderna.",
      solution:
        "Diseño y desarrollo de portfolio web con React, Vite y Tailwind, estructura bilingüe, componentes reutilizables, despliegue en Vercel y contenido orientado a recruiters.",
      stack: ["React", "Vite", "Tailwind", "JavaScript", "Git", "Vercel"],
      result:
        "Portfolio profesional, responsive y mantenible para presentar proyectos reales, experiencia técnica y posicionamiento híbrido entre datos, sistemas y desarrollo."
    }
  ],

  en: [
    {
      title: "Multi-Company E-commerce Platform",
      category: "development",
      categoryLabel: "Development",
      role: "Full Stack Developer",
      problem:
        "Different businesses needed a reusable foundation to sell and manage products without rebuilding the application from scratch for each client.",
      solution:
        "Developed a multi-company web platform with catalog, cart, stock, sales, users, content administration, storage, authentication and dynamic client configuration.",
      stack: ["React", "JavaScript", "Supabase", "PostgreSQL", "HTML", "CSS", "Git", "Vercel"],
      result:
        "Reusable cloud-based foundation to operate catalog and sales, with CRUD, persistence and configuration adaptable to different clients and businesses."
    },

    {
      title: "Clinical Management System — .NET + Supabase",
      category: "development",
      categoryLabel: "Development",
      role: "Full Stack Developer",
      image: clinicaAppImg,
      problem:
        "The service needed to register patients, appointments, surgeries, post-surgical follow-ups and master data in a structured way.",
      solution:
        "Developed a desktop application in C# with WinForms, applying OOP, login, CRUD operations, validations, Supabase/PostgreSQL connection and modular class structure.",
      stack: ["C#", ".NET Framework", "WinForms", "Supabase", "PostgreSQL", "OOP", "CRUD"],
      result:
        "Functional system with clinical management, record tracking and cloud persistence, integrating interface, business logic and database."
    },

    {
      title: "Tax DataMart in Azure Databricks",
      category: "data",
      categoryLabel: "Data & BI",
      role: "Data Analyst / Data Engineering Support",
      image: datamartImg,
      problem:
        "Consuming normalized tax tables required multiple manual joins and fiscal logic reconstruction, creating delays, inconsistent criteria and dependency on individual knowledge.",
      solution:
        "Built an analytical consumption layer in Azure Databricks using SQL notebooks, Delta Tables and jobs to consolidate registries by agreement, active owners, debt, exemptions, billing and payments.",
      stack: ["Azure Databricks", "SQL", "Delta Tables", "Notebooks", "Jobs", "DataMart", "Data Modeling"],
      result:
        "Standardized reusable tax criteria, reduced repetitive manual queries and generated reliable municipal registries over millions of records."
    },

    {
      title: "Funds Integration and Reconciliation",
      category: "automation",
      categoryLabel: "Data & BI / Automation",
      role: "Data Analyst / Data Integration",
      image: conciliacionImg,
      problem:
        "Bank deposits could not directly identify the source of each transaction, making reconciliation between the internal system, bank records and external portal difficult for approximately 150 municipalities.",
      solution:
        "Designed a reconciliation process in Oracle Data Warehouse using intermediate tables, aggregation rules by date and agreement, daily gateway refresh and automated email alerts.",
      stack: ["Oracle DWH", "SQL", "Power BI", "Gateway", "Automation"],
      result:
        "Reduced the reconciliation process from approximately one month to one week, improving financial traceability and early difference detection."
    },

    {
      title: "Integrated Executive Dashboard — Dynamics 365",
      category: "data",
      categoryLabel: "Data & BI",
      role: "BI Analyst / Data Analytics",
      image: dynamicsImg,
      problem:
        "The organization migrated from Planner to Dynamics 365, changing data models, statuses and operational processes. This made it difficult to preserve historical comparability and consistent KPI monitoring.",
      solution:
        "Designed a unified analytical model in Power BI, integrating adapted Planner history with current Dataverse operations through a star schema and DAX metrics with business rules.",
      stack: ["Power BI", "DAX", "Dynamics 365", "Dataverse", "Star Schema"],
      result:
        "Centralized strategic KPIs, reduced manual validations and improved decision-making for middle management and leadership."
    },

    {
      title: "Trauma Care Service Dashboard",
      category: "data",
      categoryLabel: "Data & BI",
      role: "BI Analyst",
      image: traumaImg,
      problem:
        "The service needed to centralize clinical and operational indicators to visualize activity, historical evolution, procedures, patients and medical case distribution.",
      solution:
        "Designed and developed an analytical dashboard in Looker to monitor surgeries, patients, coverage, monthly progression and case distribution by surgeon.",
      stack: ["Looker", "SQL", "KPIs", "Healthcare Analytics"],
      result:
        "Improved operational visibility and centralized availability of clinical and administrative indicators for service analysis."
    },

    {
      title: "Data Integrations through REST APIs",
      category: "automation",
      categoryLabel: "Automation & APIs",
      role: "Automation / Integration Developer",
      problem:
        "Applications and analytical processes need to consume external information or share data between services without manual work.",
      solution:
        "Consumed and integrated external services through HTTP requests, processed JSON responses and used that information inside applications and analytical processes.",
      stack: ["REST APIs", "HTTP", "JSON", "C#", "JavaScript", "SQL", "Supabase"],
      result:
        "Practical experience integrating public APIs, Supabase and JSON processing to connect services inside software and data solutions."
    },

    {
      title: "ERP Implementation and Process Automation",
      category: "systems",
      categoryLabel: "Systems",
      role: "ERP / Functional Analyst",
      problem:
        "Enterprise system implementation requires understanding administrative, accounting and operational processes, validating rules and resolving incidents without exposing internal information.",
      solution:
        "Functional analysis, support, parameterization, troubleshooting, process validation and interaction with development teams using Oracle, SQL and PL/SQL.",
      stack: ["Oracle", "PL/SQL", "SQL", "ERP", "Functional Analysis", "Support", "Integrations"],
      result:
        "Functional support for business processes, clearer incident traceability and end-to-end understanding of administrative and operational flows."
    },

    {
      title: "Professional Portfolio — React + Vite",
      category: "development",
      categoryLabel: "Development",
      role: "Frontend Developer",
      problem:
        "I needed to build a professional digital presence to clearly communicate my experience in data, BI, systems and solution development.",
      solution:
        "Designed and developed a portfolio using React, Vite and Tailwind, with bilingual structure, reusable components, Vercel deployment and recruiter-oriented content.",
      stack: ["React", "Vite", "Tailwind", "JavaScript", "Git", "Vercel"],
      result:
        "Professional, responsive and maintainable portfolio to present real projects, technical experience and a hybrid positioning between data, systems and development."
    }
  ]
}
