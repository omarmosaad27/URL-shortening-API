import React, { useEffect, useState } from 'react'

const SingleLink = ({ result, copy,id,url,setUrl }) => {
    const { original_link, full_short_link2 } = result;
    const [copied, setCopied] = useState(false);
    const filterCopied = (id) => {
        setUrl(url.map((item) => {
            if (item.id === id) {
                return {...item,copy:true}
            }
            return item;
        }))
    }
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setCopied(false)
        }, 1000)
        return ()=> clearTimeout(timeOut)
        
    },[copied])
    return (
        <div className="link" >
            <div className="original">
                {original_link}
            </div>
            <div className="shorten">
                <div>{full_short_link2}</div>
                <button className={`${copied ? "copy copied" : "copy"}`}
                    onClick={() => {
                        navigator.clipboard.writeText(full_short_link2)
                        filterCopied(id)
                        setCopied(true)
                    }}
                >{copied ? "copied" : "copy"}</button>
            </div>
        </div>
    )
}

export default SingleLink