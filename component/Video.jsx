import React, { useEffect, useState } from 'react'
import { ytlink } from '../utils/config';
import { Link } from 'react-router-dom';

function Video() {
    const[vd,setVd]=useState([])
    useEffect(()=>{
        getvdodata()
    },[]);

    async function getvdodata() {
        const data = await fetch(ytlink);
        const json= await data.json();
        setVd(json.items)
        
    }
  return (
    <div className='flex  flex-wrap gap-20'>
        {console.log(vd)}
        {vd.map((vdo)=>(
            <div className=''>
                <Link to={"/watch?v="+vdo.id}>
                
                <img className='' src={vdo.snippet.thumbnails.medium.url} alt="" />
                </Link>
                <div className='flex gap-9'>
                <img className='h-11 w-11 rounded-full' src={vdo.snippet.thumbnails.medium.url} alt="" />

                <h1 className='w-56'>{vdo.snippet.title}</h1>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Video