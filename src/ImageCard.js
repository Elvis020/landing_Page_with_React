import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    background: "rgba(0,0,0,.5)",
    margin: "20px",
  },
  media: {
    height: 340,
  },
  title: {
    fontFamily: "Nunito, sans-serif",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito, sans-serif",
    fontSize: "1.1rem",
    color: "#ddd",
  },
});

export default function ImageCard({ place, checked }) {
  const { title, imageUrl, description } = place;
  console.log(place);
  const classes = useStyles();

  return (
    <>
      <Collapse in={checked} {...(checked ? {timeout: 1000}: {})} >
        <Card className={classes.root}>
          <CardMedia className={classes.media} component="img" alt="Contemplative Reptile" image={imageUrl} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" className={classes.desc} component="p">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Collapse>
    </>
  );
}
