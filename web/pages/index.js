import { useRouter } from 'next/router'
import Layout from '../layout/Layout'
import styles from 'styled-components'
import Test from '../test/test'

export default function Home() {
  return (
    <div>
      <Layout>
        Hello Next js World
      </Layout>
      <Test/>
    </div>
  );
}
