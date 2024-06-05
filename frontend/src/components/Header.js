import React, {useContext, useState} from 'react'
import Logo from './Logo';
import { FaSearch } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import {toast} from 'react-toastify'
import {setUserDetails} from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';
const Header = () => {
  const user = useSelector(state => state?.user?.user)  //state?.user?.user this is because if key field is not available then it show error
    const dispatch = useDispatch()
    const [menuDisplay,setMenuDisplay] = useState(false)
    const context = useContext(Context)
    const navigate = useNavigate()
    const searchInput = useLocation()
    const URLSearch = new URLSearchParams(searchInput?.search)
    const searchQuery = URLSearch.getAll("q")
    const [search,setSearch] = useState(searchQuery)

    // console.log("searchInput",searchInput?.search.split("*")[1])

  // user detail in console
  // console.log("user header",user)

  const handleLogout = async() =>{
    const fetchData =await fetch(SummaryApi.logout_user.url,{
      method:SummaryApi.logout_user.method,
      credentials:"include"
    })

    const data = await fetchData.json()
    if(data.success){
       toast.success(data.message)
       dispatch(setUserDetails(null))
       navigate("/")
    }

    if(data.error){
      toast.error(data.message)
    }
  }

  // console.log("header add to cart count",context)

  const handleSearch = (e)=>{
  const {value} = e.target;
  setSearch(value)
  if(value){
    navigate(`/search?q=${value}`)
  }else{
    navigate("/search")
  }
  }
  return (
    <div>
      <header className='h-16 shadow-md bg-white fixed w-full z-40 '>
        <div className="container mx-auto flex items-center px-4 justify-between ">
            <div className=''>
              <Link to={"/"}>
              <Logo w={140} h={70}/>
              </Link>
            </div>

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2 '>
                <input type="text" placeholder='search product here...' className='w-full outline-none' onChange={handleSearch} value={search} />
                <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                <FaSearch />
                </div>
            </div>

            <div className='flex items-center gap-7'>
              <div className='relative flex justify-center'>
                 {/* when user login then only user icon will show */}
                {
                  user?._id && (
                    <div className='text-3xl cursor-pointer relative flex justify-center' onClick={()=>setMenuDisplay(preve=>!preve)}>
                    {/* upload image if user login successfully */}
                    {
                      user?.profilePic ? (
                          <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name}  />
                        ) :(
                          <FaUserPlus/>
                        )
                    }
                   </div>
                  )
                }
             
               {
                menuDisplay && (
                  <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
                  <nav>
                    {/* if admin permit then only role will be change */}
                    {
                      user?.role === ROLE.ADMIN && (
                        <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hover:bg-slate-100' onClick={()=>setMenuDisplay(preve=>!preve)}>Admin Panel</Link>
                      )
                    }
                   
                  </nav>
                 </div>
                )
               }
               {/* pop up all the user when hover */}
               
              </div>
              {
                user?._id && (
                  <Link to={"/cart"} className='text-2xl relative cursor-pointer'>
                  <span><FaShoppingCart/></span>
                  <div className='bg-red-600 text-white w-5 h-5 p-1 flex items-center justify-center rounded-full absolute -top-2 -right-3'>
                    <p className='text-xs'>{context?.cartProductCount}</p>
                  </div>
                  </Link>
                )
              }

               
              
               {/*login and logout button  */}
               <div>
                {
                  user?._id ?(
                    <button onClick={handleLogout}className='px-3 py-1 bg-red-600 rounded-full text-white hover:bg-red-700'>LogOut</button>
                  )
                  :(
                    <Link to="/login" className='px-3 py-1 bg-red-600 rounded-full text-white hover:bg-red-700'>Login</Link>
                  )
                }
                  
               </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
