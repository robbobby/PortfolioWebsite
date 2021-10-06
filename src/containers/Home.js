import DeskImage from "../components/images/Desk.jpeg";
import BinaryImage from "../components/images/BinaryImage.jpg";
import '../components/css/home.css'

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="column">
                    <div className="row">
                        <div className="home-para">
                            <p>Hello! My name is Robert and welcome to my portfolio website, over the past year I have
                                undertaken a career transformation into software development please take a look around at my projects and work. <br />
                                Please bear in mind this site is still under construction</p>
                        </div>
                        <div class="container">
                            <img src={DeskImage} className="home-image" />
                            <div class="block"></div>
                        </div>
                    </div>
                </div>
                <div className="grad1">
                    <div className="gradup">
                    </div>
                </div>
            </div>
        </ >
    )
}

export default Home;