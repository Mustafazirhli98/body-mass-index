import React, { useState } from 'react'
import { Card } from './Card';

export const CaluclateCard = () => {

    //#region states
    const [data, setData] = useState({ cm: "", kg: "" });
    const [result, setResult] = useState("");
    const [userGender, setUserGender] = useState("");
    const [idealHeigth, setIdealHeight] = useState("");
    //#endregion
    
    //#region func
    const calculateBodyIndex = (data) => {
        let meter;
        let bodyIndex;
        let calculateHeight;
        if (isNaN(data.cm) && isNaN(data.kg) || data.cm === "" && data.kg === "") {
            alert("sayı değeri girin")
        } else if (userGender === "") {
            alert("cinsiyet seçimi gerekli")
        } else if (data.cm === "") {
            alert("cm değeri girin")
        } else if (data.kg === "") {
            alert("kg değeri girin")
        } else if (userGender === "woman") {
            meter = data.cm / 100
            bodyIndex = (data.kg / (meter * meter)).toFixed(2);
            calculateHeight = (45.5 + 2.3 * ([data.cm / 2.54] - 60)).toFixed(2);
            setIdealHeight(calculateHeight);
            setResult(bodyIndex);
        } else if (userGender === "man") {
            meter = data.cm / 100
            bodyIndex = (data.kg / (meter * meter)).toFixed(2);
            calculateHeight = (50 + 2.3 * ([data.cm / 2.54] - 60)).toFixed(2);
            setIdealHeight(calculateHeight)
            setResult(bodyIndex);
        }
        document.querySelectorAll("input").forEach(input => input.value = "");
        setData({ cm: "", kg: "" });
    }
    //#endregion

    return (
        <Card
            result={result}
            idealHeigth={idealHeigth}
            setUserGender={setUserGender}
            setData={setData}
            data={data}
            calculateBodyIndex={calculateBodyIndex}
        />
    )
}


