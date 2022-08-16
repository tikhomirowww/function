// function expression 
// function func() {
// } 

// let func = function(params) {
//     ...code...
// }

// let add = function(num1, num2, num3) {
//     return num1 + num2 + num3
// }

// console.log(add(10, 15, 20));

// let argsVar = function(a, b) {
//     console.log(a, b);
//     console.log([...arguments]);
// }
// argsVar(10, 'hello', null, true);

// вызвать сразу при загрузке страницы:
// (function() {
//     alert('FUNCTION CALLED')
// })()

// let helloFunc = function(user='Guest') {
//     console.log(`Hello ${user}`);
// }

// helloFunc('Tom');
// helloFunc();


// let searchFunc = function(arr, searchInp) {
//     for(i of arr) {
//         if(i.toLowerCase() === searchInp.toLowerCase()) {
//             alert('There is the word in massive');
//             return
//         }
//     };
//     alert('We don\'t have your word')
// };

// let someArr = ['Tom', 'Jack', 'Helen', 'Jack', 'Tom'];
// searchFunc(someArr, 'Jack');
// searchFunc(someArr, 'Helen')

// let searchFunc = function(arr, searchInp) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].toLowerCase()  === searchInp.toLowerCase()) {
//             result.push({
//                 element: arr[i],
//                 index: i
//             });
//         };
//     };
//     if(result.length === 0) {
//         alert('The word is not found');
//         return;
//     } else {
//         alert('The word is found');
//         return result;
//     }
// };
// console.log(searchFunc(someArr, 'Jack'));
// searchFunc(someArr, 'Jack')

// function countNums() {
//      let nums = [];

//      while(true) {
//         let elem = prompt('If you want to add num, type num, or type (e) for exit');

//         if(elem === 'e') break;

//         nums.push(elem);
//      };
    
//     let moreZero = 0;
//     let lessZero = 0;
//     let zero = 0;

//     for(i of nums) {
//         if(i > 0) {
//             moreZero++;
//         } else if(i < 0) {
//             lessZero++;
//         }else {
//             zero++;
//         }
//     }
//     //  console.log((nums));
//     return `More than 0: ${moreZero}; less than 0: ${lessZero}; zero: ${zero}`
// };
// console.log(countNums());


// function craeteDiv(){
//     let data = prompt('Width#height#color#b-radius').split('#');
//     // console.log(data);

//     let elem = document.createElement('div');
//     elem.style.width = `${data[0]}px`;
//     elem.style.height = `${data[1]}px`;
//     elem.style.background = data[2];
//     elem.style.borderRadius = data[3] + '%';
//     document.body.appendChild(elem);
//     alert('OK')
// };

// craeteDiv()

let db = []
function registerUser() {
    let username = prompt('Enter username');
    let password = prompt('Enter password');
    let passwordConfirmation = prompt('Enter password confirmation');

    if(password !== passwordConfirmation) {
        alert('Passwords do not match!');
        manager();
    };

    for(i of db) {
        if(i.username === userName) {
            alert('User already exists');
            manager();
        };
    };

    let userObj = {
        username: username,
        password: password,
        isLogin: false
    };

    db.push(userObj)

    alert('SUCCESSFULLY CREATED!');

    console.log(db);

    manager()
};

function loginUser() {
    let username = prompt('Enter username');
    let password = prompt('Enter password');

    for(i of db) {
        if(i.username === username && i.password === password) {
            i.isLogin = true;
            alert('SUCCESSED LOGIN');
            break;
        } else {
            alert('User is not found!')
        }
    }

    console.log(db);

    manager();

}


function manager() {
    let decide = prompt('Register(r), login(l), exit(e)').toLowerCase();

    switch(decide) {
        case 'r': registerUser(); break;
        case 'e': return;
        case 'l': loginUser();
        default: alert('Invalid operation!');
        return;
    };
};

manager();