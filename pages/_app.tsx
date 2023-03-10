import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={styles.h1}>
            Bienvenidos a{" "}
            <b className={styles.highlighted}>
              <Link href="/">FlyBondi</Link>
            </b>
          </h1>
        </div>
        <Component {...pageProps} />
      </main>
    </>
  );
}
