import React from 'react';
import { useState } from 'react';
import TableView from './tables/UserTable';
import AddContact from './form/AddContact';
import EditContact from './form/EditForma';
import './App.css'



function App(onContactDelete) {

  const [contacts, setContacts] = useState([
    { id: 1, name: 'Cédric', username: 'Helamn' },
    { id: 2, name: 'Tobias', username: 'Dutech' },
    { id: 3, name: 'Fanny', username: 'Rosy' }

  ])
  const [activeIndex, setActiveIndex] = useState(true);

  const [idEdit, setIdEdit] = useState({
    id: '',
    name: '',
    username: '',
  });


  const handleEditById = (id, name, username) => {
    setIdEdit({ id, name, username });
    // Faire quelque chose avec les informations éditées
  };


  return (
    <div>
      <h1>CRUD App with Hooks</h1>
      <div className='t-todo'>
        <div>
          
        {activeIndex === true ? (
            <AddContact contacts={contacts} 
            setContacts={setContacts} 
            />
          ) : (
            <EditContact 
            contacts={contacts}
             setContacts={setContacts} 
             setActiveIndex={setActiveIndex}
             idEdit={idEdit}
             />
          )}
        </div>

        <div>
          <h2> View users</h2>

          <div>
            <div className="o-titleTable">
              <h2>Name</h2>

              <h2>UserName</h2>

              <h2> Actions</h2>
            </div>

            <ul>

              {contacts.map((contact) =>

                <TableView 
                
                contactInfo={contact}
                contacts={contacts} 
                setContacts={setContacts} 
                setActiveIndex={setActiveIndex}
                handleEditById={handleEditById} />
              )}



            </ul>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App;