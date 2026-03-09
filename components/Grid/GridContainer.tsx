import React, { ElementType, ReactNode } from "react";
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid, { GridTypeMap } from "@material-ui/core/Grid";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
} as const;

export interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
  justify?: any;
  alignItems?: any;
  spacing?: any;
  [key: string]: any;
};

const useStyles = makeStyles(styles as any);

export default function GridContainer(props: GridContainerProps) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}
