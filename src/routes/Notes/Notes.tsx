import React, { useContext, useEffect, useState } from 'react'
import * as Styled from './style'
import HeaderLogged from '../../components/headerLogged'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import NotesService from '../../services/notes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import Editor from '../../components/Editor/Editor'

export interface Note {
  _id: string;
  title: string;
  body: string;
  created_at?: string;
  update_at?: string;

}

const Home = () => {

  const [notes, setNotes] = useState<Note[]>([])
  const [currentNotes, setCurrentNotes] = useState<Note>({ title: '', body: '', _id: '' })
  const [selectedNoteId, setSelectedNoteId] = useState<string>('');


  async function fetchNotes() {
    const response = await NotesService.index()
    if (response.data.length >= 1) {
      setNotes(response.data.reverse())
      setCurrentNotes(response.data[0])
    } else {
      setNotes([])
    }
  }

  async function createNote() {
    await NotesService.create()
    fetchNotes();

  }
  async function deleteNote(id: string) {
    await NotesService.delete(id)
    fetchNotes();
    if (id) {
      return
    }
  }
  //nota original (oldNote) e o  ID da nota (id) 
  //em seguida, chama a função NotesService.update para atualizar a nota no banco de dados
  //O resultado é armazenado na constante updateNote.
  //Em seguida, a função procura o índice da nota antiga no array notes
  //e atualiza o elemento na posição index com a nova nota, que está em updateNote.data
  //Por fim, a função atualiza o estado de notes com o novo array, usando a função setNotes
  //e atualiza o estado de currentNotes com a nova nota, usando a função setCurrentNotes

  const updateNote = async (oldNote: any, params: any) => {
    const updatedNote = await NotesService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = notes;
    newNotes[index] = updatedNote.data;
    setNotes(newNotes);
    setCurrentNotes(updatedNote.data);
  }

  const selectNote = (id: any) => {
    const note = notes.find((note) => {
      return note._id == id;
    })
    if (note) { setCurrentNotes(note); }

  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  function handleListMenu(param: boolean) {
    setMenuOpen(param)
  }


  console.log('valor de currentNotews:', currentNotes)
  return (

    <div>

      <HeaderLogged handleListMenu={handleListMenu} />
      <Styled.NotesBody menuOpen={menuOpen}>
        <Styled.LeftMenu menuOpen={menuOpen}>
          <div className='leftMenuContainer'>
            <div className='top'>
              <Styled.LeftMenuContainer>
                <Styled.Search>
                  <div><input type='text' placeholder='Search'></input>
                    <h3>{`${notes.length} Notas`}</h3><button onClick={createNote}>Note +</button></div>
                </Styled.Search>
              </Styled.LeftMenuContainer>
            </div>
            {notes.map((item, key) => (

              <Styled.Card key={item._id} onClick={() => setSelectedNoteId(item._id)} active={item._id === selectedNoteId}>
                <div
                  className={`ContainerCard `}
                  onClick={() => selectNote(item._id)}>

                  <div className='title'><h3>{item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}</h3></div>
                  <div className='body'><p>{item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}</p><div className='trash' onClick={() => deleteNote(item._id)}><FontAwesomeIcon icon={faTrash} /></div></div>
                  <div className='footer'><span>{moment(item.created_at).format('DD/MM')}</span></div>

                </div>
              </Styled.Card>
            ))}
          </div>
        </Styled.LeftMenu>
        <Styled.Container menuOpen={menuOpen}>
          <Editor
            currentNotes={currentNotes}
            updateNote={updateNote} />

        </Styled.Container>
      </Styled.NotesBody>

    </div >
  )
}

export default Home