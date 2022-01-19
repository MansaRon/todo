import React from "react";
import '../notes/Notes.css';

const NoteList = props => {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    const concatDate = day + " " + month;

    console.log(props)

    return (
        <div>
            <div className="text"> { concatDate } </div>
            <div className="text"> { props.text } </div>
        </div>
    )
}

export default NoteList;