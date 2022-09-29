import Head from 'next/head'
import Image from 'next/image'
import {useState,useEffect} from 'react'

export default function Home() {
  const [data,setData] = useState([]) 

  const fetchData = async () => {
    const response = await fetch('https://assignment-flask-app.herokuapp.com').then(response => response.json())
    console.log(response)
    setData(response)
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="flex justify-center items-center">
    <div className ='break-words justify-center items-center shadow-sm mt-10 border-2 border-grey-500 bg-gray-200'>
    <h1 className='text-center text-2xl font-bold m-2 p-2'>Latest Stories</h1>
      {data.map((dat)=>
      <ul className='font-semibold italic m-2 text-center p-2'>
        <a className='leading-9' href={dat.link}>{dat.title}</a>
        <br></br>
        <p className='text-gray-500'>SEPTEMBER 28, 2022 • 3:12 PM EDT</p>
      </ul>
      )}
    </div>
    </div>
  )
}
