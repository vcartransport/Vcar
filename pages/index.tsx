import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// Composants UI
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax/Parallax";

// Sections de la page d'accueil
import ProductSection from "../sections/home/ProductSection";
import VCarServicesSection from "../sections/home/VCarServicesSection";
import WorkSection from "../sections/home/WorkSection";

// Styles et constantes
import styles from "../styles/jss/vcar/pages/landingPage";
import { BRAND, HERO_IMAGE } from "../constants/config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyles = makeStyles(styles as any);

export default function HomePage(props: object) {
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        routes={[]}
        brand={BRAND.shortName}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{ height: 400, color: "white" }}
        {...props}
      />

      <Parallax
        filter
        responsive
        image={HERO_IMAGE}
        style={{ backgroundPosition: "right center" }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>{BRAND.tagline}</h1>
              <h4>{BRAND.description}</h4>
              <br />
              <Button color="danger" size="lg" href="/contact">
                <i className="fas fa-play" />
                Demander un devis
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <VCarServicesSection />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <WorkSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}
