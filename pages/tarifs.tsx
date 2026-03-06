import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// Icônes
import LocalShipping from "@material-ui/icons/LocalShipping";
import DriveEta from "@material-ui/icons/DriveEta";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Info from "@material-ui/icons/Info";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Smartphone from "@material-ui/icons/Smartphone";

// Composants UI
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import HeaderLinks from "../components/Header/HeaderLinks";
import InfoArea from "../components/InfoArea/InfoArea";
import Button from "../components/CustomButtons/Button";

// Styles et constantes
import styles from "../styles/jss/vcar/pages/landingPage";
import productStyles from "../styles/jss/vcar/pages/landingPageSections/productStyle";
import { BRAND, TARIFS_VL, TARIFS_UTIL_10, TARIFS_UTIL_20 } from "../constants/config";

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
    },
    tableContainer: {
        marginTop: "30px",
        marginBottom: "50px",
        boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    tableHeader: {
        backgroundColor: "#2E3440",
    },
    tableHeaderText: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    badge: {
        display: "inline-block",
        padding: "5px 12px",
        borderRadius: "4px",
        backgroundColor: "#f44336",
        color: "#fff",
        fontSize: "0.8rem",
        fontWeight: "bold",
        marginBottom: "10px"
    },
    weProovSection: {
        backgroundColor: "#FFFFFF",
        padding: "60px 0",
        borderRadius: "10px",
        marginTop: "50px",
        boxShadow: "0 2px 20px rgba(0,0,0,0.05)"
    },
    weProovTitle: {
        color: "#2E3440",
        fontWeight: "bold",
        marginBottom: "20px"
    },
    weProovIcon: {
        fontSize: "40px",
        color: "#f44336",
        marginBottom: "20px"
    },
    advantageItem: {
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
        textAlign: "left"
    },
    advantageIcon: {
        color: "#4caf50",
        marginRight: "10px"
    },
    priceNote: {
        marginTop: "10px",
        fontStyle: "italic",
        color: "#777",
        fontSize: "0.9rem"
    },
    highlightRow: {
        backgroundColor: "rgba(244, 67, 54, 0.05)"
    }
}));

// Les données de tarifs sont définies dans constants/config.ts

