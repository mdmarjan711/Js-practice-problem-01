var student = {
    name: 'marjan',
    class: 16,
    roll: 250,
    storage: '5GB',
    box: 'rabit',
}
console.log(student.class);
console.log(student);
var nam = student['box'];
console.log(nam);


student.name = 'Mohammad';
console.log(student);

var keys = Object.keys(student);
console.log(keys);
var valu = Object.values(student);
console.log(valu);

