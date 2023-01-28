import {AiOutlineShoppingCart} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import {navLinks} from '../constants/navLinks'
import avatar from '../assets/image-avatar.png'
import { useState } from 'react'
import product1 from '../assets/image-product-1.jpg'
import {GoTrashcan} from 'react-icons/go'

//TODO : redux
import {increase,dicrease} from '../components/redux/counter/counterAction'
import {useSelector,useDispatch} from 'react-redux'



const Navbar = () => {

  const counter  = useSelector(state =>state.counter)
  const price  = useSelector(state =>state.price)
  const dispatch = useDispatch()
 

  const [nav,setNav]=useState(false)
  const navHandler = (prev)=>{
    setNav(prev=>!prev)
}

const [cart,setCart] = useState(false)

const cartHandler = (prev)=>{
  setCart(prev=>!prev)
}

  return (
    <>
      <div className={nav?'w-full absolute opacity-40 z-10 h-screen bg-black':''}/>

    <div className=' relative w-full flex md:h-[95px] h-[70px]  '>


      <div className='flex w-full justify-around  '>

      <div className=' flex md:justify-end md:mr-10 items-center p-5 md:p-0 md:basis-1/4 basis-1/2'>
      {nav ? <GrClose className='md:hidden z-20 text-gray-700  mt-2' onClick={navHandler} size={25} />:<GiHamburgerMenu className='text-gray-700 md:hidden z-20 mt-2' onClick={navHandler} size={25} />}
      <h1 className='text-3xl md:mb-3 ml-[35px] md:ml-0 font-bold'>sneakers</h1>
      </div>

      <div className='flex items-center  basis-2/4'>
      <ul className='md:flex hidden md:text-[16px] text-gray-500 jusify-center items-center '>
         {navLinks.map((nav,id)=>(
          <li key={nav.id} className='flex mx-3 h-[70px] mt-6'>
            <a  className=' hover:text-gray-800 hover:border-b-4 hover:border-amber-400 p-2' href={nav.id}>{nav.title}</a>
          </li>
         ))}
        </ul>
      </div>

       <div className={nav ? 'ease-in duration-300 fixed bg-white z-10 top-0 left-0 w-[250px] px-4 py-7 flex-col h-screen':
         'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
      <ul className=' text-[20px] text-black mt-[70px]'>
         {navLinks.map((nav,id)=>(
          <li key={nav.id} className=' font-bold py-3 ml-5'>
            <a  className=' hover:text-gray-800 ' href={nav.id}>{nav.title}</a>
          </li>
         ))}
        </ul>
       </div>
  
    
      <div className='flex items-center  md:basis-1/4'>
      <AiOutlineShoppingCart onClick={cartHandler} className='md:mr-0 text-gray-700  mr-5 cursor-pointer w-[55px]' size={25}/>
      <img src={avatar} alt="avatar" className='md:w-[60px] mr-10 md:mr-0  w-[30px] hover:outline hover:outline-amber-400 hover:outline-2 rounded-full  cursor-pointer md:ml-9' />
      </div>

      </div>
      
    </div>
    {cart ?<div className='bg-white h-[200px] flex flex-col right-0 shadow-gray shadow-xl rounded-xl mr-[160px] z-50 absolute w-[320px]'>
      <h1 className='font-bold ml-5 mt-5 text-[15px]'>Cart</h1>
      <hr className='bg-gray mt-5 h-[5px] w-full' />
      <div className='flex '>
        <img src={product1} className='w-[45px] ml-4 mt-3 rounded-lg' alt="" />
        <div className='flex-col mt-3 ml-3'>
        <h1 className='text-sm text-gray-500'>Fall Limited Edition Sneakers</h1>
        <p className='text-sm mt-1 text-gray-500'>${price} x {counter} <span className='font-bold text-black'>357.00$</span>  </p>
        </div>
        <GoTrashcan size={15} className="text-gray-400 cursor-pointer right-0 ml-5 mt-7"/>
  
      </div>
      <div className='mx-4 bg-[#ff8f4a] rounded-lg flex items-center justify-center cursor-pointer text-white font-bold text-sm mt-4 shadow-orange-200 w-[260px] h-[40px]'> Checkout</div>


    </div>:''}

    </>
    
  )
}

export default Navbar