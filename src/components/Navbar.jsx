import React from "react";
import { Link } from "react-router-dom";
import aavrtti_logo from "../media/aavrtti_logo.png";

function Navbar()
{
    function showMenu() {
        if (document.getElementById("check").checked) {
            document.getElementById('navmenu').classList.add('menu-clicked');
        } else {
            document.getElementById('navmenu').classList.remove('menu-clicked');
        }
    }

    function menuSelect() {
        var activeLinks = document
        .getElementById("navmenu")
        .getElementsByClassName("active");
        
        if (activeLinks != null && activeLinks.length > 0) {
            activeLinks[0].classList.remove("active");
        }
        document.activeElement.classList.add("active");
        document.getElementById("check").checked = false;
        document.getElementById("navmenu").classList.remove('menu-clicked');
    }

    function openNewWindow() {
        const newWindow = window.open('/join-us');
        if (newWindow) newWindow.opener = null
    }
    
    return (
        <nav id = "navbar">
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <div id="brand" className="navbar-brand">
                <img src={aavrtti_logo} alt="Aavrtti Logo" />
                <div>
                    <p>AAVRTTI</p>
                    {/* <p>Technologies</p> */}
                </div>
            </div>
            <input type="checkbox" id="check" onClick={showMenu} />
            <ul id="navmenu">
            <li>
                <a id="a-home" href="#home" onClick={menuSelect}>
                    Home
                </a>
            </li>
            <li>
                <a id="a-what-we-do" href="#what-we-do" onClick={menuSelect}>
                    What We Do
                </a>
            </li>
            <li>
                <a id="a-who-we-are" href="#who-we-are" onClick={menuSelect}>
                    Who We Are
                </a>
            </li>
            <li>
                <a id="a-contact" href="#contact" onClick={menuSelect}>
                    Contact
                </a>
            </li>
            <li>
                {/* <a id="a-join-us" href="#join-us" onClick={menuSelect}> */}
                <Link id="a-join-us" to="/" onClick={openNewWindow}>
                    Join Us
                </Link>
                {/* </a> */}
            </li>
      </ul>
    </nav>
    )
}

export default Navbar;