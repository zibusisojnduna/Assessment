import React from 'react'

export default function ItemInfo() {
  return (
    <section>
        <div>
            <img></img>
        </div>

        <div>
            <h2>Air Max</h2>
            <h3>By Nike</h3>

            <h2>$1500</h2>
        </div>

        <div>
            <h2>Size</h2>

            <option>
                <select>US</select>
                <select>UK</select>
            </option>

            <input type='text' placeholder='Enter size number'></input>

        </div>

        <div>
            <h2>Color</h2>

            <div>
                
            </div>
        </div>
        
        <div>
            <h2>Description</h2>


            <button className='w3-button' style={{backgroundColor:"#fb607f", margin:"2%"}}>Add Item to Cart</button>
        </div>
    </section>
  )
}
