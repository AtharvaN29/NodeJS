const { default: chalk } = require('chalk')
const fs=require('fs')


const getNotes=() => {
    console.log("your notes are")
}

const addNote = (title,body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title===title)

    //debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note added')
    }else{
        console.log('No title taken')
    }
}

const removeNote =(title) =>{
    const notes= loadNotes()
    const notesToKeep= notes.filter((note)=>note.title!==title)
    
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
    
}
 
const listNotes =()=>{
    const notes = loadNotes()

    console.log(chalk.blue.inverse('Your notes are:'))

    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const readNote = (title) =>{
    const notes = loadNotes()

    const note = notes.find((note)=> note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('NOte not found'))
    }
}

const saveNotes= (notes) => {
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=() =>{
    try{
        const dataBuffer= fs.readFileSync('notes.json')
        const dataJSON= dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}


module.exports= {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes: listNotes,
    readNote: readNote
}
