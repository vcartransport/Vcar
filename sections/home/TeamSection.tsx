import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from "../../components/CustomButtons/Button";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";

import styles from "../../styles/jss/vcar/pages/landingPageSections/teamStyle";

const useStyles = makeStyles(styles as any);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Notre Équipe de Professionnels</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src="/img/faces/avatar.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jean-Pierre Durand
                <br />
                <small className={classes.smallTitle}>Convoyeur Expert</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Avec plus de 15 ans d{"'"}expérience dans le transport de véhicules de prestige,
                  Jean-Pierre assure des livraisons impeccables en toute sécurité.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src="/img/faces/christian.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Thomas Martin
                <br />
                <small className={classes.smallTitle}>Spécialiste Plateau</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Thomas est notre expert pour les transports sur plateau.
                  Il maîtrise parfaitement la logistique des véhicules non roulants et de collection.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src="/img/faces/kendall.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Sophie Lefebvre
                <br />
                <small className={classes.smallTitle}>Coordinatrice Logistique</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Sophie gère l{"'"}organisation de vos transports et assure le suivi
                  en temps réel de vos véhicules pour une expérience sans stress.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
