import React from 'react';
import { Link } from 'react-router-dom';
import Header, { useViewport } from "../../components/header";
import './style.css';

export default function Stores() {
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  return (
    <div class="socials">
      <div className={isMobile?"socials-title text-center":"socials-title "}>Follow Rise of Immortals on</div>
      <div>
        <a  href="https://t.me/RiseofImmortalsAnnouncements"><img src="images/Social/Telegram.png" alt="telegram" /></a>

        <a  href="https://www.instagram.com/riseofimmortals/"><img src="images/Social/Instagram.png" alt="instagram" /></a>
        <a  href="https://twitter.com/ImmortalsRise"><img src="images/Social/Twitter.png" alt="twitter" /></a>
        <a  href="" data-toggle="tooltip" data-placement="top" title="COMING SOON "><img src="images/Social/Discord.png" alt="discord" /></a>
        <a  href="https://www.youtube.com/channel/UCpZSWKEYHAfPaoG5LsFm7Cw" ><img src="images/Social/Youtube.png" alt="youtube" /></a>
   
        <a  href="" data-toggle="tooltip" data-placement="top" title="COMING SOON "><img src="images/Social/8.png" alt="" /></a>
        <a  href="" data-toggle="tooltip" data-placement="top" title="COMING SOON "><img src="https://statics.mavia.com/landing/public/images/social/med.svg?w=32&q=75" alt="" style={{
          width:25
        }} /></a>
         <a  href="" data-toggle="tooltip" data-placement="top" title="COMING SOON "><img src="https://statics.mavia.com/landing/public/images/social/coinmarketcap.svg?w=32&q=75" alt="" style={{
          width:25
        }} /></a>
         <a  href="" data-toggle="tooltip" data-placement="top" title="COMING SOON ">
         <svg width="24px" height="24px" viewBox="0 0 24 24" id='icon_white' role="img" xmlns="http://www.w3.org/2000/svg"><path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c.005.49.4.887.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377z"/></svg></a>
      </div>
    </div>
  );
};
