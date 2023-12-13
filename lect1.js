console.log("\n\n");

// Типы данных, вложенные структуры, доступ через точку и квадратные скобки

let day = {
    temperature: 24,
    something: "story bro",
    clothes: ["sweater","t-shirt","jeans"],
    int: 10,
    float: 123.45,
    boolean: true,
    array: [1,2,30,{apple: "red", banana: "yello"}],
    object2: {
      name: "Sveta",
      lastname: "Sokolovskaya",
      addparams: {
        age: 29,
        weight: 67
      }
    },
    object: {
      x: 1,
      y: "яблок",
      z: "С",
      w: "yo"
    },
  
  
    greetings: function () {
      console.log("Good day!")
    }
  }
  
  for(element of day.clothes) {
    console.log(element);
  }
  
  // console.log("123" + "& 345")
  
  // // Log to console
  // console.log(day)
  
  // red & yello
  let task1 = day.array[3].apple + " & " + day.array[3].banana 
  //2 red, 30 yellow
  let task2 = day.array[1] + " " + day.array[3].apple + ", " + day.array [2] + " " + day.array[3].banana
  //temperatura 24C
  let task3 = "temperature " + day.temperature + day.object.z
  
  // 10 яблок
  let task4 = "10 " + day.object.y
  //34C (= сложением двух любых чисел)
  let task5 = (20 + 14) + day.object.z
  //34C (сложение 10+24 - числа взять из объекта day)
  let task9 = day.temperature + day.int + day.object.z
  // 5) получить строку: 240 (где 240 получено умножением 24 на 10, эти числа взять из объекта day)
  let task10 = day.temperature * day.int
  // 6) получить строку: 24 * 10 = 240 (все числа как и раньше взять из объекта day)
  let task11 = day.temperature + " * " + day.int + " = " + day.temperature * day.int
  // 4) получить строку: yo! red
  let task6 = day.object.w + "! " + day.array[3].apple
  //добавить в day новую переменную с текстом "story bro", получить строку: true story bro
  let task7 = day.boolean + " " + day.something
  // 9) добавить в day новую переменную с массивом из любых слов
  //    затем получить строку, в которой будут все слова из этого массива
  let task8 = day.clothes[0] + " " + day.clothes[1] + " " + day.clothes[2]
  // 7) получить строку: 10 + 24*10 = 250
  let task12 = day.int + " + " + day.temperature + " * " + day.int + " = " + 
  (day.temperature * day.int + day.int) + task5
  
  let task13 = day.object2.name + " " + day.object2.lastname + " " + day.object2.addparams.age + " " + 
  day.object2.addparams.weight
  
  let result = task13
//   console.log(result, typeof result)
  
  
  // console.log(day.array[3])