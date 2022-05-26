import './Header.scss';
import logo from '../../assets/icons/travel-journal__logo.png';
export default function Header() {  
    return(
        <div className="header">
            <img className='header__logo' src={logo} alt="Travel journal logo"/>
            <h1 className='header__title'>my travel journal.</h1>
        </div>
    )
}