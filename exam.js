function redirectToAuthorization() {
    window.location.href = "authorization.html";
}

document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var courseNumber = document.getElementById('courseNumber').value;
    var program = document.getElementById('program').value;
    var subject = document.getElementById('subject').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var lecturer = document.getElementById('lecturer').value;
    var studentsCount = document.getElementById('studentsCount').value;
    var auditorium = document.getElementById('auditorium').value; // Добавленное поле

    if (studentsCount < 1) {
        alert('Количество студентов должно быть больше либо равно 1.');
        return;
    }

    var output = 'Дисциплина: ' + subject +
                 '\nДата: ' + date +
                 '\nВремя: ' + time +
                 '\nПредседатель комиссии: ' + lecturer +
                 '\nКоличество студентов: ' + studentsCount;

    if (auditorium) {
        output += '\nАудитория: ' + auditorium;
    }

    alert(output);
});
