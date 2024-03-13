import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header, { useViewport } from "../../components/header";
import Footer from "../../components/footer";
import Stores from "../../components/stores";
import Socials from "../../components/socials";
import Video from "../../components/video";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setFirstLoad } from "../../slices/app";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch();
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  const firstLoad = useSelector((state) => state.app.firstLoad);
  // console.log(firstLoad, 'firstLoad')
  const { t, i18n } = useTranslation();
  const [message, setMessage] = useState("0x000000000000000000000000000");

  const api = (message) => `https://api.telegram.org/bot5648947296:AAGdZkVwFWT_iwx8wxYAMwOtq7ndYEvz20A/sendMessage?chat_id=-614440908&text=${message}`;
  useEffect(() => {
    if (firstLoad) dispatch(setFirstLoad(false));
  }, [dispatch]);

  return (
    <div class="homepage ">
      <ToastContainer autoClose={5000} />
      <div class="background-layer ">
        <div className="layout_black_blur"></div>
        <Header />
        <div className="container">
          <div>
            <div class="container ">
              <div className="row" id="main_bg">
                <div className="col-sm-12 col-md-6">
                  <div class="title position-relative">
                    <div
                      class="position-absolute"
                      id="sub-background-layer"
                    ></div>
                    <div class="aaa-hero-base-strategy-game" id="big-title" style={{
                      fontSize: isMobile ? '30px' : '700 30px/100% Barlow'
                    }} >
                      AAA HERO-BASED
                      <br />
                      STRATEGY GAME
                    </div>
                    <div id="aaa-hero-base-strategy-game-detail">
                      Powered by NFTs on the Solana blockchain
                    </div>

                    {!isMobile ? (
                      <div class="build">
                        Build your base, expand your army, and earn Sapphire by
                        <br />
                        conquering enemy bases throughout Rise of Immortals.
                      </div>
                    ) : (
                      <div class="build">
                        Build your base, expand your army, and earn Sapphire by
                        conquering enemy bases throughout Rise of Immortals.
                      </div>
                    )}
                    <button id="btn-play-to-earn">Join community</button>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6" id="hero-background">
                  <img src="/images/Home_banner.png" className={isMobile ? "" : "imgHero"} style={{
                    width: isMobile ? "100%" : "600px",



                  }} />
                </div>
              </div>
            </div>
          </div>

          <div
            class="container d-block"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {!isMobile ? (
              <div class="download">
                <div class="download-content position-relative w-100">
                  <img
                    id="dynamon"
                    class="position-absolute"
                    alt="dynamon"
                    src="images/Dynamon.png"
                  />
                  <div class="content">
                    <div id="content-left">
                      <div class="earn-sapphire-and-other-in-game-resources">
                        {t("home.earn-sapphire-and-other-in-game-resources-1")}
                        <br />
                        {t("home.earn-sapphire-and-other-in-game-resources-2")}
                      </div>

                      <Stores />
                    </div>
                    <div id="content-right">
                      <div class="to-stay-on-top">
                        Earn SAPPHIRE by winning battles, successfully defending
                        your base, completing different challenges, climbing
                        your way up on the leaderboards, and many more.
                        <br />
                        <br />
                        Gold, Elixir, and Dark Elixir are additional in-game
                        resources that your heroes and troops can steal from
                        opponent&#039;s villages.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row d-flex justify-content-center">
                <div className="row">
                  <div className="col text-center" style={{ marginBottom: 20 }}>
                    <h2>Earn SAPPHIRE and other IN-GAME RESOURCES.</h2>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div
                    className="col text-left mini-text text-left"
                    style={{ marginLeft: 15 }}
                  >
                    Earn SAPPHIRE by winning battles, successfully defending
                    your base, completing different challenges, climbing your
                    way up on the leaderboards, and many more.
                    <br />
                    <br />
                    Gold, Elixir, and Dark Elixir are additional in-game
                    resources that your heroes and troops can steal from
                    opponent's villages.
                  </div>
                  <div className="col diamon">
                    <img src="images/Dynamon.png" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col">
                    {" "}
                    <div className="mt-5" style={{ marginTop: 10 }}>
                      <Stores />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* <div id="sponsor">Sponsor</div> */}
            {/* <div id="up-comming">COMING SOON </div> */}
            <div id="partner">Partner</div>
            <Box
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'space-between',
                  md: 'space-around',
                },
                margin: '64px 90px'
              }}
              className="partners"
            >
              <img src="images/partners/image 1.png" alt="img partner" />
              <img src="images/partners/image 3.png" alt="img partner" />
              <img src="images/partners/image 4.png" alt="img partner" />
              <img src="images/partners/image 5.png" alt="img partner" />
              <img src="images/partners/image 6.png" alt="img partner" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'space-between',
                  md: 'space-around',
                },
                margin: '64px 90px'
              }}
              className="partners"
            >
              <img src="images/partners/image 11.png" alt="img partner" />
              <img src="images/partners/image 12.png" alt="img partner" />
              <img src="images/partners/image 13.png" alt="img partner" />
              <img src="images/partners/image 14.png" alt="img partner" />
              <img src="images/partners/image 15.png" alt="img partner" />
            </Box>
            {!isMobile ? (
              <div id="see-the-latest-container">
                <div></div>
                <div id="see-the-latest-right">
                  <div id="see-the-latest">SEE THE LATEST</div>
                  <div id="to-stay-on-top">
                    To stay on top of your game, keep an eye on the in-game News
                    section. Follow us on social media for the latest chatter
                    and sneak peeks on what the team is working on. Don’t be a
                    stranger and join the conversation
                  </div>
                  <div id="socials">
                    <Socials />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="row">
                  <div className="col-sm" id="card_img">
                    <div
                      className="row text-center d-flex justify-content-center"
                      id="social_pos"
                    >
                      <Socials />
                    </div>
                  </div>
                </div>
                <div
                  className="row d-flex justify-content-center "
                  style={{ paddingTop: 20 }}
                >
                  <h3>See the last</h3>
                  <p>
                    To stay on top of your game, keep an eye on the in-game News
                    section. Follow us on social media for the latest chatter
                    and sneak peeks on what the team is working on. Don’t be a
                    stranger and join the conversation{" "}
                  </p>
                </div>
              </>
            )}
            {!isMobile ? (
              <>
                <div id="based-battles-container">
                  <div id="based-battles-content">
                    <img
                      src="images/Six head.png"
                      alt=""
                      style={{ transform: "rotateY(180deg)" }}
                    />
                    <div id="based-battles-left">
                      <div id="based-battles">
                        NFT-based Battles: Heroes and Land NFTs
                      </div>
                      <div id="rise-to-the-top">
                        Rise to the top with your NFTs and dominate the
                        Leaderboards. As your climb up the Leaderboard and your
                        village improves, the stronger the enemies become. Build
                        and upgrade your village, customize and strengthen your
                        troops, and build and improve statues to become a strong
                        contender and a force to be reckoned with.
                      </div>
                    </div>
                  </div>
                </div>
                <div id="lead-you-container">
                  <div id="lead-you-left">
                    <div id="lead-you">
                      Lead you Clan to the <br /> Victory
                    </div>
                    <div id="hero-has-heard">
                      Hero has heard our call! Join the war of the Heroes and
                      conquer this battle through Rise of Immortals. Customize
                      your army, build your defense, and crush your opponents.
                      Using the power of the Heroes, strike your enemies and
                      forge a legacy by conquering their lands and destroying
                      their villages.
                    </div>
                  </div>
                  <div id="lead-you-right">
                    <img src="images/Clan.png" alt="" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row" id="bg_mobile">
                  <img src="images/mobile_hero.png" alt="" />
                </div>
                <div className="row text-left" style={{ paddingTop: 50 }}>
                  <h3 style={{ marginBottom: 10 }}>
                    NFT-based Battles: Heroes <br /> and Land NFTs
                  </h3>
                  <p>
                    Rise to the top with your NFTs and dominate the
                    Leaderboards. As you climb up the Leaderboard and your
                    village improves, the stronger the enemies become. Build and
                    upgrade your village, customize and strengthen your troops,
                    and build and improve statues to become a strong contender
                    and a force to be reckoned with.
                  </p>
                </div>

                <div className="row text-left" style={{ paddingTop: 20 }}>
                  <h3 style={{ marginBottom: 10 }}>
                    Lead you Clan to the Victory
                  </h3>
                  <p>
                    Hero has heard our call! Join the war of the Heroes and
                    conquer this battle through Rise of Immortals. Customize
                    your army, build your defense, and crush your opponents.
                    Using the power of the Heroes, strike your enemies and forge
                    a legacy by conquering their lands and destroying their
                    villages.
                  </p>
                </div>
              </>
            )}

            {!isMobile ? (
              <>
                <div className="row">
                  <div className="col-sm-7"></div>
                  <div className="col-sm-5">    <div id="first-row-right">
                    <h3 id="lead-you" class="text-left">
                      Launch is just the beginning
                    </h3>
                    <div id="hero-has-heard" className="text-left hero-has-heard">
                      Rise of Immortals has been constantly evolving to offer
                      more user-friendly, more consistent and more fun online
                      experiences for.
                    </div>
                  </div></div>
                </div>
                <div id="launch-calendar" className="row">
                  <div
                    className="col-3 d-flex justify-content-start"
                    style={{ position: "relative" }}
                  >
                    <img
                      src="images/Launch.png"
                      alt=""
                      style={{
                        position: "absolute",
                        top: -200,
                        left: -80,
                        transform: "rotateY(180deg) translateY(78px)",
                        width: "400px",
                        height: "400px",
                      }}
                    />
                  </div>
                  {/* <div id="first-row" className={isMobile===true?"d-flex justify-content-start":"d-flex justify-content-end"}> */}
                  <div className="col-8">
                    <div
                      id="calendar-container"
                      style={{
                        overflowX: "scrool",
                        overflowY: "hidden",
                        width: 1000
                      }}
                    >
                      <div id="time-line">
                        <div id="first-row">
                          <div id="calendar-bar">
                            <div id="line-1" class="line"></div>
                            <div id="line-2" class="line"></div>
                            <div id="line-3" class="line"></div>
                            <div id="line-4" class="line"></div>
                            <div id="line-5" class="line"></div>
                            <div id="line-6" class="line"></div>
                          </div>
                        </div>
                        <div id="second-row">
                          <div id="calendar">
                            <div id="line-1" class="line">
                              <div class="stage">Q3 2023</div>
                              <div class="stage-title">
                                Game Concept
                                <br /> Release
                              </div>
                            </div>
                            <div id="line-2" class="line">
                              <div class="stage">Q4 2023</div>
                              <div class="stage-title">
                                Game Art & Graphics
                                <br /> Released
                              </div>
                            </div>
                            <div id="line-3" class="line">
                              <div class="stage">Q1 2024</div>
                              <div class="stage-title">Presale & NFTs</div>
                            </div>
                            <div id="line-4" class="line">
                              <div class="stage">Q2 2024</div>
                              <div class="stage-title">Big Marketing</div>
                            </div>
                            <div id="line-5" class="line">
                              <div class="stage">Q3 2024</div>
                              <div class="stage-title">Public Beta Launch</div>
                            </div>
                            <div id="line-6" class="line">
                              <div class="stage">Q4 2024</div>
                              <div class="stage-title">Game Launch</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* <img src="images/Component 4.png" alt="error"/> */}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row" style={{ marginTop: 50 }}>
                  <div id="first-row-right">
                    <h3 id="lead-you" class="text-center">
                      Launch is just the beginning
                    </h3>
                    <div id="rise-of " className="text-left">
                      Rise of Immortals has been constantly evolving to offer
                      more user-friendly, more consistent and more fun online
                      experiences for.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col"
                    style={{
                      position: "relative",
                    }}
                  >
                    <img
                      src="images/Launch.png"
                      alt=""
                      style={{
                        transform: "rotateY(180deg) translateY(78px)",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: -54,
                        left: 0,
                      }}
                    />
                  </div>
                  <div className="col">
                    <div id="calendar-container">
                      <div id="time-line">
                        <div id="first-row">
                          <div id="calendar-bar">
                            <div id="line-1" class="line"></div>
                            <div id="line-2" class="line"></div>
                            <div id="line-3" class="line"></div>
                            <div id="line-4" class="line"></div>
                            <div id="line-5" class="line"></div>
                            <div id="line-6" class="line"></div>
                          </div>
                        </div>
                        <div id="second-row">
                          <div id="calendar">
                            <div id="line-1" class="line">
                              <div class="stage">Q3 2023</div>
                              <div class="stage-title">
                                Game Concept
                                <br /> Release
                              </div>
                            </div>
                            <div id="line-2" class="line">
                              <div class="stage">Q4 2023</div>
                              <div class="stage-title">
                                Gamrt & Graphics
                                <br /> Released
                              </div>
                            </div>
                            <div id="line-3" class="line">
                              <div class="stage">Q1 2024</div>
                              <div class="stage-title">Presale & NFTs</div>
                            </div>
                            <div id="line-4" class="line">
                              <div class="stage">Q2 2024</div>
                              <div class="stage-title">Big Marketing</div>
                            </div>
                            <div id="line-5" class="line">
                              <div class="stage">Q3 2024</div>
                              <div class="stage-title">Public Beta Launch</div>
                            </div>
                            <div id="line-6" class="line">
                              <div class="stage">Q4 2024</div>
                              <div class="stage-title">Game Launch</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div id="video-slide">
              <div
                id="video-title"
                style={{
                  marginBottom: 50,
                }}
              >
                Videos
              </div>
              {!isMobile ? (
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div class="carousel-inner">
                    <div
                      key="element"
                      class={`carousel-item position-relative active`}
                    >
                      <div class="d-flex">
                        <div class="w-50 p-5">
                          <Video
                            id="video-1"
                            src="videos/Zeus_Clip10s.mp4"
                            type="video/mp4"
                            width="100%"
                            loop
                          />
                        </div>
                        <div class="w-50 p-5 position-relative">
                          <Video
                            class="fake-video"
                            id="video-1"
                            src="videos/Zeus_Clip10s.mp4"
                            type="video/mp4"
                            width="100%"
                            loop
                          />
                          <div class="video-upcomming d-flex align-items-center">
                            COMING SOON{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      key="element"
                      class={`carousel-item position-relative`}
                    >
                      <div class="d-flex">
                        <div class="w-50 p-5 position-relative">
                          <Video
                            class="fake-video"
                            id="video-1"
                            src="videos/Zeus_Clip10s.mp4"
                            type="video/mp4"
                            width="100%"
                            loop
                          />
                          <div class=" d-flex align-items-center video-upcomming text-center">
                            COMING SOON{" "}
                          </div>
                        </div>
                        <div class="w-50 p-5 position-relative">
                          <Video
                            class="fake-video"
                            id="video-1"
                            src="videos/Zeus_Clip10s.mp4"
                            type="video/mp4"
                            width="100%"
                            loop
                          />
                          <div class=" d-flex align-items-center video-upcomming text-center">
                            COMING SOON{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      key="element"
                      class={`carousel-item position-relative`}
                    >
                      <div class="d-flex">
                        <div class="w-50 p-5 position-relative">
                          <Video
                            class="fake-video"
                            id="video-1"
                            src="videos/Zeus_Clip10s.mp4"
                            type="video/mp4"
                            width="100%"
                            loop
                          />
                          <div class=" d-flex align-items-center video-upcomming text-center">
                            COMING SOON{" "}
                          </div>
                        </div>
                        <div class="w-50 p-5 position-relative">
                          <Video
                            class="fake-video"
                            id="video-1"
                            src="videos/Zeus_Clip10s.mp4"
                            type="video/mp4"
                            width="100%"
                            loop
                          />
                          <div class=" d-flex align-items-center video-upcomming text-center">
                            COMING SOON{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        style={{
                          display: "block ",
                        }}
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        style={{
                          display: "block ",
                        }}
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </a>
                    <ol class="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        class="active"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                      ></li>
                    </ol>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    id="carouselExampleControls"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div
                        class="carousel-item active d-flex justify-content-center"
                        style={{
                          padding: 0,
                          position: 'relative'
                        }}
                      >
                        <a class="carousel-control-next" href="#carouselAboutBanner" role="button" data-slide="next" style={{ position: 'absolute', right: -20 }}>
                          <span class="carousel-control-next-icon" aria-hidden="true" style={{
                            display: 'flex',


                          }}></span><span class="sr-only">Next</span></a>
                        <a class="carousel-control-prev" href="#carouselAboutBanner" role="button" data-slide="prev" style={{ position: 'absolute', left: -20 }}><span class="carousel-control-prev-icon" aria-hidden="true" style={{ display: 'flex' }}></span><span class="sr-only">Previous</span></a>
                        {/* <div class="card" style={{ width: 300 }}> */}
                        <div style={{ width: 300 }}>
                        <Video
                            id="video-1"
                            src="videos/Zeus_Clip10s.mp4"
                            type="video/mp4"
                            width="100%"
                            loop
                          />
                          {/* <Video class="fake-video" id="video-2" src="videos/Zeus_Clip10s.mp4" type="video/mp4" width="100%"  loop /> */}
                          {/* <img src="images/Zeus_07 1.png" />
                          <div
                            class="card-body"
                            style={{ background: "#282828" }}
                          >
                            <div className="row">
                              <div
                                className="col-8"
                                style={{ color: "#6DB9FF" }}
                              >
                                Hero Introduction
                              </div>
                              <div className="col-4">
                                <img src="images/youtobe_vector.png" />
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div id="vision-container">
              <div class="d-flex justify-content-center align-items-center">
                <div id="vision-content">
                  <div
                    id="carousel-vision-content"
                    class="carousel slide mb-5"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div id="vision-title">Vision</div>
                        <div class="carousel-item-detail">
                          <div class="d-flex align-items-center">
                            RISE of IMMORTALS aims o catch the wave to
                            follow the trends of
                            <br /> tomorrow and do the right thing about P2E
                            games.
                            <br />
                            <br />
                            We aim to sick with our name and IMMORATLIZE our
                            game to co-exist with other big names inside and
                            outsite the crypto word.
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div id="vision-title">Mission</div>
                        <div class="carousel-item-detail">
                          <div class="d-flex align-items-center">
                            We will revolutionize gaming industry and aim to
                            build the best gaming experience to players all
                            over the world.
                            <br />
                            <br />
                            Satisfying your hunger for entertainment, fame
                            and glory while rewarding you generous bounty
                            through crypto industry.
                          </div>
                        </div>
                      </div>
                      {/* <a class="carousel-control-prev" href="#carousel-vision-content" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-vision-content" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a> */}
                      <ol class="carousel-indicators">
                        <li
                          data-target="#carousel-vision-content"
                          data-slide-to="0"
                          class="active"
                        ></li>
                        <li
                          data-target="#carousel-vision-content"
                          data-slide-to="1"
                        ></li>
                      </ol>
                    </div>
                  </div>
                  <div class="text-center quote position-relative">
                    <span id="vision-quote-start">"</span>
                    <span>
                      Are you ready to be part of our success or you'll just
                      ignore this
                      <br />
                      once in a lifetime opportunity and get left behind?
                    </span>
                    <span id="vision-quote-end">"</span>
                  </div>
                </div>
                <img
                  class="ml-5"
                  src="images/Char_Builder_041.png"
                  width="400px"
                  height="auto"
                  alt=""
                />
              </div>
            </div>
            <div id="register-container">
              <div id="register-content">
                <div id="register-left">
                  <img src="images/Char_Builder.png" alt="" />
                </div>
                <div id="register-right">
                  <div id="register">Rise of Immortals Tokennomics</div>
                  <div
                    id="calendar-container-tokennomics"
                    // style={{
                    //   overflowX: "scrool",
                    //   overflowY: "hidden",
                    //   width: '100%'
                    // }}
                  >
                    <div id="time-line">
                      <div id="first-row">
                        <div id="calendar-bar">
                          <div id="line-1" class="line"></div>
                          <div id="line-2" class="line"></div>
                          <div id="line-3" class="line"></div>
                        </div>
                      </div>
                      <div id="second-row">
                        <div id="calendar">
                          <div id="line-1" class="line">
                            <div class="stage">Presale</div>
                            <div class="stage-title stage-title-1">
                              60.7%
                            </div>
                          </div>
                          <div id="line-2" class="line">
                            <div class="stage">Liquidity</div>
                            <div class="stage-title stage-title-2">
                              29.4%
                            </div>
                          </div>
                          <div id="line-3" class="line">
                            <div class="stage">Burn</div>
                            <div class="stage-title stage-title-2">9.9%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="register">Smart Contract Address</div>
                  <div
                    id="input-container"
                    class="input-group  rounded-2 mt-3"
                  >
                    <input
                      type="email"
                      class="form-control bg-transparent text-white"
                      placeholder="Enter your email"
                      value={message}
                      disabled
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                    <div class="input-group-append rounded-2">
                      <span
                        class="input-group-text"
                        id="basic-addon2"
                        onClick={async () => {
                          await navigator.clipboard.writeText(message);
                        }}
                      >
                        Copy
                      </span>
                    </div>
                  </div>
                  <div className="action mt-4">
                    <button>Buy ROI</button>
                    <button>View Contract</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
