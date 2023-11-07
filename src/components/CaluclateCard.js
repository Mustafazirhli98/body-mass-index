import React, { useState } from 'react'
import img from './../images/VKI.jpg'

export const CaluclateCard = () => {

    const [data, setData] = useState({ cm: "", kg: "" });
    const [result, setResult] = useState("");

    const calculateBodyIndex = (data) => {
        let meter;
        let bodyIndex;
        if (isNaN(data.cm) && isNaN(data.kg) || data.cm === "" && data.kg === "") {
            alert("sayı değeri girin")
        } else if (data.cm === "") {
            alert("cm değeri girin")
        } else if (data.kg === "") {
            alert("kg değeri girin")
        }
        else {
            meter = data.cm / 100
            bodyIndex = (data.kg / (meter * meter)).toFixed(2);
        }
        document.querySelectorAll("input").forEach(input => input.value = "");
        setData({ cm: "", kg: "" });
        setResult(bodyIndex);
    }

    return (
        <div className='cardContainer' style={{ width: "100%", height: "100%" }}>
            <div className='introduction'>
                <h1>Vücut Kitle Endeksi nedir?</h1>
                <p>Vücut kitle indeksi (VKİ), vücut kütlesinin (kg), uzunluğunun metre cinsinden karesine bölünmesiyle hesaplanır. Bireyin ideal kilosunu görebilmesi ve hangi ağırlık kategorisinde olduğunu öğrenebilmesi açısından kullanılan bir formüldür.</p>
                <img src={img} />
                {/* Yaşlara göre uygun vücut kitle endeksi (VKİ) değerlerinin tablosu */}

                <div className='calculator'>
                    {
                        result != "" && (
                            <div className='result'>
                                <div>{`VKİ değeriniz ortalama: ${result}`}</div>
                            </div>
                        )
                    }
                    <form>
                        <div className='form-group'>
                            <input type='text' id='cm' autoComplete='off' placeholder='örn: 170cm' onChange={(e) => setData({ ...data, cm: e.target.value })} />
                            <input type='text' id='kg' autoComplete='off' placeholder='örn: 50kg' onChange={(e) => setData({ ...data, kg: e.target.value })} />
                        </div>
                        <button type='button' onClick={() => calculateBodyIndex(data)} >Hesapla</button>
                    </form>
                </div>
            </div>

        </div>
    )
}


// TODO: ideal kilo hesaplama. (Kadın ve erkek seçenekleri sunulmalı, farklı formüller kullanılacak.)