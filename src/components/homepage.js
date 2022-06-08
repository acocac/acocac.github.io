import React from 'react';
import Link from '@docusaurus/Link';
import classnames from 'classnames';

import styles from './homepage.module.css';

export default function HomePage({ title, tagline, descriptionLines }) {
    return (
        <section className={styles.hero}>
            <Link
                className={classnames('footer__link-item', styles.title)}
                to='/blog'
            >
                <img src={require('@site/static/img/me.jpeg').default} />
                <span>{title}</span>
            </Link>
            <span className={styles.subtitle}>{tagline}</span>
            <hr className={styles.divider} />
            <div className={styles.description}>
                {descriptionLines &&
                    descriptionLines.map((d, i) => <p key={i}>{d}</p>)}
            </div>

        </section>
    );
}