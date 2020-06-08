// This Block will Place Link bar Facebook Twitter Google+
import React from "react";
import Facebook from "../assets/img/icon/Facebook.png";
import Twitter from "../assets/img/icon/Twitter.png";
import Google from "../assets/img/icon/Google.png";
import Link from 'next/link'

export default function SocialSignIn() {
  return (
    <>
      <Link href="#">
        <a>
          <img src={Facebook} />
        </a>
      </Link>
      <Link href="#">
        <a>
          <img src={Twitter} />
        </a>
      </Link>
      <Link href="#">
        <a>
          <img src={Google} />
        </a>
      </Link>
    </>
  );
}
