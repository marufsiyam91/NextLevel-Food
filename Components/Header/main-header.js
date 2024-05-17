
import Link from "next/link";
import Image from "next/image";
import styles from "./main-header.module.css";
import LogoImg from "../../assets/logo.png";
import NavLink from './navlink'

export default function MainHeader() {



  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={"/"}>
        <Image
          src={LogoImg}
          alt="A plate with food on it"
          width={100}
          height={100}
          priority
        />
        NEXTLEVEL FOOD
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href='/meals'>Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href='/community'>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
