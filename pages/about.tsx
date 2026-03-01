import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Security from "@material-ui/icons/Security";
import Loyalty from "@material-ui/icons/Loyalty";
import Schedule from "@material-ui/icons/Schedule";
import DriveEta from "@material-ui/icons/DriveEta";
import LocalShipping from "@material-ui/icons/LocalShipping";
import Stars from "@material-ui/icons/Stars";
import Assignment from "@material-ui/icons/Assignment";

// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax/Parallax";
import InfoArea from "../components/InfoArea/InfoArea";
import Button from "../components/CustomButtons/Button";

import styles from "../styles/jss/nextjs-material-kit/pages/landingPage";
import productStyles from "../styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle";

const useStyles = makeStyles((theme) => ({
    ...styles,
    ...productStyles,
    title: {
        ...styles.title,
        color: "#3C4858"
    },
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    textLeft: {
        textAlign: "left"
    },
    ctaSection: {
        padding: "40px 0",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: "6px",
        marginTop: "40px"
    }
}));

export default function AboutPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="white"
                brand="Vcar Convoyage"
                rightLinks={<HeaderLinks />}
                fixed
                {...rest}
            />
            <div className={classes.main} style={{ paddingTop: "80px" }}>
                <div className={classes.container}>
                    {/* Introduction Section */}
                    <div className={classes.section} style={{ paddingTop: "0" }}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <h1 className={classes.title}>Présentation V-Car transport</h1>
                                <h4 className={classes.description}>
                                    V-car transport : Votre partenaire de confiance pour le convoyage automobile
                                </h4>
                                <h3 className={classes.title}>Qui sommes-nous ?</h3>


                                <p className={classes.description}>
                                    V-car transport est une société spécialisée dans le convoyage de véhicules automobiles.
                                    Nous offrons des solutions de transport fiables et sécurisées pour tous types de véhicules.
                                </p>
                                <h3 className={classes.title}>Notre mission :</h3>
                                <p className={classes.description}>
                                    Assurer le transport de vos véhicules avec le plus grand soin, en respectant les délais et en garantissant votre satisfaction.
                                </p>
                            </GridItem>
                        </GridContainer>
                    </div>

                    <hr />

                    {/* Values Section */}
                    <div className={classes.section}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <h2 className={classes.title}>Nos valeurs</h2>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={6} md={3}>
                                <InfoArea
                                    title="Professionnalisme"
                                    description="Nos conducteurs sont expérimentés et formés pour assurer un convoyage en toute sécurité."
                                    icon={Stars}
                                    iconColor="info"
                                    vertical
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <InfoArea
                                    title="Fiabilité"
                                    description="Nous respectons nos engagements et assurons un service ponctuel et efficace."
                                    icon={Schedule}
                                    iconColor="success"
                                    vertical
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <InfoArea
                                    title="Sécurité"
                                    description="La sécurité de vos véhicules est notre priorité absolue."
                                    icon={Security}
                                    iconColor="danger"
                                    vertical
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <InfoArea
                                    title="Flexibilité"
                                    description="Nous nous adaptons à vos besoins et proposons des solutions sur mesure."
                                    icon={Loyalty}
                                    iconColor="primary"
                                    vertical
                                />
                            </GridItem>
                        </GridContainer>
                    </div>

                    <hr />

                    {/* Services Section */}
                    <div className={classes.section}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <h2 className={classes.title}>Nos services</h2>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={6} md={3}>
                                <InfoArea
                                    title="Véhicules Neufs & Occasion"
                                    description="Livraison de véhicules à des particuliers, concessionnaires, garages..."
                                    icon={DriveEta}
                                    iconColor="info"
                                    vertical
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <InfoArea
                                    title="Transfert Professionnel"
                                    description="Constructeurs, loueurs, entreprises... Transfert adapté à vos besoins."
                                    icon={LocalShipping}
                                    iconColor="success"
                                    vertical
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <InfoArea
                                    title="Véhicules Spécifiques"
                                    description="Véhicules de prestige, véhicules de collection..."
                                    icon={VerifiedUser}
                                    iconColor="rose"
                                    vertical
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <InfoArea
                                    title="Services Complémentaires"
                                    description="Préparation des véhicules avant livraison, gestion administrative..."
                                    icon={Assignment}
                                    iconColor="warning"
                                    vertical
                                />
                            </GridItem>
                        </GridContainer>
                    </div>

                    {/* Why Choose Us Section */}
                    <div className={classes.section}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <h2 className={classes.title}>Pourquoi choisir V-car transport ?</h2>
                                <ul className={classNames(classes.description, classes.textLeft)} style={{ listStyle: "none", padding: 0 }}>
                                    <li><Stars style={{ verticalAlign: "middle", marginRight: "10px", color: "#9c27b0" }} /> Une équipe de conducteurs expérimentés et passionnés</li>
                                    <li><Stars style={{ verticalAlign: "middle", marginRight: "10px", color: "#9c27b0" }} /> Un suivi personnalisé de chaque mission</li>
                                    <li><Stars style={{ verticalAlign: "middle", marginRight: "10px", color: "#9c27b0" }} /> Des tarifs compétitifs</li>
                                    <li><Stars style={{ verticalAlign: "middle", marginRight: "10px", color: "#9c27b0" }} /> Une assurance tous risques pour votre tranquillité d'esprit</li>
                                </ul>
                            </GridItem>
                        </GridContainer>
                    </div>

                    {/* CTA Section */}
                    <div className={classes.ctaSection}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <h3 className={classes.title}>V-car transport : la route en toute sérénité.</h3>
                                <p className={classes.description}>
                                    Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé.
                                </p>
                                <Button color="danger" size="lg" href="/contact">
                                    Demander un devis
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

