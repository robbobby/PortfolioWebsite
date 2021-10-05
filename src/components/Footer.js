import '../components/css/footer.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab)
const Footer = () => {

    return (
        <div className="footer">
            <p>Robert Hollingworth 2001</p>
            <div>
                <a href="https://www.linkedin.com/in/robert-hollingworth/" target="_blank">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} className='footer-image' size='2x' />
                </a>
                <a href="https://github.com/robbobby" target="_blank">
                    <FontAwesomeIcon icon={["fab", "github"]} className='footer-image' size='2x' />
                </a>
                <i class="fab fa-github"></i>
            </div>
        </div >

    )
}

export default Footer