export default function TarifsPage(props: object) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const classes = (useStyles as any)();
    return (
        <div>
            <Header
                color="white"
                brand={BRAND.shortName}
                rightLinks={<HeaderLinks />}
                fixed
                {...props}
            />
            <div className={classes.main} style={{ paddingTop: "80px" }}>
                <div className={classes.container}>
                    {/* Header Section */}
                    <div className={classes.section}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <h1 className={classes.title}>Nos Tarifs HT</h1>
                                <h4 className={classes.description}>
                                    Transparence totale sur nos prix de convoyage.
                                    Péages, carburant et assurance W garage inclus dans nos tarifs kilométriques.
                                </h4>
                                <div style={{ marginTop: "20px" }}>
                                    <span className={classes.badge}>Péages inclus</span>
                                    <span className={classes.badge} style={{ marginLeft: "10px", backgroundColor: "#2E3440" }}>Assurance W garage comprise</span>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>

                    {/* Pricing Tables */}
                    <div className={classes.section} style={{ paddingTop: "0" }}>
                        <GridContainer>
                            {/* VL Class 1 & 2 */}
                            <GridItem xs={12} md={6}>
                                <h3 className={classes.title} style={{ textAlign: "left" }}>VL -3,5 T (Classe 1 & 2)</h3>
                                <p className={classes.description} style={{ textAlign: "left" }}>
                                    Toutes marques VL, utilitaires classe 2 de 3 à 8 M3.
                                </p>
                                <TableContainer component={Paper} className={classes.tableContainer}>
                                    <Table aria-label="tarifs vl">
                                        <TableHead className={classes.tableHeader}>
                                            <TableRow>
                                                <TableCell className={classes.tableHeaderText}>Tranches Kilométriques</TableCell>
                                                <TableCell align="right" className={classes.tableHeaderText}>Tarifs Km HT</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow className={classes.highlightRow}>
                                                <TableCell component="th" scope="row"><strong>Moins de 50 KM (Forfait)</strong></TableCell>
                                                <TableCell align="right"><strong>100 € HT</strong></TableCell>
                                            </TableRow>
                                            {TARIFS_VL.map((row) => (
                                                <TableRow key={row.dist}>
                                                    <TableCell component="th" scope="row">{row.dist}</TableCell>
                                                    <TableCell align="right">{row.price}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </GridItem>

                            {/* Utilitaire Classe 3 */}
                            <GridItem xs={12} md={6}>
                                <h3 className={classes.title} style={{ textAlign: "left" }}>Utilitaire 10 à 15 M3 (Classe 3)</h3>
                                <br />
                                <TableContainer component={Paper} className={classes.tableContainer}>
                                    <Table aria-label="tarifs util 10">
                                        <TableHead className={classes.tableHeader}>
                                            <TableRow>
                                                <TableCell className={classes.tableHeaderText}>Tranches Kilométriques</TableCell>
                                                <TableCell align="right" className={classes.tableHeaderText}>Tarifs Km HT</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {TARIFS_UTIL_10.map((row) => (
                                                <TableRow key={row.dist}>
                                                    <TableCell component="th" scope="row">{row.dist}</TableCell>
                                                    <TableCell align="right">{row.price}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </GridItem>

                            {/* Utilitaire Classe 4 */}
                            <GridItem xs={12} md={6}>
                                <h3 className={classes.title} style={{ textAlign: "left" }}>Utilitaire 20 M3 (Classe 4)</h3>
                                <br />
                                <TableContainer component={Paper} className={classes.tableContainer}>
                                    <Table aria-label="tarifs util 20">
                                        <TableHead className={classes.tableHeader}>
                                            <TableRow>
                                                <TableCell className={classes.tableHeaderText}>Tranches Kilométriques</TableCell>
                                                <TableCell align="right" className={classes.tableHeaderText}>Tarifs Km HT</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {TARIFS_UTIL_20.map((row) => (
                                                <TableRow key={row.dist}>
                                                    <TableCell component="th" scope="row">{row.dist}</TableCell>
                                                    <TableCell align="right">{row.price}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </GridItem>

                            {/* Important Notices */}
                            <GridItem xs={12} md={6}>
                                <div style={{ padding: "40px", textAlign: "left" }}>
                                    <h3 className={classes.title}>Mentions Légales</h3>
                                    <ul className={classes.description} style={{ paddingLeft: "20px" }}>
                                        <li>Tous les tarifs sont indiqués en Hors Taxes (HT).</li>
                                        <li><strong>Péages compris</strong> dans le tarif affiché.</li>
                                        <li>Tarifs <strong>carburant compris</strong>.</li>
                                        <li><strong>Assurance W garage comprise</strong>.</li>
                                        <li>État des lieux digital avec <strong>WeProov</strong></li>
                                        <li>Forfait de 100 € HT pour les livraisons de moins de 50km (Classes 1 et 2).</li>

                                    </ul>
                                    <div className={classes.ctaSection} style={{ marginTop: "20px", textAlign: "left", padding: "20px" }}>
                                        <p className={classes.description}>Besoin d'un devis précis ?</p>
                                        <Button color="danger" href="/contact">Demander un devis</Button>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>

                    <hr />

                    {/* WeProov Section */}
                    <div className={classes.weProovSection}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={10}>
                                <Smartphone className={classes.weProovIcon} />
                                <h2 className={classes.weProovTitle}>Weproov : État des lieux digital</h2>
                                <h3 className={classes.title} style={{ fontSize: "1.2rem", marginTop: "0" }}>
                                    Fiabilité et Transparence pour le Convoyage Automobile
                                </h3>
                                <p className={classes.description}>
                                    WeProov est une solution digitale innovante permettant de réaliser des constats d’état des véhicules.
                                    Chaque inspection est horodatée, géolocalisée et accompagnée de photos infalsifiables,
                                    garantissant une traçabilité totale et une transparence absolue.
                                </p>

                                <GridContainer style={{ marginTop: "40px" }}>
                                    <GridItem xs={12} md={6}>
                                        <div className={classes.advantageItem}>
                                            <CheckCircle className={classes.advantageIcon} />
                                            <div className={classes.description}><strong>Transparence :</strong> Rapport détaillé à chaque étape.</div>
                                        </div>
                                        <div className={classes.advantageItem}>
                                            <CheckCircle className={classes.advantageIcon} />
                                            <div className={classes.description}><strong>Traçabilité :</strong> Données sécurisées et accessibles.</div>
                                        </div>
                                        <div className={classes.advantageItem}>
                                            <CheckCircle className={classes.advantageIcon} />
                                            <div className={classes.description}><strong>Sécurité :</strong> Preuves infalsifiables, protégeant contre les litiges.</div>
                                        </div>
                                    </GridItem>
                                    <GridItem xs={12} md={6}>
                                        <div className={classes.advantageItem}>
                                            <CheckCircle className={classes.advantageIcon} />
                                            <div className={classes.description}><strong>Efficacité :</strong> Processus rapide et moderne.</div>
                                        </div>
                                        <div className={classes.advantageItem}>
                                            <CheckCircle className={classes.advantageIcon} />
                                            <div className={classes.description}><strong>Professionnalisme :</strong> Une image de qualité renforcée.</div>
                                        </div>
                                    </GridItem>
                                </GridContainer>

                                <p className={classes.description} style={{ marginTop: "40px", fontStyle: "italic" }}>
                                    "Grâce à WeProov, nous assurons un convoyage fiable, sécurisé et conforme à nos standards d’excellence,
                                    tout en renforçant la confiance de nos clients."
                                </p>
                            </GridItem>
                        </GridContainer>
                    </div>

                    {/* Final CTA */}
                    <div className={classes.ctaSection}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <h3 className={classes.title}>Prêt à nous confier votre véhicule ?</h3>
                                <Button color="danger" size="lg" href="/contact">
                                    Obtenir mon devis gratuit
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
