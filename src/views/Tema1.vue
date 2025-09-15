<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fichas técnicas
    
    .row.align-items-center.mb-5.m-0
      .col-xl.style___box_1(data-aos="fade-right")
        p.mb-0 La <strong>ficha técnica</strong> es un documento que reúne información precisa, detallada y estandarizada sobre un producto, con el fin de guiar su desarrollo, fabricación y control de calidad. En <strong>marroquinería</strong>, este recurso permite definir las especificaciones de diseño, materiales, medidas y procesos, garantizando la <strong>uniformidad</strong> del producto y el <strong>cumplimiento de estándares</strong>. Su importancia radica en que constituye la <strong>base de comunicación</strong> entre el diseñador, el área de producción y el control de calidad, evitando errores y agilizando la fabricación.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img1.png", alt="").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de fichas técnicas
    
    p.mb-5 A continuación, se presentan con los principales tipos de fichas técnicas utilizadas en marroquinería:

    .fondo___img
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img4.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img5.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ficha técnica de diseño
                p.mb-0 Especificar las características estéticas y funcionales del producto.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img6.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ficha técnica de producción
                p.mb-0 Detallar los procesos, pasos de ensamblaje y métodos de fabricación.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ficha técnica de control de calidad
                p.mb-0 Establecer los criterios para verificar que el producto cumpla con los estándares requeridos.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img8.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ficha técnica de materiales e insumos
                p.mb-0 Listar y describir todos los materiales necesarios para la fabricación.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
          .col
            h3 Elementos de una ficha técnica para billeteras
        
    p.mb-5 Una ficha técnica para billeteras debe incluir datos que aseguren la <strong>correcta interpretación del diseño y su fabricación</strong>. Los elementos más comunes son:

    .fondo___color
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-10  
            .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img9.jpg', alt='' style="max-width: 350px").m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Datos generales:</strong> nombre del producto, código o referencia, fecha, versión.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Boceto o ilustración:</strong> dibujo técnico, <em>render</em> o imagen que muestre la vista general y detalles.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Medidas y escalas:</strong> dimensiones externas e internas, tolerancias.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Materiales e insumos:</strong> tipo, color, calibre, referencia comercial, cantidad por unidad.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Componentes:</strong> piezas que conforman la billetera (cuerpos, tarjeteros, forros, cierres, etc.).</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Procesos y acabados:</strong> tipo de costura, pegues, tratamientos de bordes, grabados, etc.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Observaciones técnicas:</strong> instrucciones especiales, advertencias o recomendaciones.</li>
                </ul>
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
          .col
            h3 Interpretación y elaboración de fichas técnicas
        
        p.mb-5 <strong>Interpretar</strong> una ficha técnica implica leer y comprender cada uno de sus apartados para ejecutar el diseño y la fabricación del producto tal como fue planeado. Esto requiere analizar correctamente los <strong>gráficos, vistas, símbolos y abreviaturas</strong> utilizadas. La <strong>elaboración</strong> de fichas técnicas puede realizarse de dos maneras:

        .row.justify-content-center
          .col-xl-8
            .row.justify-content-center.mb-4
              .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img11.svg", alt='' style="max-width: 110px").m-auto
                  .estilo___tarjeta_body
                    h5.mb-3 Físico
                    p.mb-0 Se elabora en papel, usando plantillas impresas. Permite revisión manual.
              
              .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .estilo___tarjeta(data-aos="zoom-in")
                  .estilo___tarjeta_img
                    figure
                      img(src="@/assets/curso/temas/img12.svg", alt='' style="max-width: 110px").m-auto
                  .estilo___tarjeta_body
                    h5.mb-3 Digital
                    p.mb-0 Se realiza mediante software de diseño o plantillas digitales. Brinda mayor precisión, rapidez en la edición y facilidad para actualizar.
    .row.justify-content-center
      .col-xl-10
        p.mb-0.style___box_2(data-aos="zoom-in") En ambos casos, la ficha debe ser <strong>clara, completa y coherente</strong>, asegurando que cualquier integrante del equipo pueda seguir las especificaciones y obtener el mismo resultado final.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
