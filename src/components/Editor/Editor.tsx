import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
interface NotesPro {
  title?: string;
  body?: string

}
interface EditorProps {
  currentNotes: any;
  updateNote: any
}

const Editor: React.FC<EditorProps> = ({ currentNotes, updateNote }) => {
  const [currentContent, setCurrentContent] = useState('')
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>( )

  useEffect(()=> {
    setCurrentContent(currentNotes.body)
  }, [currentNotes])

  const handleChange = (content: any, delta: any, source: any) => {
    clearTimeout(timer);
    if (source == 'user') {
      setCurrentContent(content);
      setTimer(setTimeout(() => updateNotes(content), 2000));
    }
  }

  const updateNotes = (content:any) => {
    const title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 30);
    updateNote(currentNotes, {'title': title, 'body': content})
  }

  //opções do editor reactquill
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean'],
    ]
  }

  
  console.log('acho',currentNotes)
  return (
    <>
    <ReactQuill value={currentContent} modules={modules} onChange={handleChange}  />
    </>
  )
}

export default Editor