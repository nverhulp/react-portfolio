import React from "react"
import { Link } from 'react-scroll' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCopy } from '@fortawesome/free-solid-svg-icons' 

function Header() {  
    return ( 
        <div id="lead">
            <div id="lead-content">
                <h1>Nicole J. Verhulp</h1>
                <h2>UC Davis Graduate</h2><a aria-label="resume" draggable="false" href="https://nverhulp.github.io/react-portfolio/resume.html" target="_blank" rel="noopener noreferrer" className="btn-rounded-white"><FontAwesomeIcon icon={faCopy}/> My Resume</a>
            </div>
            <div id="lead-overlay"></div>
            <div id="lead-down"> 
                <Link rel="nofollow" to="about" spy={true} smooth={true}><span><FontAwesomeIcon icon={faChevronDown} /></span></Link>
            </div> 
        </div>
    ) 
}

export default Header;