import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import { WorkItems, EducationItems } from "../../data/_About";

function ResumeItem({ location, link, position, period, description }) {
  return (
    <div className={styles.resumeItem}>
      <h3>
        <a href={link}>{location}</a>
      </h3>
      <p>
        <b>{position}</b>
        <br />
        <i>{period}</i>
      </p>
      <div>{description}</div>
    </div>
  );
}

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="About" description={siteConfig.tagline}>
      <main id="main">
        <div className={styles.aboutBody}>
          <div className="container">
            <div className="row padding-bottom--lg">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src={useBaseUrl("img/me.jpeg")} />
              </div>
              <div className="col col--9">
                <h2>Hola! &#9961;</h2>
                <p>
                  Soy Alejandro, experto en ciencias de datos y geotecnologías principalmente para estudios medioambientales y aplicaciones en ordenamiento territorial con ubicación actual en Londres, Reino Unido.
                </p>
                <p>
                  Me apasiona los desarrollos tecnológicos, en especial aquellos que tienen impacto social. He participado en una variedad de{" "}
                  <Link to={useBaseUrl("projects/")}>
                    proyectos multidisciplinarios{" "}
                  </Link>
                   apoyados en el análisis de datos. En mis tiempos libres disfruto de mi familia &#128106;, senderismo &#127956;, ciclismo &#128692;, y probar variedades de Café (como buen representante de mi pais, Colombia 🇨🇴).
                </p>
                <p>
                  Cuento con un doctorado en Geografía Física y maestría en Modelamiento, Monitoreo y Manejo Ambiental {" "}
                  de{" "}
                  <a href="https://www.kcl.ac.uk/geography/">
                    King's College London
                  </a>. En colaboración con investigadores de la{" "}
                  <a href="https://alliancebioversityciat.org/">
                    Alianza Bioversity-CIAT
                  </a>, en mis estudios de posgrado desarrollé bases sólidas en ciencias de datos y computación de grandes datos en la nube para proponer metodologías de caracterización espacial y temporal de los motores de la deforestación en el bioma Amazónico a partir de productos satelitales y capas geoespaciales.
                </p>
                <p>
                  Estoy afiliado a{" "}
                  <a href="https://www.turing.ac.uk/">The Alan Turing Institute</a> como investigador Postdoctoral asociado. Gracias al soporte de un equipo diverso de profesionales de mi{" "}
                  <a href="https://www.turing.ac.uk/research/research-projects/environmental-monitoring-blending-satellite-and-surface-data/">
                    proyecto
                  </a>, el instituto y comunidades que hago parte, he podido enfocarme al desarrollo de programas y herramientas de código abierto para ciencias ambientales. Asimismo, me entreno en el liderazgo de ciencia abierta, compartiendo mis experiencias en mi blog y notas.
                </p>
                <p>
                  Puedes leer mas de mis contribuciones, educación y charlas en mi Curriculum Vitae
.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </main>
    </Layout>
  );
}

export default About;
