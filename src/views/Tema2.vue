<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Estructura de la billetera

    p.mb-5 Una billetera está compuesta por elementos que cumplen funciones específicas como <strong>almacenar, organizar y proteger</strong> billetes, monedas, tarjetas y documentos personales. Cada parte se diseña para facilitar el uso y garantizar la durabilidad del producto.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
      .col
        h3 Cara frontal de la billetera

    .fondo___color
      .px-5

        p.mb-5 La vista frontal de una billetera muestra los elementos exteriores visibles, que no solo cumplen una función estética, sino también de protección. Es aquí donde se suelen ubicar detalles decorativos y herrajes que aportan identidad al diseño.

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0(data-aos="zoom-in")
              .col-xl-6.style___box_4
                h4 Tapa
                p.mb-0 Parte externa visible de la billetera. Protege el interior y puede incluir acabados decorativos.
              .col-xl-6.style___box_5.espacio___movil_3
                h4 Herraje
                p.mb-0 Elementos metálicos decorativos y funcionales (broches, plaquetas, logotipos).
        
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Cara frontal de la billetera
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img13.jpg', alt='Ilustración de la parte externa de una billetera con elementos como tapa y herrajes decorativos o funcionales.').m-auto

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
          .col
            h3 Parte interna
        
    p.mb-5 La parte interna de la billetera concentra los compartimentos clave para el almacenamiento y la organización de elementos personales. En esta vista se observan componentes diseñados para <strong>mejorar la funcionalidad, el acceso rápido y la protección del contenido</strong>, como tarjetas, billetes y documentos de identificación.

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img14.png", alt="").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Contratapa").ajuste-cajaAcordion
              p.mb-3 Superficie interna que corresponde a la tapa exterior, normalmente con compartimentos o divisiones.
            .row(titulo="Cuerpo").ajuste-cajaAcordion
              p.mb-3 Estructura principal de la billetera, donde se integran todos los componentes.
            .row(titulo="Divisiones para tarjeteros").ajuste-cajaAcordion
              p.mb-3 Secciones diseñadas para organizar y almacenar tarjetas de crédito, débito o documentos.
            .row(titulo="Bolsillo interno").ajuste-cajaAcordion
              p.mb-3 Espacio adicional, generalmente oculto, para guardar documentos pequeños o de valor.
            .row(titulo="Ventana").ajuste-cajaAcordion
              p.mb-3 Compartimento con material transparente (<em>PVC</em>, vinilo o malla plástica) que permite visualizar documentos sin necesidad de sacarlos. Su función es dar practicidad, facilitar la identificación rápida y proteger el documento del desgaste.
    
    .fondo___color
      .px-5
        
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 2.
              span Parte interna
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img15.jpg', alt='Esquema de la vista interior de la billetera que incluye contratapa, cuerpo principal, divisiones para tarjetas, bolsillo interno y ventana para documentos.').m-auto
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
          .col
            h3 Tarjetero interno
        
        p.mb-5 El tarjetero interno es una de las secciones más utilizadas. Su diseño optimiza el espacio y permite llevar múltiples tarjetas de forma ordenada, con fácil acceso y sin comprometer la forma de la billetera.

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 3.
              span Tarjetero interno
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img16.jpg', alt='Ilustración del compartimento interno diseñado para almacenar múltiples tarjetas de forma organizada.').m-auto
    
    .fondo___color
      .px-5
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
          .col
            h3 Monedero
        
        p.mb-5 El monedero es un compartimento que proporciona espacio seguro para almacenar monedas. Dependiendo del diseño, puede incluir un cierre de cremallera o broche, y se integra discretamente en el cuerpo de la billetera.

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 4.
              span Monedero
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img17.jpg', alt='Vista del compartimento específico para monedas que puede incluir cierre de cremallera o broche.').m-auto
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
          .col
            h3 Espaldar y divisiones
        
        p.mb-5 La vista posterior y superior de la billetera permite observar elementos internos y estructurales que cumplen funciones clave. El <strong>espaldar</strong> brinda firmeza al producto, mientras que las <strong>divisiones internas y el bolsillo portabilletes</strong> permiten una organización eficiente del dinero en efectivo y los documentos.
    
        .bg--img_03.mb-5
          .row.h-100.align-items-center
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img18.png", alt="").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Espaldar").ajuste-cajaAcordion
                  p.mb-3 Parte posterior de la billetera, que brinda soporte estructural y define la resistencia general del producto.
                .row(titulo="Bolsillo portabilletes").ajuste-cajaAcordion
                  p.mb-3 Compartimento alargado diseñado para guardar billetes extendidos sin necesidad de doblarlos.
                .row(titulo="Divisiones").ajuste-cajaAcordion
                  p.mb-3 Separadores internos que mejoran la organización, tanto para billetes como para documentos, permitiendo clasificarlos.
    
    .fondo___color
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 5.
              span Espaldar y divisiones
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img19.jpg', alt='Diagrama que muestra el espaldar de la billetera con sus divisiones internas y el bolsillo portabilletes.').m-auto
          
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
          .col
            h3 Broche
        
        p.mb-5 Sistema de cierre, que puede ser a presión, imantado o automático, garantizando seguridad al contenido.

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 6.
              span Sistema de cierre
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img20.jpg', alt='Ilustración del broche de cierre de la billetera, que puede ser imantado, a presión o automático.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
      .col
        h3 Diferencias estructurales entre billetera de hombre, billetera de dama y tarjetero
    
    p.mb-5 Cada tipo de billetera responde a un uso y estilo particular. La estructura, tamaño y distribución interna de los compartimentos varía según el público al que va dirigido. A continuación,  presenta una comparación visual:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Billetera de hombre
                p.mb-0 Formato compacto y horizontal. Priorizan los compartimentos para billetes y tarjetas. Diseño sobrio, menor volumen.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img22.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Billetera de dama
                p.mb-0 Tamaño más amplio. Incluye espacios para monedas, documentos y accesorios. Puede llevar cierres o cremalleras. Diseño más versátil.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img23.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tarjetero
                p.mb-0 Más pequeño y delgado. Diseñado exclusivamente para portar tarjetas. Prioriza la ligereza y ocupación mínima de espacio.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img24.png', alt='' ).m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
      .col
        h3 Proporciones, medidas y criterios ergonómicos
    
    p.mb-5 Las <strong>dimensiones</strong> de una billetera se definen según su tipología y el uso previsto, teniendo en cuenta estándares que permitan guardarla en bolsillos, bolsos o carteras con facilidad. Los <strong>criterios ergonómicos</strong> son esenciales para asegurar una experiencia de uso cómoda:

    .row.justify-content-center
      .col-xl-10  
        .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img25.jpg', alt='' style="max-width: 350px").m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-cut"></i></span>El accesorio debe abrirse y cerrarse sin dificultad.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-cut"></i></span>Los compartimentos deben facilitar el acceso al contenido.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-cut"></i></span>El peso y la rigidez deben ser apropiados para no generar molestias durante el uso diario.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span>Se evita el exceso de volumen sin sacrificar funcionalidad.</li>
            </ul>
    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
