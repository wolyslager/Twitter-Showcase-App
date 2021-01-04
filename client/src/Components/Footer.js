import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faCodepen} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
	return(
		<footer class="footer">
		<a href="mailto:olyslager.willy@gmail.com" class="footer__link">Olyslager.willy@gmail.com</a>
		<hr className="horizontal"></hr>
		<ul class="social-list">
			<li class="social-list__item">
				<a class="social-list__link" href="https://codepen.io/dashboard/">
					<FontAwesomeIcon icon={faCodepen}  className="fa-lg" />
				</a>
			</li>
			<li class="social-list__item">
				<a class="social-list__link" href="https://github.com/wolyslager">
					<FontAwesomeIcon icon={faGithub}  className="fa-lg" />
				</a>
			</li>
			<li class="social-list__item">
				<a class="social-list__link" href="https://www.linkedin.com/in/william-olyslager-082151138/">
					<FontAwesomeIcon icon={faLinkedin}  className="fa-lg" />
				</a>
			</li>
		</ul>
	</footer>
	);

}

export default Footer