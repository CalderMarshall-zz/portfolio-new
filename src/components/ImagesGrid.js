import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GridItem from "./GridItem";
import Container from "@material-ui/core/Container";

export default function ImagesGrid({ open, setOpen, setAlt, bigUrl, setBigUrl }) {
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
              setAlt('Rope Mill Park')
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610238162/rope_mill_cropped.jpg"}
            title={"Rope Mill Park"}
            subtitle={"Woodstock, GA"}
          />
          <GridItem
            onClick={() => {
              setBigUrl("https://res.cloudinary.com/dwyzskooa/image/upload/v1610324548/skyway.jpg")
              setOpen(true)
              setAlt('Talladega National Forest Skyway')
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610323100/skyway_cropped.jpg"}
            title={"Talladega National Forest Skyway"}
            subtitle={"Eastern Alabama"}
          />
          <GridItem
            onClick={() => {
              setBigUrl("https://res.cloudinary.com/dwyzskooa/image/upload/v1610324104/brevard.jpg")
              setOpen(true)
              setAlt('Looking Glass Falls')
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610324340/brevard_cropped.jpg"}
            title={"Looking Glass Falls"}
            subtitle={"Brevard, NC"}
          />
          <GridItem
            onClick={() => {
              setBigUrl("https://res.cloudinary.com/dwyzskooa/image/upload/v1610324653/fort_mountain.jpg")
              setOpen(true)
              setAlt('Fort Mountain')
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610324749/fort_mountain_cropped.jpg"}
            title={"Fort Mountain"}
            subtitle={"GA-52, Chatsworth, GA"}
          />
          <GridItem
            onClick={() => {
              setBigUrl("https://res.cloudinary.com/dwyzskooa/image/upload/v1610323414/driftwood.jpg")
              setOpen(true)
              setAlt('Driftwood Trail')
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610323414/driftwood.jpg"}
            title={"Driftwood Trail"}
            subtitle={"Acworth, GA"}
          />
          <GridItem
            onClick={() => {
              setBigUrl("https://res.cloudinary.com/dwyzskooa/image/upload/v1610323565/vail.jpg")
              setOpen(true)
              setAlt('Vail Ski Resort')
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610323565/vail.jpg"}
            title={"Vail Ski Resort"}
            subtitle={"Vail, CO"}
          />
          <GridItem
            onClick={() => {
              setBigUrl("https://res.cloudinary.com/dwyzskooa/image/upload/v1610237357/e61.jpg")
              setOpen(true)
              setAlt('My E61')
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610237357/e61.jpg"}
            title={"My E61"}
            subtitle={"Atlanta, GA"}
          />
          <GridItem
            onClick={() => {
              setBigUrl("https://res.cloudinary.com/dwyzskooa/image/upload/v1610325285/pico_cropped.jpg")
              setOpen(true)
              setAlt('Pico de Gallo')
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610325202/pico.jpg"}
            title={"Pico de Gallo"}
            subtitle={"Nashville, TN"}
          />
          <GridItem
            onClick={() => {
              setBigUrl("https://res.cloudinary.com/dwyzskooa/image/upload/v1610237361/blankets.jpg")
              setOpen(true)
              setAlt('South Loop Trail')
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610237361/blankets.jpg"}
            title={"South Loop Trail"}
            subtitle={"Woodstock, GA"}
          />
          <GridItem
            onClick={() => {
              setBigUrl("https://res.cloudinary.com/dwyzskooa/image/upload/v1610325461/red_rocks.jpg")
              setOpen(true)
              setAlt('Red Rocks Ampitheatre')
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610325598/red_rocks_cropped.jpg"}
            title={"Red Rocks Amphitheatre"}
            subtitle={"Morrison, CO"}
          />
          <GridItem
            onClick={() => {
              setBigUrl("https://res.cloudinary.com/dwyzskooa/image/upload/v1610237368/woodys.jpg")
              setOpen(true)
              setAlt("Woody's Cheesesteaks")
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610237368/woodys.jpg"}
            title={"Woody's Cheesesteaks"}
            subtitle={"Atlanta, GA"}
          />
          <GridItem
            onClick={() => {
              setBigUrl("https://res.cloudinary.com/dwyzskooa/image/upload/v1610237362/fats.jpg")
              setOpen(true)
              setAlt("Forks Area Trail System")
            }}
            imageUrl={"https://res.cloudinary.com/dwyzskooa/image/upload/v1610237362/fats.jpg"}
            title={"Forks Area Trail System"}
            subtitle={"Clarks Hill, SC"}
          />
        </Grid>
      </div>
    </Container>
  );
}
