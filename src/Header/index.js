import React from "react";
import "./style.css";

const Header = ({title}) => (
    <header>
        <h1 className="font__color">{title}</h1>
    </header>
);

export default Header; 