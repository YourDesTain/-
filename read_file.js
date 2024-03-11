//const fs = require('fs');

//function readDataFromFile(filename) {
//    try {
//        const data = fs.readFileSync(filename, 'utf8');
//        return data;
//   } catch (err) {
//        console.error('Ошибка чтения файла:', err);
//        return null;
//    }
//}

//function tokenizeExpression(data) {
//    console.log('Токенизированные данные:', data);
//}

//const filename = process.argv[2]; 
//const inputData = readDataFromFile(filename);

//if (inputData) {
//    tokenizeExpression(inputData);
//} else {
//    console.log('Не удалось прочитать данные из файла.');
//}

//Как использовать: в консоле команда ----- node read_file.js structured_data.txt