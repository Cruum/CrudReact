import { useState } from 'react';


export default function AddContact(props) {

    const [newContactName, setNewContactName] = useState("")
    const [newContactUserName, setNewContactUserName] = useState("")
    
    const handleAdd = (event) => {
        event.preventDefault()

        const contactCopy = [...props.contacts]

        const id= new Date().getTime()
        const name = newContactName;
        const userName = newContactUserName;
        console.log(id);
        console.log(name);
        console.log(userName);
        
        contactCopy.push({id, name, userName})
        
        props.setContacts(contactCopy)
        console.log(setNewContactName(""));
        console.log(setNewContactUserName(""));
        setNewContactName("")
        setNewContactUserName("")
    }

    const handleChangeName = (event) =>{
        console.log(event.target.value);
  
        setNewContactName(event.target.value)
    }

    const handleChangeUserName = (event) =>{
        console.log(event.target.value);
  
        setNewContactUserName(event.target.value)
    }

    return (
        <div>
             <h2>Add User</h2>
     
        <form action="submit" onSubmit={handleAdd}>
            <div className="o-titleTable">
                <h2>Name</h2>
                <input type='Text' 
                placeholder='Name' 
                value={newContactName} 
                onChange = {handleChangeName} 
                required/>

                <h2>UserName</h2>
                <input type='Text' 
                placeholder='UserName' 
                value={newContactUserName} 
                onChange = {handleChangeUserName} 
                required/>


            </div>

            <button >
                Add new user
            </button>

 
        </form>
        </div>
    )
}
export { AddContact };