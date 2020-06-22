import React, { useState, useEffect } from "react";
const index = () => {
  const [loading, setloading] = useState(false);
  const [avatar, setAvatar] = useState(undefined);
  useEffect(() => {
    setloading(true);
    let reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(props.file);
  }, [props.file]);

  return (
    <>
      <img
        src={avatar}
        alt={props.file.name}
        className="img-thumbnail mt-2"
        height={200}
        width={200}
      />
    </>
  );
};

export default index;
