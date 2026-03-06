import React from "react";
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Button from "../CustomButtons/Button";

import styles from "../../styles/jss/vcar/components/footerStyle";

const useStyles = makeStyles(styles as any);

export default function Footer(props: FooterProps) {
  const classes: any = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <GridContainer justify="space-between">
          {/* Column 1: Brand */}
          <GridItem xs={12} sm={12} md={4}>
            <div className={classes.brandContainer}>
              <span className={classes.brandName}>V-car Convoyage</span>
              <p className={classes.brandDesc}>
                Votre partenaire de confiance pour le convoyage de véhicules professionnels et particuliers partout en France. Excellence, ponctualité et sécurité.
              </p>
              <div className={classes.socialIcons}>
                <Button justIcon round color="transparent" simple className={classes.socialButton} href="https://www.facebook.com" target="_blank">
                  <i className="fab fa-facebook-f" />
                </Button>
                <Button justIcon round color="transparent" simple className={classes.socialButton} href="https://www.instagram.com" target="_blank">
                  <i className="fab fa-instagram" />
                </Button>
                <Button justIcon round color="transparent" simple className={classes.socialButton} href="https://www.linkedin.com" target="_blank">
                  <i className="fab fa-linkedin-in" />
                </Button>
              </div>
            </div>
          </GridItem>

          {/* Column 2: Useful Links */}
          <GridItem xs={12} sm={6} md={3}>
            <h4 className={classes.sectionTitle}>Liens Utiles</h4>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <a href="/" className={classes.link}>Accueil</a>
              </ListItem>
              <ListItem className={classes.listItem}>
                <a href="/about" className={classes.link}>À propos</a>
              </ListItem>
              <ListItem className={classes.listItem}>
                <a href="/contact" className={classes.link}>Contact</a>
              </ListItem>
              <ListItem className={classes.listItem}>
                <a href="/contact" className={classes.link}>Demander un devis</a>
              </ListItem>
            </List>
          </GridItem>

          {/* Column 3: Contact Info */}
          <GridItem xs={12} sm={6} md={4}>
            <h4 className={classes.sectionTitle}>Nous Contacter</h4>
            <div className={classes.contactContainer}>
              <div className={classes.contactItem}>
                <i className={classNames("fas fa-map-marker-alt", classes.contactIcon)} />
                <span>24 avenue du Prado, 13006 Marseille</span>
              </div>
              <div className={classes.contactItem}>
                <i className={classNames("fas fa-phone", classes.contactIcon)} />
                <a href="tel:+33765595877" className={classes.link}>07 65 59 58 77</a>
              </div>
              <div className={classes.contactItem}>
                <i className={classNames("fas fa-envelope", classes.contactIcon)} />
                <a href="mailto:contact@v-car.company" className={classes.link}>contact@v-car.company</a>
              </div>
              <div className={classes.contactItem}>
                <i className={classNames("fas fa-clock", classes.contactIcon)} />
                <span>Lun - Sam: 08h00 - 19h00</span>
              </div>
            </div>
          </GridItem>
        </GridContainer>


        <div className={classes.bottomBar} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <span>
            &copy; {1900 + new Date().getYear()} V-car Convoyage. Tous droits réservés.
          </span>
          <span style={{ fontSize: "0.8em" }}>
            Développé par <a href="https://mickaelcode.com" target="_blank" rel="noopener noreferrer">Mickael</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export interface FooterProps {
  whiteFont?: boolean
};
