import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import LocalShipping from "@material-ui/icons/LocalShipping";
import Timer from "@material-ui/icons/Timer";
import Security from "@material-ui/icons/Security";
import AttachMoney from "@material-ui/icons/AttachMoney";

import styles from "../../styles/jss/vcar/pages/landingPageSections/vcarServicesStyle";

const useStyles = makeStyles(styles as any);

export default function VCarServicesSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                {/* Header */}
                <div className={classes.headerArea}>
                    <div className={classes.logoContainer}>
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M50 10 L30 55 L50 45 L70 55 Z"
                                fill="#c8956c"
                                opacity="0.9"
                            />
                            <path
                                d="M50 45 L30 55 L50 90 L70 55 Z"
                                fill="#c8956c"
                                opacity="0.6"
                            />
                        </svg>
                        <h2 className={classes.brandName}>V-Car Transport</h2>
                    </div>
                    <p className={classes.subtitle}>Convoyage de Véhicules</p>
                    <div className={classes.divider} />
                </div>

                {/* Service Cards */}
                <div className={classes.cardsRow}>
                    <div className={classes.card}>
                        <div className={classes.cardIcon}>
                            <LocalShipping />
                        </div>
                        <h3 className={classes.cardTitle}>W Garage + Assurance</h3>
                        <p className={classes.cardDescription}>
                            W Garage agréé avec assurance tous risques incluse pour une
                            protection maximale de votre véhicule pendant le transport.
                        </p>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardIcon}>
                            <Timer />
                        </div>
                        <h3 className={classes.cardTitle}>Livraison 12H 24H 48H</h3>
                        <p className={classes.cardDescription}>
                            Des délais de livraison adaptés à vos besoins. Service express en
                            12h, standard en 24h ou économique en 48h.
                        </p>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardIcon}>
                            <Security />
                        </div>
                        <h3 className={classes.cardTitle}>Transports Sécurisés</h3>
                        <p className={classes.cardDescription}>
                            Chaque véhicule est transporté avec le plus grand soin par nos
                            professionnels expérimentés et qualifiés.
                        </p>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardIcon}>
                            <AttachMoney />
                        </div>
                        <h3 className={classes.cardTitle}>Tarifs sur Demande</h3>
                        <p className={classes.cardDescription}>
                            Devis personnalisé et gratuit adapté à votre besoin. Prix
                            compétitifs et transparents, sans surprise.
                        </p>
                    </div>
                </div>

                {/* Contact Area */}
                <div className={classes.contactArea}>
                    <a href="/contact" className={classes.contactButton}>
                        Contactez-nous
                    </a>
                    <div className={classes.contactInfo}>
                        <div className={classes.contactItem}>
                            <Phone />
                            <span>07 65 59 58 77</span>
                        </div>
                        <div className={classes.contactItem}>
                            <Email />
                            <span>contact@v-car.company</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
