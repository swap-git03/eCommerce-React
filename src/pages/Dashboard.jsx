/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Card from '../Components/Card'


const Dashboard = ({ products}) => {
    const [productState, setProductState] = useState(products);
  return (
    <>
    {products.map((product, index)=>
    <div key={index}>
        
    </div>
)}










     <Navbar />
     <Card/>
    </>
  )
}

export default Dashboard
