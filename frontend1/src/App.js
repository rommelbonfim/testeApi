import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";


export default function App() {
  const [bancos, setBancos] = useState([]);
  const [load, setLoad] = useState(false);
 
  useEffect(() => {
    
      const getBancos = () => {
        axios.get('http://127.0.0.1:8000/bancos/')
            .then((response) => {
                setBancos(response.data)
                verifyUndefined()
                console.log(bancos)
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }
    getBancos()
  }, []);
const verifyUndefined = () => {
  if (bancos==='undefined'){
    
  }
}
  return (
    <div className="App">
      { bancos.map( (banco) => 
      <div>
        Nome instituição: {banco?.nome_inst}
      Codigo de compensação: {banco?.codigo_id}
      </div>) }
      
      
    </div>
  );
}

