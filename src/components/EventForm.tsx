import React, { useState } from 'react'

export const EventForm = (props) => {
    const [coin, setCoin] = useState({name: ''})

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value) 
        props.handleSubmit(coin)  
    }
    const handleChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value
        setCoin((prev) => {
            const newCoin = Object.assign({}, prev)
            newCoin[name] = value
            return newCoin
        })
    }
    return (
        <div>
            <p>preview {JSON.stringify(coin)}</p>
            <fieldset>
                <legend>Basic Info</legend>
                <label>Token Name</label>
                <input type='text'
                    name='name'
                    value={coin.name}
                    onChange={handleChange}/>
            </fieldset>
            <fieldset>
                <legend>Due Dilligence</legend>
                <p>
                    <input type="checkbox" name="doxxed" id="doxxedcb" value="small" />
                    <label htmlFor="doxxedcb">Doxxed Founders</label>
                </p>
                <p>
                    <input type="checkbox" name="size" id="auditcb" value="medium" />
                    <label htmlFor="auditcb">Contract Audit</label>
                </p>
                <p>
                    <input type="checkbox" name="size" id="taxcapcb" value="large" />
                    <label htmlFor="taxcapcb">Maximum cap on taxes in contract</label>
                </p>
                <p>
                    <input type="checkbox" name="size" id="staysafucb" value="large" />
                    <label htmlFor="staysafucb">StaySafu scan</label>
                </p>
                <p>
                    <input type="checkbox" name="size" id="reflectionscb" value="large" />
                    <label htmlFor="reflectionscb">Reflections</label>
                </p>
                <p>
                    <input type="checkbox" name="size" id="socialscb" value="large" />
                    <label htmlFor="socialscb">Socials</label>
                </p>
            </fieldset>
            <fieldset>
                <legend>Early Sale Start Date</legend>
                <label>Date: </label>
                <input type='text'
                    name='earlySaleDate'
                    onChange={handleChange} />
            </fieldset>
            <fieldset>
                <legend>Liquidity Launch Date</legend>
                <label>Date: </label>
                <input type='text'
                    name='liquidityDate'
                    onChange={handleChange} />
            </fieldset>
            <fieldset>
                <input type='submit' value='save' onClick={handleSubmit}/>
            </fieldset>
        </div>
    )
}