import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [focus, setFocus] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function handleTextFocus() {
    setFocus(true);
  }

  function addNote(e) {
    props.setItems((prevItems) => {
      return [...prevItems, note];
    });
    e.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form className="create-note">
        {focus && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={handleTextFocus}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={focus ? "3" : "1"}
        />

        <Zoom in={focus}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
