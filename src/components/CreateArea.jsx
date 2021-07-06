import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Collapse from "@material-ui/core/Collapse";

function CreateArea(props) {
  const [mustEditorOpen, setMustEditorOpen] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function onFormFocus() {
    setMustEditorOpen(true);
  }

  function onFormBlur() {
    setMustEditorOpen(false);
  }

  return (
    <div>
      <form className="create-note" onFocus={onFormFocus} onBlur={onFormBlur}>
        <Collapse in={mustEditorOpen}>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        </Collapse>

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={mustEditorOpen ? 3 : 1}
        />
        <Zoom in={mustEditorOpen}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
