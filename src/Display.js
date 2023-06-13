import React from "react";
import { useOutletContext } from "react-router-dom";
export default function Display(props){
    const gal=useOutletContext()
    console.log(gal)
    return <div>{gal}</div>
}