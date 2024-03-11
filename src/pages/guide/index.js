import React from "react";
import Header ,{ useViewport } from '../../components/header';
import Footer from '../../components/footer';
import './style.css';
import ListBuilding from "./ListBuilding";

import { data } from './data';


export default function Guide() {
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  
  return (
    <div id="guide">
      <div id="background-layer">
        <Header />
        <div class="container d-block">
          <div id="title">
            Rise of Immortals Guide
          </div>
          <div id="title-detail">
            Welcome to an ad-free, mobile-friendly, and multi-lingual database for Rise of Immortals.
            <br></br>
            Our database is composed of a vast and unique collection of army troops and defense systems.
            <br></br>
            All of the data is pulled directly from the game files. So, stay tuned and always be up to date with our new game updates!
            <br></br>
            Upgrades on buildings help unlock more content which will arm your village with more sophisticated troops and defenses.
          </div>
          <div class="d-flex justify-content-center">
            <div class="text-center quote position-relative mt-4 ">
             
              <span>
              <span id="vision-quote-start">"</span>
                This is not the complete version, it is for beta only.
                <br />We will update with better and complete versions soon.
                <span id="vision-quote-end">"</span>
                </span>
             
            </div>
          </div>
          <div id="search" class="bg-light text-dark mx-auto d-flex align-items-center position-relative">
            <i class="material-icons position-absolute">search</i>
            <input type="text" placeholder="Search" class="border-0 text-dark w-100 h-100"></input>
          </div>

          {data.map((listItem) => (
            <ListBuilding listItem={listItem} />
          ))}
          {!isMobile?<>  <div class="mb-5">
            <div class="village-title">Heroes</div>
            <div class="coming-soon">COMING SOON</div>
          </div>
          <div class="mb-5">
            <div class="village-title">Troops</div>
            <div class="coming-soon">COMING SOON</div>
          </div>
          <div class="mb-5">
            <div class="village-title">Spells</div>
            <div class="coming-soon">COMING SOON</div>
          </div>
          <div class="mb-5">
            <div class="village-title">Obstacles</div>
            <div class="coming-soon">COMING SOON</div>
          </div>
          <div class="mb-5">
            <div class="village-title">Scenery</div>
            <div class="coming-soon">COMING SOON</div>
          </div></>:<>
          <div className="row d-flex justify-content-center " style={{
            fontSize:25,
            fontWeight:700
          }}>
          Heroes / Troops / Spells
          <br/>
            bstacles / Scenery
            
            </div>
            <div className="row container mb-5">
            <div id="advisor" className="row d-flex justify-content-center">
                 <div className="col-12">
                 COMING SOON
                 </div>
           </div>
              </div></>}
        
        </div>
        <Footer />
      </div>
    </div >
  );
}
