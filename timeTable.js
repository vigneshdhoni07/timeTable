let overAllMonday = [];
let overAllTuesday = [];
let overAllWednesday = [];
let overAllThursday = [];
let overAllFriday = [];
const TimeTable = {};

function timeTableGen(i, cs, ct, totalHours, op, ol, cls, day) {
    if (i >= totalHours || op.length >= totalHours) {
        if (day == 'Monday') {
            if (overAllMonday.length <= ol) {
                let timeTable = [...op];
                if (TimeTable[cls] == undefined) {
                    TimeTable[cls] = {};
                }
                TimeTable[cls][day] = timeTable;
                overAllMonday.push(timeTable);
            }
        }
        if (day == 'Tuesday') {
            if (overAllTuesday.length <= ol) {
                let timeTable = [...op];
                if (TimeTable[cls] == undefined) {
                    TimeTable[cls] = {};
                }
                TimeTable[cls][day] = timeTable;
                overAllTuesday.push(timeTable);
            }
        }
        if (day == 'Wednesday') {
            if (overAllWednesday.length <= ol) {
                let timeTable = [...op];
                if (TimeTable[cls] == undefined) {
                    TimeTable[cls] = {};
                }
                TimeTable[cls][day] = timeTable;
                overAllWednesday.push(timeTable);
            }
        }
        if (day == 'Thursday') {
            if (overAllThursday.length <= ol) {
                let timeTable = [...op];
                if (TimeTable[cls] == undefined) {
                    TimeTable[cls] = {};
                }
                TimeTable[cls][day] = timeTable;
                overAllThursday.push(timeTable);
            }
        }
        if (day == 'Friday') {
            if (overAllFriday.length <= ol) {
                let timeTable = [...op];
                if (TimeTable[cls] == undefined) {
                    TimeTable[cls] = {};
                }
                TimeTable[cls][day] = timeTable;
                overAllFriday.push(timeTable);
            }
        }
        return;
    }

    for (let k = 0; k < cs.length; k++) {
        if (day == 'Monday') {
            if (condition(i, cs[k], ct[k], op, overAllMonday, cs, ct)) {
                op[i] = { period: i + 1, subject: cs[k], teacher: ct[k] };
                timeTableGen(i + 1, cs, ct, totalHours, op, ol, cls, day);
            }
        }
        if (day == 'Tuesday') {
            if (condition(i, cs[k], ct[k], op, overAllTuesday, cs, ct)) {
                op[i] = { period: i + 1, subject: cs[k], teacher: ct[k] };
                timeTableGen(i + 1, cs, ct, totalHours, op, ol, cls, day);
            }
        }
        if (day == 'Wednesday') {
            if (condition(i, cs[k], ct[k], op, overAllWednesday, cs, ct)) {
                op[i] = { period: i + 1, subject: cs[k], teacher: ct[k] };
                timeTableGen(i + 1, cs, ct, totalHours, op, ol, cls, day);
            }
        }
        if (day == 'Thursday') {
            if (condition(i, cs[k], ct[k], op, overAllThursday, cs, ct)) {
                op[i] = { period: i + 1, subject: cs[k], teacher: ct[k] };
                timeTableGen(i + 1, cs, ct, totalHours, op, ol, cls, day);
            }
        }
        if (day == 'Friday') {
            if (condition(i, cs[k], ct[k], op, overAllFriday, cs, ct)) {
                op[i] = { period: i + 1, subject: cs[k], teacher: ct[k] };
                timeTableGen(i + 1, cs, ct, totalHours, op, ol, cls, day);
            }
        }

    }
}
function condition(i, subject, teacher, op, overAll, cs, ct) {
    if (overAll.length == 0) {

        if (op.length < cs.length) {
            if (op.length && !(op.every((e) => e?.teacher != teacher))) {
                return false;
            }
            return true;
        }
        // return true;
        else {
            let obj = {};
            for (let y = 0; y < op.length; y++) {
                if (obj[op[y]['subject']] == undefined) { obj[op[y]['subject']] = 1; }
                else { obj[op[y]['subject']] = obj[op[y]['subject']] + 1; }
            }
            // console.log({obj})
            let k = Object.keys(obj);
            let min = Infinity;
            for (let p = 0; p < k.length; p++) {
                if (obj[k[p]] <= min) {
                    min = obj[k[p]];
                }
            }
            let minPeriods = [];
            for (let z = 0; z < k.length; z++) {
                if (obj[k[z]] == min) {
                    minPeriods.push(k[z]);
                }
            }


            // console.log({minPeriods})
            if (minPeriods.includes(subject)) {
                return true;
            }
            else {
                return false;
            }

        }

    }
    else {
        for (let x = 0; x < overAll.length; x++) {
            if (overAll[x][i]['teacher'] == teacher) {
                return false;
            }
        }
        let bool1 = false;
        op.forEach((periods) => { if (periods['subject'] == subject) { bool1 = true; } });
        if (bool1) {

            if (op[i - 1]?.subject == subject || op[i - 2]?.subject == subject) {
                return false;
            }
            // let bool = cs.every((e) => op.includes(e));
            let bool2 = true;
            for (let g = 0; g < cs.length; g++) {
                let bool3 = true;
                for (let u = 0; u < op.length; u++) {
                    if (op[u]['subject'] == cs[g]) {
                        bool3 = false;
                        break;
                    }
                }
                if (bool3) {
                    bool2 = false;
                    break;
                }
            }
            if (!bool2) {
                return false;
            }
        }

        return true;

    }
}



