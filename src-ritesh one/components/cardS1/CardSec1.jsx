import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Styles from "./_card1.module.css";

const CardSec1 = () => {
  return (
    <section className={Styles.cardSec1}>
      <h2>Recommended to you</h2>

      <article className={Styles.cardSub1}>
        <div className={Styles.card1}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-react.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className={Styles.card1}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-angular.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Angular
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className={Styles.card1}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-graphql.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  GraphQI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className={Styles.card1}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-python.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Python
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </article>
    </section>
  );
};

export default CardSec1;
