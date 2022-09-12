import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import List from '../../components/List/List';
const Hotels = () => {
  return (
    <div>
      <Navbar/>
      <Header type="hotels" />
      <List/>
    </div>
  )
}

export default Hotels