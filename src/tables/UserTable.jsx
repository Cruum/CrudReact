import { useState } from 'react';


export default function TableView(props) {
// console.log(props.setActiveIndex);
    const handleEdditContact = () => {
        props.setActiveIndex(false);
        // props.handleEditById()
        props.handleEditById(props.contactInfo.id, props.contactInfo.name, props.contactInfo.username);
      };

    const handleDelete = (id) => {
        console.log('test');
        //1) copie du state
        const contactCopy = [...props.contacts]

        // 2) manipuler la copie
        const contactCopyUpdtate =  contactCopy.filter(contact => contact.id !== props.contactInfo.id)
        //3) modifier ce state via son setter
        props.setContacts(contactCopyUpdtate);
    }

    return (
        <li key={props.contactInfo.id} className="o-contact">
            <div> {props.contactInfo.name} </div>
            <div> {props.contactInfo.username} </div>
            <div>
                <button onClick={() => handleEdditContact()}>Edit</button>
                <button onClick={() => handleDelete(props.contactInfo)}  > Delete</button>
            </div>
        </li>
    )
}
export { TableView };