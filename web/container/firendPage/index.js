import React, { useContext } from 'react'
import { ModalContext } from '../../config/context/ModalProvider'
import MunuFriend from '../../component/munuMember/munuFriend'
import CoverFriend from '../../component/cover/coverFriend'
import LoadPage from '../loadPage'
export default function index ({ children }) {
  const { dataFriend } = useContext(ModalContext)
  if (dataFriend === undefined) {
    return <LoadPage />
  }

  return (
    <>
      <CoverFriend />
      <div className="container">

        <div
          style={{
            position: 'relative',
            marginBottom: '150px'
          }}
        >
          <MunuFriend />
          {children}
        </div>
      </div>

    </>
  )
}
