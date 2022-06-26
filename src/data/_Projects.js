import React from "react";
import Translate, { translate } from '@docusaurus/Translate';

const projects = [
  {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Sensores Ambientales"}),
    slug: "#turing-envsensors",
    imageUrl: "img/projects/turing-envsensors.jpeg",
    subtitle: translate({message: "Fusión inteligente de datos de sensores de superficie satelitales e in situ para ayudar a comprender nuestro planeta cambiante"}),
    period: translate({message: "Mayo 2021 - Presente"}),
    tech: "Python",
    description: (
      <>
        <p>
            <Translate>
                Con el fin de avanzar en la comprensión del cambio ambiental y mejorar la predicción debemos encontrar formas inteligentes de combinar los datos satelitales, sensores de campo y los resultados de los simuladores ambientales que tienen en cuenta los principios físicos (p.e., los modelos climáticos). Para conciliar las escalas espaciales y diversas modalidades de estos datos, este proyecto tiene como fin construir un conjunto de herramientas impulsadas por estudios de casos del mundo real. Los resultados contribuyen en la construcción de mayor capacidad de investigación del Reino Unido en el desarrollo de Gemelos Digitales del entorno natural.
            </Translate>
        </p>
        <p>
            <Translate>
                El proyecto consta de tres líneas de trabajo:
            </Translate>
        </p>
        <p>
            <li>
                <Translate>
                    Línea 1: Deep learning para la instalación inteligente de sensores medioambientales.
                </Translate>
            </li>
            <li>
                <Translate>
                    Línea 2: Detección y seguimiento del cambio medioambiental a partir de sensores remotos.
                </Translate>
            </li>
            <li>
                <Translate>
                    Línea 3: Creación de principios para los Gemelos Digitales del entorno natural.
                </Translate>
            </li>
        </p>
        <p>
            <Translate>
                Como parte de mi postdoctorado en el proyecto, mi rol es transversal en cada una de líneas. En particular, mis principales aportes se ubican en la línea 1 donde en colaboraciones con otros investigadores de British Antartic Survey y Met Office estamos desarrollando una herramienta generalisable basada en modelación probabilística capaz de combinar datos de diferentes modalidades (datos de grid, datos historicos in situ y auxiliares) para tener observaciones más finas y locales de variables ambientales. En adición, con algoritmos greedy (o voraz) se plantea que la herramienta sugiera donde instalar sensores locales para reducir la incertidumbre de la variable ambiental modelada. Dentro de los estudio de casos planteados, mi variable ambiental a modelar es la humedad del suelo. Los datos de entrada son ERA5, las observaciones de 2013-2019 de las estaciones COSMOS-UK y el modelo multi-resolución digital del terreno (GMTED2010) de 1 km.
            </Translate>
        </p>
        <p>
            <Translate>
                Finalmente, motivado en la diversidad de proyectos e investigadores con los cuales colaboro en el proyecto, así como de comunidades activas en el desarrollo de software abierto como
            </Translate>{" "}
                <a href="https://pangeo.io/">
                Pangeo
            </a>
            <Translate>
            , también he desarrollado la comunidad de Ciencias de Datos Ambientales. Para este fin, estoy manteniendo un recurso desarrollado en Jupyter Book en el cual se alojan contenido ejecutable en formato Jupyter notebooks así como registros de reuniones mensuales de la comunidad en los cuales tratamos temas relacionados con las ciencias de datos ambientales.
            </Translate>
        </p>
      </>
    ),
    links: [
      {
        name: translate({message: "Sitio Web"}),
        link: "https://www.turing.ac.uk/research/research-projects/environmental-monitoring-blending-satellite-and-surface-data",
      },
    ],
  },
  {
    category: translate({message: "Proyecto"}),
    title: "scivision",
    slug: "#turing-scivision",
    imageUrl: "img/projects/turing-scivision.png",
    subtitle: translate({message: "Herramienta conectando a los desarrolladores de modelos de visión artificial con proveedores de datos de imágenes de diversos campos científicos"}),
    period: translate({message: "Mayo 2021 - Presente"}),
    tech: "Python",
    description: (
      <>
        <p>
            <Translate>
          scivision es una herramienta de código abierto desarrollada entre investigadores de diferentes dominios, entre ellos biología molecular, agricultura y medioambiente así como profesionales del equipo de Ingeniera de la Investigación del Turing. La principal oportunidad surge en la falta de una herramienta que permita el descubrimiento de imágenes científicas y modelos de visión artificial para su uso eficiente en la comunidad científica.
            </Translate>
        </p>
        <p>
            <Translate>
          La herramienta cuenta con un catalogo público de imágenes y modelos. Este puede ser explorado a través de una serie de funciones en una API en Python que permiten descubrir y cargar los registros para su posterior uso.
          Desde la versión 0.2 se dispone de una
            </Translate>{" "}
          <a href="https://github.com/scivision-gallery/">
              <Translate>
                  galería con estudios de caso
              </Translate>
          </a>{" "}
              <Translate>
                  que demuestran la pertinencia de la herramienta para en pocas lineas de código explorar imágenes y modelos del catalogo público.
              </Translate>
        </p>
        <p>
            <Translate>
                Mi rol en el proyecto es asegurar que la herramienta es generalisable para una variedad de imágenes (satelitales, drones, datos climáticos, entre otros) y modelos de la comunidad científica de las ciencias ambientales. Como ejemplo, he aportado con dos estudio de caso, uno relacionado con la
            </Translate>{" "}
                <a href="https://github.com/scivision-gallery/plankton-classification/">
                    <Translate>
                        clasificación de imágenes de fitoplancton
                    </Translate>
                </a>{" "}
            <Translate>
                (ver unas muestras de las imágenes en Fig 1), y otro resaltando un modelo para la
            </Translate>{" "}
            <a href="https://github.com/scivision-gallery/coastalveg-edge-detection/">
                <Translate>
            detección de vegetación costera
                </Translate>{" "}
          </a>
            <Translate>
                a partir de imágenes satelitales.
            </Translate>
          </p>
        <p>
            <img src="https://github.com/scivision-gallery/plankton-classification/raw/main/figs/plankton_prediction_example.png?raw=true" />
            <figcaption>
                <Translate>
                    Fig 1. Ejemplo de imágenes del estudio de caso de clasificación de fitoplancton.
                </Translate>
            </figcaption>
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/alan-turing-institute/scivision",
      },
    ],
  },
    {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Sistemas de producción de café en Colombia"}),
    slug: "#solidaridad-cafe",
    imageUrl: "img/projects/solidaridad-cafe.png",
    subtitle: translate({message: "Desarrollo de una metodología para mapear anualmente los sistemas de producción de café, expuesto al sol y con sombrío en Colombia"}),
    period: translate({message: "Diciembre 2020 - Abril 2021"}),
    tech: "Python, JavaScript",
    description: (
      <>
        <p>
            <Translate>
                Este proyecto fue parte de la consultoría “Geoprocesamiento para el monitoreo de deforestación y análisis de uso del suelo en fincas de café en Colombia” como parte del proyecto “Commodity Supply Chains and Green Growth” liderado por
            </Translate>{" "}
            <a href="https://www.solidaridadnetwork.org/">
            <Translate>
              Solidaridad Colombia
            </Translate>
          </a>.
        </p>
        <p>
            <Translate>
                La metodología de geoprocesamiento principalmente consistió en el uso de imágenes Sentinel-2. Disponibles desde Junio de 2015 y con una resolución espacial de 10-m, las imágenes fueron preprocesadas para reducir el ruido (principalmente nubes) en la plataforma Google Earth Engine. En la misma plataforma, se delinearon bloques con tamaños de 10 km x 10 km localizados sobre las fincas por departamento. Sobre estos bloques fueron procesadas las imágenes Sentinel-2 libres de ruido mediante el algoritmo
            </Translate>{" "}
            <a href="https://doi.org/10.3389/fclim.2020.576740">
              Continuous Change Detection and Classification (CCDC)
            </a>.
            <Translate>
                El algoritmo tiene la particularidad de proveer segmentos modelados para cada píxel de las bandas espectrales y otras capas derivadas (p.e. índices espectrales). Los coeficientes de los segmentos modelados fueron usados como datos de entrada para clasificadores Random Forest con el fin de predecir anualmente las coberturas/usos de suelo. A partir de la herramienta
            </Translate>{" "}
            <a href="https://collect.earth/">
                Collect Earth Online
             </a>{" "}
            <Translate>
                fueron interpretadas muestras representativas de 10 a 12 tipos de coberturas/usos del suelo, que incluyen dos tipos de sistemas de producción de café (sin y con sombra), sobre los bloques en Cauca y Risaralda. La herramienta facilitó la interpretación de las coberturas/usos del suelo mediante el acceso de imágenes PlanetScope (5-m) y mapas base (1-m) de Google y Microsoft (Bings).
                La interpretación estuvo igualmente apoyada por observaciones de tipos de coberturas/usos colectadas en campañas de campo en el primer semestre de 2021 así como recorridos mediante la aplicación Google Street View.
                Adicional al reporte del área estimada, se profundizó en las principales dinámicas de los cambios mediante el enfoque de análisis de intensidad propuestos por
            </Translate>{" "}
            <a href="https://doi.org/10.1016/j.landurbplan.2012.02.010/">
               Aldwaik y Pontius (2012)
            </a>.
        </p>
        <p>
            <Translate>
            Finalmente, los aspectos metodológicos propuestos resultan promisorios para futuras implementaciones en otras geografías. La metodología es pionera en usar el algoritmo CCDC para monitorear los sistemas de producción de café a partir de datos Sentinel-2. Asimismo, el enfoque de análisis de intensidad ofreció un mejor entendimiento de las dinámicas. La integración de imágenes de radar (Sentinel-1) para reducir clasificaciones erróneas p.e. guadua vs café así como la adición de otros estados de la vegetación nativa p.e. secundaria pueden evaluarse como futuras mejoras a la metodología.
            </Translate>
        </p>
      </>
    ),
    links: [
      {
        name: translate({message: "Sitio web de Solidaridad"}),
        link: "https://www.solidaridadnetwork.org/commodity/coffee/",
      },
    ],
  },
    {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Mapeo Digital de Suelos en Colombia"}),
    slug: "#igac-soils",
    imageUrl: "img/projects/igac-dinosoil.png",
    subtitle: translate({message: "Creación de una herramienta para optimizar los procesos de Mapeo Digital de Suelos a cargo del Instituto Geográfico Agustin Codazzi"}),
    period: translate({message: "Agosto 2020 - Diciembre 2020"}),
    tech: "R",
    description: (
      <>
        <p>
            <Translate>
                El desarrollo de la herramienta, denominada como dinoSOIL-toolbox, surgió como una necesidad de optimizar los procesos de Mapeo Digital de Suelos (MDS) dentro de la Subdirección de Agrología del
            </Translate>{" "}
            <a href="https://www.igac.gov.co/">
                <Translate>
                    Instituto Geográfico Agustin Codazzi
                </Translate>

             </a>
                <Translate>
                    . Cabe indicar este desarrollo fue facilitado gracias a los adelantos previos de varios profesionales de la Subdirección quienes basados en el software R lograron contribuir en proyectos como el Mapa Nacional de Carbono Orgánico, Mapa de Salinidad, Estudio detallado en Sibundoy, entre otros. Basado en estas experiencias, surgio la oportunidad de ofrecer un desarrollo que optimiza las tecnologías de la información para su potencial adopción en los procesos de generación y toma de información en campo sobre suelos de las áreas prioritarias de estas actividades.
                </Translate>
                </p>
          <p>
            <Translate>
                Cabe mencionar que el nombre de esta herramienta surge de su implementación inicial en un área prioritaria de Política de Tierras en Cesar/Magdalena. La delimitación de esta área conserva una forma similar a la de un dinosaurio por lo que se decidió personalizar el nombre de la herramienta con el prefijo dino seguido de su principal objetivo como una caja de herramientas de estudios del suelo o en inglés SOIL-toolbox.
            </Translate>
          </p>
          <p>
            <Translate>
                La principal contribución de la herramienta es ofrecer un proceso organizado y sistemático de manejo de datos (entrada y salidas) así como procesamiento eficiente que faciliten aplicar MDS en cualquier área de estudio
            </Translate>
          </p>
          <p>
            <Translate>
         Mi rol en el proyecto fue ser el líder técnico, supervisando equipos de 6 personas, y consolidando la liberación del código en un repositorio público de GitHub así como autor principal de la publicación científica.
            </Translate>
          </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/acocac/dinoSOIL-toolbox",
      },
        {
        name: translate({message: "Artículo Científico"}),
        link: "10.36783/18069657rbcs20210084",
      },
    ],
  },
    {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Detección cambios en construcciones rurales"}),
    slug: "#igac-ruralbuildings",
    imageUrl: "img/projects/igac-construcciones.png",
    subtitle: translate({message: "Desarrollo de un prototipo de aplicación en Google  Earth  Engine  (GEE) para la detección de cambios de construcciones en ámbitos rurales"}),
    period: translate({message: "Agosto 2020 - Diciembre 2020"}),
    tech: "Python, JavaScript",
    description: (
      <>
          <p>
            <Translate>
          La detección de cambios de áreas construidas basada en datos de teledetección es una  importante herramienta para el ordenamiento y la administración del territorio p.e.: la identificación de construcciones ilegales, la actualización de registros catastrales y la atención de desastres. Bajo el enfoque de comparación post-clasificación, la presente investigación tuvo como objetivo evaluar la funcionalidad de varios algoritmos de clasificación para identificar y capturar las construcciones y su cambio entre dos fechas de análisis usando imágenes de alta resolución (1 m/píxel) en ámbitos rurales y límites del perímetro urbano municipal.
            </Translate>
          </p>
          <p>
            <Translate>
          La anterior evaluación fue llevada a cabo a  través  de  una  aplicación  desarrollada  mediante  la  plataforma  Google  Earth  Engine  (GEE),  donde  se  alojaron  y  analizaron diferentes imágenes y datos de entrada sobre dos áreas de estudio en Colombia. En total, ocho algoritmos de clasificación tradicional, tres no supervisados (K-means, X-Means  y  Cascade K-Means)  y  cinco  supervisados  (Random Forest, Support Vector Machine, Naive Bayes, GMO maximum Entropy y Minimum distance) fueron entrenados empleando GEE. Adicionalmente, se entrenó una red neuronal profunda denominada Feature Pyramid Networks (FPN) sobre la cual se aplicó la estrategia de modelos preentrenados, usando pesos del modelo EfficientNetB3. Por cada una de las dos áreas de estudio, tres zonas de evaluación fueron propuestas para cuantificar la funcionalidad de los algoritmos mediante la métrica Intersection over Union (IoU).
            </Translate>
          </p>
          <p>
            <Translate>
            Los resultados indican que los modelos configurados con la red FPN tienen la mejor funcionalidad, seguido de los algoritmos tradicionales supervisados. Las diferencias de la funcionalidad fueron específicas por área de estudio. Para el ámbito rural, la mejor configuración de FPN obtuvo un IoU promedio entre ambas fechas de 0,4, es decir, cuatro veces el mejor modelo supervisado, correspondiente al Support Vector Machine de kernel Lineal con un IoU de 0,1. Respecto al área de límites del perímetro urbano municipal, esta diferencia fue menos marcada, con un IoU promedio de 0,53 en comparación con el 0,38 derivado del mejor modelo de clasificación supervisada, que en este caso fue Random Forest. Los resultados de esta investigación son relevantes para entidades responsables del seguimiento de las dinámicas de las áreas construidasa partir de plataformas de procesamiento en la nube como GEE, estableciendo una línea base para futuros estudios evaluando la funcionalidad de los clasificadores disponibles en otros contextos.
            </Translate>
          </p>
          <p>
            <Translate>
            Mi rol en el proyecto fue ser el líder técnico, supervisando equipos de 6 personas, así como autor principal de la publicación científica.
            </Translate>
          </p>
      </>
    ),
    links: [
        {
        name: translate({message: "Artículo Científico"}),
        link: "https://doi.org/10.4995/raet.2021.15026",
      },
    ],
  },
    {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Predicción de la reincidencia en Colombia"}),
    slug: "#ds4a-recidivism",
    imageUrl: "img/projects/ds4a-recidivism.png",
    subtitle: translate({message: "Propuesta de un modelo predictivo basado en machine learning para detectar la reincidencia en el sistema penitenciario y carcelario colombiano"}),
    period: translate({message: "Mayo 2020 - Julio 2020"}),
    tech: "Python",
    description: (
      <>
          <p>
            <Translate>
                La reincidencia es una medida de la probabilidad de que un ex-convicto vuelva a ser detenido, condenado o devuelto a la cárcel, con o sin una nueva condena, durante un período de tres años tras su puesta en libertad.
            </Translate>
          </p>
          <p>
            <Translate>
                Como parte de mi participación en el programa
            </Translate>{" "}
                <a href="https://www.correlation-one.com/data-science-for-all-colombia/">
                Data Science for All (DS4A) Colombia 2.0,
             </a>{" "}
            <Translate>
                con mi equipo de trabajo tuvimos el objetivo de caracterizar de la población reincidente del Sistema Penitenciario y Carcelario en Colombia.
                Esta información es fundamental para contar con insumos para la formación y seguimiento de la política criminal del Estado colombiano en sus fases de previsión y terciarización.
                El objetivo estuvo enmarcado en el Plan Nacional de Política Criminal 2019 - 2022 del Estado colombiano, que tiene entre sus resultados esperados la reducción de la reincidencia.
                Abordar el problema de la reincidencia es primordial para prevenir la delincuencia (y en consecuencia el hacinamiento carcelario).
            </Translate>
          </p>
          <p>
            <Translate>
                Mi rol en el proyecto fue la construcción de un tablero de visualización implementado en la librería Dash con backend de Python el cual se integró a una instancia Amazon AWS EC2 que alojaba los datos en una base datos relacional de postgres. Asimismo, colaboré en el montaje de los modelos predictivos entrenados en la librería scikit-learn en la plataforma de visualización (ver Figura 1).
            </Translate>
          </p>
                  <p>
            <img src="https://raw.githubusercontent.com/acocac/ds4a-app/master/img/dash_prediction.png" />
            <figcaption>
                <Translate>
                    Fig 1. Ejemplo del modulo de uso del modelo predictivo de reincidencia en Colombia.
                </Translate>
            </figcaption>
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/acocac/ds4a-app/",
      },
    ],
  },
      {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Minería de textos para el monitoreo ambiental"}),
    slug: "#turing-NLPconservation",
    imageUrl: "img/projects/turing-dsg.png",
    subtitle: translate({message: "Uso de procesamiento del lenguaje natural y otras técnicas de minería de textos para el monitoreo inteligente de zonas de conservación"}),
    period: translate({message: "Diciembre 2019"}),
    tech: "Python",
    description: (
      <>
          <p>
            <Translate>
                El Fondo Mundial para la Naturaleza (WWF) supervisa más de 250.000 áreas protegidas (por ejemplo, parques nacionales y reservas naturales) y miles de otros lugares y hábitats críticos. Estos lugares son la base del patrimonio natural mundial y son fundamentales para la conservación de la biodiversidad y el bienestar humano. Desgraciadamente, se enfrentan a la creciente presión del desarrollo humano.
            </Translate>
          </p>
          <p>
            <Translate>
                Como parte de los retos
            </Translate>{" "}
                <a href="https://www.turing.ac.uk/collaborate-turing/data-study-groups/">
                Data Study Groups,
             </a>{" "}
            <Translate>
              organizados por The Alan Turing Institute, exploramos varias técnicas de ciencia de datos para detectar automáticamente artículos de noticias que informan de amenazas emergentes en áreas protegidas. Describimos un sistema que identifica esas noticias casi en tiempo real. Esto es vital para permitir que WWF y la comunidad conservacionista se comprometa con los gobiernos, las empresas, los accionistas, las aseguradoras y otros para ayudar a detener la degradación o la destrucción de hábitats clave.
            </Translate>
          </p>
          <p>
            <Translate>
                Mi rol fue contribuir en la implementación y evaluación de técnicas de tokenización, aumento de las palabras clave basadas en el entorno ambiental y desarrollo, co-evaluar un marco de diferentes clasificadores de la librería scikit-learn y apoyo general al clasificador basado en Redes Neuronales Recurrentes usando Tensorflow v2.
            </Translate>
          </p>
      </>
    ),
    links: [
        {
        name: translate({message: "Reporte"}),
        link: "https://doi.org/10.5281/zenodo.3878457/",
      },
    ],
  },
    {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Mapeo de asentamientos ilegales"}),
    slug: "#fdl-illegalsettlements",
    imageUrl: "img/projects/fdl-asentamientos.png",
    subtitle: translate({message: "Desarrollo de una metodología para el mapeo de asentamientos ilegales como parte del programa Frontier Development Lab (FDL)"}),
    period: translate({message: "Junio 2018 - Agosto 2018"}),
    tech: "Python",
    description: (
      <>
          <p>
            <Translate>
                La detección y cartografía de los asentamientos informales abarca varios de los objetivos de desarrollo sostenible de las Naciones Unidas. Esto se debe a que en los asentamientos informales viven las personas más vulnerables del planeta desde el punto de vista social y económico. Por ello, comprender dónde se encuentran estos asentamientos es de suma importancia tanto para los gobiernos como para las organizaciones no gubernamentales, como el Fondo de las Naciones Unidas para la Infancia (UNICEF), que pueden utilizar esta información para prestar una ayuda social y económica eficaz. Sin embargo, los datos relativos a los asentamientos informales y formales son en su mayoría inexistentes y, si están disponibles, suelen ser incompletos. Esto se debe al coste y a la complejidad de su recopilación a gran escala. Además, la definición de los asentamientos informales es también muy amplia, lo que hace que la recopilación de datos y, por tanto, la enseñanza de lo que debe buscar una máquina, no sea una tarea trivial.
            </Translate>
          </p>
          <p>
            <Translate>
                Debido a estas limitaciones, en este proyecto se proporcionaron abiertamente dos conjuntos de datos con imágenes de alta y baja resolución procedentes de diversos lugares, con las anotaciones correspondientes, lo que permite a otros profesionales comparar metodologías del aprendizaje automático. Se propuso un marco eficaz de principio a fin que detecta y mapea las ubicaciones de los asentamientos informales utilizando únicamente imágenes de satélite Sentinel-2 de baja resolución, disponibles gratuitamente, con anotaciones ruidosas. El método propuesto contrasta con los estudios anteriores que solo utilizan costosas imágenes satelitales y aéreas de muy alta resolución (VHR). También demostramos un enfoque de aprendizaje profundo para detectar asentamientos informales con imágenes VHR con fines comparativos. Además de esto, mostramos cómo podemos detectar asentamientos informales combinando tanto el conocimiento del dominio como las técnicas de aprendizaje automático, para construir un clasificador que busque los materiales de techo conocidos utilizados en los asentamientos informales. Evaluamos y comparamos los tres métodos propuestos.
            </Translate>
          </p>
          <p>
            <Translate>
                Mi rol en el proyecto fue en automatizar la preparación de los capas geoespaciales e imágenes usadas por los modelos. Asimismo, tuve la oportunidad de aprender del manejo de NVIDIA GPU cloud, bajo el cual se entrenaron los modelos profundos.
            </Translate>
          </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/FrontierDevelopmentLab/informal-settlements/",
      },
        {
        name: translate({message: "Sitio web"}),
        link: "https://frontierdevelopmentlab.github.io/informal-settlements/",
      },

    ],
  },
  {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Coberturas y uso del suelo post-deforestación"}),
    slug: "#kcl-phd",
    imageUrl: "img/projects/kcl-doctorado.png",
    subtitle: translate({message: "Investigación doctoral en King's College London enfocada al estudio de la trayectorias de cambios de coberturas y uso de suelo en áreas deforestadas"}),
    period: translate({message: "Abril 2016 - Marzo 2020"}),
    tech: "Python, R, JavaScript",
    description: (
      <>
          <p>
            <Translate>
            Mi investigación doctoral en King's College London tuvo como objectivo desarrollar modelos para el mapeo y análisis de las trayectorias de post-deforestación de las coberturas y el cambio de uso de la tierra de forma pantropical, basándose en el análisis de series temporales de datos de observación de la tierra y auxiliares, para su uso en estudios medioambientales y agrícolas. Para lograr este objetivo, será necesario seguir una serie de pasos. Estos pasos pueden plasmarse en las dos preguntas de investigación siguientes:
            </Translate>
          </p>
        <p>
            <li>
                <Translate>
                    ¿Pueden seguirse las trayectorias de cambio a gran escala, basándose en datos auxiliares preexistentes y en el análisis de series temporales de datos de satelitales multiespectrales de libre acceso?
                </Translate>
            </li>
            <li>
                <Translate>
                    ¿En qué medida las trayectorias mapeadas pueden caracterizarse y explicarse por las condiciones socioambientales e indicar qué usos del suelo son las causas próximas de la deforestación?
                </Translate>
            </li>
        </p>
          <p>
            <Translate>
                La primera parte de la investigación consistió de una revisión del estado del arte incluyendo la teoría, definiciones y políticas globales relevantes para el estudio del cambio post-deforestación. El siguiente consistió en aproximarse a la dinámica mediante múltiples fuentes de datos, desde registros de campo hasta imágenes satelitales gruesas de más de 120 sitios detectados como perturbados por Terra-i (un sistema de monitoreo casi en tiempo real para la conversión de coberturas). Esta investigación a escala local, pero rica en datos, ayudó a resaltar las oportunidades y los retos en el estudio de las trayectorias post-deforestación.
            </Translate>
          </p>
          <p>
            <Translate>
                Al integrar las lecciones aprendidas de la literatura y escala local, la segunda parte de la investigación propuso explorar una arquitectura de aprendizaje profundo supervisado. Esta arquitectura particular es capaz de ingerir y procesar grandes volúmenes de series temporales de imágenes de satélite MODIS en la generación de predicciones de 19 años de coberturas adecuadas para el estudio de las trayectorias postdeforestación. La escalabilidad del modelo propuesto se evaluó a través de su implementación a escala macrorregional, es decir, la región del Amazonas, utilizando principios de big data y tecnologías de computación en la nube. Los resultados muestran que el modelo calibrado supera las técnicas convencionales de aprendizaje automático utilizadas por otras iniciativas en curso que mapean el cambio de coberturas y uso del suelo a largo plazo. Además, se demostró la viabilidad de transferir el modelo calibrado para predecir coberturas en otras zonas tropicales de América Latina, Asia y África.
            </Translate>
          </p>
          <p>
            <Translate>
                La parte final de la investigación se enfocó en como las trayectorias post-deforestación mapeadas en el Amazonas pueden ser caracterizados y agrupadas en diferentes tipologías. Una vez identificadas las tipologias, se estudió la influencia de 12 capas espaciales que representan factores de inaccesibilidad, biofísicos y políticos. Se observo que algunas de estas variables, como la proximidad a los cultivos, proximidad a las zonas urbanas/edificadas, proximidad a las áreas protegidas con uso sostenible y la elevación, pueden explicar el cambio de las tipologias.
            </Translate>
          </p>
          <p>
            <Translate>
                El proyecto de doctorado fue innovador en su uso y despliegue de métodos novedosos (por ejemplo, la arquitectura aprendizaje profundo y el análisis de secuencias para mapear las tipologias de trayectorias de post-deforestación) y tecnologías (por ejemplo, la computación en la nube) para analizar grandes volúmenes de datos de observación de la tierra de alta frecuencia y registros cronológicos de cambios posteriores a la pérdida de bosques. Además, la investigación apoya a los investigadores de los servicios ecosistémicos, la biodiversidad y otros temas relacionados con la deforestación al ir más allá del estado inmediato de la perdida de bosques para comprender las tipologías y la dinámica de las trayectorias de cambio a largo plazo, lo que tiene impactos en estas áreas de investigación.
            </Translate>
          </p>
      </>
    ),
    links: [
      {
        name: translate({message: "Tesis"}),
        link: "https://kclpure.kcl.ac.uk/portal/en/theses/pantropical-modelling-of-land-cover-and-landuse-change-trajectories-for-newly-deforested-areas(2b5ebf13-d376-431b-aa80-1d502ccb9dc1).html",
      },
    ],
  },
  {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Degradación de las pasturas en Colombia"}),
    slug: "#ciat-pastures",
    imageUrl: "img/projects/ciat-pasturas.png",
    subtitle: translate({message: "Evaluación de metodologías de escala nacional a local para determinar el estado de degradación de pasturas en Colombia"}),
    period: translate({message: "Octubre 2015 - Diciembre 2015"}),
    tech: "Python, R",
    description: (
      <>
          <p>
            <Translate>
                El proyecto evaluó metodologías existentes basadas en la geoinformación, a múltiples escalas (de nacional a in situ), enfocándose en las coberturas denominadas como pastos o pasturas en el contexto de Colombia. Se usaron capas SIG disponibles así como datos en campo de fincas ganaderas visitadas en colaboración con proyectos liderados el Centro Internacional de Agricultura Tropical (CIAT).
            </Translate>
          </p>
          <p>
            <Translate>
                A escala nacional, la metodología implementada se fundamentó en el análisis estadístico de diferencias per-pixel y áreas de referencia del valor promedio y tendencia (ambos extraídos con regresiones lineales) entre el periodo de 2000 a 2014 de un proxy de la capacidad productiva (sinónimo de la degradación). El proxy usado consistió en un producto global satelital de producción primaria neta (MOD17A3) el cual cuenta con una resolución espacial de 1 km y con datos agregados anualmente para el periodo analizado.
            </Translate>
          </p>
          <p>
            <Translate>
                Para verificar la consistencia del método evaluado a nivel nacional pero en otra escala y con otras fuentes de datos de mayor resolución espacial y temporal, este fue implementado en la región de la Altillanura en el departamento del Meta. Los proxies de capacidad productiva en este ejercicio consistieron de cuatro métricas (suma, valor máximo, valor mínimo, y diferencia entre el valor máximo y mínimo) extraídas anualmente de datos NDVI de MODIS MOD13Q1 (250 m de resolución temporal y frecuencia temporal de 16 días) entre 2000 a 2014 en el periodo de crecimiento (Abril-Noviembre) de la vegetación. Las pruebas paramétricas para obtener el promedio y tendencia fueron aplicados en estos proxies como se hizo en la escala nacional. Adicionalmente, la prueba no paramétrica de Mann-Kendall fue añadida para complementar los análisis de detección de tendencias negativas usando toda la serie temporal de cada 16 días del producto NDVI MOD13Q1 en los mismos periodos en los que se hicieron las pruebas paramétricas.
            </Translate>
          </p>
          <p>
            <Translate>
                El levantamiento de datos en campo, realizado en el mes de Noviembre de 2015, fue fundamental para entender la problemática de la degradación en pasturas en dos zonas de importancia en Colombia, el departamento del Caquetá y la Altillanura. Se evidenciaron diversos comportamientos de las variables registradas en campo de acuerdo a la cobertura (o uso de la tierra analizada) así como su ubicación geográfica (zonas de estudio). Las mediciones de parámetros biofísicos como NDVI (usando un GreenSeeker® portable) y porcentaje cobertura de la fracción verde (FGCC por sus siglas en ingles), generado mediante los análisis de fotografías digitales tomadas con una cámara GoPro Hero 4, fue útil para su posterior relacionamiento con datos disponibles de satélite debido a su menor sesgo de error que las medidas visuales en campo.
            </Translate>
          </p>
          <p>
            <Translate>
                Los resultados obtenidos en las metodologías propuestas son bases para el diseño de un sistema de monitoreo de  la degradación en pastizales naturales y pasturas como el realizado por
            </Translate>{" "}
          <a href="http://www.pasturesfromspace.csiro.au/">
              <Translate>
                  CSIRO de Australia
              </Translate>
          </a>.
        </p>
        </>
    ),
  },
 {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Productos de deforestación en el Amazonas"}),
    slug: "#wwf-deforestation",
    imageUrl: "img/projects/wwf-deforestacion.png",
    subtitle: translate({message: "Comparación de un producto de la deforestación generado por WWF-Colombia a partir de datos satelitales MODIS sobre el bioma Amázonico"}),
    period: translate({message: "Octubre 2015"}),
    tech: "R",
    description: (
      <>
          <p>
            <Translate>
                World Wide Fundation (WWF) Colombia generó un producto de la deforestación a partir de datos satelitales MODIS. Con el objetivo de medir qué tan bien están determinados los cambios de cobertura boscosa, espacial y temporalmente,  por parte del producto de WWF se comparó este con otros productos de iniciativas de cobertura global y nacional.
            </Translate>
          </p>
          <p>
            <Translate>
                El enfoque implementado para la comparación del conjunto de datos (de WWF con otros productos existentes) y disponibles a nivel de bioma y país consistió en la comparación del % pixeles de cambio de acuerdo al total de pixeles analizados en el área de análisis (bioma o país). Así mismo, con la finalidad disminuir los sesgos del enfoque, los productos fueron analizados manteniendo su sistema original de proyección. De esta manera, se evitó cualquier distorsión o perdida de pixeles que podría darse al unificarse bajo un único sistema de proyección.
            </Translate>
          </p>
          <p>
            <Translate>
                Siete productos, de los cuales tres presentan cobertura global y cuatro con cobertura nacional para los países de Bolivia, Brasil, Colombia y Perú, fueron usados para comparar la consistencia del mapa de deforestación de WWF a nivel de bioma y país. De los los dataset listados, únicamente el dataset Terra-i comparte una misma resolución espacial (valor nominal de 250 m) con el producto de WWF, debido a su procedencia del sensor MODIS. Respecto a los otros datasets, FORMA presenta la resolución más gruesa (500 m) y los restantes de los países, incluyendo el dataset global Global Forest Change, presentan la resolución más fina (30 m) debido a su procedencia, en su mayor parte, de imágenes Landsat.
            </Translate>
          </p>
          <p>
            <Translate>
                El software R v.3.2.1 fue usado para la generación y filtro de la información de interés, en este caso %pixeles con cambio respecto al total de pixeles en el área analizada, para cada periodo y dataset disponible. Los porcentajes generados fueron usados para la producción de gráficos de barras los cuales fueron ordenados de mayor a menor valor, siendo cada barra el valor asignado a cada dataset por periodo. Adicionalmente, se generó una tabla resumen que indica el porcentaje de diferencia de los datasets comparados respecto al dataset WWF. Estos valores se expresaron en términos positivos y negativos cuando el dataset comparado tenía valores superiores o inferiores, respectivamente, respecto al dataset WWF.
            </Translate>
          </p>
          </>
    ),
  },
 {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Seguridad hídrica del Amazonas"}),
    slug: "#gcp-water",
    imageUrl: "img/projects/gcp-water.png",
    subtitle: translate({message: "Compilación de los conceptos y herramientas para cuantificar la seguridad hídrica con enfoque en los países del bioma Amázonico"}),
    period: translate({message: "Septiembre 2014 - Agosto 2015"}),
    tech: "N/A",
    description: (
      <>
          <p>
            <Translate>
                El reconocimiento de la seguridad hídrica como un reto del siglo XXI ha sido seguido de cerca por un fuerte compromiso de los principales sectores, como la sociedad civil, los gobiernos y las empresas, entre otros. Aunque hay una emergencia de enfoques y definiciones subyacentes al término de seguridad hídrica, los conceptos de riesgo han apoyado recientes iniciativas políticas para adoptar principios e indicadores comunes para la seguridad hídrica que conecten las disciplinas científicas y tiendan un puente entre las perspectivas de la investigación y las de los profesionales.
            </Translate>
          </p>
          <p>
            <Translate>
                En apoyo de ese enfoque de la seguridad hídrica basado en el riesgo, se ha emprendido un número cada vez mayor de herramientas y estudios de evaluación y gestión del riesgo hídrico a múltiples escalas, desde el nivel mundial hasta el local. Para contribuir a completar la información sobre estos avances, este documento describe y compara múltiples herramientas y metodologías de riesgo hídrico disponibles y aplicables para determinados ámbitos y contextos geográficos. Su objetivo es proporcionar una mejor comprensión de los usos potenciales de cada herramienta y/o metodología, y ayudará a orientar la selección de la más apropiada entre una serie de necesidades, en particular para los países amazónicos.
            </Translate>
          </p>
          <p>
            <Translate>
                El reporte cuenta con un conjunto de métodos y herramientas para la evaluación y gestión de los riesgos relacionados con el agua, basándose en dos documentos orientativos recientes, que han hecho una amplia revisión de este tema pero que difieren en su sector de destino. Por un lado, se resume un extracto de un estudio sobre la seguridad del agua para un sector general. Como resultado, se compararon doce estudios que han proporcionado diferentes indicadores para la evaluación y gestión de la seguridad del agua bajo un enfoque basado en el riesgo. Por otra parte, se examinó un enfoque del riesgo del agua desde el sector industrial, en particular por la industria del petróleo y el gas.  Para este enfoque es importante destacar su estructura de niveles para realizar los análisis de riesgos del agua a múltiples escalas y objetivos (gestión de riesgos del agua a nivel corporativo; evaluación y mapeo global/de cuencas fluviales; y evaluación local). Esta evaluación por niveles muestra la flexibilidad de las herramientas para cubrir más de un nivel.
            </Translate>
          </p>
          <p>
            <Translate>
                Antes de las observaciones finales, se presentó un estudio de caso sobre la crisis del agua en la ciudad de São Paulo utilizando la herramienta Aqueduct dirigida por el Instituto de Recursos Mundiales (WRI). En particular, este estudio de caso ilustra cómo algunos indicadores de riesgo hídrico de esta herramienta, en complemento con información secundaria, han permitido determinar las causas subyacentes, proporcionando algunos comentarios a los organismos gubernamentales y a la comunidad en general.
                Los retos más importantes están relacionados con la falta de estandarización de los términos clave relacionados con el agua y el hecho de que las diferentes herramientas utilizan diferentes indicadores que proporcionan diferentes análisis y conjuntos de datos.
            </Translate>
          </p>
      </>
    ),
  },
  {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Patrones espaciales de la deforestación"}),
    slug: "#kcl-master",
    imageUrl: "img/projects/kcl-maestria.png",
    subtitle: translate({message: "Investigación de maestria en King's College London enfocada a una herramienta para el mapeo de los patrones espaciales de la deforestación"}),
    period: translate({message: "Septiembre 2014 - Agosto 2015"}),
    tech: "R",
    description: (
      <>
          <p>
            <Translate>
                Una variedad de información sobre el cambio del uso del suelo y la tierra puede ser derivada de productos generados por imágenes satelitales. Este estudio fue pionero en examinar las etapas y los patrones espaciales de la pérdida de bosques en la selva Amazónica de acuerdo con la información proporcionada por dos marcos metodológicos (análisis fractal y minería de datos). Estos marcos fueron probados para analizar dos fuentes de datos de deforestación (Terra-i y Global Forest Change) en diferentes extensiones geográficas de análisis (cuatro tamaños de cuadrículas fijas crecientes). Como resultado, ambos marcos llevaron a conclusiones diferentes con respecto a la dinámica de la deforestación en el área de estudio.
            </Translate>
          </p>
          <p>
            <Translate>
                En el enfoque con análisis fractal, el conjunto de datos de Cambio Forestal Global (GFC) mostró una mayor proporción de etapas avanzadas (dimensión fractal que oscila entre 1.00 a 1.64) de deforestación que el conjunto de datos Terra-i. Con respecto al análisis con minería de datos, esté sugirió la viabilidad de redes neuronales artificiales para mapear patrones espaciales. El uso de este algoritmo con un análisis de extensión geográfica de 30.720 m proporcionó el mejor resultado utilizando cualquiera de los conjuntos de datos, GFC o Terra-i (valores kappa de 0,73 y 0,70, respectivamente).
            </Translate>
          </p>
          <p>
            <Translate>
         En general, ambos enfoques indicaron que algunas partes de la selva tropical Amazónica han comenzado a compactarse recientemente a medida que las talas comienzan a aglomerarse en formas medianas y grandes. En términos de agentes del cambio, las tipologías de patrones espaciales más dominantes apuntan a la colonización agrícola espontánea y pequeña como los principales impulsores de la dinámica reciente del cambio del bosque en el área de estudio.
            </Translate>
          </p>
      </>
    ),
    links: [
      {
        name: translate({message: "Tesis"}),
        link: "https://babel.banrepcultural.org/digital/collection/p17054coll23/id/1173/",
      },
        {
        name: "GitHub",
        link: "https://github.com/acocac/postloss-Spattern",
      },
    ],
  },
  {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Terra-i, monitoreo de la deforestación"}),
    slug: "#ciat-terrai",
    imageUrl: "img/projects/ciat-terrai.jpeg",
    subtitle: translate({message: "Herramienta para el monitoreo del cambio de habitat con enfoque operacional en América Latina y el Caribe"}),
    period: translate({message: "Mayo 2011 - Septiembre 2014"}),
    tech: "Python, R, Java",
    description: (
      <>
          <p>
            <Translate>
          Terra-i es uno de los sistemas pioneros del monitoreo en tiempo casi real de la deforestación a partir de datos satelitales. En este proyecto tuve varios roles entre los que destaco los principales a continuación:
            </Translate>
          </p>
        <p>
            <li>
                <Translate>
                    Encargado de la descarga de datos de entrada, procesamiento, postprocesamiento, análisis de datos Terra‐i en América Latina y el Caribe.
                </Translate>
            </li>
            <li>
                <Translate>
                    Contribuí a la redacción de propuestas y la integración del sistema Terra‐i con la plataforma Global Forest Watch (GFW).
                </Translate>
            </li>
            <li>
                <Translate>
                    Desarrollé un marco para mapear sistemas ganaderos en Colombia. Proyecto «Low Emissions Development Strategies in Colombia».
                </Translate>
            </li>
            <li>
                <Translate>
                    Coordiné una validación de campo de datos Terra‐i en la Amazonía peruana dentro de la región de Ucayali. Proyecto «ASSETS».
                </Translate>
            </li>
            <li>
                <Translate>
                    Co‐desarrollé una metodología para evaluar los posibles impactos de proyectos de infraestructura vial en Guyana y cinco proyectos de mega‐
infraestructura vial en América Latina. Proyecto «Remote Sensing Methodology for Monitoring Land‐Use Change and associated Greenhouse
Gas Emissions in Latin America and the Caribbean».
                </Translate>
            </li>
            <li>
                <Translate>
                Realicé un reporte del cambio de uso de la tierra para cinco países amazónicos. Proyecto «The Amazon Security Agenda».
                </Translate>
            </li>
        </p>
      </>
    ),
    links: [
      {
        name: translate({message: "Sitio web del proyecto"}),
        link: "http://www.terra-i.org/",
      },
    ],
  },
    {
    category: translate({message: "Proyecto"}),
    title: translate({message: "Cartografía de especies vegetales aromáticas"}),
    slug: "#unal-aromatic",
    imageUrl: "img/projects/unal-aromatic.png",
    subtitle: translate({message: "Generación de los mapas del catálogo Especies vegetales aromáticas de la Provincia de Sumapaz y la cuenca del río Chicamocha en Colombia"}),
    period: translate({message: "Abril 2011 - Mayo 2011"}),
    tech: "Python",
    description: (
      <>
          <p>
              <Translate>
                  Las plantas aromáticas nativas con las que cuenta un país son un factor primordial para el desarrollo de una cadena productiva alrededor de estos recursos naturales, ya que constituyen la materia prima que alimenta y sostiene dicha actividad económica. En este contexto, el programa de investigación “Aprovechamiento de aceites esenciales de especies nativas y foráneas promisorias para uso agrícola en Colombia” financiado por el Ministerio de Agricultura y Desarrollo Rural de Colombia, nació de la necesidad de incrementar la participación de la oferta colombiana de aceites en el mercado mundial mediante el aprovechamiento de especies aromáticas nativas, naturalizadas y foráneas promisorias, e impulsar paralelamente también el mercado nacional.
              </Translate>
          </p>
          <p>
              <Translate>
                  El catálogo muestra la localización geográfica e información botánica asociada a 103 especies vegetales de las familias Asteraceae, Labiatae y Verbenaceae que se colectaron en las regiones de Sumapaz y Chicamocha en Colombia, como parte de las actividades del programa de investigación mencionado, específicamente los proyectos de investigación “Conservación e identificación de especies aromáticas nativas promisorias por su contenido de aceites esenciales y con uso potencial para el sector agrícola colombiano” y “Evaluación fenotípica, química y agronómica de especies nativas y foráneas promisorias por calidad de aceites esenciales y con uso potencial en el sector agrícola”.
              </Translate>
          </p>
          <p>
              <Translate>
                  Mi rol en el proyecto fue automatizar la generación de la cartografía para las especies presentadas en el catálogo a partir del software ArcGIS v9.2 y módulos de la API en Python. Asimismo, organice la base de datos del catálogo indicando la nomenclatura, distribución y ecología, descripción morfológica, usos y reportes bioquímicos.
              </Translate>
          </p>
      </>
    ),
    links: [
      {
        name: translate({message: "Catálogo"}),
        link: "http://www.rjb.csic.es/jardinbotanico/ficheros/documentos/pdf/pubinv/JLF/2012%20EspVegAromaSumChiColom2012re.pdf",
      },
    ],
  }
];

export default projects;
