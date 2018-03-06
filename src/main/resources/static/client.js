$(document).ready(function(){
    console.log("doc ready");
    init();
});

function init(){
    enable();
    getStudents();
}
function enable(){
    $("#btnAddStud").on("click", postStudent);
}

function postStudent(){
    event.preventDefault();

    var newStud = {
        code: $("#txtCode").val(),
        name: $("#txtSName").val()
    };
    console.log("newStud=", newStud);
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "/students",
        data: JSON.stringify(newStud),
        success: function(resp){
            console.log("in POST resp=", resp);
            getStudents();
        }
    });
}

function getStudents(){
    $.ajax({
        type: "GET",
        url: "/students",
        success: function(resp){
            console.log("in GET resp=", resp);
            var students = resp._embedded.students;
            appendStuds(students);
        }
    });
}
function appendStuds(students) {
    $("#container").empty();
    console.log("in appendStuds students=", students);
    for (var j = 0; j < students.length; j++) {
        stud = students[j];

        $("#container").append("<div class='row'></div>");
        var el = $("#container").children().last();
        el.append("<div class='col-md-2'></div>");
        el.append("<div class='col-md-2 card box'><p>" + stud.name + "</p></div>");
        el.append("<div class='col-md-2'></div>");
    }
}
//
// function putStudent(){
//     $.ajax({
//         type: "PUT",
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         url: "/students/123",
//         data: JSON.stringify({
//             "name": "Phillip Thatcher"
//         }),
//         success: function(response){
//             console.log(response);
//             deleteStudent();
//         }
//     });
// }
//
// function deleteStudent(){
//     $.ajax({
//         type: "DELETE",
//         url: "/students/123",
//         success: function(response){
//             console.log(response);
//         }
//     });
// }

