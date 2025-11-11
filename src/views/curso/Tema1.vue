<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Evaluación del impacto'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-9.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Evaluar el impacto de los proyectos empresariales es fundamental para garantizar su viabilidad y sostenibilidad. A través de herramientas de medición y análisis, es posible comprender cómo estos proyectos afectan los recursos organizacionales y el entorno. Además, la mejora continua permite optimizar los procesos empresariales, asegurando que las organizaciones sean más eficientes y socialmente responsables. 9
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
    

    p En esta unidad, aprenderás a:

    .row.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-2.p-4.h-100
          h4 01
          p.mb-0 Analizar y evaluar los resultados de proyectos.

      .col-lg-4
        .bg-color-2.p-4.h-100
          h4 02
          p.mb-0 Diseñar estrategias de mejora.

      .col-lg-4
        .bg-color-2.p-4.h-100
          h4 03
          p.mb-0 Comprender el impacto de la evaluación en la toma de decisiones organizacionales.



    h2 Evaluación del impacto y mejora continua
    p Aunque son conceptos complementarios, tienen enfoques distintos:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7
              h4 Evaluación del impacto
              p Mide los efectos de un proyecto en la organización, la comunidad, el medio ambiente y la economía. Busca determinar si los resultados están alineados con los objetivos planteados y qué valor agregado ha generado la acción implementada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7
              h4 Mejora continua
              p Optimiza el desempeño de un proyecto de manera constante, basándose en el aprendizaje obtenido de la evaluación del impacto y en la identificación de oportunidades de mejora progresiva.


    p Las características de la evaluación del impacto son: 

    .bg-color-1.mb-5
      .row.align-items-center
        .col-lg
          .p-4.p-md-5
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Mide resultados y consecuencias de un proyecto o proceso.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Utiliza herramientas y métricas como indicadores de desempeño, encuestas, análisis costo-beneficio y huella de carbono.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Evalúa el impacto en diferentes dimensiones: social, ambiental y económica.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Se realiza en momentos clave (antes, durante y después del proyecto).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Permite tomar decisiones informadas sobre la continuidad, ajuste o mejora de una estrategia. 1

          
        .col-lg-auto
          img(src="@/assets/curso/tema1/2.svg").mx-auto


    p A continuación, exploraremos un ejemplo práctico y las características clave de esta estrategia:

    .bg-full-width.bg-color-3.mb-5
      
      .row.justify-content-center.align-items-center
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/3.svg", data-aos="zoom-in")
        .col-lg-6
          .p-4.p-md-5
            p(data-aos="fade-left").mb-4.text-white Para estudiar la temática, lo invitamos a escuchar el siguiente podcast.
            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Mejora continua: clave para la evolución empresarial"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    h2 Ejemplo

    p Tras la evaluación del impacto de la reducción de plásticos, la empresa decide ajustar su estrategia mediante la introducción de nuevos empaques biodegradables y la sensibilización de empleados y clientes sobre la importancia del reciclaje.

    .titulo-figura.mb-2
      h5 Tabla 1. 
      span Diferencia clave entre evaluación del impacto y mejora continua.
    
    .tabla-a.mb-5
      table
        thead
          tr
            th.bg-color-tabla.text-white Criterio
            th.bg-color-tabla.text-white Evaluación del impacto
            th.bg-color-tabla.text-white Mejora continua
        tbody
          tr
            th Objetivo
            td Medir el efecto de una acción o proyecto
            td Optimizar procesos y resultados de forma constante
          tr
            th Enfoque
            td Análisis de impacto en aspectos sociales, económicos y ambientales
            td Implementación de mejoras basadas en evaluación y retroalimentación
          tr
            th Periodicidad
            td Se realiza en puntos específicos del proceso (antes, durante y después)
            td Es un proceso continuo o iterativo
          tr
            th Métodos
            td Encuestas, métricas de impacto, indicadores financieros, huella de carbono
            td PDCA, Lean, Six Sigma, metodologías ágiles
          tr
            th Resultado
            td Toma de decisiones sobre la continuidad o ajuste de estrategias
            td Crecimiento y optimización progresiva de la organización
    
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Mientras que la evaluación del impacto se enfoca en medir los efectos de una acción y determinar su éxito o necesidad de ajuste, la mejora continua se encarga de implementar cambios progresivos para optimizar procesos y garantizar la sostenibilidad del éxito empresarial. Ambos procesos son esenciales para asegurar que una organización no solo alcance sus objetivos, sino que también evolucione y se adapte a un entorno cambiante.
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") Gaviria Mahecha, R. A. Guardiola Esmeral, A. R. & Ríos Giraldo, A. L. D. L. (2023). Sectores económicos en Colombia y su impacto en el comercio internacional: (1 ed.). Fondo Editorial Universidad Cooperativa de Colombia. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=WeFoumD6Fpc" target="_blank" rel="noopener noreferrer") Mundo Empresarial. (2020, 10 de septiembre). ¿De qué depende el crecimiento económico de un país?

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
