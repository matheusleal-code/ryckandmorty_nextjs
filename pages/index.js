import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({ character, info }) {
  return (
    <div className={styles.container}>
      <h1>Ryck and Morty</h1>
    </div>
  )
}