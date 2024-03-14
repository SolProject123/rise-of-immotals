import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { resources, defaultLng } from "../../i18n";
import { motion, sync, useCycle } from "framer-motion";
import "./style.css";
import { Menu } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDimensions } from "../../hooks/useDimensions";

export const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};

export const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const _variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export default function Header() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  // console.log(height, isOpen, 'height')
  const headers = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Team",
      url: "/team",
    },
    {
      title: "Staking",
      url: "/staking",
    },
    {
      title: "Marketplace",
      url: "/market-place",
    },
    {
      title: "Token",
      url: "/token",
    },
    // {
    //   title: "Whitepaper",
    //   url: "",
    // },
  ];
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  const { i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  const checkIfActivePage = (path) => {
    return window.location.pathname === path;
  };
  return (
    <>
      {isMobile ? (
        <>
          <div style={{ height: '84px' }}></div>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="nav-mobile"
            style={{ height: '100vh' }}
          >
            <motion.div className="background" variants={sidebar} />
            <motion.ul
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {headers.map((v, i) => (
                <motion.li
                  key={i}
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 },
                      },
                    },
                    closed: {
                      y: 50,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 },
                      },
                    },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    className={
                      "nav-link nav-link-mobile " +
                      (checkIfActivePage(`${v.url}`) ? "active" : "")
                    }
                    style={{ pointerEvents: v.title === 'Whitepaper' ? 'none' : 'unset' }}
                    href={v.url}
                  >
                    {v.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div class="logo navbar-brand mt-2">
              <img alt="logo" src="images/Logo 1.png" />
            </div>
            <button
              disabled={isDisabled}
              onClick={() => {
                setIsDisabled(true);
                toggleOpen();
                setTimeout(() => {
                  setIsDisabled(false);
                }, 2000);
              }}
            >
              <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                  fill="black" stroke="#fff"
                  variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                  }}
                />
                <Path
                  d="M 2 9.423 L 20 9.423"
                  fill="black" stroke="#fff"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0, fill: '#000000', stroke: '#000000' },
                  }}
                  transition={{ duration: 0.1 }}
                />
                <Path
                  fill="black" stroke="#fff"
                  variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                  }}
                />
              </svg>
            </button>
          </motion.nav>
        </>
      ) : (
        <div className="container-fluid d-flex justify-content-center">
          <div
            id="header"
            style={{
              width: isMobile ? "100%" : "80%",
            }}
            class="d-flex navbar navbar-expand-lg"
          >
            <div class="logo navbar-brand">
              <img alt="logo" src="images/Logo 1.png" />
            </div>

            {isMobile == true ? (
              <div className="col d-flex justify-content-end">
                <button className="btn mobile">
                  <img src="images/codepen.png" />
                </button>
                <button
                  class="btn navbar-toggler mobile ml-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <Menu
                    style={{
                      color: "#FEB705",
                    }}
                  />
                </button>
              </div>
            ) : null}

            <div class="collapse navbar-collapse " id="navbarNavDropdown">
              <ul
                class="navbar-nav mr-auto d-flex justify-content-center"
                id="menu-list"
              >
                <li class="nav-item ">
                  <a
                    className={
                      "nav-link " + (checkIfActivePage("/") ? "active" : "")
                    }
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class={
                      "nav-link " +
                      (checkIfActivePage("/about") ? "active" : "")
                    }
                    href="/about"
                    style={{ marginLeft: 20 }}
                  >
                    About
                    {/* <ExpandMoreIcon /> */}
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class={
                      "nav-link " + (checkIfActivePage("/team") ? "active" : "")
                    }
                    href="/team"
                  >
                    Team
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class={
                      "nav-link " +
                      (checkIfActivePage("/staking") ? "active" : "")
                    }
                    href="/staking"
                  >
                    Staking
                    <div className="soon">Soon</div>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class={
                      "nav-link " +
                      (checkIfActivePage("/market-place") ? "active" : "")
                    }
                  >
                    Marketplace
                    <div className="soon">Soon</div>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class={
                      "nav-link " +
                      (checkIfActivePage("/token") ? "active" : "")
                    }
                  >
                    Token
                    <div className="soon">Soon</div>
                  </a>
                </li>
                {/* <li>
                  <a
                    class="nav-link"
                    href="https://rise-of-immortals.gitbook.io/rise-of-immortals/rise-of-immortals/what-is-rise-of-immortals"
                  >
                    Whitepaper
                  </a>
                </li> */}
              </ul>
            </div>
            {isMobile == false ? (
              <button
                className="btn btn-warning"
                style={{ color: "#000000", fontWeight: 500 }}
                id="wallet_btn"
              >
                BUY ROI
              </button>
            ) : null}
          </div>
        </div>
      )}
    </>

    // <div className="container-fluid d-flex justify-content-center">
    //   <div id="header" style={{
    //     width: isMobile ? "100%" : "80%"
    //   }} class="d-flex navbar navbar-expand-lg">

    //     {
    //       isMobile == true ?
    //         <div className="col d-flex justify-content-end">
    //           <button className="btn mobile" >
    //             <img src="images/codepen.png" />
    //           </button>
    //           <button class="btn navbar-toggler mobile ml-2" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //             <Menu style={{
    //               color: "#FEB705"
    //             }} />
    //           </button>

    //         </div> : null

    //     }

    //     <div class="collapse navbar-collapse " id="navbarNavDropdown">

    //       <ul class="navbar-nav mr-auto d-flex justify-content-center" id="menu-list">
    //         <li class="nav-item ">
    //           <a className={'nav-link ' + (checkIfActivePage('/') ? 'active' : '')} href="/">Home

    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class={'nav-link ' + (checkIfActivePage('/about') ? 'active' : '')} href="/about" style={{ marginLeft: 20 }}>About
    //             <ExpandMoreIcon />
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class={'nav-link ' + (checkIfActivePage('/team') ? 'active' : '')} href="/team">Team</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class={'nav-link ' + (checkIfActivePage('/staking') ? 'active' : '')} href="/staking">Staking
    //             <div className="soon">Soon</div>
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class={'nav-link ' + (checkIfActivePage('/market-place') ? 'active' : '')} >Marketplace
    //             <div className="soon">Soon</div>
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class={'nav-link ' + (checkIfActivePage('/token') ? 'active' : '')} >Token
    //             <div className="soon">Soon</div>
    //           </a>
    //         </li>
    //         <li>
    //           <a class="nav-link" href="https://rise-of-immortals.gitbook.io/rise-of-immortals/rise-of-immortals/what-is-rise-of-immortals">Whitepaper</a>
    //         </li>
    //       </ul>

    //     </div>
    //     {
    //       isMobile == false ? <button className="btn btn-warning" style={{ color: '#000000', fontWeight: 500 }} id="wallet_btn">Connect to Wallet</button> : null
    //     }
    //   </div >

    // </div>
  );
}
