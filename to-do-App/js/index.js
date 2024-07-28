const table = document.querySelector(".table1");
// const finish = document.querySelector(".table2");
const addBtn = document.querySelector(".addTask")
// let flag = true;

addBtn.addEventListener(
    "click",
    function(){
        addRow();
        saveTask();
    }
)

const saveTask = () =>{
    const tasks = document.querySelectorAll(".data input");
    const data = [];
    
    tasks.forEach(
        (task) =>{
            data.push(task.value);
        }
    )
    localStorage.setItem("tasks",JSON.stringify(data));
}

const addRow = (task) =>{
    const row = document.createElement("tr")
    row.innerHTML=`
    <td id="save"><button><i class="bi bi-floppy"></i></button></td>
    <td class="data"><input class="inp" type="text" placeholder="Here..." value=${task}></td>
    <td id="delete" class="button"><button><i class="bi bi-trash"></i></button></td>
    <td id="done" class="button"><button><i class="bi bi-check"></i></button></td>
    `;
    // const inputValue = document.getElementsByClassName('inp').value;
    // console.log(inputValue);
    
    row.querySelector("#save").addEventListener(
        "click",
        function(){
            saveTask();
        }
    )
    // row.addEventListener(
    //     "keyup",
    //     function(event){
    //         if(event.key == )
    //     }
    // )
    
    row.querySelector("#delete").addEventListener(
        "click",
        function(){
            row.remove();
            saveTask();
        }
    )
    row.querySelector("#done").addEventListener(
        "click",
        function(){
            // completed(inputValue);
            row.remove();
            saveTask();
        }
    )
    
    table.appendChild(row);
    // if(flag){
        //     finish.appendChild(row);
        //     flag=false;
        // }
}
    
// const completed = (inpvalue) =>{
//     const row = document.createElement("tr");
//     row.innerHTML=`
//     <td id="save"><button><i class="bi bi-floppy"></i></button></td>
//     <td class="data"><input type="text" placeholder="Here..." value = ${inpvalue}></td>
//     <td id="delete" class="button"><button><i class="bi bi-trash"></i></button></td>
//     <td id="done" class="button"><button><i class="bi bi-check"></i></button></td>
//     `;

//     finish.appendChild(row);
    
    
// }
(
    function(){
        const lstasks = JSON.parse(localStorage.getItem("tasks"));
        lstasks.forEach(
            (lstask) => {
                addRow(lstask);
            }
        )
    }
)()



