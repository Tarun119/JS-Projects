const addBtn = document.querySelector("#addBtn");
const main = document.querySelector(".main");


const saveNotes = () =>{
    const notes = document.querySelectorAll(".note textarea");
    // console.log(notes);
    const data = [];
    notes.forEach(
        (note) =>{
            data.push(note.value);
        }
    )
    // console.log(data);
    localStorage.setItem("notes",JSON.stringify(data));
}


addBtn.addEventListener(
    "click",
    function(){
        addNote();
    }
    
)


const addNote = (text = "") =>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class = "tool">
    <i class="save bi bi-floppy"></i>
    <i class="trash bi bi-trash"></i>
    </div>
    <textarea>${text}</textarea>
    `;
    
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove();
            saveNotes();
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes();
        }
    )
    main.appendChild(note);
    saveNotes();
}

(
    function(){
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        lsnotes.forEach(
            (lsnote) => {
                addNote(lsnote);
            }
        )
    }
)()