
const cohort = {
    names: 'May2022',
    id: '12345',
    students: ['Jude', 'Aimee', 'Bob', 'Charlie']
};


const printStudents = (object) => {
return `${cohort.id} - ${cohort.names} - ${(cohort.students.length)} students in this cohort`; 
};

