import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import SwitchSection from './section/sectionSwitcher';

import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

// siteTitle juga di-export
const name = 'Yahya Aqrom';
export const siteTitle = 'Personal Website: ' + name;

export default function layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    // Kalo HOME tanpa Link
                    <>
                        <Image
                            priority
                            src="/images/profile.png"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=""
                        />
                        <h1 className={utilStyles.heading2x1}>{name}</h1>
                        <SwitchSection></SwitchSection>
                    </>
                ) : (
                    // Selain HOME menjadi Link
                    <>
                        <Link href="/">
                            <Image href="/"
                                priority
                                src="/images/profile.png"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                        <div>
                            <button>Link Tree</button>
                            <button>Portofolio</button>
                        </div>
                    </>
                )}
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">Back to Home</Link>
                </div>
            )}
        </div>
    )
}
