import {React, useEffect, useState} from 'react'
import "./Nav.css"

function Nav() {
const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img className="nav_logo" alt="Netflix Logo"
            src="https:////upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"/>
            
            <img className="nav_pro" alt="Netflix Profile"
            src="https://lh6.googleusercontent.com/proxy/rQuJlJFOw3Zhv0eScUnqIkn1ZfuhDygczlTQJ5Sgm2TpQqF8c0jKeFncya4Pts7-9G3DcFf_2XPSPWlKG2mx8HiKB5d4Sh09I6QtmU49G_j1XBznvFDHdL8=s0-d"/>
        </div>
    )
}

export default Nav
