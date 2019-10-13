

function fetcherGet() {
    fetch('http://williamwara.nu/rest/read.php') // Call the fetch function passing the url of the API as a parameter
    .then((res) => res.json())  //present result as JSON
    .then((data) => {
        let output = '<h2>Kurser</h2>'  //create html-block
        data.forEach((post) => {    //loop through object and paste properties in html
            output +=
            `<div class="coursebox">
                <h3>${post.code}</h3>
                <p>${post.name}</p>
                <p>${post.progression}</p>
                <a href="${post.syllabus}">${post.syllabus}</a>
                
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

fetcherGet();




