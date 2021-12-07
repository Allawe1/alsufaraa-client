import {
  Card,
  Container,
  Divider,
  Grid,
  Typography,
  CardActionArea,
  Fade,
  Modal,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import product1 from "../../images/product1.jpg";
import { useHistory, useLocation } from "react-router";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { SpinnerInfinity } from "spinners-react";

export function Products(props) {
  const classes = useStyles();
  var emp = useLocation();
  let history = useHistory();
  if (emp.state === undefined) {
    emp = {
      hash: "",
      key: "kgq3y4",
      pathname: "/products",
      search: "",
      state: "Arabic",
    };
  }
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = useState({
    name: "",
    img: "",
    ingredients: "",
    description: "",
  });
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = () => {
    axios
      .get(
        `https://alsufaraa-client-zmcto.ondigitalocean.app/alsufaraa/api/productGategorys/products/${emp.state}`
      )
      .then((response) => {
        setIsLoading(false);
        setNotes(response.data[0].product);
      })
      .catch((error) => {
        setIsLoading(true);
        console.log(error);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  function sendProduct(elem) {
    if (isTabletOrMobile) {
      history.push({ pathname: "/productDetails", state: elem });
    } else {
      setProduct({
        name: elem.name,
        img: elem.img,
        description: elem.description,
        ingredients: elem.ingredients,
      });
      setOpen(true);
    }
  }

  return (
    <div className={classes.main}>
      <Typography variant="h2" className={classes.h2}>
        Welcome to our Products!
      </Typography>
      <Divider variant="inset" className={classes.bigDivider} />
      <Typography variant="h1" className={classes.h1}>
        {emp.state}
      </Typography>
      <Divider variant="inset" className={classes.smallDivider} />
      {isLoading ? (
        <SpinnerInfinity
          size={100}
          thickness={100}
          speed={100}
          color="rgba(57, 113, 172, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : (
        <Grid
          id="grid"
          container
          spacing={6}
          justifyContent="center"
          alignItems="center"
          className={classes.productGrid}
        >
          {notes.map((elem) => (
            <Grid item xs="auto" key={elem._id}>
              <div>
                <Card className={classes.card1}>
                  <CardActionArea onClick={() => sendProduct(elem)}>
                    <img
                      src={
                        elem.img !== ""
                          ? `https://alsufaraa-client-zmcto.ondigitalocean.app/alsufaraa/images/${emp.state}/${elem.img}`
                          : product1
                      }
                      alt="product"
                      title={elem.img}
                      className={classes.media}
                    />
                  </CardActionArea>
                </Card>
                <Typography className={classes.overlaySmall}>
                  {elem.name}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid
              container
              justifyContent="center"
              alignItems="flex-start"
              direction="row"
              spacing={0}
            >
              <Grid xs={6} item>
                <img
                  width={500}
                  height={500}
                  src={
                    product.img !== ""
                      ? `https://alsufaraa-client-zmcto.ondigitalocean.app/alsufaraa/images/${emp.state}/${product.img}`
                      : product1
                  }
                  alt="product"
                  title={product.img}
                  className={classes.productImage}
                />
              </Grid>
              <Grid xs={6} item>
                <Container>
                  <Typography className={classes.productHeader}>
                    {product.name}
                  </Typography>
                  <Divider
                    variant="inset"
                    className={classes.productBigDivider}
                  />
                  <Typography className={classes.ProductTitle}>
                    المكونات
                  </Typography>
                  <Divider
                    variant="inset"
                    className={classes.productSmallDivider}
                  />
                  <Typography className={classes.ProductInfo}>
                    {product.ingredients}
                  </Typography>
                </Container>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
