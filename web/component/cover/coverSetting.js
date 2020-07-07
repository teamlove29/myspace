

import React from "react";

export default class CoverSetting extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) {
      return;
    }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return (
        <>
          <img className="container-fluid coverSetting" src="" alt="" />
          <style jsx>
        {`
          .coverSetting {
            top: 0;
            right: 0;
            position: absolute;
            background-color: #252525;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 200px;
            padding: 0 0;
          }

          @media screen and (max-width: 991px) {
            .coverSetting {
              top: 5%;
            }
          }
        `}
      </style>
        </>
      );
    }

    // if (loading) {
    //   return <p>loading...</p>;
    // }

    return (
      <>
      <img
        src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2  border-0 coverSetting"
      />
      <style jsx>
        {`
          .coverSetting {
            top: 0;
            right: 0;
            left:20%;
            position: absolute;
            background-color: #252525;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 100%;
            height: 200px;
            padding: 0 0;



          }

          @media screen and (max-width: 991px) {
            .coverSetting {
              left:0;
              top: 5%;
            }
          }
        `}
      </style>
      </>
    );
  }
}
