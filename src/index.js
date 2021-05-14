// const hello = (name) => {
//     return `hello ${name}`
// }

// const str = hello('Ema');

// document.write(str);

import React from "react";
import ReactDOM from "react-dom";

class Search extends React.Component {
    render() {
        return <div>Search Div</div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById("app")
)