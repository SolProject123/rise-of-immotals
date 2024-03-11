import React from "react";
import { useTranslation } from "react-i18next";
import Header, { useViewport } from "../../components/header";
import Footer from "../../components/footer";
import "./style.css";

export default function Staking() {
  const { t } = useTranslation();
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  return (
    <div id="staking">
      <div id="background-layer">
        <Header />
        {!isMobile ? (
          <>
            {" "}
            <div class="container d-block">
              <div id="land-nfts-container">
                <div id="land-nfts-content">
                  <img src="images/Asset 8 2.png" alt="" />
                  <div id="land-nfts-left">
                    <div id="land-nfts">
                      OWN YOUR <br></br> OLYMPUS LAND NFTs
                    </div>
                    <div id="land-nfts-text">
                      Own your Land, Hero and Statue NFTs <br></br> which can be
                      played in the game once Rise of Immortals is launched.
                    </div>
                    <button id="land-nfts-button" type="button ">
                      Owning Tutorial
                    </button>
                  </div>
                </div>
              </div>

              <div class="content">
                <div id="content1">
                  <div id="content1-text">
                    <div id="text1">Land Staking Rewards Now Available</div>
                    <div id="text2">
                      Stake your Land NFT to earn passive rewards.
                    </div>
                  </div>
                  <div id="content1-btn">
                    <button id="content1-button" type="button ">
                      Stake Land
                    </button>
                  </div>
                </div>
              </div>

              <div class="last-content mt-5 my-3">
                <div class="d-flex w-100 align-items-center flex-row-reverse">
                  <div class="position-relative img-explain px-4 pt-4 pb-5">
                    <div class="content2-text-detail px-4 pt-4">
                      Land NFTs – Land is the primary NFT asset in Rise of
                      Immortals. It is the primary requirement in building a
                      village and training an army.
                    </div>
                    <button
                      class="content2-button position-absolute"
                      type="button "
                    >
                      Coming soon
                    </button>
                  </div>
                  <div
                    class="position-relative container-img d-flex flex-column align-items-center"
                    id="last-content-1"
                  >
                    <img
                      src="images/281886969_5124306397645497_3470591421062792137_n 2.png"
                      alt=""
                    />
                    <div class="position-absolute text-center last-content-image-text">
                      Land NFTs
                    </div>
                  </div>
                </div>
              </div>
              <div class="last-content my-3">
                <div class="d-flex w-100 align-items-center flex-row-reverse">
                  <div class="position-relative img-explain px-4 pt-4 pb-5">
                    <div class="content2-text-detail px-4 pt-4">
                      Hero NFTs – Heroes are super-troops that support your army
                      in offensive fights and help protect your village from
                      assaults.
                    </div>
                    <button
                      class="content2-button position-absolute"
                      type="button "
                    >
                      Coming soon
                    </button>
                  </div>
                  <div
                    class="position-relative container-img d-flex flex-column align-items-center"
                    id="last-content-2"
                  >
                    <img src="images/Char_Poseidon_02 2.png" alt="" />
                    <div class="position-absolute text-center last-content-image-text">
                      Hero NFTs
                    </div>
                  </div>
                </div>
              </div>
              <div class="last-content my-3">
                <div class="d-flex w-100 align-items-center flex-row-reverse">
                  <div class="position-relative img-explain px-4 pt-4 pb-5">
                    <div class="content2-text-detail px-4 pt-4">
                      Statue NFTs – Statues enhance the efficiency of your
                      settlement by giving your troops and resources beneficial
                      boosts.
                    </div>
                    <button
                      class="content2-button position-absolute"
                      type="button "
                    >
                      Coming soon
                    </button>
                  </div>
                  <div
                    class="position-relative container-img d-flex flex-column align-items-center"
                    id="last-content-3"
                  >
                    <img src="images/Decor_ZeusStatue 3.png" alt="" />
                    <div class="position-absolute text-center last-content-image-text">
                      Statue NFTs
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-5"></div>
            </div>
          </>
        ) : (
          <>
            <div className="container">
              <div className="row mt-3 d-flex justify-content-center">
                <h1 id="title_mobile" className="text-center">
                  OWN YOUR <br /> OLYMPUS LAND NFTs
                </h1>
                <p className="subtitle text-center">
                  Own your Land, Hero and Statue NFTs which can be played in the
                  game once Rise of Immortals is launched.
                </p>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-active-gray">
                    <svg
                      style={{ marginRight: 10 }}
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 20C11.976 20 16 18.626 16 16V4C16 1.374 11.976 0 8 0C4.024 0 0 1.374 0 4V16C0 18.626 4.024 20 8 20ZM8 18C4.278 18 2 16.705 2 16V14.732C3.541 15.57 5.777 16 8 16C10.223 16 12.459 15.57 14 14.732V16C14 16.705 11.722 18 8 18ZM8 2C11.722 2 14 3.295 14 4C14 4.705 11.722 6 8 6C4.278 6 2 4.705 2 4C2 3.295 4.278 2 8 2ZM2 6.732C3.541 7.57 5.777 8 8 8C10.223 8 12.459 7.57 14 6.732V8C14 8.705 11.722 10 8 10C4.278 10 2 8.705 2 8V6.732ZM2 10.732C3.541 11.57 5.777 12 8 12C10.223 12 12.459 11.57 14 10.732V12C14 12.705 11.722 14 8 14C4.278 14 2 12.705 2 12V10.732Z"
                        fill="black"
                      />
                    </svg>
                    View Pools
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-second-gray">
                    <svg
                      style={{ marginRight: 10 }}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.09102 6.3207C8.41328 6.13594 8.81289 6.10586 9.13086 6.33789L15.3184 10.1191C15.6234 10.3082 15.8125 10.6391 15.8125 11C15.8125 11.3609 15.6234 11.6918 15.3184 11.8809L9.13086 15.6621C8.81289 15.8555 8.41328 15.8641 8.09102 15.6793C7.76445 15.4988 7.5625 15.1551 7.5625 14.7812V7.18008C7.5625 6.84492 7.76445 6.50117 8.09102 6.3207ZM22 11C22 17.0758 17.0758 22 11 22C4.92422 22 0 17.0758 0 11C0 4.92422 4.92422 0 11 0C17.0758 0 22 4.92422 22 11ZM11 2.0625C6.06289 2.0625 2.0625 6.06289 2.0625 11C2.0625 15.9371 6.06289 19.9375 11 19.9375C15.9371 19.9375 19.9375 15.9371 19.9375 11C19.9375 6.06289 15.9371 2.0625 11 2.0625Z"
                        fill="#F8F8F8"
                      />
                    </svg>
                    Owning Tutorial
                  </button>
                </div>
              </div>
              <div className="row" id="main_img">
                <img src="images/Asset 8 2.png" alt="" />
              </div>
              <div
                className="row f-flex justify-content-center align-items-center p-4"
                id="reware"
              >
                <h3 className="text-center" id="title_mobile">
                  Land Staking Rewards Now Available
                  <h3 className="text-left">
                    Stake your Land NFT to earn passive rewards.
                  </h3>
                </h3>
                <div className="row d-flex justify-content-start">
                  <button className="btn btn-light">Stake Land</button>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-5">
             <div className="row">
              <div className="col">
              <div className="card-items ">
                <img src="images/281886969_5124306397645497_3470591421062792137_n 2.png" alt="" />
                <div className="title mb-3">Land NFTs</div>
                <div className="subItems">
                Land NFTs – Land is the primary NFT asset in Rise of Immortals. It is the primary requirement in building a village and training an 
army.
                </div>
                <div className="row d-flex justify-content-center mt-3">
                  <button className="btn btn-light">Commong Soon</button>
                </div>
              </div>
              </div>
             </div>
             <div className="row mt-3">
              <div className="col">
              <div className="card-items bg_primary ">
                <img src="images/Char_Poseidon_02 2.png" alt="" />
                <div className="title mb-3">Hero NFTs </div>
                <div className="subItems">
                Hero NFTs – Heroes are super-troops that support your army in  offensive fights and help protect your village from assaults.
                </div>
                <div className="row d-flex justify-content-center mt-3">
                  <button className="btn btn-light">Commong Soon</button>
                </div>
              </div>
              </div>
             </div>
             <div className="row mt-3">
              <div className="col">
              <div className="card-items">
                <img src="images/Decor_ZeusStatue 3.png" alt="" />
                <div className="title mb-3">Statue NFTs</div>
                <div className="subItems">
                Statue NFTs – Statues enhance the efficiency of your settlement by giving your troops and resources beneficial boosts.
                </div>
                <div className="row d-flex justify-content-center mt-3">
                  <button className="btn btn-light">Commong Soon</button>
                </div>
              </div>
              </div>
             </div>
              </div>
            </div>
          </>
        )}
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}
