import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
<footer className="text-center bg-light text-black p-1">
      All Rights Reserved <br />
      Copyright © SARAN KIRUTHIK S S | {currentYear} <br />
      <i className="bi bi-telephone-fill"></i>&nbsp;
      <a style={{ textDecoration: 'none', color: 'black' }} href="tel:+91 8072682003">
        +91 8072682003
      </a>
      &nbsp;&nbsp;&nbsp;
      <i className="bi bi-envelope"></i>&nbsp;
      <a style={{ textDecoration: 'none', color: 'black' }} href="mailto:skiruthik2510@gmail.com">
        skiruthik2510@gmail.com
      </a>
    </footer>
    </>
  )
}

export default Footer