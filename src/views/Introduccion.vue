<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5.style___box_1(data-aos="zoom-in") El patronaje de billeteras constituye un eje fundamental dentro de la marroquinería, ya que integra conocimientos técnicos y prácticos que permiten transformar materiales en productos funcionales, estéticos y de calidad. Este proceso combina tradición artesanal e innovación digital, respondiendo a las exigencias del mercado actual que demanda tanto piezas exclusivas como soluciones accesibles y duraderas.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A través del estudio de fichas técnicas, estructuras, materiales, insumos y maquinaria especializada, se logra comprender de manera integral cada etapa de la fabricación de una billetera. Estos elementos, junto con la correcta interpretación de especificaciones y diseños, aseguran uniformidad en la producción, optimización de recursos y cumplimiento de estándares de calidad.
    
    .row.align-items-center
      .col-xl(data-aos="fade-right")
        p.mb-0.style___box_2 El componente formativo orienta al desarrollo de competencias que fortalecen la capacidad de los aprendices para elaborar billeteras con precisión, creatividad y pertinencia. Además, fomenta el análisis crítico sobre la selección de materiales, el uso de tecnologías y la incorporación de criterios ergonómicos y estéticos, garantizando productos competitivos en los sectores de la moda y la industria manufacturera.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/intro/img2.png", alt="").m-auto



</template>

<script>
export default {
  name: 'Introduccion',
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
