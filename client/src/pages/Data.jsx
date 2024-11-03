import React, { useEffect, useState} from 'react'
import { useAuth } from '../store/auth'


 function Data() {
 
  const {UserData}=useAuth()
  const {createdUser}=useAuth()
  useEffect(()=>{
    UserData()

  })



  return (
    <main className='main min-h-screen w-full absolute z-0 top-0  '>
     
      <div className="table pt-20 w-[60vw] mx-auto mb-4 ">
        <table >
          <thead >
          <tr  className='w-full flex text-black gap-x-36 font-semibold text-lg bg-gray-300 border-white border-[1px] p-2 rounded-md'>
          <th>Date</th>
          <th>Product</th>
          <th>Expense</th>
          <th>Income</th>
          <th>Balance</th>
          </tr>
          </thead>
          <tbody>
          {createdUser.map((data)=>{
            return    <tr key={data._id} className='w-full flex bg-white rounded-md p-2 font-bold text-black border-gray-500 border-[1px]'>
            <td className=' text-nowrap w-[21%]' >{data.Date}</td>
              <td className='w-[24%] ' >{data.Product}</td>
              <td className='w-[24%] text-red-600' >{data.Expense}</td>
              <td className='w-[21%] text-start text-green-500'>{data.Income}</td>
             {data.Balance >0? <td className='text-center w-[10%] text-green-500'  >{data.Balance}</td>: <td className='text-center w-[10%] text-red-500'  >{data.Balance}</td>}
              </tr>
          })}
          
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Data