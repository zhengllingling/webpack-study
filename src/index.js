// const hello = (name) => {
//     return `hello ${name}`
// }

// const str = hello('Ema');

// document.write(str);

import React from "react";
import ReactDOM from "react-dom";
// import "../src/style/search.css";
import "../src/style/search.scss";
import logo from "../src/assets/logo-wap.png";

class Search extends React.Component {
    render() {
        return <div class="search">
            Search Div 内容
            <img src={logo} />
        </div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById("app")
)