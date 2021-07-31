import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
export const Navbar = ({}) => {


	return (
		<div>
			<ul>
				<li><a style={{fontWeight: '800', fontSize: '18px'}}>Where in the world?</a></li>
        		<li style={{float: 'right'}}><a><FontAwesomeIcon icon={faMoon} /> Dark Mode</a></li>
			</ul>
		</div>
	);
}

export default Navbar;