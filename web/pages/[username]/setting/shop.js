import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import MenuSetting from '../../../component/menuSetting'
import { ModalContext } from '../../../config/context/ModalProvider'
export default function Shop () {
  const router = useRouter()
  const { username } = router.query
  const { nameMember } = useContext(ModalContext)
  const verifyMember = username == nameMember
  return (
    <MenuSetting>
      <h1>Page shop </h1>
    </MenuSetting>
  )
}
