import React from "react";
import "./Footer.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© Spiritually Black &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;