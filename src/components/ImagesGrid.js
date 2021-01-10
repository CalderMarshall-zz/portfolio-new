import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GridItem from "./GridItem";
import Container from "@material-ui/core/Container";

export default function ImagesGrid({open, setOpen, setAlt, bigUrl, setBigUrl}) {
  console.log(open)
  return (
    <Container style={{ padding: "0 5px" }}>
      <div
        style={{
          backgroundColor: "#ededed",
          borderRadius: 10,
          padding: 15,
        }}
      >
        <Typography variant="h6" paragraph align="center">
          Here's how I spend my free time!
        </Typography>
        <Grid container spacing={3}>
          <GridItem
            onClick={() => {
              setBigUrl("https://res.cloudinary.com/dwyzskooa/image/upload/v1610237367/rope_mill.jpg")
              setOpen(true)
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610238162/rope_mill_cropped.jpg"}
            title={"Rope Mill Park"}
            subtitle={"Woodstock, GA"}
          />
          <GridItem
            open
            setOpen
            bigUrl
            setBigUrl
            imageUrl={require("../static/images/beer_run.jpg")}
            title={"Talladega National Forest Skyway"}
            subtitle={"Eastern Alabama"}
          />
          <GridItem
            open
            setOpen
            bigUrl
            setBigUrl
            imageUrl={require("../static/images/pisgah.jpg")}
            title={"Looking Glass Falls"}
            subtitle={"Brevard, NC"}
          />
          <GridItem
            open
            setOpen
            bigUrl
            setBigUrl
            imageUrl={require("../static/images/harley.jpg")}
            title={"Fort Mountain"}
            subtitle={"GA-52, Chatsworth, GA"}
          />
          <GridItem
            open
            setOpen
            bigUrl
            setBigUrl
            imageUrl={require("../static/images/driftwood.jpg")}
            title={"Driftwood Trail"}
            subtitle={"Acworth, GA"}
          />
          <GridItem
            open
            setOpen
            bigUrl
            setBigUrl
            imageUrl={require("../static/images/vail.jpg")}
            title={"Vail Ski Resort"}
            subtitle={"Vail, CO"}
          />
          <GridItem
            open
            setOpen
            bigUrl
            setBigUrl
            imageUrl={require("../static/images/bmw.jpg")}
            title={"My E61"}
            subtitle={"Atlanta, GA"}
          />
          <GridItem
            open
            setOpen
            bigUrl
            setBigUrl
            imageUrl={require("../static/images/kitchen.jpg")}
            title={"Pico de Gallo"}
            subtitle={"Nashville, TN"}
          />
          <GridItem
            open
            setOpen
            bigUrl
            setBigUrl
            imageUrl={require("../static/images/south_loop.jpg")}
            title={"South Loop Trail"}
            subtitle={"Woodstock, GA"}
          />
          <GridItem
            open
            setOpen
            bigUrl
            setBigUrl
            imageUrl={require("../static/images/red_rocks.jpg")}
            title={"Red Rocks Amphitheatre"}
            subtitle={"Morrison, CO"}
          />
          <GridItem
            open
            setOpen
            bigUrl
            setBigUrl
            imageUrl={require("../static/images/woodys.jpg")}
            title={"Woody's Cheesesteaks"}
            subtitle={"Atlanta, GA"}
          />
          <GridItem
            open
            setOpen
            bigUrl
            setBigUrl
            imageUrl={require("../static/images/fats.jpg")}
            title={"Forks Area Trail System"}
            subtitle={"Clarks Hill, SC"}
          />
        </Grid>
      </div>
    </Container>
  );
}
