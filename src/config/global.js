export default {
  global: {
    Name: 'Aspectos  técnicos  para patronaje de billeteras',
    Description:
      'El componente formativo desarrolla competencias en patronaje de billeteras mediante teoría y práctica en fichas técnicas, estructura, materiales, insumos y maquinaria. Aborda cueros, sintéticos y textiles, así como hilos, adhesivos, cremalleras, broches y herrajes. Incluye actividades didácticas y material complementario, integrando tradición artesanal e innovación digital para garantizar productos funcionales, estéticos y de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fichas técnicas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura de la billetera',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Materiales e insumos para marroquinería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Materiales principales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Insumos complementarios',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Maquinaria y equipos para marroquinería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Equipos para el corte de materiales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Máquinas de rebajar y dividir materiales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Equipos para pegado y prensado',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Máquinas de costura',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Equipos para acabado de bordes y terminaciones',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Equipos de estampado y personalización',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Herramientas complementarias manuales',
            hash: 't_4_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Maquinaria y equipos para marroquinería',
      referencia:
        'Tutoriales de cuero (2018). ¿Como hacer una billetera de cuero a mano Facil?. [Vídeo]. Youtube. ',
      tipo: 'Video',
      link: 'https://youtu.be/l9L03BaoVAA ',
    },
    {
      tema: 'Maquinaria y equipos para marroquinería',
      referencia:
        'Patricia Campelo. (2020). Tipos de máquinas para coser cuero. [Vídeo]. Youtube. ',
      tipo: 'Video',
      link: 'https://youtu.be/7rPxrFXZs-k ',
    },
  ],
  glosario: [
    {
      termino: 'Acabado de producto',
      significado:
        'fase final de la fabricación donde se realizan procesos de limpieza, pulido de cantos, aplicación de pinturas o ceras, y revisión de calidad para asegurar la presentación del artículo.',
    },
    {
      termino: 'Equipos de corte',
      significado:
        'herramientas y máquinas utilizadas para obtener piezas exactas según el patrón, como tijeras industriales, cortadoras manuales, troqueladoras y cortadoras láser.',
    },
    {
      termino: 'Estructura de la billetera',
      significado:
        'conjunto de piezas que conforman la billetera (forros, divisiones, compartimientos y exteriores), definidas en diseño y patronaje para garantizar funcionalidad y estética.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento que reúne las especificaciones del producto, indicando materiales, medidas, insumos, procesos y acabados, sirviendo como guía de control en la producción.',
    },
    {
      termino: 'Insumos',
      significado:
        'elementos complementarios necesarios para el ensamble y acabado del producto, tales como hilos, cremalleras, broches, botones imantados y pegantes.',
    },
    {
      termino: 'Maquinaria de marroquinería',
      significado:
        'conjunto de equipos especializados que permiten transformar materiales, tales como máquinas de coser planas, de brazo, de columna, prensas de troquelado y desbastadoras.',
    },
    {
      termino: 'Materiales de marroquinería',
      significado:
        'materias primas principales empleadas en la fabricación de artículos de cuero y sintéticos, como cueros naturales, sintéticos, textiles y forros.',
    },
  ],
  referencias: [
    {
      referencia: 'Asensio, O. (2011). El gran libro del cuero. Lexus.',
      link: '',
    },
    {
      referencia:
        'Colombia, Ministerio de Comercio, Industria y Turismo, & Artesanías de Colombia. (2020). Técnica del oficio del cuero. Artesanías de Colombia.',
      link: '',
    },
    {
      referencia: 'Fogg, M. (2009). Bolsos vintage. Parramón.',
      link: '',
    },
    {
      referencia:
        'Johnson, A. (2005). Bolsos: el poder de un accesorio. Konemann.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jenny Jasbleydi Velásquez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
