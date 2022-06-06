import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';

import styles from './styles.module.css';
import HomePage from '../components/homepage';

function Home() {
	const context = useDocusaurusContext();
	let { siteConfig = {} } = context;

	siteConfig.title = translate({
		id: 'global.title',
		message: 'Dr Alejandro Coca-Castro',
		description: 'The website title',
	});
	siteConfig.tagline = translate({
		id: 'global.tagline',
		message: 'Ciencia Medioambiental Abierta',
		description: 'The website tagline',
	});
	siteConfig.customFields.description = translate({
		id: 'global.description',
		message: 'Sitio personal de Alejandro, un blog de todo, en especial mi camino en Ciencia Abierta',
		description: 'The website description',
	});
	const lines = [
		translate({
			id: 'homepage.description.descriptionLine_4',
			message: '...Conocimiento accesible e inclusivo...',
			description: 'The fourth line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_1',
			message: 'Geografía, Mapas & Ciencias de Datos',
			description: 'The first line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_2',
			message: 'Tecnologías disruptivas con impacto social',
			description: 'The second line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_3',
			message: 'Comparto conocimiento por medio de mi Blog',
			description: 'The third line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_4',
			message: 'Contribuyo a iniciativas de código abierto',
			description: 'The fourth line of description',
		}),
	];

	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.customFields.description}
			permalink='/'
		>
			<main className={styles.heroContainer}>
				<HomePage {...siteConfig} descriptionLines={lines} />
			</main>
		</Layout>
	);
}

export default Home;