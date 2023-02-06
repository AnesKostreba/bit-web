function setValue() {
    var passed = 0;
    var failed = 0;
    var value = '';
    $('select option:selected').each(function () {
        value = $(this).text();
    })   
    var name = $('.name').val();
    var sp = name.split(" ");
    var subject = new Subject(value);
    var grade = Number($('#grade').val());
    var student = new Student(sp[0], sp[1]);
     var e = new Exam(subject, student, grade);
    var statistic = new Statistics(); 
    
    if (!name || !grade) {
        alert('Morete popuniti sva polja!!');
    } else if (e.hasPassed(grade)) {
        passed++;
        $('#passed').append(`<li>${e.getExamInfo()}</li>`);
        $('.passed-student').text(passed);
    } else {
        failed++;
        $('#failed').append(`<li>${e.getExamInfo()}</li>`);
        // $('.failed-student').append(`${statistic.getTotalFailed()}`);
        $('.failed-student').text(failed);
    }

}