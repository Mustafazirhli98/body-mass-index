import React, { useState } from 'react'

export const CaluclateCard = () => {

    const [data, setData] = useState({ cm: "", kg: "" })

    const calculateBodyIndex = (data) => {
        if (isNaN(data.cm) && isNaN(data.kg)) {
            console.log("sayı değeri girin")
        } else {
            console.log(data)
        }
        document.querySelectorAll("input").forEach(input => input.value = "")
    }

    return (
        <div className='cardContainer' style={{ width: "100%", height: "100%" }}>
            <div className='introduction'>
                <h1>Kitle Endeksi nedir?</h1>
                <p>Vücut kitle indeksi (VKİ), vücut kütlesinin (kg), uzunluğunun metre cinsinden karesine bölünmesiyle hesaplanır. İdeal ağırlık ise ulaşılmak istenen VKİ'nin, boy uzunluğunun karesi ile çarpılmasıyla elde edilir.</p>
                {/* Yaşlara göre uygun vücut kitle endeksi (VKİ) değerlerinin tablosu */}
                <div className='calculator'>
                    <form>
                        <div className='form-group'>
                            <input type='text' id='cm' placeholder='cm' onChange={(e) => setData({ ...data, cm: e.target.value })} />
                            <input type='text' id='kg' placeholder='kg' onChange={(e) => setData({ ...data, kg: e.target.value })} />
                        </div>
                        <button type='button' onClick={() => calculateBodyIndex(data)} >Hesapla</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
