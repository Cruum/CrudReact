import { useState, useEffect } from 'react';

export default function EditContact(props, setActiveIndex ) {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Mettre à jour les états lorsque props.idEdit change
        setName(props.idEdit.name);
        setUsername(props.idEdit.username);
    }, [props.idEdit]);

    const handleEditContact =  (event) => {
        event.preventDefault()
        console.log(props.idEdit.id);
        const contactCopy = [...props.contacts]
        const newValue = {
            id: props.idEdit.id,
            name: name,
            username: username
        };

        const indexToUpdate = contactCopy.findIndex(contact => contact.id === props.idEdit.id);
        contactCopy[indexToUpdate] = newValue
        props.setContacts(contactCopy)
        props.setActiveIndex(true)
    };
    
      const handleChangeName = (event) =>{
        if(event.target.name == "name") setName(event.target.value);
        if(event.target.name == "username") setUsername(event.target.value)


    }

    return (
        <div>
        <h2>Edit User</h2>

        <form action="submit"  onSubmit={ handleEditContact}  >
            <div className="o-titleTable">
                <h2>Name</h2>
                <input type='Text' 
                placeholder='Name' 
                name="name"
                value= {name}
                onChange = {handleChangeName} 
                />

                <h2>UserName</h2>
                <input type='Text' 
                placeholder='UserName' 
                name="username"
                value={username} 
                onChange = {handleChangeName} 
                />


            </div>

            <button >
                Update user
            </button>
            <button  onClick={() => props.setActiveIndex(true)}>
                Cancel
            </button>

 
        </form>
        </div>
    )
}
export { EditContact };