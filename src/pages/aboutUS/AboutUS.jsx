import { Container, Divider, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./styles";
function AboutUS() {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.main}>
      <div className={classes.home}>
        <Typography className={classes.mainHeader}>Alsufraa Bakery </Typography>
        <Divider variant="inset" className={classes.bigDivider} />
        <Grid
          direction="row-reverse"
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs="auto" lg={6} item>
            <img
              className={classes.image}
              src="http://patisseriemaxime.co.uk/wp-content/uploads/2015/05/about-us.png"
              alt="aboutUs"
              title="aboutUs"
            />
          </Grid>
          <Grid item xs="auto" lg={6} container>
            <Container>
              <Typography className={classes.header}>مخابز السفراء</Typography>
              {/* <Divider variant="inset" className={classes.smallDivider} /> */}
              <Typography className={classes.text1}>
                {
                  "تعتبر مخابز السفراء من أهم المخابز الرائدة في العراق، بما تتميز به من مهنية عالية وامكانيات تسمح بتقديم أفضل المنتجات للاسواق المحلية والعالمية"
                }
                <br />
                <br />

                {
                  " تتميز منتجات السفراء بانها غنية بالألياف و خالية من السكر والمواد الحافظه, مكوناتها طبيعيه 100% و تريح المعدة وتساعد على ضبط الوزن"
                }
                <br />
                <br />
                {
                  "تقدم مخابز السفراء مجموعة كبيرة من المنتجات منها خبز التنور, خبز العربي, توست و كعك بانواعهم"
                }
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AboutUS;
