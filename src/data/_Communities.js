import React from "react";
import Translate, { translate } from '@docusaurus/Translate';

const communities = [
    {
    category: translate({message: "Comunidad"}),
    title: translate({message: "Libro de ciencias de datos ambientales"}),
    slug: "#envdsbook",
    imageUrl: "img/communities/envds.jpeg",
    subtitle: translate({message: "Recurso dirigido por la comunidad para visibilizar y apoyar la publicación de datos, investigación y herramientas de ciencias ambientales"}),
    period: translate({message: "Mayo 2021 - Presente"}),
    tech: "Python",
    description: (
      <>
        <p>
            <Translate>
        Con la plétora de datos abiertos y recursos computacionales disponibles, la investigación y las aplicaciones de la ciencia de los datos medioambientales se han acelerado rápidamente. Por lo tanto, existe la oportunidad de proponer una nueva ciberinfraestructura para recopilar y clasificar la investigación y las aplicaciones de código abierto en los sistemas medioambientales (polares, océanos, bosques, agricultura, etc.). Inspirados en la Galería de Pangeo, proponemos el libro de ciencias de datos medioambientales o The Environmental Data Science book (https://the-environmental-ds-book.netlify.app), un recurso en línea impulsado por la comunidad que muestra y apoya la publicación de datos, investigaciones y desarrollos de código abierto en las ciencias ambientales. El público objetivo y los primeros en adoptarlo son
            </Translate>
        </p>
        <p>
            <li>
                <Translate>
                    cualquier persona interesada en herramientas de código abierto para la ciencia medioambiental
                </Translate>
            </li>
            <li>
                <Translate>
                    cualquier persona interesada en la reproducibilidad, la inclusión, la compartición y la colaboración de la IA y la ciencia de los datos para aplicaciones medioambientales
                </Translate>
            </li>
        </p>
        <p>
            <Translate>
            Siguiendo los principios FAIR del inglés (findable, accesible, interoperable y reusable), el recurso ofrece múltiples características como directrices, plantillas, URLs persistentes y Binder para facilitar contenido totalmente documentado, compartible y reproducible. La calidad del contenido publicado está garantizada por un proceso de revisión transparente apoyado por tecnologías relacionadas con GitHub. Hasta la fecha, la comunidad ha publicado con éxito siete contenido ejecutables basados en python: uno de agricultura, dos de bosques, dos de incendios forestales/sabana, uno de investigación oceánica y uno de investigación polar. El contenido utiliza bibliotecas de código abierto de python, como intake, iris, xarray y hvplot, para la visualización interactiva y la modelización de datos de sensores medioambientales. Además de las constantes mejoras de las características del repositorio de GitHub esperamos aumentar las contribuciones de otros lenguajes de programación, por ejemplo, Julia y R, y organizar más actividades de la comunidad (sesiones de colaboración y coworking) para mejorar las prácticas de software científico en la comunidad de ciencias ambientales.
            </Translate>
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/alan-turing-institute/environmental-ds-book",
      },
    ],
  },
  {
    category: translate({message: "Comunidad"}),
    title: "The Turing Way",
    slug: "#ttw",
    imageUrl: "img/communities/ttw.png",
    subtitle: translate({message:"The Turing Way es un libro, una comunidad y una colaboración global para la ciencia de datos reproducible, ética y colaborativa"}),
    period: translate({message: "Mayo 2021 - Presente"}),
    tech: "Python",
    description: (
      <>
        <p>
            <Translate>
          The Turing Way es una guía práctica para la ciencia de datos reproducible, ética y colaborativa. Apoyamos una comunidad diversa de colaboradores para conseguir una ciencia de datos accesible, comprensible y efectiva para todos. Nuestro objetivo es proporcionar toda la información que los investigadores y científicos de datos en la academia, la industria y el sector público necesitan al inicio de sus proyectos para asegurar que sean fáciles de reproducir al final.
            </Translate>
        </p>
        <p>
            <Translate>
            The Turing Way comenzó en 2019 como una pequeña guía de ciencia de datos, y desde entonces se ha expandido hasta formar manual mucho más completo formado por múltiples guías que abarcan varios temas: Investigación Reproducible, Diseño de Proyectos, Comunicación, Colaboración e Investigación Ética. Cada guía ofrece capítulos sobre una variedad de temas que cubren buenas prácticas y recomendaciones. Estos capítulos han sido co-escritos por personas que colaboran y que son estudiantes, investigadores/as, docentes, líderes comunitarios, políticos/as y profesionales de diversos orígenes, experiencias vividas y conocimiento del dominio.
            </Translate>
        </p>
        <p>
            <Translate>
        Todas las partes interesadas, incluyendo estudiantes, investigadores/as, ingenieros/as de software, líderes de proyectos y equipos fundadores, están invitados/as a usar The Turing Way para entender sus roles y sus responsabilidades en la reproducibilidad de la ciencia de datos. Puede leer el libro online, contribuir al proyecto tal como se describe en nuestras guías para contribuir al proyecto y reutilizar todos los materiales (ver la Licencia).
            </Translate>
        </p>
        <p>
            <Translate>
        En esta comunidad, he contribuido a la evaluación e implementación de traducción del contenido a otros idiomas, en particular al espanol. Igualmente, he participado en las reuniones de Book Dash, en las cuales la comunidad se reune para crear y/revisar contenido.
            </Translate>
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/alan-turing-institute/the-turing-way",
      },
    ],
  },
  {
    category: translate({message: "Comunidad"}),
    title: "Open Life Science",
    slug: "#ols",
    imageUrl: "img/communities/ols.png",
    subtitle: translate({message:"Comunidad que ayuda a los investigadores principiantes a convertirse en embajadores de la Ciencia Abierta\n"}),
    period: translate({message:"Noviembre 2021 - Presente"}),
    tech: "Python",
    description: (
      <>
        <p>
            <Translate>
          La iniciativa OLS ayuda a los individuos y a las partes interesadas en la investigación a convertirse en embajadores de la Ciencia Abierta. Cuenta con un programa de entrenamiento de 16 semanas bajo el cual los participantes (organizadores, anfitriones, mentores y responsables de proyectos/alumnos):
            </Translate>
        </p>
        <p>
            <li> <Translate> comparten su experiencia y adquieren los conocimientos esenciales para crear, dirigir y mantener un proyecto de Ciencia Abierta </Translate> </li>
            <li> <Translate> conectar con miembros de diferentes proyectos, comunidades, orígenes e identidades </Translate> </li>
            <li> <Translate> se capacitarán mutuamente para convertirse en embajadores eficaces de la Ciencia Abierta en sus comunidades </Translate> </li>
        </p>
        <p>
            <Translate>
        Adicional al programa, OLS construye una comunidad de la cual soy orgullosamente parte desde que fui alumno con el proyecto del libro de ciencias ambientales abiertas. Bajo este programa y mi cohorte (OLS-4) realizé una mejora substancial del recurso bajo la asesoría de mi mentora, Delphine Lariviere.
            La experiencia como participante fue muy gratificante con una cohorte, organizadores e invitados expertos muy interesante. Mi participación trascendió de ser alumno, y por ejemplo en la cohorte siguiente, OLS5, estoy participando como mentor de un proyecto de Ciencia Abierta Multilingüe en Asia Central. Mi apoyo a este proyecto en particular se vincula a mis contribuciones en la traducción del recurso en línea de The Turing Way.
            </Translate>
        </p>
      </>
    ),
    links: [
      {
        name: "Sitio Web",
        link: "https://openlifesci.org/",
      },
    ],
  },
];

export default communities;