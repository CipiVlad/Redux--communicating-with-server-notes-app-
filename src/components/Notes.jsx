import { useDispatch, useSelector } from "react-redux"
import { toggleImportanceOf, removeNote } from "../reducers/noteReducer"

const Note = ({ note, handleClick, deleteNote }) => {
  return (
    <>
      <li onClick={handleClick}>
        {note.content}
        <strong>{note.important ? ' important' : ''}</strong>
      </li>
      <button onClick={deleteNote}>X</button>
    </>

  )
}

const Notes = () => {
  const dispatch = useDispatch()
  const notes = useSelector(({ filter, notes }) => {
    if (filter === 'ALL') {
      return notes
    }
    return filter === 'IMPORTANT'
      ? notes.filter(note => note.important)
      : notes.filter(note => !note.important)
  })

  return (
    <ul>
      {notes.map(note =>
        <Note
          key={note.id}
          note={note}
          handleClick={() =>
            dispatch(toggleImportanceOf(note.id))
          }
          deleteNote={() => dispatch(removeNote({ id: note.id }))}
        />
      )}
    </ul>
  )
}

export default Notes