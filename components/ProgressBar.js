import { useState } from 'react';
import styles from '../styles/progressbar.module.css'

const LOOKUP = {
    first: 'cumPeopleVaccinatedFirstDoseByPublishDate',
    second: 'cumPeopleVaccinatedSecondDoseByPublishDate'
}


export default function ProgressBar({ data }) {
    const [dose, setDose] = useState(LOOKUP.first)

    const population = data.pop
    const cummulative = data.dailyArr[0][dose]
    const value = (cummulative / population) * 100

    return (
        <section className={styles.progressBar} data-format={`${value.toFixed(2)}%`}>
            <div>
                <label>
                    <input
                        checked={dose === LOOKUP.first}
                        onChange={() => setDose(LOOKUP.first)}
                        type="radio"
                    />
            See people administered with <mark>first dose</mark>
          </label>
                <label>
                    <input
                        checked={dose === LOOKUP.second}
                        onChange={() => setDose(LOOKUP.second)}
                        type="radio"
                    />
            See people administered with <mark>second dose</mark>
          </label>
            </div>

            <progress max="100" value={value} />
        </section>

    )
}