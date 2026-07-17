function searchResult(){

let name=document.getElementById("name").value.trim().toLowerCase();

let roll=document.getElementById("roll").value.trim();

let student=students.find(s=>

s.name.toLowerCase()==name &&

s.roll==roll

);

if(student){

localStorage.setItem("resultImage",student.image);

window.location="result.html";

}

else{

alert("Result Not Found");

}

}
