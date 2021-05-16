// const hello = (name) => {
//     return `hello ${name}`
// }

// const str = hello('Ema');

// document.write(str);

import React from "react";
import ReactDOM from "react-dom";
import "../../style/search.scss"
import logo from "../../assets/logo-wap.png";

import "lib-flexible/flexible";

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