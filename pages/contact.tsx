import React from "react";
import Head from "next/head";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// Composants UI
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax/Parallax";
import Button from "../components/CustomButtons/Button";
import CustomInput from "../components/CustomInput/CustomInput";

// Styles et constantes
import styles from "../styles/jss/vcar/pages/landingPage";
import { BRAND, CONTACT } from "../constants/config";

const useStyles = makeStyles((theme) => ({
    ...styles,
    section: {
        padding: "70px 0",
        textAlign: "center" as "center"
    },
    title: {
        ...styles.title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        color: "#3C4858",
        display: "inline-block",
        position: "relative" as "relative"
    },
    description: {
        color: "#999"
    },
    contactSection: {
        padding: "70px 0",
    },
    infoSection: {
        padding: "40px",
        backgroundColor: "#2E3440", // Deep Navy/Slate
        color: "#FFFFFF",
        borderRadius: "10px",
        boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        textAlign: "left" as "left",
        height: "100%"
    },
    infoTitle: {
        ...styles.title,
        color: "#FFFFFF",
        marginTop: "0",
        fontSize: "1.5rem",
        marginBottom: "20px",
        position: "relative" as "relative"
    },
    infoItem: {
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "25px",
    },
    infoIcon: {
        marginRight: "20px",
        fontSize: "20px",
        color: "#f44336", // Brand Red
        minWidth: "24px",
        textAlign: "center" as "center"
    },
    infoText: {
        fontSize: "1rem",
        lineHeight: "1.5em",
        margin: "0"
    },
    socialIcons: {
        marginTop: "40px",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        paddingTop: "20px"
    },
    socialButton: {
        marginRight: "10px",
        "& i": {
            fontSize: "20px"
        }
    },
    formSection: {
        padding: "40px 20px",
        textAlign: "left" as "left"
    },
    formTitle: {
        ...styles.title,
        color: "#3C4858",
        marginTop: "0",
        fontSize: "1.5rem",
        marginBottom: "10px",
        position: "relative" as "relative"
    },
    formSub: {
        color: "#999",
        marginBottom: "40px"
    },
    main: {
        background: "#FFFFFF",
        position: "relative" as "relative",
        zIndex: 3
    },
    container: {
        ...styles.container,
        zIndex: 12,
        position: "relative" as "relative"
    }
}));

export default function ContactPage(props: object) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const classes = (useStyles as any)();
    return (
        <div>
            <Head>
                <title>Contactez-nous | Devis Gratuit de Convoyage - V-Car Transport</title>
                <meta
                    name="description"
                    content="Besoin d'un transport de véhicule ? Contactez V-Car Transport pour un devis gratuit. Disponible 6j/7 pour répondre à vos besoins de convoyage avec assurance."
                />
            </Head>
            <Header
                color="white"
                brand={BRAND.shortName}
                rightLinks={<HeaderLinks />}
                fixed
                {...props}
            />
            <div className={classes.main} style={{ paddingTop: "80px" }}>
                <div className={classes.container}>
                    <div className={classes.contactSection}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={5}>
                                <div className={classes.infoSection}>
                                    <h2 className={classes.infoTitle}>Informations de Contact</h2>

                                    <div className={classes.infoItem}>
                                        <i className={classNames("fas fa-map-marker-alt", classes.infoIcon)} />
                                        <div className={classes.infoText}>
                                            <strong>{CONTACT.address}</strong>
                                        </div>
                                    </div>

                                    <div className={classes.infoItem}>
                                        <i className={classNames("fas fa-phone", classes.infoIcon)} />
                                        <div className={classes.infoText}>
                                            <strong>Téléphone</strong><br />
                                            <a href={CONTACT.phoneHref} style={{ color: "inherit", textDecoration: "none" }}>{CONTACT.phone}</a>
                                        </div>
                                    </div>

                                    <div className={classes.infoItem}>
                                        <i className={classNames("fas fa-envelope", classes.infoIcon)} />
                                        <div className={classes.infoText}>
                                            <strong>Email</strong><br />
                                            <a href={CONTACT.emailHref} style={{ color: "inherit", textDecoration: "none" }}>{CONTACT.email}</a>
                                        </div>
                                    </div>

                                    <div className={classes.infoItem}>
                                        <i className={classNames("fas fa-clock", classes.infoIcon)} />
                                        <div className={classes.infoText}>
                                            <strong>Horaires</strong><br />
                                            {CONTACT.hours}
                                        </div>
                                    </div>

                                    <div className={classes.socialIcons}>
                                        <Button justIcon round color="transparent" simple className={classes.socialButton}>
                                            <i className="fab fa-facebook-f" style={{ color: "white" }} />
                                        </Button>
                                        <Button justIcon round color="transparent" simple className={classes.socialButton}>
                                            <i className="fab fa-instagram" style={{ color: "white" }} />
                                        </Button>
                                        <Button justIcon round color="transparent" simple className={classes.socialButton}>
                                            <i className="fab fa-linkedin-in" style={{ color: "white" }} />
                                        </Button>
                                    </div>
                                </div>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={7}>
                                <div className={classes.formSection}>
                                    <h2 className={classes.formTitle}>Demander un Devis Gratuit</h2>
                                    <p className={classes.formSub}>
                                        Remplissez le formulaire ci-dessous et nos experts vous répondront sous 24h.
                                    </p>
                                    <form>
                                        <GridContainer>
                                            <GridItem xs={12} sm={6}>
                                                <CustomInput
                                                    labelText="Nom Complet"
                                                    id="name"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={6}>
                                                <CustomInput
                                                    labelText="Email"
                                                    id="email"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12}>
                                                <CustomInput
                                                    labelText="Type de transport (Trajet court, Longue distance...)"
                                                    id="subject"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12}>
                                                <CustomInput
                                                    labelText="Détails de votre demande (Véhicule, départ, arrivée...)"
                                                    id="message"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        multiline: true,
                                                        rows: 4
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12}>
                                                <div style={{ marginTop: "20px" }}>
                                                    <Button color="danger" size="lg">
                                                        Envoyer la Demande
                                                    </Button>
                                                </div>
                                            </GridItem>
                                        </GridContainer>
                                    </form>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>

                    <div style={{ marginTop: "40px", marginBottom: "60px" }}>
                        <h3 className={classes.title} style={{ textAlign: "center", marginBottom: "40px" }}>Notre Zone d'Intervention</h3>
                        <div style={{ width: "100%", height: "450px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)" }}>
                            <iframe
                                src={CONTACT.googleMapsEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

