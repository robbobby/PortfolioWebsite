import CosmodexImage from "../components/images/CosemodexSS.jpg";
import EmeraldImage from "../components/images/MirEmerald.jpg";

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
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="column-right, project-description">
                    <p>This is an open source project I did some work on, it is a re-creation of a game that was closed some time ago. <br />
                        It uses a pervious version of a different games networking and engine and uses Unity more for the graphical engine.<br />
                        The project has multiple developers and graphical eningeers working on it which I have been proud to contribute to.</p>
                    <h4>Tech Stack</h4>
                    Unity, C#
                </div>
                <div>
                    <h4>Mir Emerald - Open Source MMORPG</h4>
                    <img src={EmeraldImage} className="website-screenshot" />
                </div>
            </div>

            <div className="row">
                <div>
                    <h4>Juan In A Million Pizza</h4>
                    <a href="http://cosmodex-bucket-1.s3-website-eu-west-1.amazonaws.com/" target="_blank">
                        <img src={CosmodexImage} className="website-screenshot" />
                    </a>
                </div>
                <div className="column-right, project-description">
                    <p>
                        Juan In A Million Pizza Coming shortly
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="column-right, project-description">
                    <p>Project Manager coming shortly</p>
                </div>
                <div>
                    <h4>Project Manager</h4>
                    <img src={CosmodexImage} className="website-screenshot" />
                </div>
            </div>

        </div >
    )
}

export default Projects;