import React from 'react';
import './Dialogs.css';
import DialogContent from "./content/dialogContent";

let dialogsData = [
    {
        id: 1,
        name: 'Mihail'
    },
    {
        id: 2,
        name: 'Mihaela'
    },
    {
        id: 3,
        name: 'Misho'
    }
];

let messages = [
    {
        id: 1,
        message: 'Hi',
    },

    {
        id: 2,
        message: 'Hello',
    },

    {
        id: 3,
        message: 'Yo',
    }
];

const Dialogs = () => {
    return(
        <div className="dialogs">
            <DialogContent message={messages} name={dialogsData} />
        </div>
    );
}

export default Dialogs;

