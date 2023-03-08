console.log("is it?");
shownotes();

let delelem = document.getElementById("delbtn");
delelem.addEventListener('click',function(){
    localStorage.clear();
    shownotes();
})

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    // let noteObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    // console.log(notesObj);
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem("notes");
    // let noteObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="notecard my-2 mx-2 card" style="width: 18rem;  color: white; background: none"; >

        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text" rows="3">${element}</p>
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">delete</button>
        </div>
    </div>  
        `;
    });
    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        // notesElem.innerHTML = `<div class="my-2 mx-2 card" style="width: 18rem;">

        // <div class="card-body" style="background: none";>
        //     <h5 class="card-title">Notes</h5>
        //     <p class="card-text">Empty!</p>
            
        // </div>
    // </div>`
    notesElem.innerText = "Empty!";
    }
}

function deletenote(index){
    // console.log("deleting",index  );
    let notes = localStorage.getItem("notes");
    // let noteObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();

}

let srchtxt = document.getElementById("srchtxt");
srchtxt.addEventListener("input", function(){

   let inputval = srchtxt.value.toLowerCase();
   console.log("input event", inputval);
   let notecard = document.getElementsByClassName('notecard');
   Array.from(notecard).forEach(function(element){
       let cardtxt = element.getElementsByTagName("p")[0].innerText;
       if(cardtxt.includes(inputval)){
           element.style.display = "block";
        }
        else{
           element.style.display = "none";

       }
    //    console.log(cardtxt);
   })

})