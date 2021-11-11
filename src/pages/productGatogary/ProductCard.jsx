import { Link } from "react-router-dom";
import { Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Styles";
import product1 from "../../images/product1.jpg";

export default function ProductCard(props) {
  const { name, img, id } = props;
  const classes = useStyles();
  return (
    <Grid item xs="auto" key={id}>
      <Link
        style={{ textDecoration: "none" }}
        to={{
          pathname: "/products",
          state: name,
        }}
      >
        <Card className={classes.card}>
          <img
            title={img}
            src={
              img !== ""
                ? `https://alsufaraa-client-zmcto.ondigitalocean.app/alsufaraa/images/${img}`
                : product1
            }
            className={classes.media}
            alt={img}
          />
        </Card>
        <Typography className={classes.overlaySmall}>{name}</Typography>
      </Link>
    </Grid>
  );
}
