import React from 'react'
import { BsBasket2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

export default function Items() {
  return (
    <section>
        <div style={{display:"flex", textAlign:"center", margin:"5%"}}>
            <h1>Home</h1>
            <BsBasket2/>
            <div style={{backgroundImage:`url(${require('../src/assets/user.png')})`}}></div>
        </div>

        <div>
            <input className='w3-input' type='text' placeholder='Search for items'></input>
        </div>

        <div style={{display:"flex", margin:"5%"}}>
            <div style={{backgroundImage:`url(${require('../src/assets/Adidas Samba.jpg')})`, height:"25%", width:"20%"}}>

            </div>
                
        </div>

            <div>
                <h1>Popular</h1>
                <div>
                    <div style={{backgroundImage:`url(${require('../src/assets/NIKE+AIR+MAX+PULSE.png')})`, display:"flex", justifyContent:"center", alignItems:"center", margin:"5%", height:"75%", width:"30%"}}>

                    </div>

                    <div>

                    </div>
                    
                    <div>

                    </div>
                </div>
            </div>
        
    </section>
  )
}
