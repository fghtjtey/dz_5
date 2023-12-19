// const arr = [2, 3, 4, 5, 44, 44, 34, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 8, 7, 8, 7, 5, 6, 4, 5]
// console.log(arr)
// let arr_1 = arr.filter((item, index) => {
//     return arr.indexOf(item) === index
// })
// console.log(arr_1);


let books = [
    {title: 'Анна Каренина', author: 'Лев Толстой'},
    {title: 'Виноваты звёзды', author: 'Джон Грин'},
    {title: 'В метре друг от друга', author: 'Липпинкотт Дотри'},
    {title: 'Гарри Поттер', author: 'Джоан Роулинг'},
    {title: 'Тысяча поцелуев', author: 'Тилли Коул'},
    {title: 'Счастливая семья', author: 'Шейх Мухаммад Садык Мухаммад Юсуф'},
    {title: 'Учитель', author: 'Шарлотта Бронте'}
]
function filterAndMapBooks(booksArray) {
    const booksWithU = booksArray.filter(book => book.title.toLowerCase().includes('у'))

    return booksWithU.map(book => `${book.title} - книга с буквой "у"`)
}

const withU = filterAndMapBooks(books);

if (withU.length > 0) {
    console.log("Книга с буквой 'у':")
    withU.forEach(item => console.log(item))
}
// let booksY = books.filter(book => book.title.includes('у') || book.title.includes('У'))
// console.log(booksY)
// let booksY = books.map(book => ({
//     title: book.title,
//     author: book.author
// })).filter(book => book.title.toLowerCase().includes('у'))
//
// console.log(booksY)


// git config --global user.name "Madina"
// git config --global user.email "Сюда свой GMAIL"
// > !Myxaaa [fullstack]:
// git init
// git add .
// git commit -m "DZ"
// git branch -M main
// git remote add origin и ссылку которую скопировали на гитхабе

