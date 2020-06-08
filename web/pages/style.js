export default function StyleJSX(props) {
    return(
        <>
        {props.children}
        <style jsx global>{`
          h3 {
            font-weight: 750;
            font-size: 25px;
            align-items: center;
            padding-left: 5px;
          }

          nav-link {
            font-size: 16px;
          }

          a {
            font-size: 12px;
            color: rgb(224, 139, 28);
            padding-left: 5px;
          }

          img {
            width: 18px;
            height: 18px;
          }

          .modal-size {
            width: 70%;          }

          .txt2 {
            font-size: 11px;
            color: #b6b6b6;
          }

          .input-title {
            font-size: 13px;
          }

          .input-frm {
            border-color: #e7e7e7;
            font-size: 13px;
          }

          .header {
            border: 0;
          }

          .radio {
            margin-left: 40px;
            align-items: center;
          }

          .footer {
            margin-left: 150px;
          }

          .forgot {
            margin-left: 275px;
          }

          .frm-input {
            margin-left: 180px;
          }

          .prev-btn {
            width: 150px;
            font-weight: 500;
            font-size: 13px;
            border-radius: 25px;
          }
        `}</style>
        </>
    )
}