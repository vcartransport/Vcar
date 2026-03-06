import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "../../styles/jss/vcar/components/headerStyle";

const useStyles = makeStyles(styles);

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (changeColorOnScroll) {
      if (windowsScrollTop > changeColorOnScroll.height) {
        document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes[color || "primary"]);
        document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes[changeColorOnScroll.color]);
      } else {
        document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes[color || "primary"]);
        document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes[changeColorOnScroll.color]);
      }
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color || "primary"]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  const brandComponent = (
    <Link href="/" as="/">
      <Button className={classes.title} style={{ padding: "5px 15px", height: "auto" }}>
        <svg width="200" height="46" viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 5)">
            <path d="M0 0 H14 L26 36 L18 42 Z" fill="currentColor" />
            <path d="M18 48 L42 0 H54 L24 56 Z" fill="currentColor" />
          </g>
          <text x="65" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontSize="24" fontWeight="900" fill="currentColor" letterSpacing="2">V-CAR</text>
          <text x="65" y="46" fontFamily="system-ui, -apple-system, sans-serif" fontSize="12" fontWeight="800" fill="currentColor" letterSpacing="4.5">TRANSPORT</text>
        </svg>
      </Button>
    </Link>
  );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

export interface HeaderProps {
  color?:
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "transparent"
  | "white"
  | "rose"
  | "dark";
  rightLinks?: ReactElement;
  leftLinks?: ReactElement;
  brand: string;
  fixed?: boolean;
  absolute?: boolean;
  changeColorOnScroll?: {
    height: number;
    color:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "transparent"
    | "white"
    | "rose"
    | "dark";
  };
}
