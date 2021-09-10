import { useState } from 'react';
import styles from './styles.module.css'

import Link from 'next/link'

function Menu() {

    const [isShowMenu, setIsShowMenu] = useState(false);

    return (
        <section className={styles.headerContainer}>
            <div className={isShowMenu ? styles.btnMenuActive : ''}>
                <nav className={styles.menuMobile}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/characters">
                                <a>Characters</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Episodes</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>About</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav className={styles.btnMenu} onClick={() => setIsShowMenu(!isShowMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </nav>
            </div>
        </section>
    )
}

export default Menu