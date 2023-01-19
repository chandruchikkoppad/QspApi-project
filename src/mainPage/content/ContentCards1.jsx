import React from "react";
import style from "./_contents.module.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import Styles from "./_card1.module.css";
import Rating from "@mui/material/Rating";
import { BsBookmark } from "react-icons/bs";

const ContentCards1 = () => {
  return (
    <div>
      <section className="container mx-auto" id={style.container}>
        <h4 className={style.tittle1}>Trending SpreadSheets Courses</h4>
        <div
          //   className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4"
          className={style.cont}
        >
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={5}
            visibleSlides={4}
            step={4}
            loop={true}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                id="prev"
                className={style.prev1}
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    <Slide index={0} className={style.slide}>
                      <div className={Styles.card1}>
                        <Card sx={{ maxWidth: 270 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-react.jpg"
                              alt="green iguana"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                <a href="" className={Styles.courseName}>
                                  How to easily create a website with React
                                </a>
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                              </Typography>
                              <br />
                              <Rating
                                name="half-rating-read"
                                defaultValue={4}
                                precision={0.5}
                                readOnly
                              />
                            </CardContent>
                          </CardActionArea>
                          <hr />
                          <div className={Styles.guideBlock}>
                            <span>
                              <Avatar
                                alt="Remy Sharp"
                                src="https://avatars.githubusercontent.com/u/3245052?v=4"
                                sx={{ width: 24, height: 24 }}
                              />
                              Shashi Kunal
                            </span>
                            <BsBookmark />
                          </div>
                        </Card>
                      </div>
                    </Slide>
                    {/*!------------------------------------------------------------------------------------*/}
                    <Slide index={1} className={style.slide}>
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
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                <a href="" className={Styles.courseName}>
                                  Angular-the complete guide for beginner
                                </a>
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                              </Typography>
                              <br />
                              <Rating
                                name="half-rating-read"
                                defaultValue={3.5}
                                precision={0.5}
                                readOnly
                              />
                            </CardContent>
                          </CardActionArea>
                          <hr />
                          <div className={Styles.guideBlock}>
                            <span>
                              <Avatar
                                alt="Remy Sharp"
                                src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2-100x100.jpg"
                                sx={{ width: 24, height: 24 }}
                              />
                              Ted Hawkins
                            </span>
                            <BsBookmark />
                          </div>
                        </Card>
                      </div>
                    </Slide>

                    {/*!-------------------------------------------------------------------------------------*/}
                    <Slide index={2} className={style.slide}>
                      <div className={Styles.card1}>
                        <Card sx={{ maxWidth: 270 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-graphql.jpg"
                              alt="green iguana"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                <a href="" className={Styles.courseName}>
                                  GraphQL-introduction to graphQL for beginners
                                </a>
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                              </Typography>
                              <br />
                              <Rating
                                name="half-rating-read"
                                defaultValue={4}
                                precision={0.5}
                                readOnly
                              />
                            </CardContent>
                          </CardActionArea>
                          <hr />
                          <div className={Styles.guideBlock}>
                            <span>
                              <Avatar
                                alt="Remy Sharp"
                                src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-5-100x100.jpg"
                                sx={{ width: 24, height: 24 }}
                              />
                              Claire Robertson
                            </span>
                            <BsBookmark />
                          </div>
                        </Card>
                      </div>
                    </Slide>
                    <Slide index={3} className={style.slide}>
                      <div className={Styles.card1}>
                        <Card sx={{ maxWidth: 270 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-python.jpg"
                              alt="green iguana"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                <a href="" className={Styles.courseName}>
                                  The Python Course:build web application
                                </a>
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                              </Typography>
                              <br />
                              <Rating
                                name="half-rating-read"
                                defaultValue={3.5}
                                precision={0.5}
                                readOnly
                              />
                            </CardContent>
                          </CardActionArea>
                          <hr />
                          <div className={Styles.guideBlock}>
                            <span>
                              <Avatar
                                alt="Remy Sharp"
                                src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3-100x100.jpg"
                                sx={{ width: 24, height: 24 }}
                              />
                              Juanita Bell
                            </span>
                            <BsBookmark />
                          </div>
                        </Card>
                      </div>
                    </Slide>
                    <Slide index={4} className={style.slide}>
                      <div className={Styles.card1}>
                        <Card sx={{ maxWidth: 270 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-gatsby.jpg"
                              alt="green iguana"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                <a href="" className={Styles.courseName}>
                                  Gatsby JS: build blog with GraphQL and React
                                </a>
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                              </Typography>
                              <br />
                              <Rating
                                name="half-rating-read"
                                defaultValue={3.5}
                                precision={0.5}
                                readOnly
                              />
                            </CardContent>
                          </CardActionArea>
                          <hr />
                          <div className={Styles.guideBlock}>
                            <span>
                              <Avatar
                                alt="Remy Sharp"
                                src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1-100x100.jpg"
                                sx={{ width: 24, height: 24 }}
                              />
                              Morris Mccoy
                            </span>
                            <BsBookmark />
                          </div>
                        </Card>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className={style.next1}
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </section>
    </div>
  );
};

export default ContentCards1;
