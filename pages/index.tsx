import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import Navbar from "@/layout/navbar/Navbar";
import Footer from "@/layout/footer/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Travellayer - Your Gateway to Effortless Exploration!
                </title>
                <meta
                    name="description"
                    content="Explore the world effortlessly with Travellayer.com, your go-to online travel agency (OTA). Discover seamless flight booking, hotel reservations, and enticing tour packages. As Nigeria's dedicated online travel company, Travellayer is committed to making your travel experience affordable, enjoyable, and hassle-free. Find the best flight options from your favorite airlines and embark on unforgettable journeys with us."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
                <Navbar></Navbar>
                <div className={styles.description}>
                    <button>HeyHeyHeyHey</button>
                    <p>
                        Get started by editing&nbsp;
                        <code className={styles.code}>pages/index.tsx</code>
                    </p>
                    <div>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{" "}
                            <Image
                                src="/svg/vercel.svg"
                                alt="Vercel Logo"
                                className={styles.vercelLogo}
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.center}>
                    <Image
                        className={styles.logo}
                        src="/svg/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </div>

                <div className={styles.grid}>
                    <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Docs <span>-&gt;</span>
                        </h2>
                        <p>
                            Find in-depth information about Next.js features
                            and&nbsp;API.
                        </p>
                    </a>

                    <a
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Learn <span>-&gt;</span>
                        </h2>
                        <p>
                            Learn about Next.js in an interactive course
                            with&nbsp;quizzes!
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Templates <span>-&gt;</span>
                        </h2>
                        <p>
                            Discover and deploy boilerplate example
                            Next.js&nbsp;projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Deploy <span>-&gt;</span>
                        </h2>
                        <p>
                            Instantly deploy your Next.js site to a shareable
                            URL with&nbsp;Vercel.
                        </p>
                    </a>
                </div>
                <Footer />
            </main>
        </>
    );
}

