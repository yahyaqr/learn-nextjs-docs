import Link from 'next/link';

import Date from '../date';

export default function BioSection() {
    return (
        <>
            <section className={utilStyles.headingMd}>
                <p>First and foremost, I love graphic design 🖌️, writing code 💻, and educating people 👨‍🏫. I'm not good at aesthetics, but I understand design systems and design principles well. I'm not good at performance and charisma, but I can understand why humans do things and how to exploit it. I accept my vulnerabilities as a cause to harness my strength.</p>
                <p>I found my love for frontend development because frontend developers combine graphic design and programming skills to help users better understand how to use an application. I enjoy testing and implementing user interface designs repeatedly to determine the best design composition. I also find enjoyment when my products have been launched and used by many people.</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>

            {/* className menggunakan JS on Strings */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {/* Menggunakan .map untuk looping dan pecah id-date-title sesuai iterasi */}
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