function swap(arr, n = 1) {
    while (n) {
        let temp = arr[0];
        arr.shift();
        arr.push(temp);
        n--;
    }
}


// console.log({ overAll });




const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const noOfPeriods = 8;

const allocation = {
    '1A': {
        'Tamil': 'TamTcr1',
        'English': 'EngTcr1',
        'Maths': 'MatTcr1',
        'Science': 'SciTcr1',
        'Social': 'SocTcr1',
    },
    '1B': {
        'Tamil': 'TamTcr1',
        'English': 'EngTcr1',
        'Maths': 'MatTcr2',
        'Science': 'SciTcr3',
        'Social': 'SocTcr2',
    },
    '1C': {
        'Tamil': 'TamTcr2',
        'English': 'EngTcr2',
        'Maths': 'MatTcr3',
        'Science': 'SciTcr3',
        'Social': 'SocTcr3',
    },
    '2A': {
        'Tamil': 'TamTcr2',
        'English': 'EngTcr2',
        'Maths': 'MatTcr1',
        'Science': 'SciTcr2',
        'Social': 'SocTcr1',
    },
    '2B': {
        'Tamil': 'TamTcr2',
        'English': 'EngTcr2',
        'Maths': 'MatTcr1',
        'Science': 'SciTcr3',
        'Social': 'SocTcr2',
    },
    '2C': {
        'Tamil': 'TamTcr2',
        'English': 'EngTcr2',
        'Maths': 'MatTcr2',
        'Science': 'SciTcr2',
        'Social': 'SocTcr3',
    },
    '3A': {
        'Tamil': 'TamTcr1',
        'English': 'EngTcr1',
        'Maths': 'MatTcr2',
        'Science': 'SciTcr1',
        'Social': 'SocTcr3',
    },
    '3B': {
        'Tamil': 'TamTcr1',
        'English': 'EngTcr1',
        'Maths': 'MatTcr3',
        'Science': 'SciTcr1',
        'Social': 'SocTcr2',
    },
    '3C': {
        'Tamil': 'TamTcr1',
        'English': 'EngTcr1',
        'Maths': 'MatTcr3',
        'Science': 'SciTcr2',
        'Social': 'SocTcr1',
    },
};
let overallKey = Object.keys(allocation);
for (let t = 0; t < overallKey.length; t++) {
    for (let d = 0; d < days.length; d++) {
        let subjects = Object.keys(allocation[overallKey[t]]);
        let teachers = Object.values(allocation[overallKey[t]]);
        // const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

        switch (days[d]) {
            case 'Monday':
                timeTableGen(0, subjects, teachers, noOfPeriods, [], overAllMonday.length, overallKey[t], 'Monday');
                break;
            case 'Tuesday':
                swap(subjects);
                swap(teachers);
                timeTableGen(0, subjects, teachers, noOfPeriods, [], overAllTuesday.length, overallKey[t], 'Tuesday');
                break;
            case 'Wednesday':
                swap(subjects,2);
                swap(teachers,2);
                timeTableGen(0, subjects, teachers, noOfPeriods, [], overAllWednesday.length, overallKey[t], 'Wednesday');
                break;
            case 'Thursday':
                swap(subjects,3);
                swap(teachers,3);
                timeTableGen(0, subjects, teachers, noOfPeriods, [], overAllThursday.length, overallKey[t], 'Thursday');
                break;
            case 'Friday':
                swap(subjects,4);
                swap(teachers,4);
                timeTableGen(0, subjects, teachers, noOfPeriods, [], overAllFriday.length, overallKey[t], 'Friday');
                break;
        }
        // timeTableGen(0, subjects, teachers, noOfPeriods, [], overAllMonday, overallKey[t], days[d]);
    }
}


