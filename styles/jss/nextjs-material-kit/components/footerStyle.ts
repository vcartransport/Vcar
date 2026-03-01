import { container, primaryColor, title } from "../../nextjs-material-kit";

const footerStyle = {
  footer: {
    padding: "60px 0 20px",
    backgroundColor: "#2E3440", // Deep Navy/Slate
    color: "#FFFFFF",
    zIndex: "2",
    position: "relative" as "relative",
    "& h4": {
      color: "#FFFFFF",
      fontSize: "1.2rem",
      fontWeight: "700",
      marginBottom: "20px",
      marginTop: "0",
      textTransform: "uppercase" as "uppercase",
    }
  },
  container: {
    ...container,
    textAlign: "left" as "left",
  },
  sectionTitle: {
    ...title,
    color: "#FFFFFF",
    marginTop: "0",
    marginBottom: "20px",
    fontSize: "1.1rem",
    textTransform: "uppercase" as "uppercase",
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
    listStyle: "none",
  },
  listItem: {
    padding: "5px 0",
    display: "block",
    width: "auto",
  },
  link: {
    color: "rgba(255, 255, 255, 0.7)",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#FFFFFF",
      textDecoration: "none",
    }
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.7)",
  },
  contactIcon: {
    marginRight: "10px",
    color: "#f44336", // Brand Red
    fontSize: "16px",
    minWidth: "20px",
    textAlign: "center" as "center",
  },
  socialIcons: {
    marginTop: "20px",
  },
  socialButton: {
    marginRight: "10px",
    color: "#FFFFFF",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-3px)",
    }
  },
  bottomBar: {
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    textAlign: "center" as "center",
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.5)",
  },
  brandName: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: "15px",
    display: "block",
  },
  brandDesc: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.6)",
    lineHeight: "1.6",
  }
};
export default footerStyle;
