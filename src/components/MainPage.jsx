import React from 'react'
import {HiPlusSm} from 'react-icons/hi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoIosClose} from 'react-icons/io'
import {GoTrashcan} from 'react-icons/go'
import product1 from '../assets/image-product-1.jpg'
import smallProduct1 from '../assets/image-product-1-thumbnail.jpg'
import smallProduct2 from '../assets/image-product-2-thumbnail.jpg'
import smallProduct3 from '../assets/image-product-3-thumbnail.jpg'
import smallProduct4 from '../assets/image-product-4-thumbnail.jpg'

//TODO: redux
import {increase,dicrease} from '../components/redux/counter/counterAction'
import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react'
// import { useState } from 'react'



const MainPage = () => {

  const counter  = useSelector(state =>state.counter)
  const price  = useSelector(state =>state.price)
  const dispatch = useDispatch()
 
  const [photo,setPhoto]=useState(false)

  const photoHandlre = (prev) =>{
    setPhoto((prev)=>!prev)
  }


  return (
    <>   {photo ? 
           
           <div className='flex justify-center  top-0 absolute w-full h-screen z-40 bg-black/80'>
            <div className='flex-col w-[450px] mt-[100px]  h-200 '>
              <div>
              <img src={product1} alt="product" className='w-[440px]  rounded-2xl' />
              </div>
              
           <div className='flex mt-5 ml-[5px]  '>
               <img src={smallProduct1} alt="" className='w-[90px] cursor-pointer hover:outline hover:outline-amber-400 mr-6 rounded-2xl' />
               <img src={smallProduct2} alt="" className='w-[90px] cursor-pointer hover:outline hover:outline-amber-400 mr-6 rounded-2xl' />
               <img src={smallProduct3} alt="" className='w-[90px] cursor-pointer hover:outline hover:outline-amber-400 mr-6 rounded-2xl' />
               <img src={smallProduct4} alt="" className='w-[90px] cursor-pointer hover:outline hover:outline-amber-400 mr-6  rounded-2xl' />  
         </div>
            </div>
         <IoIosClose size={60} className='text-gray-100 mt-[50px] cursor-pointer' onClick={photoHandlre} />
         </div>        
        :''}



    <div className='w-full md:flex flex-row  items-center  justify-center'>

       <div className='flex'>
        <div className='w-[500px]  h-screen border-t-2 border-zinc-400 '>

          <div className='flx-col ml-[80px]'>
            <img src={product1} alt="product" onClick={photoHandlre} className='w-[400px] mt-[70px] cursor-pointer rounded-2xl' />
            <div className='flex mt-5  '>
                <img src={smallProduct1} onClick={photoHandlre} alt="" className='w-[90px] cursor-pointer hover:outline hover:outline-amber-400 mr-3 rounded-2xl' />
                <img src={smallProduct2} onClick={photoHandlre} alt="" className='w-[90px] cursor-pointer hover:outline hover:outline-amber-400 mr-3 rounded-2xl' />
                <img src={smallProduct3} onClick={photoHandlre} alt="" className='w-[90px] cursor-pointer hover:outline hover:outline-amber-400 mr-3 rounded-2xl' />
                <img src={smallProduct4} onClick={photoHandlre} alt="" className='w-[90px] cursor-pointer hover:outline hover:outline-amber-400 mr-3 rounded-2xl' />  
          </div>
          </div>         
        </div>

     

        
        <div className='flex flex-col  w-[500px] h-screen items-start justify-center border-t-2 border-zinc-400'>
          <div className=' ml-[50px]'>
          <h4 className='font-bold uppercase text-amber-500 '>Adubi Company </h4>
            <h1 className='text-4xl text-black font-bold mt-[15px]'>Fall Limited Edition <br /> Sneakers</h1>
            <p className='text-sm text-gray-500 mt-[25px]'>These low-profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubber outer sole, they’ll <br /> withstand everything the weather can offer.</p>
           
            <div className='flex items-center mt-[25px]'>
            <h2 className='font-bold text-2xl'>{price}.00 $</h2> 
            
            <div className='bg-amber-300/50 text-center mx-5 rounded w-[35px]'>
            <p className='text-[14px] font-bold rounded-lg text-amber-500'>50%</p>
          </div>
         
            </div>   

            </div>
            
            <p className='mt-[10px] ml-[50px] text-gray-400 line-through '>$250.00</p>

            <div className='flex ml-[50px] mt-10'>
                <div className='bg-gray-100 shadow-sm shadow-slate-200 flex w-[140px] h-[40px] rounded justify-center items-center'>
                <button className='mx-4'><p className='text-amber-500' onClick={()=>dispatch(increase())}><HiPlusSm size={25}/> </p></button>
                <p className='mx-4'>{counter}</p>
                <button className='mx-4'><p className='text-amber-500' onClick={()=>dispatch(dicrease())}><HiPlusSm size={25}/> </p></button>
                </div>
                <div className='mx-4 bg-[#ff8f4a] rounded-lg flex items-center justify-center cursor-pointer text-white font-bold text-sm shadow-lg shadow-orange-200 w-[210px]'> <span className='mr-2'><AiOutlineShoppingCart/></span> Add to cart</div>
            </div>
        </div>
       </div>


    </div>
    </>
  )
}

export default MainPage
