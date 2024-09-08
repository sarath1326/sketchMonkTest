



import React from 'react'
import { useState } from 'react'
import Section from './Section'
import { MdDelete } from "react-icons/md";

function Board() {

    const [todo, settodo] = useState()
    const [todos, settodos] = useState([])
    const [model, setmodel] = useState(false)
    const [protodo, setprotodo] = useState([])
    const [donetodo, setdonetodo] = useState([])
    const [alldata, setalldata] = useState([])



    const addTodo = () => {

        let obj = {

            todo: todo,
            status: "pending"
        }

        settodos([...todos, obj])

        setalldata([...alldata, obj])

        setmodel(false)
    }


    const statusChange = (ststus, i) => {


        const update = alldata.map((obj, index) =>

            index == i ? { ...obj, status: ststus } : obj
        )

        settodos([])
        setprotodo([])
        setdonetodo([])


        update.forEach((obj) => {

            if (obj.status == "pending") {

                settodos((prv) => [...prv, obj])

            } else if (obj.status == "progress") {

                setprotodo((prv) => [...prv, obj])

            } else if (obj.status == "done") {

                setdonetodo((prv) => [...prv, obj])

            }


        })

        setalldata(update)




    }


    const deleteTodo=(index)=>{

          donetodo.splice(index,1)
          setdonetodo([...donetodo])
    }



    return (
        <div>

            {
                model && <div className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-[1px] flex justify-center items-center' >


                    <div className='w-[400px] h-[200px] bg-white pt-[50px] ' >

                        <div className='flex justify-center ' >

                            <label htmlFor=""> ToDo </label>

                            <input className='border-2 border-black ml-5' type="text" onChange={(e) => { settodo(e.target.value) }} placeholder=' enter your todo ' /> <br />


                        </div>





                        <button className='bg-green-500 w-[80px] h-[30px] rounded-lg mt-[50px] ml-[150px] ' onClick={addTodo} > add todo </button>

                    </div>


                </div>
            }



            <div className='w-full h-screen bg-white pt-[50px] flex gap-20 justify-center'>





                <div className='w-[300px] min-h-[500px] bg-slate-400 rounded-lg pt-5 ' >

                    <h1 className='ml-[30px] font-bold  ' > Todo </h1>

                    {
                        todos?.map((obj, index) => (


                            // <div key={index} className='w-[200px] h-[100px] bg-white ml-[50px] mb-10 rounded-lg break-normal ' >

                            //     <input className='ml-[150px]' type="checkbox" onChange={() => { statusChange("progress", index) }} />

                            //     <p > {obj.todo} </p>





                            // </div>



                            <div
                                key={index}
                                className='w-[200px] h-[100px] bg-white ml-[50px] mb-10 rounded-lg break-words p-2 '
                            >

                                <input onChange={() => { statusChange("progress", index) }} className='ml-[150px]' type="checkbox" />

                                <div className="flex justify-between items-center">
                                    <p className='break-words w-full'>
                                        {obj.todo}
                                    </p>

                                </div>


                            </div>

                        ))
                    }


                    <button onClick={() => { setmodel(true) }} className='bg-blue-600 text-white rounded-lg ml-[80px] w-[100px] h-[30px]' >
                        Add todo </button>


                </div>





                <div className='w-[300px] min-h-[500px] bg-slate-400 rounded-lg pt-5 ' >

                    <h1 className='ml-[30px] font-bold  ' > In Progres </h1>

                    {
                        protodo?.map((obj, index) => (

                            <div
                                key={index}
                                className='w-[200px] h-[100px] bg-white ml-[50px] mb-10 rounded-lg break-words p-2 '
                            >

                                <input onChange={() => { statusChange("done", index) }} className='ml-[150px]' type="checkbox" />

                                <div className="flex justify-between items-center">
                                    <p className='break-words w-full'>
                                        {obj.todo}
                                    </p>

                                </div>


                            </div>



                        ))
                    }




                </div>







                <div className='w-[300px] min-h-[500px] bg-slate-400 rounded-lg pt-5 ' >

                    <h1 className='ml-[30px] font-bold  ' > Done </h1>

                    {
                        donetodo?.map((obj, index) => (


                            <div
                                key={index}
                                className='w-[200px] h-[100px] bg-white ml-[50px] mb-10 rounded-lg break-words p-2 '
                            >

                                   <MdDelete className='ml-[150px] text-red-700' onClick={()=>{deleteTodo(index)}}   />
                            

                                <div className="flex justify-between items-center">
                                    <p className='break-words w-full'>
                                        {obj.todo}
                                    </p>

                                </div>


                            </div>
                        ))
                    }




                </div>









                {/* <Section

                    title={"ToDO"}
                    data={todos}
                    addtodo={setmodel}
                    todo={true}
                    progres={false}
                    done={false}
                    statuschange={statusChange}

                />

                <Section

                    title={"Progres"}
                    todo={false}
                    progres={true}
                    done={false}
                    data={todos}
                    statuschange={statusChange}


                />


                <Section

                    title={"Done"}
                    todo={false}
                    progres={false}
                    done={true}
                    data={todos}
                    statuschange={statusChange}

                />

 */}


            </div>




        </div>
    )
}

export default Board
