import React from "react";
import '../notes/Notes.css';
import NoteList from "./NoteList";

function Notes(props) {

    if (props.items.length === 0) {
        return <h2>No Notes Found.</h2>
    }

    // console.log(props.items);

    return (
        <div className="expenses">
            <ul className="expenses-list">
                { props.items.map((test, index) => 
                    <NoteList key={index} text={test.task} date={test.date} /> ) 
                }
            </ul>
        </div>
    )
}

export default Notes;