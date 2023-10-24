// const fs= require('fs') //loads the fs module, called by require()

// //fs.writeFileSync('notes.txt','my name is atharva') //writing data to a file
// //.writeFileSync('file name','actual message')

// fs.appendFileSync('notes.txt','my surname is narvekar') //appending without overwriting


//importing own modules

//importing npm modules
//const validator= require('validator')

//const nodemon = require('nodemon')
const notes=require('./notes.js')  // executes to file mentioned in the parenthesis
//access the variable/function 'getNotes' defined in the other file

// const msg=getNotes()
// console.log(msg)
//json stands for javascript object notation

//onsole.log(validator.isURL('https/mead.io')) //inbuilt fn

//if you delete your node modules due to space issue or publishing issue
//you can retrieve them via npm install command 
//it checks the dependencies in the package-lock.json and downloads those modules with their specific version

const chalk= require('chalk')
//always use the docs provided by the package on the browser for its function & usage

// console.log(chalk.green('Sucess'))
// console.log(chalk.red('Fail'))
// console.log(chalk.yellow('Warning'))


//Ctrl c stops to nodemon package


//getting input from the user

const yargs = require('yargs') //package yargs


//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,//its is false by default
            type: 'string' //always expect a string by passing this argument
        },
        body:{
            describe: 'body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('Title:'+argv.title)
        // console.log('body:'+argv.body)
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//listing out notes
yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler(){
        notes.listNotes()
    }
})

//read out notes
yargs.command({
    command: 'read',
    describe: 'read the notes',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//add, remove, read, list
//console.log(yargs.argv)
yargs.parse()
