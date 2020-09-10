import React, { useContext, useState, useEffect } from 'react'
import { ModalContext } from '../../config/context/ModalProvider'
import { CoverSettingImage } from './coverSettingStyle'
export default function CoverMember () {
  const { dataFriend } = useContext(ModalContext)
  const { height, width } = useWindowDimensions()

  return (
    // <>
    //   <CoverSettingImage
    //     imgCover={coverMember != undefined ? coverMember : ""}
    //     width={width < 991 ? 991 : width - 240}
    //   />
    // </>
    <>
      <CoverSettingImage
        imgCover={
          'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/s960x960/109577273_157263009293881_2533932874866637422_o.jpg?_nc_cat=105&_nc_sid=110474&_nc_eui2=AeGCUmEZ-J7vckRtjcuoHNsMP83UHtvfl5k_zdQe29-XmcT-V6ZQE9OALY5naGlKyMk&_nc_ohc=mafs3KFNaEEAX_F4UY4&_nc_ht=scontent.fbkk12-2.fna&_nc_tp=7&oh=f6d4af29556b50b2f7dca5fe42394cb8&oe=5F3778DB'
        }
        width={width < 991 ? 991 : width - 240}
      />
    </>
  )
}

function getWindowDimensions () {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

function useWindowDimensions () {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize () {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
