import React, { useContext } from 'react'
import { PopModelContext } from '../../Store/PopModelContext'

const PopModel = ( props) => {
    const {closeModel}=useContext(PopModelContext)
  return (
    <div>
        <div className=' h-96 w-96'>
        <h1 onClick={closeModel} className='cursor-pointer bg-green-700 w-20  '>close</h1>
            <h2 className='bg-white text-black font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, cumque vel! Vitae id beatae fugit oluptate beatae error neque necessitatibus sed sapiente dolores placeat molestias distinctio. Nulla, ab? Maxime explicabo eos sit temporibus sint, nihil ab nemo! Cum facilis qui ullam expedita maxime rem nihil ipsam illum, cumque, explicabo reiciendis ad unde. Officia tempore fuga, ad omnis necessitatibus et nesciunt, officiis suscipit optio quo nisi</h2>

{console.log("model opend")}
        </div>
      
    </div>
  )
}

export default PopModel
