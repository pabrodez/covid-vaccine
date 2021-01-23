import styles from '../styles/lastupdate.module.css'

export default function LastUpdate({ times }) {

    const datePub = new Date(times.lastPublished)
    const hoursAgo = Math.floor((Date.now() - new Date(times.lastUpdateTimestamp)) / (1000 * 60 * 60))

    const pubFormat = new Intl.DateTimeFormat('en-GB', { month: 'short', day: '2-digit' }).format(datePub)
    const agoFormat = new Intl.RelativeTimeFormat('en-GB', { style: 'long' }).format(hoursAgo * -1, 'hour')

    return (
        <small className={styles.lastUpdate}>
            Last published:&nbsp;
            <time title={pubFormat} dateTime={pubFormat}>
                {pubFormat}
            </time>
            . Last updated:&nbsp;
            <time title={agoFormat} dateTime={agoFormat}>
                {agoFormat}
            </time>
            . Source:&nbsp;
            <a href="https://coronavirus.data.gov.uk/details/vaccinations" target="_blank" rel="nofollow noopener noreferrer">
                Gov UK
            </a>
        </small>
    )
}