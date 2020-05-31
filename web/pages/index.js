import { useRouter } from 'next/router'
import Header from './layout/Header'
import Layout from './component/Layout'
import SignIn from './component/Modal/SignUp'
import {Button} from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <Layout>
        Hello Next js World
      </Layout>
    </div>
  );
}
