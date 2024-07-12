// src/components/AddNew.jsx
import React from 'react';
import Swal from 'sweetalert2';

const AddNew = () => {
    const handleAddNew = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const AddNew = {name}
        console.log(AddNew);
        fetch('http://localhost:5000/addnew', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddNew),
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        })
    }
  return (
    <form onSubmit={handleAddNew}>
        <input type="text" name="name" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
        <input type="submit" className='btn'/>  
    </form>

  );
};

export default AddNew;

