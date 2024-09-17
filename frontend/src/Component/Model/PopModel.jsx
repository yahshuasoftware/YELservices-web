import React, { useContext } from 'react'
import { PopModelContext } from '../../Store/PopModelContext'

const PopModel = ( ) => {
    const {closeModel}=useContext(PopModelContext)
  return (
    <>
    <div className="fixed  inset-0 bg-[rgba(189,189,189,0.9)]"></div>
    <div className=' relative top-1/2 left-1/2 h-[1rem] p-8 px-12 transform -translate-x-1/2 '>
     
        <div className="min-h-screen flex items-center justify-center bg-opacity-75 mb-20">
        {/* Modal Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
          {/* Header Section */}
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-2xl font-semibold text-orange-600">
              Certificate Name: Age Nationality And Domicile Certificate
            </h2>
            <button onClick={closeModel} className="text-red-600 font-semibold">Close</button>
          </div>
  
          {/* Document Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Required Documents</h3>
  
            {/* Proof of Identity */}
            <div className="mb-6">
              <h4 className="font-bold text-lg text-blue-600 mb-2">Proof of Identity (Any -1)</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="grid grid-cols-2 gap-4">
                  <li>1) PAN Card</li>
                  <li>2) Passport</li>
                  <li>3) RSBY Card</li>
                  <li>4) Aadhaar Card</li>
                  <li>5) Voter ID Card</li>
                  <li>6) MNREGA Job Card</li>
                  <li>7) Driving License</li>
                  <li>8) Photo of Applicant</li>
                  <li>9) Signature of Applicant</li>
                  <li>10) Identity card issued by Govt or Semi Govt organizations</li>
                </ul>
              </div>
            </div>
  
            {/* Proof of Address */}
            <div>
              <h4 className="font-bold text-lg text-blue-600 mb-2">Proof of Address (Any -1)</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="grid grid-cols-2 gap-4">
                  <li>1) Passport</li>
                  <li>2) Water Bill</li>
                  <li>3) Ration Card</li>
                  <li>4) Aadhaar Card</li>
                  <li>5) Voter ID Card</li>
                  <li>6) Telephone Bill</li>
                  <li>7) Driving License</li>
                  <li>8) Electricity Bill</li>
                  <li>9) Property Tax Receipt</li>
                  <li>10) Extracts of 7/12 and 8 A/Rent Receipt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    </>
  )
}

export default PopModel
