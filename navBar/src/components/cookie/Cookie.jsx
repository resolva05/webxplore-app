import React from "react";
import CookieConcent from "react-cookie-consent";
import { NavLink } from "react-router-dom";

const Cookie = () => {
  return (
    <div>
      <CookieConcent
        debug={true}
        location="bottom"
        style={{ backgroundColor: "grey", textAlign: "left", height: "15%" }}
        buttonStyle={{ color: "#000", background: "#fff", fontSize: "14px" , marginTop:"4.5vh"}}
        expires={365}
      >
        We use essential cookies to make our site work. With your consent, we
        may also use non-essential cookies to improve user experience and
        analyze website traffic. By clicking "I understand” you agree to our
        website's cookie use as described in our
        <NavLink> Private Policy </NavLink> .
      </CookieConcent>
    </div>
  );
};

export default Cookie;
