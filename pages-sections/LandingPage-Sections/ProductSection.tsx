import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import Fingerprint from "@material-ui/icons/Fingerprint";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import InfoArea from "../../components/InfoArea/InfoArea";

import styles from "../../styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nos Services de Convoyage</h2>
          <h5 className={classes.description}>
            Nous proposons des solutions adaptées à tous vos besoins de transport de véhicules.
            Que ce soit pour un transfert inter-sites, une livraison client ou un rapatriement,
            notre équipe de chauffeurs professionnels assure une prestation de qualité.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Par la route"
              description="Un chauffeur professionnel prend en charge votre véhicule et le conduit à destination. Solution économique et rapide."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Assurance Premium"
              description="Tous les transports sont couverts par une assurance tous risques spécifique au convoyage pour votre tranquillité."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Équipe de Convoyeurs"
              description="Une équipe de convoyeurs professionnels, expérimentés et passionnés, dédiée au transport de vos véhicules avec soin et rigueur."
              icon={People}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
