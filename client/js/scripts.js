var socket = io.connect('http://127.0.0.1:8081', {
    port: 8081,
    rememberTransport: false
});

document.querySelector("#word").addEventListener("change", (e) => {
    console.log(e.target.value)
    socket.emit("search", e.target.value)
})

socket.on('connect', function () {
    console.log("connected")
})

let cards = document.querySelector("#cards")

socket.on("result", (res) => {
    console.log(res)
    if(!res) return
    let html = ""
    res.results.map( (word) => {
        html += `<div class="card">`      
        html += `<h2>${word.id}</h2>`      
        if(word.lexicalEntries[0].entries[0].etymologies) html += `<p>${word.lexicalEntries[0].entries[0].etymologies}</p>`
        html += `</div>`      

    })
    cards.innerHTML = html
})