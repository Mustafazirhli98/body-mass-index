import React from 'react'
import img from './../images/VKI.jpg'

export const Card = ({ result, idealHeigth, setUserGender, setData, data, calculateBodyIndex }) => {
    return (
        <div className='cardContainer'>
            <div className='introduction'>
                <h1>Vücut Kitle Endeksi nedir?</h1>
                <p>Vücut kitle indeksi (VKİ), vücut kütlesinin (kg), uzunluğunun metre cinsinden karesine bölünmesiyle hesaplanır. Bireyin ideal kilosunu görebilmesi ve hangi ağırlık kategorisinde olduğunu öğrenebilmesi açısından kullanılan bir formüldür.</p>
                <img src={img} alt='body-types' />
                <div className='calculator'>
                    {
                        result !== "" && (
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
