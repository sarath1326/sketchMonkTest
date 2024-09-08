
import React from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import userdata from "./tempData.json";
import { useState } from "react";


function New() {

    const [users, setUsers] = useState(userdata.data);
  return (
    <div>

<div className=" mt-[100px]">
      <DragDropContext >
        <table className="table borderd">
          <thead>
            <tr>
              <th />
              <th>Username</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <Droppable droppableId="droppable-1">
            {(provider) => (
              <tbody
                className="text-capitalize"
                ref={provider.innerRef}
                {...provider.droppableProps}
              >
                {users?.map((user, index) => (
                  <Draggable
                    key={user.name}
                    draggableId={user.name}
                    index={index}
                  >
                    {(provider) => (
                      <tr {...provider.draggableProps} ref={provider.innerRef}>
                        <td {...provider.dragHandleProps}> = </td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provider.placeholder}
              </tbody>
            )}
          </Droppable>
        </table>
      </DragDropContext>
    </div>
      
    </div>
  )
}

export default New
