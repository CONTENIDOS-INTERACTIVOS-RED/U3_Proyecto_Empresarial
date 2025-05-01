export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Gestión de proyectos empresariales innovadores y sostenibles',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Evaluación del impacto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Herramientas para evaluar el impacto de los proyectos en los recursos organizacionales y el entorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Medición de impacto social',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Medición de impacto ambiental',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Medición de impacto económico',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Boero, C. (2020). Evaluación de proyectos: ( ed.). Jorge Sarmiento Editor - Universitas.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/172500',
    },
    {
      referencia:
        'Pacheco Coello, C. E. (2021). Metodología en casos reales de evaluación de proyectos: ( ed.). Instituto Mexicano de Contadores Públicos.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/174907',
    },
    {
      referencia:
        'Cejudo Córdoba, R. (Il.), Cabeza Ramírez, L. J. (Il.) & Francés Gómez, P. (Il.). (2022). Un nuevo pacto empresa-sociedad: economía social y ética: (1 ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/220394',
    },
    {
      referencia:
        'Medina Arnáiz, T. Gutiérrez González, S. & Alameda Cuenca-Romero, L. (2022). Guía de buenas prácticas para la contratación ética de servicios y bienes, que promueva la sostenibilidad: (1 ed.). Editorial Universidad de Burgos.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/219263',
    },
    {
      referencia:
        'Osorio Atehortúa, U. A. Martínez Gómez, J. & Quintero Arango, L. F. (2022). Validación de un instrumento para la medición de la sostenibilidad empresarial en pequeñas y medianas empresas: (1 ed.). Universidad Católica Luis Amigó.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/225179',
    },
  ],
  glosario: [
    {
      termino: 'Análisis costo-beneficio',
      significado:
        'herramienta que permite evaluar si los beneficios de un proyecto justifican su inversión.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'modelo que busca satisfacer las necesidades actuales sin comprometer las generaciones futuras.',
    },
    {
      termino: 'Economía circular',
      significado:
        'estrategia que promueve la reutilización, el reciclaje y la reducción de residuos en los procesos productivos.',
    },
    {
      termino: 'Eficiencia energética',
      significado:
        'optimización del consumo de energía para reducir costos y minimizar el impacto ambiental.',
    },
    {
      termino: 'Gestión ambiental',
      significado:
        'conjunto de prácticas y estrategias para minimizar el impacto ecológico de una organización.',
    },
    {
      termino: 'Huella de carbono',
      significado:
        'medición de las emisiones de gases de efecto invernadero generadas por una empresa o actividad.',
    },
    {
      termino: 'Indicadores de impacto',
      significado:
        'métricas utilizadas para evaluar los efectos de un proyecto en el ámbito social, económico y ambiental.',
    },
    {
      termino: 'Innovación responsable',
      significado:
        'desarrollo de productos y procesos que minimizan el impacto ambiental y social',
    },
    {
      termino: 'ISO 14001',
      significado:
        'norma internacional para la gestión ambiental en las organizaciones.',
    },
    {
      termino: 'ISO 26000',
      significado:
        'norma que proporciona directrices sobre responsabilidad social empresarial.',
    },
    {
      termino: 'Liderazgo ético',
      significado:
        'modelo de gestión basado en la transparencia, la equidad y el respeto a los valores organizacionales.',
    },
    {
      termino: 'Matriz de impacto social',
      significado:
        'herramienta que categoriza los efectos positivos y negativos de un proyecto sobre distintos grupos de interés.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'estrategia de optimización constante de procesos y recursos dentro de una organización.',
    },
    {
      termino: 'Plan de sostenibilidad',
      significado:
        'estrategia organizacional para integrar prácticas responsables en el ámbito social, económico y ambiental',
    },
    {
      termino: 'Responsabilidad Social Empresarial (RSE)',
      significado:
        'compromiso de las empresas con el bienestar social y la protección ambiental.',
    },
  ],
}
