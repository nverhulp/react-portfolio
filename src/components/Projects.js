import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Projects() {
    return (
        <div className="background-alt" id="projects">
            <h2 className="heading"><FontAwesomeIcon icon={faCode} /> Projects</h2>
            <div className="container">
                <div className="row">
                    <div className="shadow-large project">
                        <div className="project-image"><img alt="scu banner" draggable="false" src={require('../../images/bops.png')} width="300" height="50%" /></div>
                        <div className="project-info">
                            <h3>BOPS</h3>
                            <p>BOPS is an ecommerce website that is an online thrift shop. It allows a user to create their own profile and upload their own posts/products and they are able to browse and buy items from other users.</p><FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/lowsaetern/bops" target="_blank" rel="noopener noreferrer"> Github Repo</a> | <FontAwesomeIcon icon={faDesktop} /><a aria-label="website" draggable="false" href="https://bops.herokuapp.com/" target="_blank" rel="noopener noreferrer"> View Project Site</a>
                        </div>
                    </div>
                    <div className="shadow-large project">
                        <div className="project-image"><img alt="scu double dips" draggable="false" src={require('../../images/movie-app.png')} width="300" height="50%" /></div>
                        <div className="project-info">
                            <h3>Movie App</h3>
                            <p> There are many streaming platforms out there but the the recommendations are often stale. Say your only interested in 90’s action films, you need to know your options. You now have the tool to find the movies you want to watch. Movie App is a website that allows you to find new movies you like by searching various criteria. It allows anyone to search for movies in their preferred genre and specify by time period. The user will be able to find films that interest them and save their results.</p><FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/jacobmcanepa/movie-app" target="_blank" rel="noopener noreferrer"> Github Repo</a> | <FontAwesomeIcon icon={faDesktop} /><a aria-label="website" draggable="false" href="https://jc-movie-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"> View Project Site</a>
                        </div>
                    </div>
                    <div className="shadow-large project">
                        <div className="project-image"><img alt="san jose state university campus" draggable="false" src={require('../../images/wildfire-app.png')} width="300" height="50%" /></div>
                        <div className="project-info">
                            <h3>Wildfire App</h3>
                            <p> As California residents, we want a mobile app to help us preprae for a wildfire emergency so that we can plan, track our readiness level, and quickly access resources and information during a wildfire.</p><FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/nverhulp/wildfire-app" target="_blank" rel="noopener noreferrer"> Github Repo</a> | <FontAwesomeIcon icon={faDesktop} /><a aria-label="website" draggable="false" href="https://nverhulp.github.io/wildfire-app/" target="_blank" rel="noopener noreferrer"> View Project Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;