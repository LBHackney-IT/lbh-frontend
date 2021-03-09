import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.scss";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.hero)}>
        <div className={clsx("container", styles.narrowContainer)}>
          <img alt="" src="/img/logo.svg" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main className="container">
        <section className={styles.features}>
          <div>
            <h3>Made for UX designers</h3>
            <p>
              Extend or customize your website layout by reusing React.
              Docusaurus can be extended while reusing the same header and
              footer.
            </p>
            <Link
              className={clsx("button button--primary", styles.getStarted)}
              to={useBaseUrl("designing/design-kits/")}
            >
              Get started
            </Link>
          </div>

          <div>
            <h3>Made for developers</h3>
            <p>
              It includes working code examples you can use in prototypes or
              production with many software frameworks.
            </p>
            <Link
              className={clsx("button button--primary", styles.getStarted)}
              to={useBaseUrl("developing/installing-from-npm/")}
            >
              See docs
            </Link>
          </div>

          <div>
            <h3>Contribute</h3>
            <p>
              We welcome all feedback, designs, or ideas in order to produce the
              best possible experience for our users.
            </p>
            <Link
              className={clsx("button button--secondary", styles.getStarted)}
              to={useBaseUrl("contributing/introduction")}
            >
              See guidelines
            </Link>
          </div>

          <div>
            <h3>Built on GOV.UK Frontend</h3>
            <p>
              It's based on{" "}
              <a href="https://frontend.design-system.service.gov.uk/#gov-uk-frontend">
                GOV.UK Frontend
              </a>{" "}
              and the{" "}
              <a href="https://design-system.service.gov.uk">
                GOV.UK Design System
              </a>
              . All the components and tools of those systems are adapted here.
            </p>
          </div>

          <div>
            <h3>Getting help</h3>
            <p>
              First, ask in the{" "}
              <a href="https://hackit-lbh.slack.com/archives/CJ6AWTH0A">
                #hackit-design-system
              </a>{" "}
              channel on Slack. You'll be able to get support from people who
              work on the library there. You can also{" "}
              <a href="https://github.com/LBHackney-IT/LBH-frontend/issues">
                open an issue
              </a>{" "}
              on GitHub.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
