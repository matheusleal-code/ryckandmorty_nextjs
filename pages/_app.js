import '../styles/globals.css'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Menu from '../components/menu';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Menu/>
    </div>


  )
}

export default MyApp
