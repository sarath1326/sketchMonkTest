

import React, { useEffect, useState } from 'react'

function Section({ title, todo, addtodo, data, done,  progres ,statuschange}) {

    const [todos,settodos]=useState([])
    const [protodo,setprotodo]=useState([])
    const [donetodo,setdonetodo]=useState([])
    const [initdata,setinitdata]=useState([])



    useEffect(()=>{

        console.log("inition userffect")

    data?.forEach((obj)=>{

        if (obj.status === 'pending') {
            
            settodos([...todos, obj]); // Functional update
         
        } else if (obj.status === 'progress') {
            
            setprotodo([...protodo, obj]); // Functional update
         
        } else {
           
            setdonetodo([...donetodo, obj]); // Functional update
          
        }


    })


    
       
    
    },[data])


    return (
        <div>

            <div className='w-[300px] min-h-[500px] bg-slate-400 rounded-lg pt-5 ' >

                <h1 className='ml-[30px]  ' > {title} </h1>

                {
                    todo&&todos?.map((obj, index) => (


                        <div className='w-[200px] h-[100px] bg-white ml-[50px] mb-10 rounded-lg' >

                            <span> {obj.todo} </span>
                            <select onChange={(e)=>{statuschange(e.target.value,index)}}  name="" id="">
                                <option value=""> ... </option>
                                <option value="progress"> in progres </option>
                                <option value="done"> done </option>
                            </select>
                        </div>
                    ))
                }


                {
                   progres&& protodo?.map((obj, index) => (



                        <div className='w-[200px] h-[100px] bg-white ml-[50px] mb-10 rounded-lg' >

                            <span> {obj.todo} </span>

                            <select  name="" id="">
                                <option value=""> ... </option>

                                <option value="done"> done </option>
                            </select>

                        </div>
                    ))


                }

                {

                  done&& donetodo?.map((obj) => (

                        <div className='w-[200px] h-[100px] bg-white ml-[50px] mb-10 rounded-lg' >

                            <span> {obj.todo} </span>


                        </div>

                    ))
                }




                {
                    todo && <button onClick={() => { addtodo(true) }} className='bg-blue-600 text-white w-[200px] h-[30px]' >
                        Add TODO </button>
                }

            </div>

        </div>
    )
}

export default Section
