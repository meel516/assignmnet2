import { Link, Outlet } from "react-router-dom";
import {xml2js} from 'xml-js';
import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Home() {

    let [gal,setGal]=useState([]);
    let [val,setValue]=useState('');
    let url='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8d62373b0ffc081e1d75738f4a0e2105&tags='+val+'&format=rest'
    let images
    let saleem="saleem"
    const navigate= useNavigate();
      return (<div className='container'>
        <div className=" text-center">
    <input type="text" value={val} onChange={(e)=>setValue(e.target.value)}/>
    <button onClick={()=>{axios.get(url).then((dta)=>
    {
      let result=xml2js(dta.data, {compact: true,spaces: 4})
      console.log(result,"error")
      if(result.rsp.photos){
      result=result.rsp.photos.photo
      images=result.map((d)=>{
        let li='https://live.staticflickr.com/'+d._attributes.server+'/'+d._attributes.id+'_'+d._attributes.secret+'.jpg'
    console.log(d._attributes)
        return <div className="col-3 d-inline-grid"><a href={li}><img className='img-thumbnail' src={li}></img></a> </div>})
        setGal(images)
      console.log('hi')}
      else{setGal(['no data'])}
      navigate("/images")
    })}}>search</button>
    </div>
    {/* <Link to="/">go to home</Link> */}
    <Outlet context={gal}/>
        </div>)
}