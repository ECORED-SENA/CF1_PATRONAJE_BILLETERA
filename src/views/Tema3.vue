<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Materiales e insumos para marroquinería

    .fondo___color
      .px-5

        .row.align-items-center.mb-5.m-0
          .col-xl.style___box_1(data-aos="fade-right")
            p.mb-0 La marroquinería combina tradición artesanal con técnicas industriales para crear productos como bolsos, cinturones, correas, carteras y, especialmente, billeteras. Estos artículos requieren una <strong>selección precisa de materiales e insumos</strong>, ya que su <strong>calidad, durabilidad y estética</strong> dependen directamente de ellos. En particular, las billeteras deben soportar <strong>uso constante, manipulación diaria y exigencias de resistencia</strong>, todo en un formato compacto. Por ello, la elección de materiales adecuados es esencial.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img26.png", alt="").m-auto
        
        <!-- BLOQUE 1 -->
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Materiales principales

        p.mb-5 Los materiales utilizados en marroquinería son fundamentales para garantizar la calidad, funcionalidad y apariencia estética de los productos. Su correcta elección influye directamente en la durabilidad y el valor percibido del artículo final.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
          .col
            h3 Cueros
        
        p.mb-5 El cuero es históricamente el material por excelencia en la marroquinería, gracias a propiedades únicas como <strong>resistencia mecánica, durabilidad, flexibilidad y una estética de lujo y sofisticación</strong>. Estos atributos lo hacen ideal para billeteras, especialmente en productos de gama media y alta. Los tipos de cuero más utilizados son: 

        .fondo___slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Cuero vacuno
                    p.mb-0 El más común y versátil. Ofrece resistencia, cuerpo firme y admite acabados como napa, pigmentado o grabado. Preferido para billeteras de gama media y alta. 
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img27.png', alt='' ).m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Cuero caprino
                    p.mb-0 Más delgado y flexible, con textura granulada. Ideal para billeteras finas y elegantes por su ligereza y buena resistencia. 
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img28.png', alt='' ).m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Cuero ovino
                    p.mb-0 Muy suave, flexible y de apariencia delicada. Usado en billeteras de alta gama, especialmente en interiores y forros. 
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img29.png', alt='' ).m-auto
                      
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
      .col
        h3 Cueros exóticos
    
    p.mb-5 Los cueros exóticos provienen de animales no tradicionales y se distinguen por su <strong>rareza, belleza estética y exclusividad</strong>. Requieren procesos de curtido especializados y su uso está orientado a productos de lujo.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cocodrilo y caimán
                p.mb-0 Considerados los más lujosos. Piel con patrón de escamas único, alta resistencia y durabilidad. Usado en billeteras, bolsos y cinturones de gama muy alta. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img30.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Serpiente (pitón, cobra, boa)
                p.mb-0 Patrones brillantes y llamativos. Flexible y ligera, ideal para detalles decorativos. Requiere cuidados especiales para mantener las escamas. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img31.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Avestruz (cuerpo)
                p.mb-0 Textura con folículos visibles (puntitos). Muy resistente y flexible. Usado en billeteras y carteras de lujo. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img32.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Avestruz (patas)
                p.mb-0 Textura muy característica y visualmente distintiva. Utilizada en artículos de alta gama. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img33.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Mantarraya
                p.mb-0 Extremadamente dura, resistente al agua, al fuego y al desgaste. Superficie granulada y brillante como perlas diminutas. Elegida para billeteras exclusivas. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img34.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tiburón
                p.mb-0 Grano áspero, robusto y resistente. Impermeable y de gran durabilidad. Usado en accesorios marinos de alta gama. 
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img35.png', alt='' ).m-auto

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Ventajas y desventajas de los cueros exóticos

    p.mb-5 El uso de cueros exóticos en marroquinería representa una apuesta por la <strong>exclusividad, el lujo y la diferenciación</strong>, pero también implica ciertos desafíos. A continuación, se presentan sus principales ventajas y desventajas:

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Ventajas y desventajas del uso de cueros exóticos en marroquinería
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Ventajas
                th Desventajas
            tbody
              tr
                td.ajuste-border-tabla.texto-left Exclusividad y diferenciación en el mercado.
                td.texto-left Alto costo por la rareza y complejidad de producción.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Alta durabilidad y resistencia (especialmente cocodrilo, mantarraya y tiburón).
                td.texto-left Limitaciones legales y éticas (regulados para proteger especies).
              tr
                td.ajuste-border-tabla.texto-left Valor estético único por sus texturas y patrones naturales.
                td.texto-left Requieren cuidados y mantenimientos especiales.
    
    .fondo___color
      .px-5

        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Características técnicas del cuero

        p.mb-5 El cuero natural posee cualidades técnicas que lo hacen ideal para la fabricación de billeteras. Estas propiedades son determinantes tanto para el diseño como para la funcionalidad del producto final:

        .row.justify-content-center.mb-5 
          .col-xl-10  
            .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img36.jpg', alt='' style="max-width: 350px").m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Flexibilidad y memoria de forma:</strong> permite doblarse repetidamente sin perder su estructura, ideal para billeteras plegables o tipo tarjetero.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Resistencia al desgaste:</strong> soporta fricción, presión de bolsillos y manipulación constante sin deteriorarse fácilmente.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Porosidad y transpirabilidad:</strong> a diferencia de los sintéticos, el cuero natural respira, evitando acumulación de humedad interna.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Capacidad de personalización:</strong> puede ser grabado con calor, láser, repujado o estampado, lo cual lo hace adaptable a las tendencias de diseño y a la personalización de marca.</li>
                </ul>
        
        p.mb-5 A continuación, se presenta un video que explora los acabados aplicados al cuero en la fabricación de billeteras, sus ventajas técnicas y estéticas, así como los procesos fundamentales que optimizan este material en el ámbito de la marroquinería.

        figure(data-aos="zoom-in")
        .video.mb-1
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.mb-5(data-aos="zoom-in") <strong>Video</strong>: TEXTO

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
      .col
        h3 Materiales sintéticos
    
    p.mb-5  Los materiales sintéticos surgieron como alternativa al cuero natural, con el objetivo de ofrecer opciones más accesibles en costo, versátiles en diseño y con ventajas específicas frente a la humedad y el mantenimiento. Actualmente, su uso se ha consolidado en la industria de la marroquinería, especialmente en la fabricación de <strong>billeteras de moda rápida, productos promocionales</strong> y artículos dirigidos a <strong>públicos jóvenes o con presupuestos ajustados</strong>.

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Principales tipos de materiales sintéticos
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Material
                th.ajuste-border-tabla Características
                th Usos comunes
            tbody
              tr
                td.ajuste-border-tabla.texto-left <strong>Vinilo (PVC plastificado)</strong>
                td.ajuste-border-tabla.texto-left Económico, resistente a la humedad, maleable, aunque tiende a volverse rígido con el tiempo.
                td.texto-left Billeteras promocionales impresas con logotipos o diseños gráficos.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>PU (Poliuretano)</strong>
                td.ajuste-border-tabla.texto-left Muy similar al cuero natural, suave, flexible, estético y más duradero que el PVC.
                td.texto-left Billeteras de gama media, juveniles o con acabados de calidad.
              tr
                td.ajuste-border-tabla.texto-left <strong>PVC (Policloruro de vinilo)</strong>
                td.ajuste-border-tabla.texto-left Impermeable, fácil de limpiar, con gran variedad de grosores y acabados. Bajo costo, pero menor durabilidad.
                td.texto-left Productos económicos o combinados con otros materiales.

    .fondo___color
      .px-5

        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Características técnicas

        p.mb-5 Los materiales sintéticos presentan propiedades que los hacen especialmente funcionales en productos como billeteras:

        .row.justify-content-center.mb-5 
          .col-xl-10  
            .row.align-items-center.m-0.style___box_3.ajuste___box_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img37.jpg', alt='' style="max-width: 350px").m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Variedad estética:</strong> imitan cueros exóticos como cocodrilo, serpiente o avestruz, y permiten superficies modernas en colores vivos, metalizados o estampados digitales.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Resistencia a la humedad:</strong> no se deterioran fácilmente al contacto con el agua.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Espesores regulables:</strong> se fabrican en calibres muy delgados, ideales para diseños minimalistas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Uniformidad visual:</strong> carecen de imperfecciones naturales, lo que permite acabados homogéneos y limpios.</li>
                </ul>
        
        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Ventajas en la fabricación de billeteras

        p.mb-5 Los sintéticos ofrecen múltiples beneficios prácticos y comerciales:

        .fondo___img
          .px-5
            SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img38.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Costo accesible
                p.mb-0 Facilitan la producción de billeteras económicas y de moda rápida.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img39.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Amplia gama de colores y texturas
                p.mb-0 Desde tonos neutros hasta acabados fluorescentes o con estampados gráficos.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img40.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Sostenibilidad percibida
                p.mb-0 Opción preferida por consumidores veganos o con objeciones al uso de productos de origen animal.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img41.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Resistencia a manchas y humedad
                p.mb-0 Ideales para contextos urbanos, escolares o informales.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img42.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Facilidad de personalización
                p.mb-0 Permiten técnicas como impresión digital, serigrafía, grabado láser y sublimación.
            
            h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Limitaciones

            p.mb-5 A pesar de sus ventajas, los sintéticos presentan ciertas desventajas frente al cuero natural:

    .row.justify-content-center.mb-5 
      .col-xl-10  
        .row.align-items-center.m-0.style___box_3.ajuste___box_3_1(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img43.jpg', alt='' style="max-width: 350px").m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Menor durabilidad:</strong> especialmente en zonas de pliegue o bordes, donde el desgaste es más visible.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Sensación al tacto:</strong> suelen carecer del tacto cálido y de la pátina que el cuero desarrolla con el tiempo.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Impacto ambiental:</strong> materiales como el PVC requieren procesos contaminantes y no siempre son biodegradables.</li>
            </ul>
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Usos comunes en billeteras

    p.mb-5 Los materiales sintéticos permiten una gran diversidad de aplicaciones, adaptándose a distintos segmentos del mercado:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Promocionales
                p.mb-0 Elaboradas principalmente en PVC o vinilo. Usadas con fines publicitarios, incluyen logotipos o mensajes.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img44.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Juveniles o de moda rápida
                p.mb-0 Fabricadas en PU, con diseños modernos, colores llamativos y estampados gráficos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img45.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gama media
                p.mb-0 Utilizan PU de alta calidad, imitando cuero auténtico. Aportan estética cuidada a menor costo.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img46.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diseños mixtos
                p.mb-0 Combinan sintéticos con textiles, lonas o partes de cuero. Buscan equilibrio entre estética, funcionalidad y precio.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img47.png', alt='' ).m-auto

    p.mb-5 Los <strong>materiales sintéticos</strong> representan una alternativa estratégica en la marroquinería contemporánea, especialmente en la fabricación de billeteras que priorizan el diseño, el costo accesible y la resistencia al uso diario. Aunque no alcanzan la durabilidad ni el prestigio del cuero natural, su uso es clave en la <strong>diversificación del mercado</strong> y en la atención a <strong>públicos con distintas necesidades económicas y estilísticas</strong>.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
      .col
        h3 Textiles
    
    p.mb-5 En la marroquinería, y particularmente en la fabricación de billeteras, los <strong>textiles</strong> se han consolidado como una <strong>alternativa versátil y competitiva</strong> frente al cuero y los materiales sintéticos. Su uso responde a la necesidad de producir piezas <strong>más ligeras, funcionales y con estilos modernos o casuales</strong>, además de permitir una mayor libertad estética gracias a <strong>colores, estampados y texturas variadas</strong>. Los principales materiales textiles utilizados en billeteras son: 

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Lona
                p.mb-0 Tejido resistente y con cuerpo, ideal para exteriores de billeteras tipo casual o deportivas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img48.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 <em>Denim</em> (mezclilla)
                p.mb-0 Aporta un estilo urbano e informal, especialmente atractivo para públicos jóvenes.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img49.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Lona encerada
                p.mb-0 Mejora la resistencia al agua y al desgaste. Utilizada en billeteras con acabado rústico o vintage.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img50.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 <em>Nylon</em> y materiales técnicos
                p.mb-0 Livianos, impermeables y duraderos. Comunes en diseños <em>outdoor</em> o billeteras minimalistas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img51.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Poliéster y microfibras
                p.mb-0 Usados principalmente en forros internos por su resistencia a la fricción y bajo costo.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img52.png', alt='' ).m-auto

    .fondo___color
      .px-5

        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Ventajas del uso de textiles en marroquinería

        p.mb-5 Los textiles aportan beneficios clave en la fabricación de billeteras, tanto funcionales como estéticos:

        .row.justify-content-center
          .col-xl-10  
            .row.align-items-center.m-0.style___box_3.ajuste___box_3_1(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img53.jpg', alt='' style="max-width: 350px").m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Reducción de costos</strong> frente al uso de cuero natural.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Mayor variedad visual:</strong> permiten una amplia gama de colores, estampados y estilos gráficos.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Menor peso:</strong> lo que se traduce en mayor comodidad para el usuario.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Compatibilidad con materiales reciclados o ecológicos</strong>, lo que los hace adecuados para líneas de productos sostenibles o de bajo impacto ambiental.</li>
                </ul>

        <!-- BLOQUE 2 -->
        Separador
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Insumos complementarios
        
        p.mb-5 Los <strong>insumos complementarios</strong> en marroquinería son materiales de apoyo fundamentales en la fabricación de billeteras. Cumplen funciones de refuerzo, ensamblaje, decoración y presentación, influyendo directamente en la durabilidad, calidad y estética final del producto.
        
        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Hilos

    p.mb-5 En la elaboración de billeteras, los hilos no solo garantizan la <strong>resistencia de las costuras</strong> sometidas a fricción constante, sino que también aportan <strong>detalles visuales</strong> que refuerzan el estilo del diseño.

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Tipos de hilo utilizados en marroquinería
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Tipo de hilo
                th Características y usos comunes
            tbody
              tr
                td.ajuste-border-tabla.texto-left <strong>Poliéster de alta tenacidad</strong>
                td.texto-left Muy resistente a la tracción y al desgaste. Mantiene su color frente a la humedad y el sudor. Ideal para costuras visibles y forros internos.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong><em>Nylon</em> (poliamida)</strong>
                td.texto-left Flexible, resistente al estiramiento. Común en billeteras deportivas o de lona. Muy usado por su durabilidad, especialmente en bordes.
              tr
                td.ajuste-border-tabla.texto-left <strong>Hilo encerado</strong>
                td.texto-left Puede ser de poliéster o algodón con recubrimiento de cera. Facilita el cosido manual y ofrece un acabado artesanal, típico en billeteras de cuero.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Algodón reforzado</strong>
                td.texto-left Menos frecuente en modelos modernos, pero presente en productos artesanales. Mejora su resistencia al combinarse con recubrimientos.
    
    .fondo___color
      .px-5
        
        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Aspectos técnicos en el uso del hilo

        p.mb-5 Uno de los factores más relevantes en la selección del hilo es el <strong>calibre</strong>, expresado en <strong>TEX</strong> (peso en gramos de 1.000 metros de hilo). A mayor TEX, mayor grosor y resistencia:

        .row.justify-content-center.mb-5
          .col-xl-10  
            .row.align-items-center.m-0.style___box_3.ajuste___box_3_1(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img54.jpg', alt='' style="max-width: 350px").m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>TEX 45:</strong> usado en billeteras finas o elegantes. Ideal para costuras discretas y prolijas, en cuero suave o forros internos.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>TEX 70:</strong> aplicado en billeteras <em>sport</em> o casuales. Aporta estructura y un acabado más robusto.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>TEX 105 / 135:</strong> utilizado para costuras decorativas que buscan realce visual. Generan contraste estético.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>TEX 45 nuevamente:</strong> también se aplica en detalles internos como bolsillos o forros, donde se requiere delicadeza sin sacrificar resistencia.</li>
                </ul>
        
        p.mb-5 La correcta elección del <strong>calibre del hilo</strong> impacta tanto en la <strong>durabilidad funcional</strong> como en el <strong>valor estético del producto</strong>.

        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Relación entre hilo y aguja

        p.mb-5 La compatibilidad entre <strong>hilo, aguja y material</strong> es clave para obtener costuras <strong>limpias, resistentes y profesionales</strong>. Esta relación se basa en mantener un equilibrio adecuado:

        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 4.
              span Correspondencia entre TEX del hilo y calibre de aguja
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla TEX del hilo
                    th Calibre de aguja recomendado
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left <strong>TEX 45</strong>
                    td.texto-left 90/14 a 100/16.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left <strong>TEX 70</strong>
                    td.texto-left 100/16 a 110/18.
                  tr
                    td.ajuste-border-tabla.texto-left <strong>TEX 105</strong>
                    td.texto-left 120/19 a 140/22.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left <strong>TEX 135</strong>
                    td.texto-left 130/21 a 140/22.

    p.mb-5 Este rango puede variar según el grosor del material. <strong>Materiales más gruesos</strong> pueden requerir agujas de mayor calibre; <strong>materiales más delgados</strong>, agujas más finas. El objetivo es evitar errores comunes como:

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.align-items-center.mb-3
          .col-xl-6(data-aos="zoom-in")
            .style___box_6.h-100
              p.mb-0 Rotura del hilo por fricción con agujas demasiado finas.
          .col-xl-6(data-aos="zoom-in").espacio___movil_3
            .style___box_7.h-100
              p.mb-0 Perforaciones excesivas si la aguja es muy gruesa para el hilo o el material.
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Tipos de puntas de aguja más utilizadas

    p.mb-5 Las agujas se clasifican según la <strong>forma de su punta</strong>, adaptándose al tipo de material que se va a coser:

    .row.mb-3
      .col-lg-4(data-aos="zoom-in")
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/img55.png', alt="")
          h3.text-center LL (corte a la izquierda)
          p.mb-0 Para cuero. Produce puntadas inclinadas a la izquierda. Decorativa.
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/img56.png', alt="")
          h3.text-center LR (corte a la derecha)
          p.mb-0 Para cuero. Puntadas inclinadas a la derecha. Muy decorativa.
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/img57.png', alt="")
          h3.text-center S (corte recto)
          p.mb-0 Puntadas rectas y discretas. Para cuero.
    
    .row.mb-5
      .col-lg-4(data-aos="zoom-in")
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/img58.png', alt="")
          h3.text-center TRI D (triangular)
          p.mb-0 Costuras visibles y ornamentales en cuero.
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/img59.png', alt="")
          h3.text-center R (punta redonda)
          p.mb-0 Textiles, sintéticos y forros. No corta fibras, las separa. Evita desgarros.
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/img60.png', alt="")
          h3.text-center SES / SUK (bola ligera / media)
          p.mb-0 Materiales elásticos o de punto. Preserva las fibras y da elasticidad.
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Importancia en la fabricación de billeteras

    p.mb-5 La correcta combinación de <strong>hilo, aguja y tipo de punta</strong> es esencial para garantizar:

    .row.justify-content-center.mb-5
      .col-xl-10  
        .row.align-items-center.m-0.style___box_3.ajuste___box_3_1(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img61.jpg', alt='' style="max-width: 350px").m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Durabilidad:</strong> costuras resistentes al uso y fricción diaria.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Estética:</strong> puntadas limpias, alineadas con el estilo del producto (ya sean decorativas o discretas).</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Protección del material:</strong> evita daños, perforaciones excesivas o desgarros tanto en cuero como en textiles.</li>
            </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
      .col
        h3 Adhesivos
    
    p.mb-5 En la fabricación de billeteras, los adhesivos se utilizan para unir piezas antes de la costura, fijar forros o reforzar bordes, garantizando precisión en los acabados. Para ello, se emplean distintos tipos según el material y el proceso:

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img62.png", alt="").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Base solvente").ajuste-cajaAcordion
              p.mb-3 Elaborados con caucho de cloropreno (neopreno). Alta adherencia, secado rápido. Necesitan ventilación.
            .row(titulo="Base agua").ajuste-cajaAcordion
              p.mb-3 Menos tóxicos, flexibles. Ideales para interiores. Secado más lento.
            .row(titulo="Especiales").ajuste-cajaAcordion
              p.mb-3 <em>Hot melt</em> para producción rápida, cianoacrilatos para fijaciones puntuales y spray para uniones temporales.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
      .col
        h3 Refuerzos estructurales
    
    p.mb-5 Los refuerzos internos dan rigidez a las billeteras, ayudan a conservar su forma y evitan deformaciones por el uso constante. Entre sus <strong>funciones principales</strong> se destacan:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.mb-3
          .col-xl-4(data-aos="zoom-in")
            .style___box_6.h-100
              p.mb-0 Aportar firmeza estructural.
          .col-xl-4(data-aos="zoom-in").espacio___movil_3
            .style___box_6.ajuste___box_6.h-100
              p.mb-0 Mantener la forma con el tiempo.
          .col-xl-4(data-aos="zoom-in").espacio___movil_3
            .style___box_7.h-100
              p.mb-0 Facilitar la costura y el pegado.
    
    p.mb-5 Según el tipo de billetera, se utilizan distintos materiales:

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
                    img(src='@/assets/curso/temas/img81.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cartón prensado (odena)
                p.mb-0 Rígido y económico, ideal para tapas.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img82.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Salpa
                p.mb-0 Cuero regenerado. Más denso y elegante.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img83.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Fibras no tejidas
                p.mb-0 Aportan estabilidad sin grosor.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img84.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Celulosa prensada
                p.mb-0 Compacta y uniforme. Mejores acabados.
              
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img85.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Termoplásticos
                p.mb-0 Se moldean con calor. Alta precisión.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img86.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Espumas
                p.mb-0 Usadas en diseños modernos para dar volumen.
        
        h5.mb-5 Los refuerzos se colocan estratégicamente en:

        .row.justify-content-center.mb-5
          .col-xl-6  
            .row.align-items-center.m-0.style___box_3.ajuste___box_3_1(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img63.jpg', alt='' style="max-width: 350px").m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cut"></i></span>Tapas externas.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cut"></i></span>Separadores de billetes.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-cut"></i></span>Porta tarjetas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span>Bordes y pliegues.</li>
                </ul>
    
    p.mb-5 Para que funcionen correctamente, deben cumplir <strong>criterios técnicos</strong> como:

    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img64.svg' alt='' style="max-width: 130px").m-auto
          .tarjeta.color-primario
            .p-4
              p.mb-0 Ser compatibles con el material principal.

      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img65.svg' alt='' style="max-width: 130px").m-auto
          .tarjeta.color-primario
            .p-4
              p.mb-0 No dificultar la costura ni el doblado.

      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img66.svg' alt='' style="max-width: 130px").m-auto
          .tarjeta.color-primario
            .p-4
              p.mb-0 En productos de lujo, aportar rigidez sin notarse.

      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img67.svg' alt='' style="max-width: 130px").m-auto
          .tarjeta.color-primario
            .p-4
              p.mb-0 En modelos casuales, brindar resistencia visible.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
      .col
        h3 Cremalleras
    
    p.mb-5 Las cremalleras aportan seguridad a los compartimentos de monedas, llaves o pequeños objetos dentro de la billetera. Existen varios tipos según el uso y diseño:

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 5.
          span Tipos de cremalleras 
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Tipo
                th.ajuste-border-tabla Ventajas
                th Uso habitual
            tbody
              tr
                td.ajuste-border-tabla.texto-left <strong>Metálicas</strong>
                td.ajuste-border-tabla.texto-left Elegantes y duraderas.
                td.texto-left Compartimentos de alto uso.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Plásticas</strong>
                td.ajuste-border-tabla.texto-left Económicas y ligeras.
                td.texto-left Monederos, bolsillos internos.
              tr
                td.ajuste-border-tabla.texto-left <strong>Invisibles</strong>
                td.ajuste-border-tabla.texto-left Discretas.
                td.texto-left Diseños estilizados.

    .fondo___color
      .px-5
        
        .row.justify-content-center.mb-5
          .col-xl-10  
            .row.align-items-center.m-0.style___box_3.ajuste___box_3_1(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img68.jpg', alt='' style="max-width: 350px").m-auto
              .col-xl
                p.mb-1 Según el tamaño del modelo, se emplean <strong>calibres</strong> distintos:
                <ul class="fa-ul estilo___ul_1 mb-3">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>#3</strong> para billeteras estándar.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>#5</strong> para billeteras grandes o tipo <em>clutch</em>.</li>
                </ul>
                p.mb-1 Al instalar una cremallera, se deben considerar estos <strong>aspectos técnicos</strong>:
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span>Debe ajustarse al grosor del material.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span>El remate debe reforzarse con costura.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span>Puede aplicarse en línea recta o curva, según el diseño.</li>
                </ul>
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
          .col
            h3 Broches en billeteras
        
        p.mb-5 Los broches son sistemas de cierre que combinan <strong>funcionalidad y diseño</strong>, aportando seguridad y orden a los compartimentos de una billetera. Entre los <strong>tipos más comunes</strong> se encuentran:

        .row.justify-content-center.mb-5
          .col-xl-10  
            .row.align-items-center.m-0.style___box_3.ajuste___box_3_1(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img69.jpg', alt='' style="max-width: 350px").m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Broches imantados (magnéticos):</strong> fáciles de instalar por presión o costura. Ofrecen un cierre rápido y cómodo. Muy utilizados en tapas externas de billeteras femeninas o carteras tipo <em>clutch</em>.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Broches de presión (mecánicos):</strong> formados por dos piezas que encajan al presionar. Son seguros y resistentes, ideales para compartimentos internos. Su tamaño suele variar entre <strong>10 y 14 mm</strong>.</li>
                </ul>
        
        p.mb-5 Los broches cumplen varias <strong>funciones clave</strong> en el diseño:

    .fondo___color
      .px-5
    
        .row.mb-5
          .col-xl-3(data-aos="zoom-in")
            .style___box_8.h-100
              h4.mb-0.text-center Seguridad
              p.mb-0 Evitan que monedas, billetes o tarjetas se salgan.
          .col-xl-3(data-aos="zoom-in").espacio___movil_3
            .style___box_8.h-100
              h4.mb-0.text-center Organización
              p.mb-0 Ayudan a dividir compartimentos específicos.
          .col-xl-3(data-aos="zoom-in").espacio___movil_3
            .style___box_8.h-100
              h4.mb-0.text-center Estética
              p.mb-0 Aportan valor visual, integrándose al diseño.
          .col-xl-3(data-aos="zoom-in").espacio___movil_3
            .style___box_8.h-100
              h4.mb-0.text-center Durabilidad
              p.mb-0 Resisten múltiples aperturas sin deformarse.
    
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img2.svg" style="max-width: 60px").m-auto
          .col
            h3 Herrajes
        
        p.mb-5 Aunque su presencia es más discreta que en bolsos o mochilas, los herrajes en billeteras cumplen un rol importante al aportar <strong>refuerzo, estilo y valor percibido</strong>. Entre los <strong>herrajes más utilizados</strong> se encuentran:

        .row.justify-content-center.mb-5
          .col-xl-10  
            .row.align-items-center.m-0.style___box_3.ajuste___box_3_1(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img70.jpg', alt='' style="max-width: 350px").m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Logotipos metálicos y plaquetas:</strong> se fijan al frente o al interior como distintivos de marca y elemento decorativo.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Marcos metálicos:</strong> usados para fotos o compartimentos transparentes, aportan rigidez y elegancia.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Sistemas de cierre metálicos:</strong> pueden incluir pequeños broches, resortes o marcos a presión para asegurar compartimentos.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Anillos o mosquetones pequeños:</strong> presentes en diseños modernos, permiten incorporar llaveros o cadenas de seguridad.</li>
                </ul>
        
        p.mb-0 Según el estilo de la billetera, se seleccionan diferentes acabados de herrajes, como níquel, dorado, pavonado, envejecido o pintado, en función del carácter formal, <em>sport</em> o casual del producto. En cuanto a los requisitos técnicos, los herrajes deben ser livianos, resistentes a la corrosión y contar con bordes suaves y bien pulidos, para evitar que marquen o deterioren los materiales de la billetera. Los herrajes cumplen una función esencial en billeteras, ya que refuerzan su funcionalidad, estética y diferenciación de marca, a pesar de tratarse de elementos pequeños.

</template>

<script>
export default {
  name: 'Tema3',
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
