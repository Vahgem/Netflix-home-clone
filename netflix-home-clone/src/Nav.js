import React,{ useState,useEffect} from 'react'
import "./Nav.css"


function Nav() {
 const[show, handleshow]= useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleshow(true);
            }
            else{
                handleshow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="navLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
            alt="Netflix">
            </img>
       
        <img
        className="navAvatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User">
        </img>
         </div>
    )
}

export default Nav
