import React from 'react'
import { BsBasket2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <section>
        <div style={{display:"flex"}}>
            <h1>Home</h1>
            <BsBasket2/>
            <div style={{backgroundImage:`url(${require('../src/assets/user.png')})`}}></div>
        </div>

        <div>
            <input className='w3-input' type='text' placeholder='Search for items'><CiSearch/></input>
        </div>

        <div>
            <div style={{backgroundImage:`url(${require('../src/assets/NIKE+AIR+MAX+PULSE.png')})`, height:"100vh", width:"100vw", display:"flex", justifyContent:"center", alignItems:"center", margin:"5%"}}>
                
            </div>

            <div>
                <h1>Popular</h1>
                <div>
                    <div style={backgroundImage}>

                    </div>

                    <div>

                    </div>
                    
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
