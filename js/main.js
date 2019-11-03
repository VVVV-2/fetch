

function fetcherGet() {
    fetch('http://williamwara.nu/rest/read.php') // Call the fetch function passing the url of the API as a parameter
    .then((res) => res.json())  //present result as JSON
    .then((data) => {
        let output = '<h2>Courses</h2>'  //create html-block
        data.forEach((post) => {    //loop through object and paste properties in html
            output +=
            `<div class="coursebox">
                <h3 id="${post.id}code">${post.code}</h3>
                <p id="${post.id}name">${post.name}</p>
                <p>Progression: <span id="${post.id}progression">${post.progression}</span></p>
                <a id="${post.id}syllabus" href="${post.syllabus}">${post.syllabus}</a><br>
                <button onclick="editThis(${post.id})" class="btn" type="button">Ändra</button>
                <button id="${post.id}" onclick="fetcherDelete(this)" class="btn" type="button">Ta bort</button>
                
            </div>`   
        });
        document.getElementById('outputbox').innerHTML = output;    //append to document
    })
}
/*Knappar för PUT och DELETE-funktion som uteblev pga tidsbrist
    <button onclick="editBox(${post.id})" class="btn" type="button">Ändra</button>
    <button onclick="deleteThis(${post.id})" class="btn" type="button">Ta bort</button>
*/



function fetcherPost(){  

    code = document.getElementById('code').value;   //variables assigned values from fetch.html
    name = document.getElementById('name').value;
    progression = document.getElementById('progression').value;
    syllabus = document.getElementById('syllabus').value;

    //check for variable length
    if((code.length >0) && (name.length >0) && (progression.length) >0 && (syllabus.length >0)){

    //POST data to JSON format
    let data = JSON.stringify(  //json
        {
        "code": code,
        "name": name,
        "progression": progression,
        "syllabus": syllabus
        }
    )
    //select method and pasta POST data
    let fetchData = { 
        method: 'POST', 
        body: data
    }
    //send request
    fetch('http://williamwara.nu/rest/read.php', fetchData);

    } else {
        alert('No field can be empty!');
    }
    //update list  
    fetcherGet();
}



/*
Funktion för PUT som uteblev pga tidsbrist
function editBox(courseId) { 
    fetch('http://localhost/w3m5/read.php') // Call the fetch function passing the url of the API as a parameter
    .then((res) => res.json())
    
    .then((data) => {
        let output = '<div id="editbox"><h3>Ändra</h3>'
    
        data.forEach((post) => {
            output = `
            <input type="text" name="$code" placeholder="${post.code}">
            <input type="text" name="$name" placeholder="${post.name}">
            <input type="text" name="$progression" placeholder="${post.progression}">
            <input type="text" name="$syllabus" placeholder="${post.syllabus}">
            <button onclick="fetcherPut($code, $name, $progression, $syllabus)" class="btn" type="button">Skicka</button>
            </div>`
        });
        document.getElementById('editbox').innerHTML = output;
    })

}*/

function editThis(id){

    window.scrollTo(0,document.body.scrollHeight); //scroll to bottom of page

    let _id = id + "";  //find the right IDs to get values from
    let _code = _id.concat('code');
    let _name = _id.concat('name');
    let _progression = _id.concat('progression');
    let _syllabus = _id.concat('syllabus');

    document.getElementById('code').value = document.getElementById(_code).innerHTML;   //values to get
    document.getElementById('name').value = document.getElementById(_name).innerHTML;
    document.getElementById('progression').value = document.getElementById(_progression).innerHTML;
    document.getElementById('syllabus').value = document.getElementById(_syllabus).text;

    let movableClass = document.getElementById('putid');    //change button class appropriate ID number
    movableClass.className = id;
    

}

function fetcherPut(){  

    let id = document.getElementById('putid').className;
    let code = document.getElementById('code').value;   //variables assigned values from fetch.html
    let name = document.getElementById('name').value;
    let progression = document.getElementById('progression').value;
    let syllabus = document.getElementById('syllabus').value;

    //check for variable length
    if((code.length >0) && (name.length >0) && (progression.length) >0 && (syllabus.length >0)){

    //POST data to JSON format
    let data = JSON.stringify(  //json
        {
        "id": id,
        "code": code,
        "name": name,
        "progression": progression,
        "syllabus": syllabus
        }
    )
    //select method and pasta POST data
    let fetchData = { 
        method: 'PUT', 
        body: data
    }
    //send request
    fetch('http://williamwara.nu/rest/read.php', fetchData);

    } else {
        alert('No field can be empty!');
    }
    //update list  
    fetcherGet();
}

function fetcherDelete(element){

let id = element.id;

let data = JSON.stringify(  //json
    {
    "id": id
    }
)
//select method and pasta POST data
let fetchData = { 
    method: 'DELETE', 
    body: data
}
//send request
fetch('http://williamwara.nu/rest/read.php', fetchData);

fetcherGet();

}

fetcherGet();




