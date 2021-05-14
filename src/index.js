// const hello = (name) => {
//     return `hello ${name}`
// }

// const str = hello('Ema');

// document.write(str);

import React from "react";
import ReactDOM from "react-dom";
// import "../src/style/search.css";
import "../src/style/search.scss";

class Search extends React.Component {
    render() {
        return <div class="search">Search Div</div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById("app")
)