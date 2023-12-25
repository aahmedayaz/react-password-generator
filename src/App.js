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
    <div className="w-full h-[100vh] bg-[#190924] flex flex-col justify-center s_mobile:items-start laptop:items-center gap-[50px]">
      <h1 className="text-6xl text-white">Password Generator &#128640; </h1>
      <div className="laptop:w-[800px] laptop:max-w-[1000px] s_mobile:w-[80%] bg-[#fff] p-[20px] rounded-2xl">

        {/* Top Line */}
        <div className="flex items-stretch w-[100%]">

          {/* Generated Password */}
          <input 
            type={passwordType}
            value={password}
            ref={passwordRef}
            className="py-[10px] px-[25px] w-[600px] rounded-tl-[10px] rounded-bl-[10px] outline-none border-slate-600 border-l border-t border-b"
            placeholder='Your Generated Password is Here' 
            readOnly
          />

          {/* Hide/Show Password */}
          <div 
            className=" bg-white flex justify-center items-center p-[10px] text-3xl rounded-tr-[10px] rounded-br-[10px] cursor-pointer border-slate-600 border-r border-t border-b"
            onClick={changeVisibility}
            >
            {
              passwordVisibility ? <IoIosEye /> : <IoIosEyeOff />
            }
          </div>

          {/* Copy Password */}
          <span 
            className= " bg-[#00cf67] relative right-[-10px] border px-[15px] py-[10px] flex justify-center items-center  gap-[5px] cursor-pointer rounded-lg active:scale-[0.95]  text-lg"
            style={{ userSelect: 'none' , backgroundColor : isCopied === 'Copy' ? '#F6AE2D' : '#00cf67'}}
            onClick={copyToClipboard}
            >
              {isCopied} <FaCopy/> 
          </span>
        </div>

        {/* Middle Area */}
        <div className="text-[#10192D] text-xl flex justify-around mt-[20px]">

          <div className="">
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
    </div>
  );
}

export default App;
