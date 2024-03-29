import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header, { useViewport } from "../../components/header";
import Footer from "../../components/footer";
import BuildingLevel from "../../components/building-level";
import "./style.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// requires a loader
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function About() {
  const [index, setIndex] = useState(0);
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    setTimeout(() => {
      const container = document.querySelector(".hero-container");
      const slides = document.querySelector(".slides");
      const prev = document.querySelector("#prev_btn");
      const next = document.querySelector("#next_btn");
      next.addEventListener("click", (event) => {
        let str = slides.style.left;
        if (str === "" || str === null) {
          slides.style.left = "-200px";
        } else {
          let length = str.substring(0, str.length - 2);
          console.log(str);
          length = parseInt(length) - 200;
          if (length < -1500) {
            length = -1500;
          }
          slides.style.left = length + "px";
          return;
        }
      });
      prev.addEventListener("click", (event) => {
        let str = slides.style.left;
        if (str === "" || str === null) {
          console.log(str);
        } else {
          let length = str.substring(0, str.length - 2);
          length = parseInt(length) + 200;
          console.log(length);
          if (length > 0) {
            length = 0;
          } else {
            length = length;
          }

          slides.style.left = length + "px";
          return;
        }
      });
      /* keep track of user's mouse down and up */
      let isPressedDown = false;
      /* x horizontal space of cursor from inner container */
      let cursorXSpace;

      container.addEventListener("mousedown", (e) => {
        isPressedDown = true;
        cursorXSpace = e.offsetX - slides.offsetLeft;
        container.style.cursor = "grabbing";
      });

      container.addEventListener("mouseup", () => {
        container.style.cursor = "grab";
      });

      window.addEventListener("mouseup", () => {
        isPressedDown = false;
      });

      container.addEventListener("mousemove", (e) => {
        if (!isPressedDown) return;
        e.preventDefault();

        slides.style.left = `${e.offsetX - cursorXSpace}px`;
        boundCards();
      });

      function boundCards() {
        const container_rect = container.getBoundingClientRect();
        const cards_rect = slides.getBoundingClientRect();

        if (parseInt(slides.style.left) > 0) {
          slides.style.left = 0;
        } else if (cards_rect.right < container_rect.right) {
          slides.style.left = `-${cards_rect.width - container_rect.width}px`;
        }
      }
    }, 5000);
  }, []);

  return (
    <div id="about">
      <div class="background-layer">
        <Header />

        {!isMobile ? (
          <>
            {" "}
            <div id="banner-slide">
              <div
                id="carouselAboutBanner"
                class="carousel slide"
              
                data-interval="false"
              >
                <div class="carousel-inner postion-relative">
                  <div class="position-absolute w-100 h-100 bg"></div>
                  <div class="carousel-item position-relative active text-right">
                    <div class="sub-bg"></div>
                    <img width="55%" src="images/Zeus.png" alt="" />
                    <div class=" banner-text-container position-absolute w-100 h-100">
                      <div
                        class="container d-flex  text-left h-100"
                        style={{ display: "flex !important", marginTop: 100 }}
                      >
                        <div class="text-container">
                          <div
                            class="aaa-hero-base-strategy-game mb-2"
                            style={{
                              display: "flex !important",
                              marginTop: 150,
                              lineHeight:'60px',
                            }}
                          >
                            Welcome to
                            <br />
                            Rise of Immortals
                          </div>
                          <div class="rise-of">
                            <p>
                              <div class="title-detail">Rise of Immortals</div>
                              AAA hero-based strategy game powered by NFTs on
                              the Arbitrum blockchain.
                            </p>
                            <p>
                              <div class="title-detail">Introduction</div>
                              Rise of Immortals is an online massive multiplayer
                              blockchain-integrated strategy game where players
                              use their village and army units to grow stronger
                              and conquer other players to earn cryptocurrency.
                            </p>
                            <p>
                              Players earn thru various in-game activities such
                              as completing challenges, winning a village
                              attack, successful village defense, removing
                              obstavles, wagered matches, collaborating bases
                              with clan mates or in-game friends, staking, and
                              most of all, achieving the highest rank on the
                              leaderboards.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item position-relative text-left  ">
                    <div class="sub-bg-1"></div>
                    <img
                      width="55%"
                      src="images/Hades.png"
                      class="text-left"
                      alt=""
                    />
                    <div class="banner-text-container position-absolute w-100 h-100">
                      <div
                        id="banner_1"
                        class="container d-flex  text-left h-100"
                        style={{ display: "flex !important" }}
                      >
                        <div class="text-container-left"></div>
                        <div class="text-container">
                          <div class="aaa-hero-base-strategy-game mb-2" style={{
                              lineHeight:'60px',
                          }}>
                            Welcome to
                            <br />
                            Rise of Immortals
                          </div>
                          <div class="rise-of">
                            <div class="title-detail">Basics:</div>
                            <p>
                              The game starts with Ancient Greece and evolves to
                              Worldwide as players progress.
                              <br />
                              <br />
                              As the Village Chief, the objective is to expand
                              the village and upskill your army by using in-game
                              resources gained from pillaging other players'
                              villages.
                              <br />
                              <br />
                              There are three main resources: Gold, Elixir, and
                              Sapphire with Sapphire (SAP) as the main resource
                              for every micro transaction.
                              <br />
                              <br />
                              SAP's use cases are TownHall/Hero/Statue NFT
                              upgrades; Gold, Elixir, Skins & decoration
                              purchases and speeding up upgrades.
                            </p>
                            <p>
                              Players earn thru various in-game activities such
                              as completing challenges, winning a village
                              attack, successful village defense, removing
                              obstavles, wagered matches, collaborating bases
                              with clan mates or in-game friends, staking, and
                              most of all, achieving the highest rank on the
                              leaderboards.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselAboutBanner"
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
                  href="#carouselAboutBanner"
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
                    data-target="#carouselAboutBanner"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#carouselAboutBanner" data-slide-to="1"></li>
                  {/* <li data-target="#carouselAboutBanner" data-slide-to="2"></li> */}
                </ol>
              </div>
            </div>
          </>
        ) : (
          <div className="container mt-3">
            <Carousel>
              <div className="row">
                <div className="row">
                  <div className="col-5 d-flex justify-content-center align-items-center">
                    <h2 className="text-left" style={{ fontWeight: 700 }}>
                      Welcome to <br /> Rise of <br /> Immortals
                    </h2>
                  </div>
                  <div className="col-7">
                    <img
                    className="fullImg"
                    width={"100% !important"}
                      src="images/Zeus.png"
                      style={{ width: "100% !important" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <h3>Rise of Immortals:</h3>
                    <p>
                      AAA hero-based strategy game powered by NFTs on the
                      Arbitrum blockchain.
                    </p>
                  </div>
                  <div className="col-6">
                    <h3>Introduction:</h3>
                    <p>
                      Rise of Immortals is an online massive multiplayer
                      blockchain-integrated strategy game where players use
                      their village and army units to grow stronger and conquer
                      other players to earn cryptocurrency.
                      <br />
                      <br />
                      Players earn thru various in-game activities such as
                      completing challenges, winning a village attack,
                      successful village defense, removing obstacles, wagered
                      matches, collaborating bases with clan mates or in-game
                      friends, staking, and most of all, achieving the highest
                      rank on the leaderboards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="row">
                  <div className="col-7 ">
                    <img
                      src="images/Hades.png"
                      style={{ width: "100% !important" }}
                      alt=""
                    />
                  </div>
                  <div className="col-5 d-flex justify-content-center align-items-center">
                    <h2 className="text-left" style={{ fontWeight: 700 }}>
                      Welcome to <br /> Rise of <br /> Immortals
                    </h2>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <h3> Basic:</h3>
                    <p>
                      The game starts with Ancient Greece and evolves to
                      Worldwide as players progress.
                    </p>
                  </div>
                  <div className="col-6">
                    <h3>Introduction:</h3>
                    <p>
                      As the Village Chief, the objective is to expand the
                      village and upskill your army by using in-game resources
                      gained from pillaging other players' villages.
                      <br />
                      <br />
                      There are three main resources: Gold, Elixir, and Sapphire
                      with Sapphire (SAP) as the main resource for every micro
                      transaction.
                      <br />
                      <br />
                      SAP's use cases are TownHall/Hero/Statue NFT upgrades;
                      Gold, Elixir, Skins & decoration purchases and speeding up
                      upgrades.
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        )}
        <div class="container d-block">
          {!isMobile ? (
            <>
              {" "}
              <div id="believe-container">
                <div id="believe">
                  <div id="content">
                    <div class="row m-0">
                      <div class="col-6"></div>
                      <div id="what-we-believe" class="col-6">
                        What We Believe In?
                      </div>
                    </div>
                    <div class="row m-0" id="believe-items">
                      <div class="col-md-3 col-sm-6 col-6 text-centerposition-relative">
                        <div class=" believe-item px-3">
                          <img src="images/Build_BayXuong.png" alt="" />
                          <div class="img-title mb-3">Responsibility</div>
                          <div class="img-des">
                            Own your project, collaborate
                            <br />
                            and share. See an issue?
                            <br />
                            Speak up. We're all in this
                            <br />
                            together.
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3 col-sm-6 col-6 text-center position-relative">
                        <div class=" believe-item px-3">
                          <img src="images/Char_HeliusHorse.png" alt="" />
                          <div class="img-title mb-3">Independence</div>
                          <div class="img-des">
                            You decide how you can have
                            <br />
                            the biggest impact, and then
                            <br />
                            you do it.
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3 col-sm-6 col-6 text-center position-relative">
                        <div class=" believe-item px-3">
                          <img src="images/Build_Doanhtraiquandoi.png" alt="" />
                          <div class="img-title mb-3">Quality</div>
                          <div class="img-des">
                            We do a few things, extremely
                            <br />
                            well. There is no quality bar,
                            <br />
                            there is only better.
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3 col-sm-6 col-6 text-center position-relative">
                        <div class=" believe-item px-3">
                          <img src="images/Build_BayBang.png" alt="" />
                          <div class="img-title mb-3">Learning</div>
                          <div class="img-des">
                            For us, quality comes from
                            <br />
                            learning, and learning comes
                            <br />
                            from failing. In order to learn
                            <br />
                            faster, we fail faster.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row" style={{position:'relative'}}>
                <div className="bg_center">
                  <img src="images/about_bg.png" alt="" />
                </div>
                <div className="col-6">
                  
                  <div className="card">
                  <img src="images/Build_BayXuong.png"  alt=""/>
                    <h3>Responsibility</h3>
                    <p className="text-center">
                      Own your project, collaborate and share. See an issue?
                      Speak up. We’re all in this together.
                    </p>
                  </div>
                </div>
                <div className="col-6">
              
                  <div className="card">
                  <img src="images/Char_HeliusHorse.png" alt=""/>
                    <h3>Independence</h3>
                    <p className="text-center">
                      You decide how you can have the biggest impact, and then
                      you do it.
                    </p>
                  </div>
                </div>
                <div className="col-6 " style={{marginTop:70}}>
                  <div className="card">
                  <img src="images/Build_Doanhtraiquandoi.png" alt=""/>
                    <h3>Quality</h3>
                    <p className="text-center">
                      We do a few things, extremely well. There is no quality
                      bar, there is only better.
                    </p>
                  </div>
                </div>
                <div className="col-6 "style={{marginTop:70}}>
                  <div className="card">
                  <img src="images/Build_BayBang.png" alt=""/>
                    <h3>Learning</h3>
                    <p className="text-center">
                      For us, quality comes from learning, and learning comes
                      from failing. In order to learn faster, we fail faster.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="row flex-column-reverse flex-md-row" style={{marginTop:100}}>
            <div className="col-12 order-md-1 col-sm-6 "><img width={'100%'} src="images/Fake_MapDemo(1) 1.png" alt="" /></div>
            <div className="col-12 order-md-2 col-sm-6 mb-2 text-left"> <div id="collapseMarket">
              <h2 id="why-you-might-love-it">Why You Might Love It Here</h2>
              <div id="des-1">
              We work to create new, innovative, memorable experiences that no player has ever played before. We believe games have the power to bring people around the world closer together. This is why we strive to design games that stimulate a broad and diverse community of players and broaden the audience for smaller “niche” game concepts.


              </div>
              <br/>
              <div id="des-2">
              If you indulge in evaluating, talking, playing, and making games together with a diverse community, Rise of Immortals is the game for you. We've built works of independent, unique, and consistent visuals with the freedom to do what we think is best for our players and the company as a whole.
              </div>
              <Link id="read-more" to="/team" style={{color:"#FDC500"}}>
                Read more <i class="material-icons">chevron_right</i>
              </Link>
            </div></div>
            
           
          </div>
          {isMobile?<>
            <div className="row" style={{marginTop:50}}>
               <div className="card" style={{
                width:'100%',
                height:'80px',
                textAlign:'center',
                justifyContent:'center',  
                fontSize:12
               }}>
                "Are you ready to be part of our success or you'll just ignore this 
once in a lifetime opportunity and get left behind?"
               </div>
            </div>
            <div className="row d-flex justify-content-center">
            <img  src="images/Char_Builder_041.png" width="80%" height="auto" alt=""/>
            </div>
            <div className="row">
              <div className="card" style={{
                backgroundColor:'#151515',
                width:'100%',
                height:'300px',
                justifyContent:'center',
                marginTop:20
              }}>
                RISE of IMMORTALS aims to catch the wave to follow the trends of tomorrow and do the right thing about P2E games.
       <br/>  <br/>
We aim to stick with our name and IMMORTALIZE our game to co-exist with other big names inside and outside the crypto world.

              </div>
            </div>
          
          </>:null}
        {!isMobile?<>  <div id="market-place-container" style={{marginTop:100}}>
            <div id="market-place-content">
              <div id="market-place">
                Marketplace
                {/* <i class="material-icons" data-toggle="collapse" data-target="#collapseMarket" aria-expanded="true" aria-controls="collapseMarket" id="market-expand-icon">expand_more</i> */}
              </div>
              <div id="collapseMarket">
                <div id="des-1">
                  RISE OF IMMORTALS marketplace is designed to provide a smooth,
                  beginner-friendly, and seamless experience. The one-stop-shop
                  Marketplace.
                </div>
                <div id="des-2">
                  RISE OF IMMORTALS marketplace can be accessed within the game
                  to allow users to seamlessly transition from the game itself
                  directly to the marketplace to buy and sell NFTs or just to
                  scan the marketplace for any NFTs. Players can purchase
                  Heroes, Villages, Statues, and Temple NFTs with a few clicks,
                  and immediately begin using those NFTs in the game after the
                  transaction has been processed.
                  <br></br>
                  <br></br>
                  The game's marketplace implements a cutting-edge NFT exchange
                  algorithm with an easy-to-use NFT rental technology developed
                  specifically for RISE OF IMMORTALS Villages.
                  <br></br>
                  <br></br>
                  You can Buy and sell Heroes, Lands/Villages, Statues, and
                  Temples with the IMS token as the main medium of exchange.
                  <br></br>
                  <br></br>
                  Rent your Villages for SAP tokens via our "Village Cloning"
                  technology allowing Village NFT owners to mint a duplicate
                  Village to rent without risking ownership of the original
                  Village NFTs.
                  <br></br>
                  Find Village partners on the marketplace or in-game, allowing
                  you to repurpose your own NFT into a passive-income generating
                  technique.
                </div>
              </div>
            </div>
            <div id="market-img" class="ml-2">
              <img src="images/clan.svg" alt="" class="w-100" />
            </div>
          </div></>:<>
          <div className="row d-flex justify-content-center mt-3">
              <h2 className="text-center">Marketplace</h2>
              <p className="text-center">
              RISE OF IMMORTALS marketplace is designed to provide a smooth, beginner-friendly, and seamless experience. The one-stop-shop Marketplace.
 
              </p>
              <Link id="read-more d-flex" to="#" style={{color:"#FDC500"}}>
                Read more <i class="material-icons">chevron_right</i>
              </Link>
          </div>
          <div className="row mt-3">
          <img src="images/clan.svg" alt="" class="w-100"/>
          </div>
          </>}
         {!isMobile?<> <div id="level-building-container">
            <div id="level-building-bg">
              <div id="level-building-content">
                <div id="level-building">Building Advancement</div>
                <div id="des-1">
                  Upgrades on buldings help unlock more content which
                  <br />
                  will arm your village with more sophisticated troops and
                  defenses.
                </div>
                <div id="building-level-container">
                  <BuildingLevel />
                </div>
                <Link id="read-more" to="/guide">
                  Read more
                </Link>
              </div>
            </div>
          </div></>:null}
         
          <div id="the-gods-of-olympus" className="mt-3">
            <div id="the-gods-of-olympus-title">The Pantheon</div>
            <div id="the-gods-of-olympus-content" class="text-center row">
              Heroes are one of the main NFTs of the game. They help in
              attacking other villages and also in defending your own village.
              Upgrade your NFTs using SAPPHIRE (SAP) making them stronger as
              well as increasing their market value. Village upgrades like
              Statues also use SAP as the main resource. Statues help enhace
              your village's performance.
            </div>
            <Link id="the-gods-of-olympus-button" to="/guide" style={{
              backgroundColor: isMobile?'rgb(241, 163, 0) !important':null
            }}>
              EXPLORE
            </Link>
          </div>
          <div id="zeus-hades-poseidon" style={{
            maginTop:isMobile?10:100
          }} class="mb-5 pb-5 hero-container">
            <div class="slides">
              <div id="element" class="slide">
                <div class="ele">
                  <img src="images/Char_Zeus_front.png" alt="error" />
                  <div class="title">Zeus</div>
                  <div class="content">God of All Gods</div>
                  <button class="button" type="button">
                    COMING SOON{" "}
                  </button>
                </div>
              </div>
              <div id="element" class="slide">
                <div class="ele">
                  <img src="images/Char_Hades_front.png" alt="error" />
                  <div class="title">Hades</div>
                  <div class="content">God of the Underworld</div>
                  <button class="button" type="button">
                    COMING SOON{" "}
                  </button>
                </div>
              </div>
              <div id="element" class="slide">
                <div class="ele">
                  <img src="images/Char_Poseidon_front.png" alt="error" />
                  <div class="title">Poseidon</div>
                  <div class="content">The God of the SEA</div>
                  <button class="button" type="button">
                    COMING SOON{" "}
                  </button>
                </div>
              </div>
              <div id="element" class="slide">
                <div class="ele">
                  <img src="images/Char_Perseus_front.png" alt="error" />
                  <div class="title">Perseus</div>
                  <div class="content">Warrior and rescuer of Andromeda</div>
                  <button class="button" type="button">
                    COMING SOON{" "}
                  </button>
                </div>
              </div>
              <div id="element" class="slide">
                <div class="ele">
                  <img src="images/Char_Phobos_front.png" alt="error" />
                  <div class="title">Thanatos</div>
                  <div class="content">God of death</div>
                  <button class="button" type="button">
                    COMING SOON{" "}
                  </button>
                </div>
              </div>
              <div id="element" class="slide">
                <div class="ele">
                  <img src="images/Char_Thanatos_front.png" alt="error" />
                  <div class="title">Phobos</div>
                  <div class="content">God of Fear</div>
                  <button class="button" type="button">
                    COMING SOON{" "}
                  </button>
                </div>
              </div>
              <div id="element" style={{ height: 600 }} class="item">
                <div class=" h-100 padding_top" id="cms">
                  <div class="title_1">COMING SOON</div>
                </div>
              </div>
            </div>

            <div
              class="position-absolute m-auto"
              style={{
                width: "100%",
                bottom: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="position-relative"
                style={{
                  width: 150,
                  height: 20,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  class="carousel-control-prev "
                  style={{
                    width: 50,
                  }}
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    id="prev_btn"
                    style={{
                      display: "block ",
                    }}
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </div>

                <div
                  class="carousel-control-next"
                  style={{
                    width: 50,
                  }}
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    id="next_btn"
                    style={{
                      display: "block ",
                    }}
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </div>
              </div>
            </div>
          </div>

       {!isMobile?<>   <div class="container mb-4 d-block justify-content-center ">
            <div id="faq-title">FAQ</div>
            <div id="faq" class="p-4 pt-4 pb-5 m-auto">
              <div class=" detail d-flex">
                <div class="text ml-3 ">IMPORTANT!</div>
                <a
                  href="#box-content"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content">
                <div class="card card-body">
                  <p class="card-text">
                    The launch of the marketplace is scheduled for Q4 2022.
                    Subscribe to our social networks and stay tuned for
                    announcements so you don't miss anything.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">
                  When will the marketplace be available?
                </div>
                <a
                  href="#box-content1"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content1">
                <div class="card card-body">
                  <p class="card-text">
                    The launch of the marketplace is scheduled for Q4 2022.
                    Subscribe to our social networks and stay tuned for
                    announcements so you don't miss anything.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">
                  What cryptocurrency will be used on the Marketplace?
                </div>
                <a
                  href="#box-content2"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content2">
                <div class="card card-body">
                  <p class="card-text">
                    The main network of the marketplace is Arbitrum Chain. The
                    main cryptocurrency on the marketplace is ETH.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">Can I get NFTs for free?</div>
                <a
                  href="#box-content3"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content3">
                <div class="card card-body">
                  <p class="card-text">
                    Yes, there is a big NFTs giveaway for our subscribers right
                    now. Hurry up, take part & get lucky!
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">
                  How do I get the NFTs (Base/Heroes/Statues) first at the
                  initial price?
                </div>
                <a
                  href="#box-content4"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content4">
                <div class="card card-body">
                  <p class="card-text">
                    The safest way is to follow the announcements and make your
                    purchase quicker than everyone else after the sale starts.
                    To have guaranteed access to the starting price sale, you
                    need to get on the Whitelist.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">How to buy tokens?</div>
                <a
                  href="#box-content5"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content5">
                <div class="card card-body">
                  <p class="card-text">
                    Tokens can be bought on decentralized and centralized
                    exchanges after listing. The only way to buy a token before
                    listing is to participate in an ICO / IDO public sale round.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">
                  When will token purchase be available?
                </div>
                <a
                  href="#box-content6"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content6">
                <div class="card card-body">
                  <p class="card-text">
                    Public Sale of tokens and listing on exchanges is scheduled
                    on Q4/2022.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">
                  Where and when will the ICO / IDO be held?
                </div>
                <a
                  href="#box-content7"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content7">
                <div class="card card-body">
                  <p class="card-text">
                    For now, we can't disclose any information regarding the
                    time and location of the public round. Stay tuned for
                    updates.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">
                  Is it possible to get a token for free?
                </div>
                <a
                  href="#box-content8"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content8">
                <div class="card card-body">
                  <p class="card-text">
                    No, there are no such mechanics in the project at this
                    moment.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">
                  How do I buy tokens first at the starting price?
                </div>
                <a
                  href="#box-content9"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content9">
                <div class="card card-body">
                  <p class="card-text">
                    We plan to list part of the tokens on IDO platforms and the
                    conditions of participation will be set forth by these
                    platforms. The other part of the tokens will be sold via our
                    own platform and participants that are on the Whitelist are
                    prioritized.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">
                  On which exchanges will the token be sold?
                </div>
                <a
                  href="#box-content0"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content0">
                <div class="card card-body">
                  <p class="card-text">
                    We are unable to disclose this information in advance —
                    follow the announcements.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">Do you have a whitelist?</div>
                <a
                  href="#box-content11"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content11">
                <div class="card card-body">
                  <p class="card-text">
                    Yes, being whitelisted gives you the priority right to buy
                    NFTs or tokens at the start of sales. Ways to get on Rise of
                    Immortals Whitelist:
                    <br />
                    <br />
                    <div class="pl-4">
                      Subscribing to our social media networks — Low chance
                      <br />
                      Taking part in our Art Gallery — Low chance
                      <br />
                      Active participation in our community — Medium chance
                      <br />
                      Attending AMA sessions — Medium chance
                      <br />
                      Promotion of the project through personal social media
                      networks — High chance
                      <br />
                      Taking part and winning contests — High or 100% chance
                      <br />
                      Suggesting ideas for project improvement — Average chance
                      or 100% chance if your idea is used
                    </div>
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">
                  What platforms will the app be available on?
                </div>
                <a
                  href="#box-content12"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content12">
                <div class="card card-body">
                  <p class="card-text">
                    We plan to launch on iOS/Android & Web applications.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">
                  What languages will the app be translated into?
                </div>
                <a
                  href="#box-content13"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content13">
                <div class="card card-body">
                  <p class="card-text">
                    We will have 12 to 18 different languages for the
                    convenience of players worldwide.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">How to buy our NFT</div>
                <a
                  href="#box-content14"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content14">
                <div class="card card-body">
                  <p class="card-text">
                    NFTs can only be bought on our marketplace after our
                    official announcement. All information will be provided on
                    our social channels.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">
                  Which Blockchain is Rise of Immortals built on?
                </div>
                <a
                  href="#box-content15"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content15">
                <div class="card card-body">
                  <p class="card-text">
                    Rise of Immortals is built on the Arbitrum blockchain,
                    utilizing Immutable X as an L2 scaling solution. Polygon &
                    Binance Smart Chain support will be coming to the Rise of
                    Immortals Bridge in the near future.
                  </p>
                </div>
              </div>
              <div class=" detail d-flex">
                <div class="text ml-3 ">
                  Do I have to own a base/land in Rise of Immortals to play?
                </div>
                <a
                  href="#box-content16"
                  class="text-decoration-none mr-3 plus"
                  aria-expanded="false"
                  data-toggle="collapse"
                >
                  +
                </a>
              </div>
              <div class="collapse box-content" id="box-content16">
                <div class="card card-body">
                  <p class="card-text">
                    You do not need to own land outright to be able to play in
                    Rise of Immortals, but you do need to have access to a land
                    NFT. There are three ways you can control land in Rise of
                    Immortals, Ownership, Renting, or Partnerships. Renting is a
                    great option for new users looking to try out the game and
                    earn SAPPHIRE while playing. Partnerships require no upfront
                    payment but involve Sapphire (SAP) fee-sharing agreement
                    with the land owner.
                  </p>
                </div>
              </div>
            </div>
          </div></>:null}
          <div id="news">
            <div id="news-title">News</div>
           {!isMobile?<>
            <div class="news-content ">
              <div class="news-content-slide">
                <div
                  id="carouselBotAboutBanner"
                  class="#"
                  data-ride="#"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="images/Frame 112.png" alt="" />
                    </div>
                    <div class="carousel-item">
                      <img src="images/Frame 112.png" alt="" />
                    </div>
                    <div class="carousel-item">
                      <img src="images/Frame 112.png" alt="" />
                    </div>
                  </div>
                  <div class="position-relative m-auto" style={{ width: 565 }}>
                    <div
                      class="carousel-control-prev"
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
                    </div>
                    {/* <a class="carousel-control-prev" href="#carouselBotAboutBanner" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a> */}
                    <div
                      class="carousel-control-next"
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
                    </div>
                    {/* <a class="carousel-control-next" href="#carouselBotAboutBanner" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a> */}
                  </div>
                </div>
              </div>
              <div class="news-content-text d-flex flex-column py-5">
                <div>
                  <button id="btn-rois">New in Rise of Immortals</button>
                </div>
                <div id="text1">COMING SOON </div>
                <div id="read-more">Read more </div>
              </div>
            </div></>:<>
             <div className="row mt-3 mb-5">
              <div className="col-12">
              <div
                  id="carouselBotAboutBanner"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="images/Frame 112.png" alt="" />
                    </div>
                    <div class="carousel-item">
                      <img src="images/Frame 112.png" alt="" />
                    </div>
                    <div class="carousel-item">
                      <img src="images/Frame 112.png" alt="" />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center" >
                 
                  
                 <div className="col-6 d-flex justify-content-end">
                 <span
                        class="carousel-control-prev-icon"
                        style={{
                          display: "block ",
                        }}
                        aria-hidden="true"
                      ></span>
                 </div>
                 <div className="col-6 d-flex justify-content-start">
                 <span
                        class="carousel-control-next-icon"
                        style={{
                          display: "block ",
                        }}
                        aria-hidden="true"
                      ></span>
                    
                 </div>
                    
                   
                   
                    
                    
                 
                  </div>
                </div>
              </div>
            
             </div>
            </>}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
