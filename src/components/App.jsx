import React  from "react";
import HomePage from "./HomePage";
import JoinUs from "./JoinUs";
import '../css/styles.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

    function initialDynamicSetup() {
        if (document.location.href.split('/')[3] === "join-us")
            return;
        if (document.location.hash === "") {
          var scrollDistance = Math.ceil(document.documentElement.scrollTop);
          if (scrollDistance === 0) {
            document.querySelector("#navmenu li a").classList.add('active');
          } else {
            var links = document.getElementById("navmenu").getElementsByTagName("a");
            if (links.length > 0) {
                var prev = links[0];
                if (document.getElementById(prev.id.replace('a-', '')).offsetTop <= scrollDistance) {
                    prev.classList.add('active');
                }
                for (let i = 1; i < links.length; i++) {
                    const link = links[i];
                    if (link.id.replace('a-', '') === 'join-us'){
                        break;
                    }
                    if (document.getElementById(link.id.replace('a-', '')).offsetTop > scrollDistance) {
                        break;
                    }
                    prev.classList.remove('active');
                    link.classList.add('active');
                    prev = link;
                }
            }
          }
        } else {
          if (document.getElementById(document.location.hash.replace('#', '')) != null) {
            document.getElementById('a-' + document.location.hash.replace('#', ''))
            .classList.add('active');
          }
        }
    }
    
    function onScrollListener() {
    var scrollDistance = Math.ceil(document.documentElement.scrollTop);
    if (document.getElementById("navmenu") !== null){
        var links = document.getElementById("navmenu").getElementsByTagName("a");
    }
    
    Array.from(links).forEach((link) => {
        if(link.id.replace('a-', '') !== 'join-us'){
            if (document.getElementById(link.id.replace('a-', '')).offsetTop <= scrollDistance) {
                var activeLink = document.querySelector("#navmenu li a.active");
                if (activeLink !== null) {
                    activeLink.classList.remove('active');
                    link.classList.add('active');
                }
            }
        }
    });
    }
    window.addEventListener("load", initialDynamicSetup);
    window.addEventListener("scroll", onScrollListener);
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/join-us" component={JoinUs} />
            </div>
        </Router>
    )
}

export default App;