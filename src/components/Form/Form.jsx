import React, { useState,useEffect } from 'react';
import './Form.css';
import SingleLink from './SingleLink';
const api_url = "https://api.shrtco.de/v2/shorten?url=";
const Form = () => {
    const [link, setLink] = useState("");
    const [url, setUrl] = useState([]);

    const fetchLink = async (e) => {
        e.preventDefault()
        const response = await fetch(`${api_url}${link}`)
        const data = await response.json()
        const { result } = data
        const {full_short_link2} = result
        console.log(full_short_link2);
        setUrl([...url,{...data,copy:false,id:new Date().getTime().toString()}])
        setLink("")
    }
    console.log(url);
    
    

    
    return (
        <form  onSubmit={fetchLink}>
            <div className="form">
                <input className={`${link === "" ? "error" : ""}`} type="text" value={link} name="link" id="link" placeholder='shorten a link here' onChange={(e) => setLink(e.target.value)} />
                <button className="submit" onClick={fetchLink}>shorten it!</button>
                {link === "" && <div className="error-msg">please add a link</div>}
            </div>
            <div className="links">
                {   url && 
                    url.map((link, index) => {
                        return (
                            <SingleLink key={index} {...link} url={url} setUrl={setUrl}/>
                        )
                    })
                }
            </div>
        </form>
    )
}

export default Form