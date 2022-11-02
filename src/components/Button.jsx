import React from "react";

const Button = ({ styles, link, text }) => (
  <a
    href={`${link}`}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    {`${text}`}
  </a>
);

export default Button;
