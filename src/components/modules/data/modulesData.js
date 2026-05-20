// modulesData.js
export const modulesData = {
  "Net Discovery": {
    "Endpoint y Servidores": {
      description: "Descubrimiento automatizado de dispositivos finales y servidores dentro de la red corporativa.",
      features: [
        "Inventario completo de hardware y software.",
        "Sincronización automática con la CMDB de Aleph Manager.",
        "Reglas de sincronización configurables.",
        "Agente multiplataforma."
      ],
      icon: "server"
    },
    "Networking": {
      description: "Inventario dinámico de equipos de red (routers, switches) y análisis de topología de red.",
      features: [
        "Detección por SNMP v2, v2c y v3.",
        "Detección de características del dispositivo, estado de interfaces y velocidad de conexión.",
        "Sincronización automática con la CMDB de Aleph Manager.",
        "Reglas de sincronización personalizables."
      ],
      icon: "network"
    }
  },
  "GRC (Gobierno, Riesgo y Cumplimiento)": {
    "CMDB": {
      description: "Repositorio centralizado y dinámico de activos tecnológicos y relaciones de configuración. El módulo CMDB permite modelar la infraestructura tecnológica, identificar interdependencias y mantener información actualizada y confiable para la gestión de riesgos y cumplimiento.",
      features: [
        "Registro automatizado de activos tecnológicos (servidores, redes, aplicaciones, endpoints).",
        "Visualización de relaciones entre componentes e impacto cruzado.",
        "Integración con sistemas de descubrimiento automático (Net Discovery).",
        "Control de versiones y trazabilidad de cambios.",
        "Sincronización con otros módulos GRC para análisis de riesgo, incidentes y cumplimiento."
      ],
      icon: "database"
    },
    "Clasificación de Activos de Información": {
      description: "Permite clasificar los activos tecnológicos y de información según criterios de seguridad, criticidad y valor para la organización. Este módulo facilita el cumplimiento de normativas y fortalece la gestión del riesgo, al establecer prioridades claras de protección y tratamiento.",
      features: [
        "Asignación de niveles de confidencialidad, integridad y disponibilidad (C-I-D).",
        "Aplicación de taxonomías personalizables según políticas internas.",
        "Clasificación automática basada en reglas o integración con CMDB.",
        "Visualización de activos clasificados por nivel de criticidad.",
        "Generación de reportes para auditoría, cumplimiento y gestión de riesgos.",
        "Totalmente configurable: permite adaptar metodologías, criterios de clasificación, escalas de valoración y estructuras de datos según las necesidades de cada organización."
      ],
      icon: "tag"
    },
    "Análisis de Riesgos Operacionales": {
      description: "Permite identificar, evaluar y gestionar riesgos operativos que puedan afectar procesos y estructuras organizativas. Este módulo brinda una visión clara del mapa de riesgos no tecnológicos, facilitando la toma de decisiones y el cumplimiento de normativas.",
      features: [
        "Identificación de eventos potenciales según procesos o unidades organizativas.",
        "Evaluación de impacto y probabilidad mediante metodologías cualitativas y/o cuantitativas.",
        "Definición de controles mitigantes y seguimiento de su efectividad.",
        "Registro de planes de acción, responsables asignados y fechas comprometidas.",
        "Integración con la base de eventos históricos para retroalimentar matrices de riesgo.",
        "Altamente configurable: permite adaptar metodologías, escalas, preguntas de relevamiento y estructura de riesgo a cada organización."
      ],
      icon: "bar-chart"
    },
    "Análisis de Riesgos Tecnológicos": {
      description: "Facilita la identificación, evaluación y tratamiento de riesgos asociados a la infraestructura tecnológica, sistemas críticos y servicios digitales. Este módulo contribuye a fortalecer la resiliencia operativa y el cumplimiento normativo mediante un enfoque estructurado y adaptable.",
      features: [
        "Evaluación de amenazas y vulnerabilidades sobre activos tecnológicos.",
        "Estimación de impacto y probabilidad ajustable según el tipo de activo.",
        "Asociaciones con controles existentes y definición de planes de mitigación.",
        "Registro de responsables, fechas comprometidas y estado de avance.",
        "Visualización de riesgos por criticidad y tipo de activo.",
        "Altamente configurable: permite definir metodologías de análisis, criterios de evaluación, escalas de medición y flujos de trabajo específicos."
      ],
      icon: "shield"
    },
    "Árbol de Dependencias": {
      description: "Permite modelar visualmente las relaciones entre procesos, activos, servicios y unidades organizativas, para comprender su nivel de interdependencia y anticipar el impacto de incidentes o fallas. Este módulo es clave para el análisis de continuidad operativa, riesgos y evaluación de criticidad.",
      features: [
        "Visualización jerárquica de dependencias entre componentes de negocio y tecnología.",
        "Establecimiento de relaciones entre ítems definidos en la CMDB y el Modelo de Negocio.",
        "Integración con módulos de Riesgo Tecnológicos, Operacionales, BIA y Clasificación.",
        "Posibilidad de construir árboles según distintas dimensiones (operativa, tecnológica, normativa).",
        "Completamente configurable: permite definir tipos de nodos, atributos, niveles, relaciones permitidas y reglas de visualización."
      ],
      icon: "git-merge"
    },
    "Base de datos sobre eventos de Riesgo Operacional": {
      description: "Permite registrar, importar, consultar y exportar eventos de pérdida asociados a riesgos operacionales. Este módulo proporciona trazabilidad histórica, cumplimiento normativo y soporte al análisis de riesgos a partir de eventos reales ocurridos en la organización.",
      features: [
        "Registro manual o importación masiva de eventos mediante archivos .txt, .csv, o .xls",
        "Asignación de categorías, causas, impactos y fechas a cada evento.",
        "Exportación de la base conforme a normativas regulatorias.",
        "Control de calidad de datos: edición de eventos según fechas permitidas, validación de ID de evento, y control de duplicados.",
        "Parametrización de la estructura de eventos, incluyendo códigos de entidad, rangos de fechas, y permisos de edición.",
        "Totalmente configurable: permite definir los campos a capturar, las fuentes de importación y las reglas de procesamiento según el marco normativo o interno."
      ],
      icon: "alert-circle"
    },
    "Análisis de Servicios Financieros Digitales": {
      description: "Permite evaluar los riesgos asociados a los canales digitales utilizados por la entidad, como home banking, banca móvil y billeteras electrónicas. Este módulo brinda soporte al cumplimiento normativo y fortalece la gestión de riesgos tecnológicos aplicados a la operatoria financiera digital.",
      features: [
        "Identificación y relevamiento de activos categorizados como Servicios Financieros Digitales.",
        "Asignación de requisitos normativos, técnicos y de seguridad.",
        "Gestión de cumplimiento mediante formularios y seguimiento de controles.",
        "Registro de periodicidad, responsables, evidencias y hallazgos.",
        "Altamente configurable: permite definir escenarios, requisitos, criticidad, niveles de cumplimiento, periodicidades y responsables."
      ],
      icon: "credit-card"
    },
    "Análisis de Delegación en Terceras Partes": {
      description: "Permite evaluar el grado de cumplimiento de los servicios tecnológicos delegados en proveedores externos, en función de los requisitos normativos, contractuales y operativos definidos para cada Tipo de servicio. Este módulo facilita la supervisión periódica de proveedores y la trazabilidad de sus obligaciones.",
      features: [
        "Registro estructurado de servicios tercerizados y proveedores asociados.",
        "Asignación de requisitos específicos a cada servicio según criticidad y tipo de servicio.",
        "Evaluación de cumplimiento por requisito.",
        "Carga y control de evidencias, comentarios, hallazgos y seguimiento por parte de referentes internos o externos.",
        "Gestión de periodicidad de revisión, estado del control y responsables asignados.",
        "Planes de acción vinculados a requisitos incumplidos, con responsables y fechas de resolución.",
        "Altamente configurable: permite definir tipos de servicios, requisitos, escalas de cumplimiento, formularios personalizados y reglas de seguimiento adaptadas a la normativa y política interna."
      ],
      icon: "users"
    },
    "Compliance": {
      description: "Permite gestionar de manera centralizada los controles, normativas y auditorías internas y externas aplicables a la entidad. Este módulo brinda trazabilidad sobre el cumplimiento regulatorio y facilita la supervisión de obligaciones normativas en constante evolución.",
      features: [
        "Registro de normativas aplicables (regulatorias, internas o externas) con su correspondiente detalle.",
        "Asociación de controles a activos, procesos o áreas responsables.",
        "Gestión de cumplimiento por control: cumplimiento, evidencia, periodicidad y responsables.",
        "Seguimiento de hallazgos, observaciones y planes de acción derivados de auditorías o revisiones.",
        "Visualización de vencimientos, alertas y próximos controles a ejecutar.",
        "Totalmente configurable: permite definir normativas, controles, estados de cumplimiento, periodicidades, responsables y estructuras de evidencia adaptadas al marco regulatorio vigente."
      ],
      icon: "check-circle"
    },
    "Base de Incidentes": {
      description: "Permite registrar, gestionar y hacer seguimiento de los incidentes que afectan a la tecnología o la seguridad de la entidad. Este módulo centraliza la información clave para la respuesta, análisis y mejora continua, y se integra con el módulo de riesgos tecnológicos.",
      features: [
        "Registro estructurado de incidentes con detalle de fecha, área, tipo, causa y consecuencias.",
        "Categorización y clasificación personalizable por tipo de incidente (tecnológico, seguridad, normativo, etc.).",
        "Registro de responsables, acciones tomadas, plazos de resolución y estado actual.",
        "Asociación del incidente a activos, servicios, procesos o unidades afectadas.",
        "Historial de acciones, comentarios y documentación relacionada.",
        "Altamente configurable: permite definir categorías, flujos de trabajo, campos personalizados, niveles de criticidad y criterios de cierre."
      ],
      icon: "file-text"
    },
    "Base de Ciberincidentes": {
      description: "Permite registrar, gestionar y dar seguimiento a los incidentes específicos de ciberseguridad que puedan comprometer la confidencialidad, integridad o disponibilidad de la información y los servicios digitales de la entidad. Este módulo brinda trazabilidad completa y soporte al cumplimiento de normativas regulatorias en materia de ciberseguridad.",
      features: [
        "Registro estructurado de ciberincidentes con detalle de fecha, origen, vector de ataque, activos comprometidos y severidad.",
        "Categorización personalizable por tipo de ciberincidente (phishing, ransomware, fuga de información, denegación de servicio, intrusión, etc.).",
        "Asociación del ciberincidente a activos tecnológicos, servicios críticos o procesos afectados.",
        "Registro de responsables, acciones de contención, erradicación y recuperación, con trazabilidad del ciclo de vida del incidente.",
        "Totalmente configurable: permite definir niveles de criticidad, flujos de trabajo, campos personalizados, roles y métricas de gestión adaptados a la política de seguridad de la entidad."
      ],
      icon: "shield-off"
    },
    "Vulnerability Management": {
      description: "Permite registrar, analizar y hacer seguimiento de vulnerabilidades técnicas detectadas en la infraestructura tecnológica. Este módulo centraliza la información sobre debilidades, facilita su tratamiento en priorizar acciones correctivas según la criticidad del activo y la severidad de la falla.",
      features: [
        "Registro de vulnerabilidades detectadas mediante escáneres externos, auditorías o carga manual.",
        "Asociación de vulnerabilidades a activos tecnológicos definidos en la CMDB.",
        "Clasificación por severidad, criticidad del activo y estado de tratamiento.",
        "Seguimiento de acciones correctivas, responsables, fechas objetivo y resultados.",
        "Posibilidad de documentar excepciones, recurrencias y validaciones internas."
      ],
      icon: "activity"
    }
  },
  "Continuidad de Negocio": {
    "BIA": {
      "description": "Permite identificar procesos esenciales y analizar los impactos que tendría su indisponibilidad en el tiempo.",
      "features": [
        "Evaluación del impacto en distintas dimensiones parametrizables (legal, reputacional, financiera, operativa, etc.).",
        "Definición de escalas temporales e impactos asociados a cada una.",
        "Cálculo del MTPD (Máximo Tiempo de Parada Tolerable) manual o automático.",
        "Identificación de aplicaciones críticas, recursos necesarios e interdependencias para cada proceso o subproceso.",
        "Gestión de encuestas a referentes y flujos de aprobación.",
        "Totalmente configurable: permite definir variables, escalas, responsables, tipos de impacto y estructuras de encuesta personalizadas."
      ],
      "icon": "target"
    },
    "RIA": {
      "description": "Complementa al BIA, orientado a identificar riesgos que pueden afectar la continuidad de los procesos críticos.",
      "features": [
        "Identificación de amenazas y vulnerabilidades sobre procesos y recursos clave.",
        "Estimación de probabilidad e impacto bajo metodologías cuantitativas o cualitativas.",
        "Asociación con controles existentes y definición de planes de mitigación.",
        "Integración con BIA, Escenarios y Árbol de Dependencias.",
        "Configuración adaptable a metodologías internas y normativas."
      ],
      "icon": "alert-triangle"
    },
    "Escenarios": {
      "description": "Permite definir y gestionar distintos tipos de escenarios disruptivos que pueden afectar la continuidad operativa, como fallas tecnológicas, desastres naturales o eventos regulatorios. Este módulo vincula escenarios a procesos, activos y estrategias para evaluar la capacidad de respuesta ante distintas situaciones.",
      "features": [
        "Registro de escenarios críticos ajustados a la realidad de la entidad.",
        "Asociación con procesos, áreas, activos y servicios afectados.",
        "Vinculación con estrategias de continuidad y planes de recuperación.",
        "Altamente configurable: permite definir tipos de escenario, dimensiones de análisis, métricas y niveles de exposición."
      ],
      "icon": "layers"
    },
    "Estrategias": {
      "description": "Documenta y organiza las estrategias de respuesta previstas para cada escenario o proceso crítico. Este módulo permite estructurar las líneas de acción ante interrupciones, asignar responsables y garantizar la consistencia con los planes de continuidad.",
      "features": [
        "Registro de estrategias de continuidad por proceso, escenario o unidad de negocio.",
        "Detalle de medidas preventivas, acciones de respuesta y recursos alternativos.",
        "Asociación con resultados del BIA y escenarios definidos.",
        "Asignación de responsables, niveles de prioridad y objetivos de recuperación.",
        "Completamente configurable: permite definir estructura de estrategia, categorías, tipos de acción y responsables según la metodología de continuidad adoptada."
      ],
      "icon": "award"
    },
    "Planes de Continuidad": {
      "description": "Permite documentar, mantener y activar planes de continuidad operativa asociados a cada escenario o proceso crítico. Este módulo asegura que la organización cuente con procedimientos claros, responsables designados y acciones previstas para responder ante eventos disruptivos.",
      "features": [
        "Registro de planes de continuidad vinculados a procesos y escenarios críticos.",
        "Detalle de pasos de activación, responsables, recursos alternativos y tiempos estimados.",
        "Asociación con resultados del análisis BIA (criticidad, MTPD, aplicaciones y recursos críticos).",
        "Gestión de documentos de respaldo y evidencias de validación.",
        "Seguimiento del estado de los planes.",
        "Altamente configurable: permite definir estructura de plan, tipo de acciones, campos personalizados, responsables y frecuencias de revisión."
      ],
      "icon": "book"
    },
    "Planes de Recuperación": {
      "description": "Focalizados en la restauración de procesos de negocio afectados.",
      "features": [
        "Registro de procedimientos específicos por proceso crítico.",
        "Definición de recursos alternativos y medidas temporales de recuperación.",
        "Asociación con responsables, tiempos objetivo y estrategias.",
        "Seguimiento del estado y revisión periódica."
      ],
      "icon": "rotate-cw"
    },
    "Planes de Recuperación ante Desastres (DRP)": {
      "description": "Permite documentar procedimientos específicos para restaurar servicios tecnológicos y operativos críticos ante desastres. Este módulo se enfoca en la recuperación técnica de infraestructura, comunicaciones y sistemas, asegurando una vuelta controlada a la operación normal.",
      "features": [
        "Registro de planes técnicos asociados a escenarios de desastre definidos.",
        "Detalle de pasos técnicos, responsables, tiempos estimados y recursos necesarios.",
        "Asociación con activos, servicios y sitios críticos definidos en el BIA.",
        "Seguimiento del estado de cada plan.",
        "Totalmente configurable: permite definir tipos de plan, flujos de activación, responsables y documentación de respaldo."
      ],
      "icon": "refresh-cw"
    },
    "Planes de Comunicación": {
      "description": "Define protocolos de comunicación en incidentes y crisis.",
      "features": [
        "Registro de canales de comunicación internos y externos.",
        "Plantillas para mensajes a empleados, clientes, reguladores y proveedores.",
        "Definición de voceros, responsables y protocolos de aprobación.",
        "Asociación con escenarios, BCP y DRP.",
        "Gestión de evidencias de comunicación y reportes post-evento."
      ],
      "icon": "message-square"
    },
    "Planes de Continuidad del Negocio (BCP)": {
      "description": "Consolidan las estrategias, planes de recuperación y comunicación en un único marco.",
      "features": [
        "Integración de BIA, RIA, Escenarios, Estrategias y DRP.",
        "Documentación estructurada con responsables, recursos y tiempos.",
        "Versionado, trazabilidad y almacenamiento de evidencias.",
        "Validación y aprobación formal de la Alta Dirección.",
        "Asociación con normativas regulatorias."
      ],
      "icon": "clipboard"
    },
    "Pruebas y Simulacros": {
      "description": "Permiten validar los planes y estrategias de continuidad.",
      "features": [
        "Registro de distintos tipos de pruebas: mesa, funcionales, simulacros integrales.",
        "Definición de objetivos, alcance, responsables y participantes.",
        "Registro de resultados, hallazgos y lecciones aprendidas.",
        "Seguimiento de planes de mejora derivados.",
        "Asociación con planes de continuidad y recuperación."
      ],
      "icon": "test-tube"
    }
  },
  "Pérdida Crediticia Esperada": {
    "Pérdida Crediticia Esperada": {
      "description": "Permite calcular y documentar la pérdida crediticia esperada sobre carteras de crédito, conforme a los lineamientos de la NIIF 9 y normativas locales. La solución integra importaciones de operaciones y pagos, segmentación de cartera, cálculo de parámetros (PD, LGD, EAD), clasificación por stages y documentación de resultados, garantizando trazabilidad completa del proceso.",
      "features": [
        "Importación masiva de operaciones y pagos históricos en formato estandarizado.",
        "Segmentación de cartera mediante filtros dinámicos y personalizables.",
        "Cálculo de PD por mes y PD a 12 meses según reglas definidas y segmentación aplicada.",
        "Cálculo de LGD por segmento, considerando tasas efectivas, pagos realizados y valor presente.",
        "Clasificación automática en stages 1, 2 y 3 con criterios configurables (por días o meses de atraso).",
        "Panel para completar el cuadro de pérdida esperada por segmento y stage, y guardar resultados históricos.",
        "Totalmente configurable: permite definir criterios de segmentación, estructura de archivos, parámetros de cálculo, reglas de default, tasas aplicables, y flujos de revisión adaptados a las políticas de la entidad."
      ],
      "icon": "dollar-sign"
    }
  },
  // "Onboarding": {
  //   "Onboarding": {
  //     "description": "En Desarrollo.",
  //     "features": [
  //       "Proceso en construcción.",
  //       "Información no disponible temporalmente.",
  //       "Próximamente más detalles."
  //     ],
  //     "icon": "settings"
  //   }
  // },
  "Legajo Clientes": {
    "Plantillas de Legajo de Clientes": {
      "description": "Permite definir y administrar plantillas parametrizables para distintos tipos de clientes, centralizando los requisitos documentales y de información necesarios para el alta, actualización y cumplimiento normativo del legajo. El módulo brinda flexibilidad para adaptar las exigencias según el tipo de cliente, perfil de riesgo o condiciones específicas definidas por la entidad.",
      "features": [
        "Creación de múltiples plantillas de legajo (Persona Física, Persona Jurídica u otras definidas por la entidad).",
        "Definición de requisitos por plantilla.",
        "Configuración de tipos de datos.",
        "Definición de obligatoriedad por requisito.",
        "Gestión de vigencia documental y vencimientos.",
        "Configuración de cantidad mínima de archivos requeridos.",
        "Flujo de aprobación documental y de información.",
        "Definición de reglas condicionales para requisitos.",
        "Registro histórico de cambios y trazabilidad completa sobre modificaciones del legajo.",
        "Totalmente configurable: permite adaptar estructuras documentales, validaciones, reglas de negocio, flujos de aprobación y condiciones según las políticas internas y normativas aplicables."
      ],
      "icon": "layout"
    },
    "Gestión de Legajo de Clientes": {
      "description": "Permite administrar el legajo documental y de información de cada cliente en forma centralizada, facilitando el seguimiento operativo, la validación y el cumplimiento documental requerido por la entidad.",
      "features": [
        "Búsqueda de clientes mediante ID u otros criterios parametrizables.",
        "Asociación de clientes a plantillas de legajo.",
        "Visualización automática de requisitos pendientes, completos, vencidos o rechazados.",
        "Carga de documentación y datos asociados al cliente.",
        "Validación y aprobación de requisitos por usuarios autorizados.",
        "Gestión de estados documentales y seguimiento operativo.",
        "Control de vencimientos documentales y generación de alertas automáticas.",
        "Historial completo de acciones realizadas sobre el legajo.",
        "Integración con Base de Clientes y módulos PLAFT.",
        "Totalmente configurable: permite adaptar flujos, estados, permisos y validaciones según la operatoria de cada entidad."
      ],
      "icon": "briefcase"
    },
    "Cumplimiento de Legajos": {
      "description": "Permite visualizar el estado general de cumplimiento documental de todos los clientes de la entidad, proporcionando indicadores consolidados para el seguimiento estratégico y operativo.",
      "features": [
        "Visualización del porcentaje general de cumplimiento documental.",
        "Indicadores de clientes.",
        "Distribución del cumplimiento.",
        "Identificación de tendencias y desvíos documentales.",
        "Integración con alertas y workflows de gestión documental.",
        "Generación de reportes y tableros ejecutivos."
      ],
      "icon": "pie-chart"
    },
    "Clientes Incompletos": {
      "description": "Permite identificar y gestionar clientes con legajos incompletos, vencidos o pendientes de validación, facilitando el trabajo operativo diario de los equipos responsables.",
      "features": [
        "Listado operativo de clientes con incumplimientos documentales.",
        "Visualización del nivel de cumplimiento por cliente.",
        "Identificación de documentación faltante, documentación vencida, información pendiente y requisitos rechazados.",
        "Priorización de clientes según criticidad o nivel de riesgo.",
        "Gestión operativa por responsables o equipos.",
        "Integración con alertas automáticas y workflows de regularización."
      ],
      "icon": "user-x"
    },
    "Alertas Documentales": {
      "description": "Permite generar y administrar alertas automáticas asociadas a incumplimientos documentales o inconsistencias detectadas en el legajo de clientes.",
      "features": [
        "Generación automática de alertas por falta de documentación, documentación vencida, documentación rechazada e información incompleta.",
        "Asociación de alertas al cliente afectado y al requisito correspondiente.",
        "Gestión de estados de alerta: Pendiente, En revisión y Resuelta.",
        "Asignación de responsables y seguimiento de resolución.",
        "Registro histórico y trazabilidad completa de cada alerta.",
        "Integración con workflows operativos y módulos PLAFT.",
        "Totalmente configurable: permite definir reglas de generación, criticidad, responsables, estados y tiempos de resolución según las políticas internas de la entidad."
      ],
      "icon": "bell"
    }
  },
  "PLAFT (Prevención de Lavado de Activos y Financiamiento del Terrorismo)": {
    "Base de Clientes": {
      "description": "El módulo centraliza toda la información necesaria sobre los clientes de la entidad, integrando datos identificatorios, segmentación, clasificación y estado actualizado. Es el punto de partida para el análisis de riesgo, monitoreo de operaciones y cumplimiento de las obligaciones regulatorias en materia de PLAFT.",
      "features": [
        "Importación masiva de datos desde sistemas core o externos (banca, ERP, etc.).",
        "Campos configurables: datos personales, fiscales, contacto, sector, actividad, tipo de cliente, etc.",
        "Asignación automática o manual de segmento de riesgo y estado operativo.",
        "Registro histórico de cambios y actualizaciones de datos del cliente.",
        "Visualización consolidada del cliente con acceso a su legajo, operaciones y alertas asociadas.",
        "Totalmente configurable: permite definir estructura de datos, fuentes de carga, atributos personalizados, reglas de actualización y validaciones internas."
      ],
      "icon": "user"
    },
    "Base de Transacciones": {
      "description": "La base de transacciones concentra todos los movimientos financieros realizados por los clientes, funcionando como fuente clave para el análisis operativo y el monitoreo automatizado en el marco de PLAFT. Su diseño permite integrar datos desde múltiples sistemas y mantener trazabilidad completa sobre cada operación registrada.",
      "features": [
        "Importación masiva de movimientos desde sistemas transaccionales (core bancario, canales digitales, etc.).",
        "Registro estructurado de operaciones: fecha, canal, tipo, moneda, monto, cuentas involucradas, entre otros.",
        "Asociación automática de cada operación con su cliente correspondiente.",
        "Categorización configurable por tipo de operación, canal utilizado, producto o nivel de riesgo.",
        "Visualización del historial de transacciones por cliente, con filtros avanzados.",
        "Totalmente configurable: estructura de datos, frecuencia de carga, filtros, validaciones y campos personalizados adaptables a cada entidad."
      ],
      "icon": "credit-card"
    },
    "Listas": {
      "description": "Permite administrar y consultar en forma centralizada los listados de personas y entidades observadas, incluyendo tanto listas externas (oficiales) como listas internas generadas por la propia entidad. Se integra con la base de clientes y transacciones para activar controles automatizados y acciones de debida diligencia ante coincidencias relevantes.",
      "features": [
        "Actualización automática de listas externas (UIF, ONU, OFAC, GAFI, entre otras) mediante integración APIs.",
        "Posibilidad de crear y mantener listas internas según criterios propios (clientes rechazados, antecedentes, listas negras, etc.).",
        "Detección automatizada de coincidencias con clientes, personas vinculadas y contrapartes.",
        "Reglas flexibles de coincidencia: exacta, parcial, por nombre, documento, alias u otros identificadores.",
        "Registro y trazabilidad del análisis de coincidencias: resultado, evidencia, acciones tomadas y responsable asignado.",
        "Asociación con alertas automáticas y flujos de debida diligencia reforzada.",
        "Totalmente configurable: fuentes, periodicidad de actualización, estructura de listas, criterios de coincidencia y flujos de tratamiento adaptables a cada entidad."
      ],
      "icon": "list"
    },
    "Scoring de Alertas": {
      "description": "Permite definir de forma automática y basada en riesgo, la cantidad de días para el tratamiento de cada alerta desde la fecha de hallazgo, según las características del cliente y la operación. Esto permite establecer plazos proporcionales al nivel de criticidad, optimizando la priorización y cumplimiento de los tiempos establecidos por la entidad.",
      "features": [
        "Asignación automática del plazo máximo de tratamiento de alertas según el nivel de riesgo del cliente, la naturaleza de la operación y otros factores configurables.",
        "Cálculo del score de la alerta mediante reglas y ponderaciones definidas por la entidad (matriz de riesgo de cliente, tipo de operación, monto, canal, coincidencias con listas, historial de alertas, etc.).",
        "Clasificación de alertas en niveles (baja, media, alta, crítica), cada uno con su plazo asociado desde la fecha de hallazgo.",
        "Visualización clara del deadline de tratamiento en cada alerta, con alertas internas por vencimiento próximo o incumplimiento.",
        "Registro histórico del scoring aplicado, fórmulas utilizadas, fecha de hallazgo, fecha límite y responsables asignados.",
        "Totalmente configurable: variables consideradas, estructura de puntuación, escalas de criticidad, tiempos máximos de análisis y políticas de reevaluación."
      ],
      "icon": "clock"
    },
    "Perfil Transaccional": {
      "description": "Establece el comportamiento financiero esperado de cada cliente, a partir de sus características y antecedentes, con el fin de detectar automáticamente desviaciones significativas que puedan indicar operaciones inusuales o sospechosas. El perfil transaccional constituye una referencia dinámica y configurable para el monitoreo.",
      "features": [
        "Generación automática del perfil esperado por cliente según su segmento, actividad, historial y nivel de riesgo.",
        "Variables consideradas: frecuencia, tipo y volumen de operaciones, canales utilizados, destinos, origen de fondos, entre otras.",
        "Actualización periódica del perfil a partir de reglas configurables o eventos clave (reclasificación de riesgo, incremento de actividad, etc.).",
        "Comparación automatizada entre el perfil esperado y el comportamiento real para identificar desviaciones relevantes.",
        "Integración directa con el módulo de Monitoreo Transaccional para alimentar reglas y generar alertas ante desvíos.",
        "Visualización clara del perfil esperado vs. operaciones reales, con trazabilidad de la evolución del perfil en el tiempo.",
        "Totalmente configurable: estructura del perfil, umbrales de tolerancia, periodicidad de actualización, reglas de comparación y criterios de generación de alertas."
      ],
      "icon": "activity"
    },
    "Matriz de Riesgo": {
      "description": "Permite evaluar y clasificar el nivel de riesgo de cada cliente mediante una matriz configurable basada en múltiples variables parametrizables como actividad económica, jurisdicción, canal de vinculación, comportamiento transaccional y otros factores relevantes.",
      "features": [
        "Evaluación automática del riesgo de clientes en función de parámetros definidos por la entidad.",
        "Cálculo dinámico del nivel de riesgo a partir de fórmulas, ponderadores y escalas configurables.",
        "Revisión periódica programada y posibilidad de reclasificación por eventos.",
        "Registro del historial de riesgo y justificativos ante auditoría.",
        "Altamente configurable: permite definir estructura de la matriz, variables a considerar, puntajes, rangos de riesgo y reglas de actualización según políticas internas o normativas UIF."
      ],
      "icon": "filter"
    },
    "Monitoreo Transaccional": {
      "description": "Permite supervisar de forma continua las operaciones de los clientes a partir de fórmulas configurables, perfiles de riesgo y coincidencias con listas, generando alertas que deben ser gestionadas conforme a procedimientos internos y normativas vigentes. Centraliza la generación, análisis y documentación de alertas en un entorno con trazabilidad completa.",
      "features": [
        "Generación automática de alertas a partir de fórmulas definidas sobre transacciones, listas y comportamientos.",
        "Motor de reglas totalmente configurable: permite crear condiciones múltiples usando variables de cliente, canal, monto, frecuencia, etc.",
        "Registro manual de alertas por parte de analistas u oficiales de cumplimiento.",
        "Asignación de alertas a analistas responsables, con control de estado, tiempos y prioridad.",
        "Flujo operativo con revisión, aprobación, comentarios, adjunto de documentación de respaldo y cierre formal.",
        "Estados de alertas personalizables: abierta, en análisis, escalada, aprobada, cerrada, archivada.",
        "Totalmente configurable: permite definir reglas de generación, flujos de trabajo, criterios de cierre, roles involucrados y trazabilidad de cada acción realizada."
      ],
      "icon": "eye"
    },
    "Regímenes Informativos": {
      "description": "Permite generar, administrar y presentar los reportes exigidos por los organismos reguladores en materia de PLAFT. Centraliza el armado de los archivos en los formatos requeridos, con validación de datos, control de duplicados y trazabilidad completa del proceso.",
      "features": [
        "Generación automatizada de reportes conforme a los regímenes establecidos por la UIF u otros entes reguladores.",
        "Integración con las bases de clientes, transacciones, alertas y legajo para extraer los datos requeridos.",
        "Validaciones internas previas al envío: campos obligatorios, consistencia, duplicados y estructura técnica.",
        "Registro de versiones, fechas de generación, responsables y estado del archivo (borrador, validado, presentado).",
        "Historial de presentaciones con evidencia de envío y acuse, si corresponde.",
        "Completamente configurable: permite activar o desactivar regímenes, definir campos a incluir, estructura de salida y lógica de extracción según normativa vigente o futura."
      ],
      "icon": "file-text"
    }
  },
  "Auditoría": {
    "Catálogo de Requerimientos": {
      description: "Permite estructurar normas, comunicaciones, estándares o políticas en forma de requerimientos evaluables.",
      features: [
        "Registro de catálogo con versión, fecha de vigencia y descripción.",
        "Desagregación en requerimientos individuales.",
        "Asociación a artículos, incisos o puntos normativos.",
        "Definición de criticidad o prioridad.",
        "Parametrización de escala de cumplimiento aplicable.",
        "Totalmente configurable según metodología interna o regulatoria."
      ],
      icon: "book"
    },
    "Escalas de Cumplimiento": {
      description: "Permite definir los grados de cumplimiento que se utilizarán para evaluar los requerimientos de cada catálogo.",
      features: [
        "Configuración de estados (Cumple, No cumple, Parcial, No aplica, etc.).",
        "Posibilidad de asignar ponderaciones.",
        "Definición de reglas de cálculo de cumplimiento global.",
        "Configuración de criterios obligatorios o excluyentes.",
        "Adaptable a distintos marcos regulatorios."
      ],
      icon: "check-square"
    },
    "Proyectos de Evaluación": {
      description: "Permite ejecutar evaluaciones concretas sobre un catálogo determinado, manteniendo autonomía sobre los requerimientos importados.",
      features: [
        "Selección de catálogo base.",
        "Importación automática de requerimientos.",
        "Posibilidad de agregar nuevos requerimientos.",
        "Edición o exclusión de requerimientos importados (según permisos).",
        "Definición de alcance por áreas o procesos.",
        "Asignación de referentes internos o externos.",
        "Parametrización de estados del proyecto (borrador, en curso, finalizado, aprobado).",
        "Registro de fechas de inicio y cierre."
      ],
      icon: "clipboard-list"
    },
    "Evaluación y Evidencias": {
      description: "Permite registrar el cumplimiento de cada requerimiento dentro del proyecto y mantener trazabilidad completa.",
      features: [
        "Selección del grado de cumplimiento según escala definida.",
        "Carga y almacenamiento de evidencias documentales.",
        "Registro de comentarios y observaciones.",
        "Historial comparativo entre evaluaciones.",
        "Trazabilidad completa entre catálogo, proyecto y resultado."
      ],
      icon: "file-text"
    },
    "Seguimiento y Planes de Acción": {
      description: "Permite gestionar los desvíos detectados durante la evaluación mediante acciones correctivas y seguimiento continuo.",
      features: [
        "Generación de acciones correctivas asociadas a requerimientos no conformes.",
        "Asignación de responsables y fechas compromiso.",
        "Seguimiento de estado (abierto, en curso, vencido, cerrado).",
        "Alertas automáticas por vencimiento.",
        "Registro de nueva evidencia para cierre."
      ],
      icon: "activity"
    },
    "Reporting y Tableros Ejecutivos": {
      description: "Brinda una visión consolidada del cumplimiento normativo con indicadores y tableros ejecutivos.",
      features: [
        "% de cumplimiento global por proyecto.",
        "Indicadores por área o referente.",
        "Comparación entre proyectos y períodos.",
        "Exportación para auditoría externa o regulador.",
        "Dashboard ejecutivo con estado general."
      ],
      icon: "bar-chart"
    }
  }
};

export const categoriesList = Object.keys(modulesData);