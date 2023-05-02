import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import {GrLocation} from 'react-icons/gr'
const NavBar = () => {
  return (
    <div className={`${styles['nav-belt']} position-static`}>
        <div className={styles['nav-left']}>
            <div className={styles['nav-logo']}>
            <Link to='/'>
                <span className={`${styles['nav-sprite']} ${styles['nav-logo-base']}`}></span>
                <span className={styles['nav-logo-locale']}>.in</span>
            </Link>
            </div>
            <div className={styles['nav-global-location-slot']}>
                <Link>
                   <div>
                      <GrLocation className={styles['nav-location']} stroke='white' size={20}/>
                   </div>
                   <div>
                     <span>Hello</span>
                     <span>Select your address </span>
                   </div>
                </Link>
            </div>
           
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default NavBar