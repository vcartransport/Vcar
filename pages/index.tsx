import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax/Parallax";

import styles from "../styles/jss/nextjs-material-kit/pages/landingPage";

// Sections for this page
import ProductSection from "../pages-sections/LandingPage-Sections/ProductSection";
import VCarServicesSection from "../pages-sections/LandingPage-Sections/VCarServicesSection";
import WorkSection from "../pages-sections/LandingPage-Sections/WorkSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Index(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Vcar Convoyage"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax
        filter
        responsive
        image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
        style={{ backgroundPosition: "right center" }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Convoyage de véhicule professionnel.</h1>
              <h4>
                Confiez-nous le transport de votre véhicule en toute sérénité.
                Que vous soyez un particulier ou un professionnel, nous assurons
                un service premium partout en France.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="/contact"
              >
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
