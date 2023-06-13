import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet,Link } from "react-router-dom";
import Display from "./Display";
import Home from "./Home";
import axios from 'axios';
// import XMLParser from 'react-xml-parser';
// import xmljs from 'xml-js'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import {xml2js} from 'xml-js';

function App() {

// let [gal,setGal]=useState([]);
// let [val,setValue]=useState('');
// let url='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8d62373b0ffc081e1d75738f4a0e2105&tags='+val+'&format=rest'
// let images
// let saleem="saleem"
  return (
   
//  <div className='container col-4 text-center'>
// <input type="text" value={val} onChange={(e)=>setValue(e.target.value)}/>
// <button onClick={()=>{axios.get(url).then((dta)=>
// {
//   let result=xml2js(dta.data, {compact: true,spaces: 4})
//   result=result.rsp.photos.photo
//   images=result.map((d)=>{
//     let li='https://live.staticflickr.com/'+d._attributes.server+'/'+d._attributes.id+'_'+d._attributes.secret+'.jpg'
// console.log(d._attributes)
//     return <div className="col-3 d-inline-grid"><a href={li}><img className='img-thumbnail' src={li}></img></a> </div>})
//     setGal(images)
//   console.log('hi')
  
// })}}>search</button>
//     </div>
  
  <div>
    welcome
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<Home/>}>
   <Route path="/images" element={<Display />}/>
   </Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  
  );
}

export default App;
