import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <a href="https://github.com/midudev/covid-vacuna" target="_blank" rel="nofollow noopener noreferrer">
                    Forked and adapted from covid-vacuna
            </a>
                <a href="https://midu.dev/" target="_blank" rel="nofollow noopener noreferrer">
                    by midudev
            </a>
                <a href="https://github.com/pabrodez" target="_blank" rel="nofollow noopener noreferrer">
                    Adapted by: @pabrodez
            </a>
            </div>

            <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank" rel="nofollow noopener noreferrer">
                Contains public sector information licensed under the Open Government Licence v3.0.

            </a>

        </footer>
    )
}