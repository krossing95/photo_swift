import React, {useState} from 'react';
import styles from '../styles/nav.module.css'
import Link from 'next/link';
import Burger from './Burger';
import styled from 'styled-components';
import { Great_Vibes, Allura } from 'next/font/google';

const roboto = Great_Vibes({
  weight:['400'],
  subsets:['latin']
})
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={`${styles.nav}`}>
        <h2 className={roboto.className}>PhotoSwift</h2>
        <nav>
          <Burger menu={menu} setMenu={setMenu}/>
            <Menu className={styles.ul} menu={menu}>
                <Link href='/'><li>Home</li></Link>
                <Link href='/company'><li>Company</li></Link>
                <Link href='/pricing'><li>Pricing</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
                <Link href='/login' className={styles.login}><li>Login</li></Link>
            </Menu>
        </nav>
    </div>
  )
}

const Menu = styled.ul`
@media screen and (max-width:680px){
  display: ${({menu})=> {
  console.log(menu);
  return menu? 'block': 'none'}}
}
`
export default Navbar