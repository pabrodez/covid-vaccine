import Layout from '../components/Layout'
import { readData } from '../lib/read-data'
import ProgressBar from '../components/ProgressBar'
import LastUpdate from '../components/LastUpdate'
import styles from '../styles/home.module.css'

export async function getStaticProps() {
  const data = readData();
  const updated = require('../public/data/updated.json')["updated"]

  return {
    props: {
      data,
      updated
    }
  }
}

const LOOKUP = {
  first: 'cumPeopleVaccinatedFirstDoseByPublishDate',
  second: 'cumPeopleVaccinatedSecondDoseByPublishDate',
  newFirst: 'newPeopleVaccinatedFirstDoseByPublishDate',
  newSecond: 'newPeopleVaccinatedSecondDoseByPublishDate'
}

export default function Home({ data, updated }) {

  const times = {
    lastPublished: data.dailyArr[0]["date"],
    lastUpdateTimestamp: updated
  }

  const cummuFirst = data.dailyArr[0][LOOKUP.first]
  const cummuSecond = data.dailyArr[0][LOOKUP.second]
  const newFirst = data.dailyArr[0][LOOKUP.newFirst]
  const newSecond = data.dailyArr[0][LOOKUP.newSecond]

  const formattedFirst = new Intl.NumberFormat().format(cummuFirst)
  const formattedSecond = new Intl.NumberFormat().format(cummuSecond)
  const formattedNewFirst = new Intl.NumberFormat().format(newFirst)
  const formattedNewSecond= new Intl.NumberFormat().format(newSecond)

  const prevDate = new Date(data.dailyArr[1]["date"] ?? data.dailyArr[0]["date"])
  const farmattedPrevDate = new Intl.DateTimeFormat('en-GB', {month: 'long', day: 'numeric'}).format(prevDate)

  return (

    <Layout>
      <h1 className={styles.title}>COVID-19 vaccination tracker in the UK</h1>

      <section className={styles.cardGrid}>
        <div className={styles.card}>
          <p>{formattedFirst}</p>
          <h3>First doses</h3>
        </div>
        <div className={styles.card}>
          <p>{formattedSecond}</p>
          <h3>Second doses</h3>
        </div>
        <div className={styles.card}>
          <p>{formattedNewFirst}</p>
          <h4>New first doses</h4>
          <p>{formattedNewSecond}</p>
          <h4>New second doses</h4>

          Since <time title={farmattedPrevDate} dateTime={farmattedPrevDate}>{farmattedPrevDate}</time>
        </div>

      </section>

      <ProgressBar data={data} />
      <LastUpdate times={times} />

    </Layout>

  )
}
