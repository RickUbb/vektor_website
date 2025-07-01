import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import EyeRecognitionSvg from '@site/static/img/ilustration1.svg';
import AiSmartphoneSvg from '@site/static/img/ilustration2.svg';
import AiChatSvg from '@site/static/img/ilustration3.svg';

const FeatureList = [
  {
    title: 'Integración Inteligente',
    Svg: EyeRecognitionSvg,
    description: (
      <>
        Vektor conecta agentes de IA, modelos de lenguaje y herramientas empresariales usando protocolos abiertos como MCP y A2A para una colaboración sin límites.
      </>
    ),
  },
  {
    title: 'Automatización Empresarial',
    Svg: AiSmartphoneSvg,
    description: (
      <>
        Automatiza procesos, integra dashboards y accede a datos en tiempo real para potenciar la toma de decisiones y la eficiencia operativa en tu organización.
      </>
    ),
  },
  {
    title: 'Plataforma Escalable y Segura',
    Svg: AiChatSvg,
    description: (
      <>
        Vektor ofrece una arquitectura modular, multilingüe y segura, ideal para empresas que buscan crecer y adaptarse a los retos de la transformación digital.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
