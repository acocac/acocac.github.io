import React from "react";
import Translate, { translate } from '@docusaurus/Translate';
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

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
                <h2>
                  <Translate>
                    Hola! &#128506;
                  </Translate>
                </h2>
                <p>
                  <Translate>
                    Soy Alejandro, experto en ciencias de datos y geotecnologías principalmente para estudios medioambientales y aplicaciones en ordenamiento territorial con ubicación actual en Londres, Reino Unido.
                  </Translate>
                </p>
                <p>
                  <Translate>
                    Me apasiona los desarrollos tecnológicos, en especial aquellos que tienen impacto social. He participado en una variedad de
                  </Translate>{" "}
                  <Link to={useBaseUrl("projects/")}>
                    <Translate>
                      proyectos multidisciplinarios
                    </Translate>
                  </Link>{" "}
                  <Translate>
                   apoyados en el análisis de datos. En mis tiempos libres disfruto de mi familia &#128106;, senderismo &#127956;, ciclismo &#128692;, y probar variedades de Café (como buen representante de mi pais, Colombia 🇨🇴).
                  </Translate>
                </p>
                <p>
                  <Translate>
                    Cuento con un doctorado en Geografía Física y maestría en Modelamiento, Monitoreo y Manejo Ambiental de
                  </Translate>{" "}
                  <a href="https://www.kcl.ac.uk/geography/" target="_blank" rel="noopener noreferrer">
                    King's College London
                  </a>
                  <Translate>
                    . En colaboración con investigadores de la
                  </Translate>{" "}
                  <a href="https://alliancebioversityciat.org/" target="_blank" rel="noopener noreferrer">
                    <Translate>
                      Alianza Bioversity-CIAT
                    </Translate>
                  </a>{" "}
                    <Translate>
                      , en mis estudios de posgrado desarrollé bases sólidas en ciencias de datos y computación de grandes datos en la nube para proponer metodologías de caracterización espacial y temporal de los motores de la deforestación en el bioma Amazónico a partir de productos satelitales y capas geoespaciales.
                    </Translate>
                </p>
                <p>
                  <Translate>
                    Estoy afiliado a
                  </Translate>{" "}
                  <a href="https://www.turing.ac.uk/" target="_blank" rel="noopener noreferrer">
                    <Translate>
                      The Alan Turing Institute
                    </Translate>
                    </a>{" "}
                    <Translate>
                      como Research Fellow (Abril 2023 - presente). Gracias al soporte de un equipo diverso de profesionales de mi
                    </Translate>{" "}
                  <a href="https://www.turing.ac.uk/research/research-projects/environmental-monitoring-blending-satellite-and-surface-data/" target="_blank" rel="noopener noreferrer">
                    <Translate>
                      proyecto
                    </Translate>
                  </a>
                    <Translate>
                      , el instituto y comunidades que hago parte, he podido enfocarme al desarrollo de programas y herramientas de código abierto para ciencias ambientales. Asimismo, me entreno en el liderazgo de ciencia abierta, compartiendo mis experiencias en mi blog y notas.
                    </Translate>
                </p>
                <p>
                  <Translate>
                    Puedes leer mas de mis contribuciones, educación y charlas en mi
                  </Translate>
                    {" "}<a href="https://drive.google.com/drive/folders/1PliksdlQhq3cscID0YlJfwVvABiifjFz?usp=sharing" target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>.
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
