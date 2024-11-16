const fs = require('fs')

module.exports = {
    loadNotes: function () {
        try {
            let data = fs.readFileSync('../data/notes.json', {encoding: 'utf-8'})
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
        console.log(notes)
        notes.push({
            title: title,
            body: body
        })
        this.saveNotes(notes)
        console.log(notes)
    }
    
}