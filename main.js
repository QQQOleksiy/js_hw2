// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let element = ['hello', 'world', 'okten', 'qwerty', 1, 24, 2.3, 4, true, false]
console.log(element[0])
console.log(element[1])
console.log(element[2])
console.log(element[3])
console.log(element[4])
console.log(element[5])
console.log(element[6])
console.log(element[7])
console.log(element[8])
console.log(element[9])
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book_1 = {
    title : 'title_1',
    pageCount : 150,
    ganre : 'fantasy'
}
let book_2 = {
    title : 'title_2',
    pageCount : 135,
    ganre : 'scientific'
}
let book_3 = {
    title : 'title_3',
    pageCount : 170,
    ganre : 'historical'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
//   Кожен автор має поля name,age
let book_1_ = {
    title : 'Останнє бажання',
    pageCount : 150,
    ganre : 'fantasy',
    author : {
        name : 'А́нджей Сапко́вський',
        age : 74
    }

}
let book_2_ = {
    title : 'Learning JavaScript',
    pageCount : 135,
    ganre : 'scientific',
    author : {
        name : 'Ітан Браун',
        age : 50
    }
}
let book_3_ = {
    title : 'Фактор Черчилля',
    pageCount : 170,
    ganre : 'historical',
    author : {
        name : 'Борис Джонсон',
        age : 58
    }
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
//   Вивести в консоль пароль кожного користувача
let users = [
    user1 = {
    name : 'Olexander',
    username : '__Sasha__',
    password : 'Sasha_qwerty'
    },
    user2 = {
        name : 'Volodimir',
        username : '__Volodia__',
        password : 'Volodia_qwerty'
    },
    user3 = {
        name : 'Vasiliy',
        username : '__Vasya__',
        password : 'Vasya_qwerty'
    },
    user4 = {
        name : 'Maria',
        username : '__Marichka__',
        password : 'Marichka_qwerty'
    },
    user5 = {
        name : 'Tetiana',
        username : '__Tania__',
        password : 'Tania_qwerty'
    },
    user6 = {
        name : 'Viktor',
        username : '__Vitya__',
        password : 'Vitya_qwerty'
    },
    user7 = {
        name : 'Oksana',
        username : '__Oksana__',
        password : 'Oksana_qwerty'
    },
    user8 = {
        name : 'Natalia',
        username : '__Natalia__',
        password : 'Natalia_qwerty'
    },
    user9 = {
        name : 'Oleksiy',
        username : '__Oleksiy__',
        password : 'Oleksiy_qwerty'
    },
    user10 = {
        name : 'Sergiy',
        username : '__Seriy__',
        password : 'Seriy_qwerty'
    },
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

//Ще був такий варіант, незнаю який буде більш правельнішим:
// let user1 = {
//     name : 'Olexander',
//     username : '__Sasha__',
//     password : 'Sasha_qwerty'
//      }
// let user2 = {
//     name : 'Volodimir',
//     username : '__Volodia__',
//     password : 'Volodia_qwerty'
//     }
// let user3 = {
//     name : 'Vasiliy',
//     username : '__Vasya__',
//     password : 'Vasya_qwerty'
//     }
//
// let users = [user1 , user2, user3]
// console.log(users[0].password)
// console.log(users[1].password)
// console.log(users[2].password)