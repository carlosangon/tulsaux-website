import React from "react";

import logoHorizontal from "../assets/images/logo-horizontal.svg";
import logoVertical from "../assets/images/logo-vertical.svg";

const HeaderHero = () => (
  <header>
    <img class="logo logo--horz" src={logoHorizontal} alt="Tulsa UX" />
    <img class="logo logo--vert" src={logoVertical} alt="Tulsa UX" />
    <h1>
      User&nbsp;Experience <span>User&nbsp;Group</span>
    </h1>
  </header>
);

export default HeaderHero;
