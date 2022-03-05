import React, { useRef, useState } from 'react'

import './VmUi.css'
const VmUi = () => {
    
    const [listofrequests, setlistofrequests] = useState([]);
    const [listOfAppointments, setapp] = useState([]);
    const [handledAppoinment, sethandledAppoinment] = useState([]);

    var listofhni=[{name:'sushanth',assest:20000000},
    {name:'sravani',assest:40000000},
    {name:'saiteja',assest:400000000}
]

const handleRequest=(name,assest,listOfAppointments)=>{
    console.log(listOfAppointments);
          setlistofrequests(listOfAppointments=>
            [...listOfAppointments,{name:name,asset:assest,data:new Date(),appointment:listOfAppointments}])
          sethandledAppoinment(handledAppoinment=>[...handledAppoinment,name])  
}

const handleCancelRequest=(name,assest,listOfAppointments)=>{
    console.log(listOfAppointments);
          setlistofrequests(listOfAppointments=>
            listOfAppointments.pop(listOfAppointments.splice(listOfAppointments.indexOf(name),1)))
          }
console.log(listofrequests``)
    return (
        <div className='hni-details'>    
<table>
            <tr>
            <th className='heading'> Name:Asset</th>
            <th className='heading'>Date Picker</th>
            <th className='heading'>Request Button</th>
            </tr>
        {listofhni.map(loh=>{
            console.log(handledAppoinment);
            return(

                <tr>
                   <td>{loh.name}:{loh.assest}</td>
                <td>
                <input className='datepicker' type="date" placeholder='Date of appointment' onChange={(e)=>{
                    setapp(e.target.value)
                }} 
                /> </td>

                
                
                
            {
            handledAppoinment.includes(loh.name)
            
                ?
               <td><button onClick={()=>handleCancelRequest(loh.name,loh.assest,listOfAppointments)}>Cancel Appiontment</button>
                </td>
                :
               <td><button onClick={()=>handleRequest(loh.name,loh.assest,listOfAppointments)}>Request for Appiontment</button>
               </td>
            }
                
                </tr>

            )
        }
        
        )}
    </table>    
    </div>

  )
}

export default VmUi