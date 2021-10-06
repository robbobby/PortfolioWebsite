import CosmodexImage from "../components/images/CosemodexSS.jpg";
import EmeraldImage from "../components/images/MirEmerald.jpg";
import ImageComingSoon from "../components/images/Image-Coming-Soon.png"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Projects = () => {
    return (
        < div className="page-body">
            <h2>Projects - under construction</h2>
            <div className="column">
                <div className="row">
                    <div>
                        <h4>Cosemodex</h4>
                        <a href="http://cosmodex-bucket-1.s3-website-eu-west-1.amazonaws.com/" target="_blank">
                            <img src={CosmodexImage} className="website-screenshot" />
                        </a>
                    </div>
                    <div className="column-right, project-description">
                        <p>
                            Cosmodex is an app aimed at children to educate them on solar system. <br />
                            It features interactive images and a to scale working system of the solar system. <br />
                            <h4>Tech Stack</h4>
                            Vue, JavaScript, Express, NodeJS, APIs, MongoDB, CSS and HTML
                        </p>
                        <a href="https://github.com/robbobby/the-curly-boys-space-adventure" target="_blank">
                            <FontAwesomeIcon icon={["fab", "github"]} className='project-github-image' size='2x' />
                        </a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="column-right, project-description">
                    <p>This is an open source project I did some work on, it is a re-creation of a game that was closed some time ago. <br />
                        It uses a pervious version of a different games networking and engine and uses Unity more for the graphical engine.<br />
                        The project has multiple developers and graphical eningeers working on it which I have been proud to contribute to.
                        <h4>Tech Stack</h4>
                        Unity, C#.</p>

                    <a href="https://github.com/Suprcode/Emerald" target="_blank">
                        <FontAwesomeIcon icon={["fab", "github"]} className='project-github-image' size='2x' />
                    </a>
                </div>
                <div>
                    <h4>Mir Emerald - Open Source MMORPG</h4>
                    <img src={EmeraldImage} className="website-screenshot" />
                </div>
            </div>

            <div className="row">
                <div>
                    <h4>Juan In A Million Pizza</h4>
                    <img src={ImageComingSoon} className="website-screenshot" />
                </div>
                <div className="column-right, project-description">
                    <p>
                        An app designed for restaurant customers to make orders from the browser. Inspired by Domino's Pizza, McDonald's and Just-Eat.  <br />
                        The customer is able to browse the menu, submit an order and pay for their food. <br />
                        In the long run, the app will be designed for both sit-in and takeaway use, will be mobile compatible and will contain an animated order update page.

                        <h4>Tech Stack</h4>
                        JavaScript,
                        React,
                        Java,
                        Maven,
                        Spring,
                        Hibernate,
                        SQL,
                        NPM,
                        Jackson,
                        react-credit-cards</p>

                    <a href="https://github.com/Max-Zilvester/E44_Final_Project" target="_blank">
                        <FontAwesomeIcon icon={["fab", "github"]} className='project-github-image' size='2x' />
                    </a>
                    <p>Website hosting coming soon</p>
                </div>
            </div>
        </div >
    )
}

export default Projects;