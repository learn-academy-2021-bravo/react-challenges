import React from "react";

const DisplayNumbers = ({previousNumber}) => {
    return <div>
        {previousNumber.map((value) => {
            return <div>{value}</div>
        })}
    </div>
}


export default DisplayNumbers;