import bops from '../../assets/bops.jpg';
import movieApp from '../../assets/movie-app.jpg';
import wildFireApp from '../../assets/wildfire-app.jpg';
import passwordGenerator from '../../assets/password-generator.jpg';
import workDayScheduler from '../../assets/work-day-scheduler.jpg';
import codeQuiz from '../../assets/code-quiz.jpg';

function Project() {
    const projectList = [
        {
            id: 0,
            title: "BOPS",
            tech: "React, Redux, SASS, JavaScript, MongoDB, Heroku",
            img: bops,
            description: "BOPS is an ecommerce website that is an online thrift shop. It allows a user to create their own profile and upload their own posts/products and they are able to browse and buy items from other users.",
            repo: "https://github.com/lowsaetern/bops",
            live: "https://bops.herokuapp.com/",
        },
        {
            id: 1,
            title: "Movie App",
            tech: "Handlebars, CSS, JavaScript, Node, SQL, Express, OpenAI",
            img: movieApp,
            description: "There are many streaming platforms out there but the the recommendations are often stale. Say your only interested in 90’s action films, you need to know your options. You now have the tool to find the movies you want to watch. Movie App is a website that allows you to find new movies you like by searching various criteria. It allows anyone to search for movies in their preferred genre and specify by time period. The user will be able to find films that interest them and save their results.",
            repo: "https://github.com/jacobmcanepa/movie-app",
            live: "https://jc-movie-app.herokuapp.com/",
        },
        {
            id: 2,
            title: "Wildfire App",
            tech: "HTML, CSS, JavaScript, API",
            img: wildFireApp,
            description: "As California residents, we want a mobile app to help us preprae for a wildfire emergency so that we can plan, track our readiness level, and quickly access resources and information during a wildfire.",
            repo: "https://github.com/nverhulp/wildfire-app",
            live: "https://nverhulp.github.io/wildfire-app/",
        },
        {
            id: 3,
            title: "Password Generator",
            tech: "HTML, CSS, JavaScript",
            img: passwordGenerator,
            description: " This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.",
            repo: "https://github.com/nverhulp/password-generator",
            live: "https://nverhulp.github.io/password-generator/",
        },
        {
            id: 4,
            title: "Work Day Scheduler",
            tech: "HTML, CSS, JavaScript",
            img: workDayScheduler,
            description: "Create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
            repo: "https://github.com/nverhulp/work-day-scheduler",
            live: "https://nverhulp.github.io/work-day-scheduler/",
        },
        {
            id: 5,
            title: "Code Quiz",
            tech: "HTML, CSS, JavaScript",
            img: codeQuiz,
            description: "This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface.",
            repo: "https://github.com/nverhulp/code-quiz",
            live: "https://nverhulp.github.io/code-quiz/",
        },
    ]
    return (
        <section>
            <h1 className='text-center m-2'>My Past Projects</h1>
            <div className='container'>
                <div className='row'>
                    {projectList.map((project) => (
                        <div key={project.id} className='col-12 col-lg-6 text-center p-2'>
                            <div className='card m-2 p-2 customCard'>

                                <img src={project.img} alt={`Screenshot of ${project.title}`} width='300' height='250' className='m-auto cardImage' />
                                <div className='cardInfo'>
                                    <h3 className="m-1">{project.title}</h3>
                                    <p className="m-1">{project.description}</p>
                                    <p className="m-0">
                                        <a href={project.repo} target='_blank' rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 16 16" className="icon-logo mx-2 bi bi-github">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>
                                        {project.live !== null &&
                                            <a href={project.live} target='_blank' rel="noopener noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 16 16" className="icon-logo mx-2 bi bi-box-arrow-up-right">
                                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                                </svg>
                                            </a>
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;