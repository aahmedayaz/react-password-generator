import { useRef, useState } from "react";
import { IoIosEye, IoIosEyeOff} from "react-icons/io";
import { FaCopy } from "react-icons/fa6";

function App() {

  let [password, setPassword] = useState("")
  let [passwordType, setPasswordType] = useState("password")
  let [passwordVisibility, setPasswordVisibility] = useState(false)
  let [length, setLength] = useState(8)
  let [numberAllowed, setNumberAllowed] = useState(false)
  let [charAllowed, setCharAllowed] = useState(false)
  let passwordRef = useRef(null)
  let [isCopied , setIsCopied] = useState("Copy")

  let changeVisibility = () => {
    if(passwordType === 'password') setPasswordType('text')
    else setPasswordType('password')
    setPasswordVisibility(prev => !prev)
  }

  let changeLength = (e) => {
    setLength(e.target.value)
  }

  let changeNumberAllowed = () => {
    setNumberAllowed((prev) => !prev)
  }

  let changeCharAllowed = () => {
    setCharAllowed((prev) => !prev)
  }

  let generatePassword = () => {
    setIsCopied('Copy')
    let str = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVxXyYzZ'
    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '`~!@#$%^&*>.?'

    let pass = ''
    for(let i = 1; i <= length; i++){
      pass += str[Math.floor(Math.random() * str.length)]
    }
    setPassword(pass)
  }

  let copyToClipboard = () => {
    if(password){
      setIsCopied("Copied")
      passwordRef.current.select()
      navigator.clipboard.writeText(passwordRef.current.value)
    }
  }

  return (
    <div className="w-full h-[100vh] bg-[#190924] flex flex-col tablet:justify-center items-center s_mobile:justify-start gap-[50px] s_mobile:pt-[40px]">
      <h1 className="tablet:text-6xl s_mobile:text-2xl text-white">Password Generator &#128640; </h1>
      <div className="laptop:w-[800px] laptop:max-w-[1000px] s_mobile:w-[92%] bg-[#fff] tablet:p-[20px] rounded-2xl s_mobile:py-[15px] s_mobile:px-[10px]">

        {/* Top Line */}
        <div className="flex items-stretch w-[100%]  tablet:p-[15px]  s_mobile:justify-center s_mobile:w-full">

          {/* Generated Password */}
          <input 
            type={passwordType}
            value={password}
            ref={passwordRef}
            className="tablet:py-[10px] s_mobile:py-[8px] tablet:px-[25px] s_mobile:px-[10px] tablet:w-[600px] s_mobile:w-[70%] tablet:rounded-l-[10px] s_mobile:rounded-l-[10px] s_mobile:text-[13px] m_mobile:text-md l_mobile:text-lg  outline-none border-slate-600 border-l border-t border-b"
            placeholder='Your Generated Password is Here' 
            readOnly
          />

          {/* Hide/Show Password */}
          <div 
            className=" bg-white flex justify-center items-center tablet:p-[10px] s_mobile:px-[5px] tablet:text-3xl s_mobile:text-xl tablet:rounded-r-[10px] s_mobile:rounded-r-[10px] cursor-pointer border-slate-600 border-r border-t border-b"
            onClick={changeVisibility}
            >
            {
              passwordVisibility ? <IoIosEye /> : <IoIosEyeOff />
            }
          </div>

          {/* Copy Password */}
          <span 
            className= " bg-[#00cf67] relative tablet:right-[-10px] m_mobile:right-[-3px] tablet:border tablet:px-[15px] s_mobile:px-[5px] s_mobile:rounded-lg tablet:py-[10px] flex justify-center items-center  gap-[5px] cursor-pointer tablet:rounded-lg active:scale-[0.95]  tablet:text-lg s_mobile:text-sm m_mobile:text-md l_mobile:text-lg"
            style={{ userSelect: 'none' , backgroundColor : isCopied === 'Copy' ? '#F6AE2D' : '#00cf67'}}
            onClick={copyToClipboard}
            >
              {isCopied} <FaCopy/> 
          </span>
        </div>

        {/* Middle Area */}
        <div className="text-[#10192D] s_mobile:text-sm m_mobile:text-md l_mobile:text-lg tablet:text-xl flex justify-around mt-[20px] tablet:flex-row s_mobile:flex-col">

          <div className="tablet:block s_mobile:flex ">
            <label className="">Length </label>
            <input 
              type="range"
              min={"8"}
              max={"16"}
              value={length}
              onChange={changeLength}
              step={"1"}
              className="" 
            />
            <div className="w-[20px] my-0 mx-auto">{length}</div>
          </div>

          <div className="">
            <label className="">Numbers </label>
            <input 
              type="checkbox"
              checked={numberAllowed}
              onChange={changeNumberAllowed}
              className="" 
            />
          </div>

          <div className="">
            <label className="">Special Characters </label>
            <input 
              type="checkbox"
              checked={charAllowed}
              onChange={changeCharAllowed}
              className="" 
            />
          </div>
        </div>

        {/* Button */}
      </div>
      <button className="py-[10px] px-[25px] text-white bg-[#009eac] rounded-2xl active:scale-[0.95]" onClick={generatePassword} >Generate Password</button>


      {/* Made By Ahmed Ayaz */}
      <span className="text-white laptop:text-xl absolute bottom-[20px] right-[20px]">Made By <a className="underline text-[#1a79a5]" href="https://github.com/aahmedayaz"> Ahmed Ayaz 🚀</a></span>
    </div>
  );
}

export default App;
