import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
    return (
        <Layout>
        <Head>
            <title>About</title>
        </Head>
            <h1>About page</h1>
            <h2><Link href="/"><a>Back</a></Link></h2>
        </Layout>
    )
}