import React from 'react'
import { useRouter } from 'next/router'
import MemberPage from '../../../container/memberPage'
import { Button } from '../../../component/modal/style'
const Index = () => {
  const router = useRouter()
  const { username } = router.query
  return (
    <MemberPage>
      <div className="row container-fluid col-md-auto text-light mt-4 ">
        <h6 className="font-Medium my-auto">Loved Tracks (17)</h6>
        <div className="ml-auto">
          <Button style={{ letterSpacing: '3px' }} className="m-0 pr-5 pl-5">
            Play all
          </Button>
          <button
            style={{
              borderRadius: '100px',
              fontSize: '14px',
              letterSpacing: '3px'
            }}
            className="btn btn-outline-light pl-5 pr-5 ml-3"
          >
            Shuffle
          </button>
        </div>
      </div>

      <style jsx>{`

      hr{
          margin-bottom:25px;
          margin-top:25px;
        background-color:#282828}}
      }

      `}</style>
    </MemberPage>
  )
}

export default Index
