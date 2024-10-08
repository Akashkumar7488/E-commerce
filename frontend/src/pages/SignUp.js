import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import loginIcons from '../assest/signin.gif';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common/index';
import {toast} from 'react-toastify';
const SignUp = () => {
  const [showPassword, setshowPassword] = useState(false)
  const [showconfirmPassword, setshowconfirmPassword] = useState(false)
    const [data, setData] = useState({
       name:"",
        email:"",
        password:"",
        confirmPassword:"",
        profilePic:"",
    });

    // navigating page to login page after signup
    const navigate = useNavigate()

    const handleOnchange = (e) =>{
         const {name, value} = e.target

         setData((preve)=>{
            return{
               ...preve,
               [name] : value
            }
        })
    }

    const handleuploadPic = async(e) =>{
      const file = e.target.files[0];

      const imagePic = await imageTobase64(file)
      // store image in variable
      setData((preve)=>{
        return{
          ...preve,
          profilePic : imagePic
        }
      })

    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
    
        if(data.password === data.confirmPassword){
          
          const dataResponse = await fetch(SummaryApi.signUP.url,{
            method: SummaryApi.signUP.method,
            headers:{
              "content-type" : "application/json"
            },
            body:JSON.stringify(data)
          })
  
          const dataApi = await dataResponse.json()
          console.log("data",dataApi)
          // toast message functionality
          if(dataApi.success){
            toast.success(dataApi.message)
            navigate("/login")
          }
          if(dataApi.error){
            toast.error(dataApi.message)
          }

        }else{
          console.log("please check password and confirm password")
        }
        
    }
  return (
    <section id='signup'>
    <div className="mx-auto container p-4">
        <div className='bg-white p-5  py-5 w-full max-w-sm mx-auto rounded'>
                <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                  <div>
                  <img src={data.profilePic || loginIcons} alt="login icons" />
                  </div>
                    <form>
                      <label>
                      <div className='text-xs bg-opacity-80 bg-slate-200 py-3 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                      upload photo
                    </div>
                    <input type="file" className='hidden' onChange={handleuploadPic}/>
                      </label>
                    </form>
                </div>
                <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                  {/* username */}
                  <div className='grid font-bold'>
                        <label>Name:</label>
                        <div className='bg-slate-200 p-2'>
                        <input type="text" placeholder='enter your name'
                        name='name'
                        value={data.name}
                        onChange={handleOnchange}
                        required
                         className='w-full h-full outline-none bg-transparent' />
                        </div>
                    </div>
                    {/* email */}
                    <div className='grid font-bold'>
                        <label>Email:</label>
                        <div className='bg-slate-200 p-2'>
                        <input type="email" placeholder='enter email'
                        name='email'
                        value={data.email}
                        onChange={handleOnchange}
                        required
                         className='w-full h-full outline-none bg-transparent' />
                        </div>
                    </div>
                {/* password */}
                    <div className='font-bold'>
                        <label>Password:</label>
                        <div className='bg-slate-200 p-2 flex'>
                        <input type={showPassword ? "" : "Password"} placeholder='submit password'
                        value={data.password}
                        name='password'
                        onChange={handleOnchange}
                        required
                         className='w-full h-full outline-none bg-transparent font'/>
                        <div className='cursor-pointer text-xl' onClick={()=>setshowPassword((preve)=>!preve)}>
                            <span>
                                {
                                  showPassword  ? (
                                    <FaEyeSlash/>
                                  )
                                  :
                                  (
                                    <FaEye/>
                                  )
                                }
                            
                            
                            </span>
                        </div>
                    </div>
                    </div>
                    {/* confirm password */}
                    <div className='font-bold'>
                        <label>Confirm Password:</label>
                        <div className='bg-slate-200 p-2 flex'>
                        <input type={showconfirmPassword ? "" : "Password"} placeholder='submit confirm password'
                        value={data.confirmPassword}
                        name='confirmPassword'
                        onChange={handleOnchange}
                        required
                         className='w-full h-full outline-none bg-transparent font'/>
                        <div className='cursor-pointer text-xl' onClick={()=>setshowconfirmPassword((preve)=>!preve)}>
                            <span>
                                {
                                  showconfirmPassword  ? (
                                    <FaEyeSlash/>
                                  )
                                  :
                                  (
                                    <FaEye/>
                                  )
                                }
                            
                            
                            </span>
                        </div>
                    </div>
                       
                    </div>
                      {/* Login button */}
                      <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 hover:bg-red-700 transition-all mx-auto block mt-6'>Sign Up</button>
                </form>
                {/* don't have account sign-up */}
                <p className='my-5'>already have account ? <Link to={"/login"}className='text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
        </div>
    </div>
   </section>
  )
}

export default SignUp;
