import React, { useState } from "react";
import '../newNotes/NewNotes.css';

function NewNotes(props) {

    const [inputNote, newInputNote] = useState('');
    const noteHandler = event => {
        // console.log(event.target.value); 
        newInputNote(event.target.value);
    }

    const [inputDate, newInputDate] = useState('');
    const dateHandler = event => {
        // console.log(event.target.value);
        newInputDate(event.target.value);
    }

    const saveNewNotes = data => {
        const noteObj = {
            ...data,
            id: Math.random().toString()
        }
        props.onSubmitNote(noteObj);
        console.log('Inside the New Notes JS');
        console.log(noteObj);
    }

    return (
    <form onSubmit={saveNewNotes}>
        <div className="new_note">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Enter your notes</label>
                    <input type="text" value={inputNote} onChange={noteHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Note Date</label>
                    <input type="date" value={inputDate} onChange={dateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
    )
}

export default NewNotes;