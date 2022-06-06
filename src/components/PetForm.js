import React from 'react'

export default function PetForm() {
  return (

    <div>
        <h1>New Pets</h1>
        <form>
            <label>Pet Name</label><br/><input type="text" id="petName" placeholder="Enter pets name here" name='name'/><br/><br/>
            <label>Pet Kind</label><br/><input type="text" id="kind" placeholder="Enter pets kind" name='kind'/>
        
        </form>

        </div>
  )
}

