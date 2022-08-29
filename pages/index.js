import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<div className="navbar bg-base-100">
  <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}