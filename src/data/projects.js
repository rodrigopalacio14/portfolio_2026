import traumaImg from '../assets/projects/traumatologia-dashboard.png'
import dynamicsImg from '../assets/projects/dynamics-dashboard.png'
import conciliacionImg from '../assets/projects/conciliacion-fondos.png'
import datamartImg from '../assets/projects/datamart-tributario.png'
import clinicaAppImg from '../assets/projects/clinica-app-winforms.png'

export const projects = {
  es: [
    {
      title: "Dashboard Ejecutivo Integrado — Dynamics 365",
      role: "BI Analyst / Data Analytics",
      image: dynamicsImg,
      problem:
        "La organización migró desde Planner hacia Dynamics 365, generando cambios en modelos de datos, estados y procesos. Esto dificultaba mantener la comparabilidad histórica y el seguimiento consistente de indicadores.",
      solution:
        "Diseño de un modelo analítico unificado en Power BI, integrando histórico adaptado de Planner y operación actual en Dataverse, bajo esquema estrella y métricas DAX con reglas de negocio.",
      stack: ["Power BI", "DAX", "Dynamics 365", "Dataverse", "Planner", "Star Schema"],
      result:
        "Centralización de KPIs estratégicos, reducción de validaciones manuales y mejor toma de decisiones para mandos medios y dirección."
    },

    {
      title: "Dashboard Operativo — Guardia de Traumatología",
      role: "BI Analyst",
      image: traumaImg,
      problem:
        "El servicio necesitaba centralizar indicadores clínicos y operativos para visualizar actividad, evolución histórica, intervenciones, pacientes y distribución de casuísticas médicas.",
      solution:
        "Diseño y desarrollo de dashboard analítico en Looker para seguimiento de cirugías, pacientes, coberturas, progresión mensual y distribución de casuísticas por cirujano.",
      stack: ["Looker", "SQL", "Healthcare Analytics", "KPI Design", "Data Visualization"],
      result:
        "Mayor visibilidad operativa y disponibilidad centralizada de indicadores clínicos y administrativos para análisis del servicio."
    },

    {
      title: "Integración y Conciliación de Fondos",
      role: "Data Analyst / Data Integration",
      image: conciliacionImg,
      problem:
        "Los depósitos bancarios no permitían identificar de forma directa el origen de cada transacción, dificultando la conciliación entre sistema interno, banco y portal externo para aproximadamente 150 municipios.",
      solution:
        "Diseño de un proceso de conciliación en Oracle Data Warehouse con tablas intermedias, reglas de agregación por fecha y convenio, refresh diario vía gateway y alertas automáticas por correo.",
      stack: ["Oracle DWH", "SQL", "Power BI", "Gateway", "Automatización", "Email Alerts"],
      result:
        "Reducción del proceso de conciliación de aproximadamente un mes a una semana, mayor trazabilidad financiera y detección temprana de diferencias."
    },

    {
      title: "DataMart Tributario en Azure Databricks",
      role: "Data Analyst / Data Engineering Support",
      image: datamartImg,
      problem:
        "El consumo de tablas tributarias normalizadas requería múltiples joins manuales y reconstrucción de lógica fiscal, generando demoras, diferencias de criterio y dependencia del conocimiento individual.",
      solution:
        "Construcción de una capa analítica de consumo en Azure Databricks mediante notebooks SQL, consolidando padrones por convenio, titulares vigentes, deuda, exenciones, facturación y pagos.",
      stack: ["Azure Databricks", "SQL", "Delta Tables", "Jobs", "DataMart", "Data Engineering"],
      result:
        "Estandarización de criterios fiscales, reducción de consultas manuales repetitivas y generación confiable de padrones municipales sobre millones de registros."
    },

    {
      title: "Sistema de Gestión Clínica — .NET + Supabase",
      role: "Full Stack Developer Jr",
      image: clinicaAppImg,
      problem:
        "El servicio requería una aplicación para registrar pacientes, atenciones, cirugías, seguimientos postquirúrgicos y reportes operativos de manera estructurada.",
      solution:
        "Desarrollo de aplicación de escritorio en C# con WinForms, aplicando POO, formularios, validaciones, ABM, conexión a Supabase/PostgreSQL y estructura modular por clases.",
      stack: ["C#", ".NET Framework", "WinForms", "Supabase", "PostgreSQL", "POO", "CRUD"],
      result:
        "Sistema funcional con login, gestión de registros clínicos y base de datos conectada, integrando lógica de negocio, interfaz y persistencia de datos."
    },

    {
      title: "Implementación ERP Administrativo",
      role: "ERP / Functional Analyst",
      problem:
        "La implementación de módulos administrativos requiere comprender circuitos de contabilidad, bancos, caja, cuenta corriente, impuestos y validaciones operativas.",
      solution:
        "Análisis funcional de procesos, validación operativa, acompañamiento en parametrización de módulos y soporte a usuarios durante la adopción del sistema.",
      stack: ["ERP", "SQL Server", "Azure", "Procesos Administrativos", "Soporte Funcional"],
      result:
        "Mayor comprensión end-to-end de procesos empresariales y soporte a la adopción funcional de módulos administrativos."
    },

    {
      title: "Portfolio Profesional — React + Vite",
      role: "Frontend Developer Jr",
      problem:
        "Necesitaba construir una presencia digital profesional que comunique experiencia en datos, BI, sistemas y desarrollo de soluciones de forma clara y moderna.",
      solution:
        "Diseño y desarrollo de portfolio web desde cero con React, Vite y Tailwind, estructura bilingüe, componentes reutilizables, despliegue en Vercel y contenido orientado a recruiters.",
      stack: ["React", "Vite", "Tailwind", "JavaScript", "Git", "Vercel"],
      result:
        "Portfolio profesional, responsive y mantenible para presentar proyectos reales, experiencia técnica y posicionamiento híbrido entre datos, negocio y desarrollo."
    }
  ],

  en: [
    {
      title: "Integrated Executive Dashboard — Dynamics 365",
      role: "BI Analyst / Data Analytics",
      image: dynamicsImg,
      problem:
        "The organization migrated from Planner to Dynamics 365, changing data models, statuses and operational processes. This made it difficult to preserve historical comparability and consistent KPI monitoring.",
      solution:
        "Designed a unified analytical model in Power BI, integrating adapted Planner history with current Dataverse operations through a star schema and DAX metrics with business rules.",
      stack: ["Power BI", "DAX", "Dynamics 365", "Dataverse", "Planner", "Star Schema"],
      result:
        "Centralized strategic KPIs, reduced manual validations and improved decision-making for middle management and leadership."
    },

    {
      title: "Operational Dashboard — Trauma Care Service",
      role: "BI Analyst",
      image: traumaImg,
      problem:
        "The service needed to centralize clinical and operational indicators to visualize activity, historical evolution, procedures, patients and medical case distribution.",
      solution:
        "Designed and developed an analytical dashboard in Looker to monitor surgeries, patients, coverage, monthly progression and case distribution by surgeon.",
      stack: ["Looker", "SQL", "Healthcare Analytics", "KPI Design", "Data Visualization"],
      result:
        "Improved operational visibility and centralized availability of clinical and administrative indicators for service analysis."
    },

    {
      title: "Funds Integration and Reconciliation",
      role: "Data Analyst / Data Integration",
      image: conciliacionImg,
      problem:
        "Bank deposits could not directly identify the source of each transaction, making reconciliation between the internal system, bank records and external portal difficult for approximately 150 municipalities.",
      solution:
        "Designed a reconciliation process in Oracle Data Warehouse using intermediate tables, aggregation rules by date and agreement, daily gateway refresh and automated email alerts.",
      stack: ["Oracle DWH", "SQL", "Power BI", "Gateway", "Automation", "Email Alerts"],
      result:
        "Reduced the reconciliation process from approximately one month to one week, improving financial traceability and early difference detection."
    },

    {
      title: "Tax DataMart in Azure Databricks",
      role: "Data Analyst / Data Engineering Support",
      image: datamartImg,
      problem:
        "Consuming normalized tax tables required multiple manual joins and fiscal logic reconstruction, creating delays, inconsistent criteria and dependency on individual knowledge.",
      solution:
        "Built an analytical consumption layer in Azure Databricks using SQL notebooks to consolidate registries by agreement, active owners, debt, exemptions, billing and payments.",
      stack: ["Azure Databricks", "SQL", "Delta Tables", "Jobs", "DataMart", "Data Engineering"],
      result:
        "Standardized tax criteria, reduced repetitive manual queries and generated reliable municipal registries over millions of records."
    },

    {
      title: "Clinical Management System — .NET + Supabase",
      role: "Junior Full Stack Developer",
      image: clinicaAppImg,
      problem:
        "The service needed an application to register patients, appointments, surgeries, post-surgical follow-ups and operational reports in a structured way.",
      solution:
        "Developed a desktop application in C# with WinForms, applying OOP, forms, validations, CRUD operations, Supabase/PostgreSQL connection and modular class structure.",
      stack: ["C#", ".NET Framework", "WinForms", "Supabase", "PostgreSQL", "OOP", "CRUD"],
      result:
        "Functional system with login, clinical record management and connected database, integrating business logic, interface and data persistence."
    },

    {
      title: "Administrative ERP Implementation",
      role: "ERP / Functional Analyst",
      problem:
        "Implementing administrative modules requires understanding accounting, banking, cash management, current accounts, taxes and operational validations.",
      solution:
        "Functional process analysis, operational validation, module parameterization support and user assistance during system adoption.",
      stack: ["ERP", "SQL Server", "Azure", "Administrative Processes", "Functional Support"],
      result:
        "Improved end-to-end understanding of business processes and supported functional adoption of administrative modules."
    },

    {
      title: "Professional Portfolio — React + Vite",
      role: "Junior Frontend Developer",
      problem:
        "I needed to build a professional digital presence to clearly communicate my experience in data, BI, systems and solution development.",
      solution:
        "Designed and developed a portfolio from scratch using React, Vite and Tailwind, with bilingual structure, reusable components, Vercel deployment and recruiter-oriented content.",
      stack: ["React", "Vite", "Tailwind", "JavaScript", "Git", "Vercel"],
      result:
        "Professional, responsive and maintainable portfolio to present real projects, technical experience and a hybrid positioning between data, business and development."
    }
  ]
}