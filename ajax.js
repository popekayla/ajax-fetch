function getStudents()
{
    let studentUrl = "students.js";
    let container = document.getElementById("container");

    function createElement(element) {
        return document.createElement(element);
    }

    function appendElement(parent, element) {
        return parent.appendChild(element);
    }

    fetch(studentUrl)
    .then((resp) => resp.json())
    .then(function(data) {
        let students = data;
        //console.log(data);
        return students.map(function(student) {
            let div = createElement('div')
            div.className = "student";
            let studentDiv = createElement('div');
            studentDiv.innerHTML = `<p class="name">${student.student_first_name} ${student.student_last_name}</p> 
                                    <p> <strong>Major:</strong> ${student.student_major} </p>
                                    <p> <strong>Credits</strong>: ${student.student_credits} <strong>GPA</strong>: ${student.student_gpa}</p>
                                    <p> <strong>Registration Date: </strong> ${student.student_registration_date} </p>`;

            appendElement(div, studentDiv);
            appendElement(container, div);
        })
    })
    

    /*var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        studentInfo = JSON.parse(xmlhttp.responseText);

        let studentDisplay = "<p class='name'>" + studentInfo.student_first_name + " " + studentInfo.student_last_name + "</p>"+
                                "<p><strong> Major:</strong> " + studentInfo.student_major + "</p>" +
                                "<p> <strong>Credits:</strong> " + studentInfo.student_credits + " <strong>GPA:</strong> " + studentInfo.student_gpa + "</p>" +
                                "<p><strong> Registration Date:</strong> " + studentInfo.student_registration_date + "</p>" 

        document.querySelector(".student").innerHTML = studentDisplay;
        document.querySelector(".student").classList.remove("invisible");

        }
    }
    
    xmlhttp.open("GET",studentId,true);
    
    xmlhttp.send();*/
}