import {Modal , Card } from 'react-bootstrap'
import { AiFillFacebook , AiFillGooglePlusCircle , AiFillTwitterCircle } from "react-icons/ai"
import Link from 'next/link'
import Button from '../button/loginButton'
import Listener from '../../public/assets/img/option/Listen to music.png'
import Artist from '../../public/assets/img/option/Artits.png'
export default function SelectModal(props) {
return(
  <>
      <Modal
      {...props}
      aria-labelledby="contained-modal-title-center"
      centered
    >
      <Modal.Body>
      <div className="form-group" align="center"><h3> Select the option the best describe you. </h3>
      <span className="text-sm-left txt2" id="describe"> Select the option the best describe you. </span></div>
      <div className="row">
    <Card style={{ width: '12rem' }} className="card">
    <br />
  <img src={Listener} />
  <Card.Body>
    <div className="form-check ">
    <div>
        <label className="text-title">Listen to music</label>
    </div>
        <input className="form-check-input radio" type="radio" value="option1"  />
    </div>
  </Card.Body>
    </Card>
    <Card style={{ width: '12rem' }}>
    <br />
  <img src={Artist}alt="Artist" />
  <Card.Body>
    <div className="form-check ">
    <div>
        <span className="text-title">Artist</span>
    </div>
        <input className="form-check-input radio" type="radio" value="option1"  />
    </div>
  </Card.Body>
    </Card>
      </div>
      <br />
      <div className="footer">
      <Button type="submit"> Finish </Button>
      </div>
      </Modal.Body>
  <style jsx>{`
  h3 {
    font-weight: 750;
    font-size: 25px;
    align-items: center;
    padding-left: 5px ;
  }

  a {
    font-size: 12px;
    color: rgb(224, 139, 28);
    padding-left: 5px ;
  }

  img {
    width: 75px;
    height: 75px;
    margin-left: 60px;
  }

  .txt2 {
    font-size: 11px;
    color: #b6b6b6;
  }

  .input-title {
    font-size: 13px;
  }

  .frm-input{
    border-color: #e7e7e7;
  }

  .header {
    border: 0;
  }

  .footer {
    align-items: center;
    margin-left: 150px;
  }

  .row {
    margin-left: 40px;
  }

  .radio {
      margin-left: 40px;
      align-items: center;
  }

  .text-title{
      font-size: 11px;
      align-items: center;
      margin-left: 30px;
  }
    `}</style>
    </Modal>
  </>
    )

  }