/*

for (let w = 0; w < overAllMonday.length; w++) {
    console.log('Monday');
    console.table(overAllMonday[w]);
}
console.log(overAllMonday.length);

for (let w = 0; w < overAllTuesday.length; w++) {
    console.log('Tuesday');
    console.table(overAllTuesday[w]);
}
console.log(overAllTuesday.length);

for (let w = 0; w < overAllWednesday.length; w++) {
    console.log('Wednesday');
    console.table(overAllWednesday[w]);
}
console.log(overAllWednesday.length);

for (let w = 0; w < overAllThursday.length; w++) {
    console.log('Thursday');
    console.table(overAllThursday[w]);
}
console.log(overAllThursday.length);

for (let w = 0; w < overAllFriday.length; w++) {
    console.log('Friday');
    console.table(overAllFriday[w]);
}
console.log(overAllFriday.length);
*/

// console.log({ TimeTable });
console.log('************************1A******************************')
console.table(TimeTable['1A']?.Monday);
console.table(TimeTable['1A']?.Tuesday);
console.table(TimeTable['1A']?.Wednesday);
console.table(TimeTable['1A']?.Thursday);
console.table(TimeTable['1A']?.Friday);
console.log('********************************************************')

console.log('************************1B******************************')
console.table(TimeTable['1B']?.Monday);
console.table(TimeTable['1B']?.Tuesday);
console.table(TimeTable['1B']?.Wednesday);
console.table(TimeTable['1B']?.Thursday);
console.table(TimeTable['1B']?.Friday);
console.log('********************************************************')

console.log('************************1C******************************')
console.table(TimeTable['1C']?.Monday);
console.table(TimeTable['1C']?.Tuesday);
console.table(TimeTable['1C']?.Wednesday);
console.table(TimeTable['1C']?.Thursday);
console.table(TimeTable['1C']?.Friday);
console.log('********************************************************')

console.log('************************2A******************************')
console.table(TimeTable['2A']?.Monday);
console.table(TimeTable['2A']?.Tuesday);
console.table(TimeTable['2A']?.Wednesday);
console.table(TimeTable['2A']?.Thursday);
console.table(TimeTable['2A']?.Friday);
console.log('********************************************************')

console.log('************************2B******************************')
console.table(TimeTable['2B']?.Monday);
console.table(TimeTable['2B']?.Tuesday);
console.table(TimeTable['2B']?.Wednesday);
console.table(TimeTable['2B']?.Thursday);
console.table(TimeTable['2B']?.Friday);
console.log('********************************************************')

console.log('************************2C******************************')
console.table(TimeTable['2C']?.Monday);
console.table(TimeTable['2C']?.Tuesday);
console.table(TimeTable['2C']?.Wednesday);
console.table(TimeTable['2C']?.Thursday);
console.table(TimeTable['2C']?.Friday);
console.log('********************************************************')

console.log('************************3A******************************')
console.table(TimeTable['3A']?.Monday);
console.table(TimeTable['3A']?.Tuesday);
console.table(TimeTable['3A']?.Wednesday);
console.table(TimeTable['3A']?.Thursday);
console.table(TimeTable['3A']?.Friday);
console.log('********************************************************')

console.log('************************3B******************************')
console.table(TimeTable['3B']?.Monday);
console.table(TimeTable['3B']?.Tuesday);
console.table(TimeTable['3B']?.Wednesday);
console.table(TimeTable['3B']?.Thursday);
console.table(TimeTable['3B']?.Friday);
console.log('********************************************************')

console.log('************************3C******************************')
console.table(TimeTable['3C']?.Monday);
console.table(TimeTable['3C']?.Tuesday);
console.table(TimeTable['3C']?.Wednesday);
console.table(TimeTable['3C']?.Thursday);
console.table(TimeTable['3C']?.Friday);
console.log('********************************************************')

/* Here for some days we are geting undefined for some class sections , if we don't use swap we are geting output for every class section
but sequence for every day for a class section will be same (monday-Maths,English,Tamil,Tuesday-Maths,English,Tamil) so to avoid we use swap
Now we are backtracking for given particular class section day
To make it fully functional we have to back track for all class section on given day i hope that's the solution */
