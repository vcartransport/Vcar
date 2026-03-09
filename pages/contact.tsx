import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import LocationOn from "@material-ui/icons/LocationOn";
import Schedule from "@material-ui/icons/Schedule";

// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import HeaderLinks from "../components/Header/HeaderLinks";
import CustomInput from "../components/CustomInput/CustomInput";
import SEO from "../components/SEO/SEO";

import styles from "../styles/jss/vcar/pages/landingPage";
import { BRAND, CONTACT } from "../constants/config";

const useStyles = makeStyles(((theme) => ({
    ...styles,
    title: {
        ...styles.title,
        color: "#3C4858"
    },
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    contactInfo: {
        padding: "40px",
        height: "100%",
        backgroundColor: "#2E3440",
        borderRadius: "6px",
        color: "#FFFFFF",
        textAlign: "left"
    },
    infoItem: {
        display: "flex",
        alignItems: "center",
        marginBottom: "25px"
    },
    infoIcon: {
        marginRight: "20px",
        fontSize: "30px",
        color: "#f44336"
    },
    infoText: {
        "& h4": {
            margin: "0 0 5px 0",
            fontWeight: "bold",
            fontSize: "1.1rem"
        },
        "& p": {
            margin: 0,
            opacity: 0.8
        },
        "& a": {
            color: "inherit",
            textDecoration: "none"
        }
    },
    formContainer: {
        padding: "40px",
        backgroundColor: "#FFFFFF",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    mapContainer: {
        width: "100%",
        height: "400px",
        borderRadius: "6px",
        overflow: "hidden",
        marginTop: "50px",
        boxShadow: "0 2px 20px rgba(0,0,0,0.1)"
    }
})) as any);

export default function ContactPage(props: object) {
    const classes = (useStyles as any)();
    return (
        <div>
            <SEO 
                title="Contact | V-Car Transport - Demandez un Devis" 
                description="Besoin d'un convoyage de véhicule ? Contactez V-Car Transport pour un devis gratuit. Disponible à Marseille et partout en France ! Excellence et réactivité."
                canonical="/contact"
            />
            <Header
                color="white"
                brand={BRAND.shortName}
                rightLinks={<HeaderLinks />}
                fixed
                {...props}
            />
            <div className={classes.main} style={{ paddingTop: "80px" }}>
                <div className={classes.container}>
                    <div className={classes.section}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <h1 className={classes.title}>Contactez-nous</h1>
                                <h4 className={classes.description}>
                                    Une question ? Un projet de convoyage ? Notre équipe est à votre écoute
                                    pour vous proposer la meilleure solution de transport partout en France.
                                </h4>
                            </GridItem>
                        </GridContainer>

                        <div style={{ marginTop: "50px" }}>
                            <GridContainer>
                                {/* Contact Info */}
                                <GridItem xs={12} sm={12} md={5}>
                                    <div className={classes.contactInfo}>
                                        <h3 style={{ color: "white", marginBottom: "40px" }}>Nos Coordonnées</h3>

                                        <div className={classes.infoItem}>
                                            <Phone className={classes.infoIcon} />
                                            <div className={classes.infoText}>
                                                <h4>Téléphone</h4>
                                                <p><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></p>
                                            </div>
                                        </div>

                                        <div className={classes.infoItem}>
                                            <Email className={classes.infoIcon} />
                                            <div className={classes.infoText}>
                                                <h4>Email</h4>
                                                <p><a href={CONTACT.emailHref}>{CONTACT.email}</a></p>
                                            </div>
                                        </div>

                                        <div className={classes.infoItem}>
                                            <LocationOn className={classes.infoIcon} />
                                            <div className={classes.infoText}>
                                                <h4>Adresse</h4>
                                                <p>{CONTACT.address}</p>
                                            </div>
                                        </div>

                                        <div className={classes.infoItem}>
                                            <Schedule className={classes.infoIcon} />
                                            <div className={classes.infoText}>
                                                <h4>Horaires</h4>
                                                <p>{CONTACT.hours}</p>
                                            </div>
                                        </div>
                                    </div>
                                </GridItem>

                                {/* Contact Form */}
                                <GridItem xs={12} sm={12} md={7}>
                                    <div className={classes.formContainer}>
                                        <h3 style={{ marginBottom: "30px", textAlign: "left" }}>Envoyez-nous un message</h3>
                                        <form>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} md={6}>
                                                    <CustomInput
                                                        labelText="Nom Complet"
                                                        id="name"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={6}>
                                                    <CustomInput
                                                        labelText="Votre Email"
                                                        id="email"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={12}>
                                                    <CustomInput
                                                        labelText="Sujet"
                                                        id="subject"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={12}>
                                                    <CustomInput
                                                        labelText="Votre Message"
                                                        id="message"
                                                        formControlProps={{
                                                            fullWidth: true,
                                                            className: classes.textArea
                                                        }}
                                                        inputProps={{
                                                            multiline: true,
                                                            rows: 5
                                                        }}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={12} style={{ textAlign: "right", marginTop: "20px" }}>
                                                    <Button color="danger" size="lg">
                                                        Envoyer le message
                                                    </Button>
                                                </GridItem>
                                            </GridContainer>
                                        </form>
                                    </div>
                                </GridItem>
                            </GridContainer>
                        </div>

                        {/* Google Maps Embed */}
                        <div className={classes.mapContainer}>
                            <iframe
                                src={CONTACT.googleMapsEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="V-Car Transport Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
