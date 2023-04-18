import React from 'react';



const UserList = ({id, name, onDelete, onEdit}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    
    return (
        <div className='list'>
            <span>{name} </span>
            <span>
                <button>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default UserList