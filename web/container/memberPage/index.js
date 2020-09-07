import React, { useContext } from 'react'
import MunuMember from '../../component/munuMember'
import CoverMember from '../../component/cover/coverMember'
import LoadPage from '../loadPage'
import NotFound from '../notFound/index'
import { useRouter } from 'next/router'
import { ModalContext } from '../../config/context/ModalProvider'
export default function index ({ children }) {
  const router = useRouter()
  const { username } = router.query
  const { dataMember, dataFriend, nameMember, setActiveMenu } = useContext(ModalContext)
  const verifyMember = username == nameMember

  if (dataMember === undefined) {
    return <LoadPage />
  }

  // if(verifyMember === false){
  //   setActiveMenu('')
  //   return <NotFound />
  // }

  return (
    <>
      <CoverMember />
      <div className="container ">

        <div
          style={{
            position: 'relative',
            marginBottom: '150px'
          }}
        >

          <MunuMember />
          {children}
        </div>
      </div>
    </>
  )
}
