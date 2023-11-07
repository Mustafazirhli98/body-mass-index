import React, { useState } from 'react'
import img from './../images/VKI.jpg'

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
        <div className='cardContainer' style={{ width: "100%", height: "100%" }}>
            <div className='introduction'>
                <h1>Vücut Kitle Endeksi nedir?</h1>
                <p>Vücut kitle indeksi (VKİ), vücut kütlesinin (kg), uzunluğunun metre cinsinden karesine bölünmesiyle hesaplanır. Bireyin ideal kilosunu görebilmesi ve hangi ağırlık kategorisinde olduğunu öğrenebilmesi açısından kullanılan bir formüldür.</p>
                <img src={img} />
                <div className='calculator'>
                    {
                        result != "" && (
                            <div className='result'>
                                <div>
                                    {`Ortalama VKİ değeriniz: `}
                                    <b>{`${result}`}</b>
                                </div>
                                <div>
                                    {`Ortalama ideal kilonuz: `}
                                    <b>{`${idealHeigth}`}</b>
                                </div>
                            </div>
                        )
                    }
                    <form>
                        <div className='gender'>
                            <div className='gender-group'>
                                <input type='radio' id='woman' name="selectedGender" onChange={() => setUserGender("woman")} />
                                <label htmlFor='woman'>Kadın</label>
                            </div>
                            <div className='gender-group'>
                                <input id='man' type='radio' name='selectedGender' onChange={() => setUserGender("man")} />
                                <label htmlFor='man'>Erkek</label>
                            </div>
                        </div>
                        <div className='form-group'>
                            <input
                                type='text'
                                id='cm'
                                autoComplete='off'
                                placeholder='örn: 170cm'
                                onChange={(e) => setData({ ...data, cm: e.target.value })} />
                            <input
                                type='text'
                                id='kg'
                                autoComplete='off'
                                placeholder='örn: 50kg'
                                onChange={(e) => setData({ ...data, kg: e.target.value })} />
                        </div>
                        <button type='button' onClick={() => calculateBodyIndex(data)} >Hesapla</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


