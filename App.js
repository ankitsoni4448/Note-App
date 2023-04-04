const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

function createNoteEl(id, content){
    //console.log(id, content);
    const element = document.createElement("textarea")
    element.classList.add("note")
    element.placeholder = "Empty NOte"
    element.value = content

    element.addEventListener("dblclick", ()=>{
        const warning = confirm("Do You Want To Delete This Note?")
        if(warning){
            deleteNote(id, element)
        }
    });

    element.addEventListener("input", ()=>{
        updateNote(id, element.value)
    });

    return element;
}

function deleteNote(){

}

function updateNote(){

}

function addNote(){
     const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: ""
     };
     //console.log(noteObj);
    //console.log("clicked");
    const noteEl = createNoteEl (noteObj.id, noteObj.content)
    appEl.insertBefore(noteEl, btnEl)



}

btnEl.addEventListener("click", addNote)