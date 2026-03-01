import React, { ReactElement, ReactNode } from "react";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid, { GridTypeMap } from "@material-ui/core/Grid";

const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
  },
};

const useStyles = makeStyles(styles);

export interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  xs?: any;
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
  [key: string]: any;
}
export default function GridItem(props: GridItemProps) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}
