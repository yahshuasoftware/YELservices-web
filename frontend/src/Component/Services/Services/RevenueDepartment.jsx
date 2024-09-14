import React, { useContext } from 'react'
import { PopModelContext } from '../../../Store/PopModelContext';


const RevenueDepartment = () => {
  const {setPopModel} =useContext(PopModelContext)

 
  return (
    <div className='m-1'>
        <h1 className='bg-blue-950 text-white p-2'>Revenue Department</h1>
        <div className='font-thin text-sm  grid gap-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-2'>

          <p  onClick={() => {
                    setPopModel(true);
                  }}  className='bg-white cursor-pointer p-2 m-1 hover:bg-gray-500'>Age Nationality Domicile</p>
          <p onClick={() => {
                    setPopModel(true);
                  }} className='bg-white  p-2 m-1 cursor-pointer hover:bg-gray-500 '>Income Certificate</p>
          <p onClick={() => {
                    setPopModel(true);
                  }}  className='bg-white  p-2 m-1 cursor-pointer hover:bg-gray-500 '>Temporary Residence Certificate</p>
          <p className='bg-white  p-2 m-1 cursor-pointer hover:bg-gray-500 '>Senior Citizen Certificate</p>
          <p className='bg-white  p-2 m-1 '>Solvency Certificate</p>
          <p className='bg-white  p-2 m-1 '>Cultural Programme Permission</p>
          <p className='bg-white  p-2 m-1 '>Certified Copy</p>
          <p className='bg-white  p-2 m-1 '>Small Land Holder Farmer Certificate </p>
          <p className='bg-white  p-2 m-1 '>Agriculture Certificate</p>
          <p className='bg-white  p-2 m-1 '>Gerneral Affidavit</p>
        </div>
        
      
    </div>
  )
}

export default RevenueDepartment
