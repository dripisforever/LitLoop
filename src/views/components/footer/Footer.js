import React from "react";

import SongControls from "views/components/SongControls/index";
import VolumeControls from "views/components/VolumeControls/index";
import "./Footer.css";
// import "./FooterStyled.css";

// const Footer = ({ stopSong, pauseSong, resumeSong, audioControl }) => (
//   <div className="footer">
//     <SongControls
//       stopSong={stopSong}
//       pauseSong={pauseSong}
//       resumeSong={resumeSong}
//       audioControl={audioControl}
//     />
//     <VolumeControls />
//   </div>
// );

function Footer({ stopSong, pauseSong, resumeSong, audioControl }){
  return (
    <div className="footer">
      <SongControls
        stopSong={stopSong}
        pauseSong={pauseSong}
        resumeSong={resumeSong}
        audioControl={audioControl}
      />
      {/*<VolumeControls />*/}
    </div>
  )
}

export default Footer;
