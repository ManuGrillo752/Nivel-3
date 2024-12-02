const fs = require('fs')

module.exports = {
    loadNotes: function () {
        try {
            let data = fs.readFileSync('notes.json', {encoding: 'utf-8'})
            let parsedData = JSON.parse(data)
            return parsedData
        }catch(e){
            return []
        }
    },
    saveNotes: function(notes) {
        let stringData = JSON.stringify(notes)
        fs.writeFileSync('notes.json', stringData)
    },
    createNote: function(title, body){
        let notes = this.loadNotes()
        let noteFound = notes.find(note => note.title == title)
        if (noteFound.title == title) {
            console.log('error')
        } else {
            notes.push({
                title: title,
                body: body
            })
            this.saveNotes(notes)
        }   
    },
    removeNote: function(title) {
        let notes= this.loadNotes()
        let filteredNotes = notes.filter(note => note.title != title)
        let saveNote = this.saveNotes(filteredNotes)
    },

    readNote: function(title) {
        let notes = this.loadNotes()
        let filteredNote = notes.find(note => note.title == title)
        console.log(`Titulo: ${filteredNote.title}`)
        console.log(`Descripción: ${filteredNote.body}`)
        

        
        
        
    },
    listNotes: function(){
        let notes = this.loadNotes()
        notes.forEach(note => console.log(note.title))
            
    
    }
    
}