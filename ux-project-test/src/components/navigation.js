import React from "react"
import { Link } from "gatsby"

export default function Naviagtion(){
return (
    <nav>
        
       <ul>
           <li> <Link to="/index/"> Home </Link> </li> 
           <li>  <Link to="/contact/"> Contact us </Link> </li> 
           <li> <Link to="/about/"> About </Link> </li> 
           
        </ul>

    </nav>
)
}