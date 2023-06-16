import React from 'react'
import {Home, LiveTv, PersonOutline, Search, VideoLibrary,FlashOn} from "@material-ui/icons";
import "./Header.css";

const Headers = () => {
  return (
    <div className="header">
        <div className="header_icons">
          <div className="header_icon header_icon--active">
             <Home />
             <p>Home</p>
          </div>
          <div className="header_icon">
          <FlashOn />
          <p>Trending</p>
          </div>
          <div className="header_icon">
          <LiveTv />
          <p>Verified</p>
       </div>
       <div className="header_icon">
       <VideoLibrary />
       <p>Collections</p>
    </div>
    <div className="header_icon">
    <Search />
    <p>Search</p>
 </div>
 <div className="header_icon">
 <PersonOutline />
 <p>Account</p>
</div>
       </div>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ehv0a0PlGqkEmxJfi6ukj6rVLw_e7FhGRw&usqp=CAU'
        alt='' />
        </div>

  )
}

export default Headers
