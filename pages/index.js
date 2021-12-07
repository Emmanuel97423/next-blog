import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'
import Date from '../components/date'

// Maintenant, nous devons ajouter une importation pour getSortedPostsDataet l'appeler à l'intérieur getStaticPropsdans pages / index.js.

// Ouvrez pages / index.jsdans votre éditeur et ajoutez le code suivant au - dessus du Homecomposant exporté:

import { getSortedPostsData } from '../lib/posts'

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Emmanuel french software engineer and UI/UX Designer. You can contact me on <a href="https://twitter.com/EpokSc2">Twitter</a></p>
        <p>
          (This is a sample website - you’ll be building a site like this in React - {' '}
          <a href="https://nextjs.org/">Next.js</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className="utilsStyles.headingLg">Blog</h2>
        <ul className="utilsStyles.list">

          {allPostsData.map(({ id, date, title }) => {

            return (
              <li className="utilsStyles.listItem" key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className="utilsStyles.lighText">
                  <Date dateString={date} />

                </small>
              </li>
            )

          })}

        </ul>
      </section>
    </Layout>
  )
}

export default Home