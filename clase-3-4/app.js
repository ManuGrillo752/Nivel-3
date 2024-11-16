const yargs = require('yargs')
const notesControllers = require('./controllers/notesControllers')
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
       title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
       },
       body:{
        describe: 'Note boy',
        demandOption: true,
        type: 'string'
       }
    },
    handler: function(argv){
        notesControllers.createNote(argv.title, argv.body)
        
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a not',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        console.log("La nota ha sido removida")
    }
})
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        console.log('Nota leida')
    }
})
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function(){
        console.log('Nota enlistada')

    }
})


yargs.parse()