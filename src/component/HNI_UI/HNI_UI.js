import React from 'react'
import './Hni_UI.css'
const HNI_UI = () => {

  var requests=[{vmName:'Adithya',dateOfAppointment:'22-04-2022'},
{vmName:'Lavanya',dateOfAppointment:'22-05-2022'}]

  return (
      <div className='vm-details'>
    <table>
    <tr>
    <th>Name</th>
    <th>Accept</th>
    <th>Reject</th>
    </tr>
    {
      requests.map(req=>{
          return(
                  
                  <tr>
                <td> {req.vmName}:{req.dateOfAppointment}</td>
                <td><button>Accept</button></td>
                <td><button>Reject</button></td>
                </tr>
                
              
          )
      })
    }
      </table>
      </div>
  )
}

export default HNI_UI