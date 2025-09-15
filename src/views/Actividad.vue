<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Aspectos técnicos esenciales en el patronaje de billeteras',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con fichas técnicas, estructuras, materiales, insumos, maquinaria y herramientas utilizadas en el patronaje de billeteras dentro del contexto de la marroquinería.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal función de la ficha técnica en marroquinería?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar la estética del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar el inventario de materiales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Guiar el desarrollo, fabricación y control de calidad del producto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Optimizar el embalaje del producto final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué parte de la billetera contiene compartimentos visibles desde el exterior?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contratapa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tapa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ventana.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es una característica del cuero vacuno?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusividad extrema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alta rigidez y poca flexibilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resistencia y versatilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso exclusivo en interiores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué material textil es comúnmente utilizado en billeteras con acabado rústico o vintage?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Nylon</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lona encerada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Microfibra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Denim</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de ficha técnica detalla los procesos y métodos de fabricación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ficha de materiales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ficha de producción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ficha de diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ficha de control de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es el calibre de aguja recomendado para hilo TEX 70?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '80/12.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '100/16 a 110/18.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '60/10 a 80/12.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '120/19 a 130/21.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de cuero exótico se caracteriza por tener textura con folículos visibles?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuero vacuno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuero de avestruz (cuerpo).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuero ovino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuero de serpiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una ventaja del uso de materiales sintéticos en billeteras?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sensación cálida al tacto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resistencia a la humedad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Durabilidad mayor que el cuero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desarrollo de pátina con el tiempo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué equipo se utiliza para sellar y suavizar bordes de billeteras?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Máquina láser.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Máquina de coser de codo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Máquina de lustrado o pulido de cantos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Troqueladora hidráulica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el hilo más utilizado para costuras decorativas de alto contraste?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'TEX 135.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'TEX 45.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'TEX 70.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'TEX 30.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Las billeteras femeninas suelen incluir cremalleras y espacios para accesorios.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El cuero ovino es grueso, rígido y se usa comúnmente en exteriores.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Los adhesivos a base de agua son más tóxicos que los de base solvente.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Las máquinas de poste se utilizan para costuras amplias en superficies planas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las fichas técnicas permiten estandarizar el diseño y la producción de billeteras.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
