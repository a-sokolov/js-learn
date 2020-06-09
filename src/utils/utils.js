export function writeConsole(value) {
  setTimeout(() => console.log("Hello from setTimeout()"), 1000);
  let timerId = setInterval(() => console.log("Hello from setInterval()"), 2000);

  setTimeout(() => {
    clearInterval(timerId);
    console.log("Timer stopped!");
  }, 5000)

  console.log(`What the fuck ${value}?`);

  // 8 типов в JavaScript
  let stringValue = "Hello" // string
  let numberValue = 100 // number
  let intValue = 1000005n // bigint
  let flag = true // boolean
  let someObject // undefined
  let nullValue = null
  let symbol = Symbol("id")

  const MY_BIRTH_DATE = "11.12.1979" // constant
  const age = Math.random(); // constant too
  let infinity = Infinity // object

  console.log(stringValue)
  console.log(typeof numberValue)
  console.log(typeof intValue)
  if (flag) console.log(typeof (flag));
  console.log(typeof someObject)
  console.log(typeof nullValue) // return object type, because JS has error in engine
  console.log(`My birth date is ${MY_BIRTH_DATE}`) // interpolation
  console.log("And my age is " + age)
  console.log(`${typeof infinity} ${infinity}`)
  console.log(typeof symbol)

  console.log(`"" + 1 + 0 = ${"" + 1 + 0} is "10", т.к. первый тип данных с оператором + определяет сложение или склеивание`)
  console.log(`"" - 1 + 0 = ${"" - 1 + 0} is -1, т.к. оператор - это математическая операция и значение "" принимает 0`)
  console.log(`true + false = ${true + false} is 0, т.к. оператор + приводит true = 1, false = 0`)
  console.log(`6 / "3" = ${6 / "3"} is 2, т.к. оператор / это математическая операция и строку можно привести к числу`)
  console.log(`"2" * "3" = ${"2" * "3"} is 6, т.к. оператор * это математическая операция и строки можно привести к числу`)
  console.log(`4 + 5 + "px" = ${4 + 5 + "px"} is "9px", т.к. сперва идет сложение чисел, а затем склеивание со строкой (нельзя привести к числу)`)
  console.log(`"$" + 4 + 5 = ${"$" + 4 + 5} is $45, т.к. сперва идет сложение со строкой, которую нельзя привести к числу`)
  console.log(`"4" - 2 = ${"4" - 2} is 2, см. выше`)
  console.log(`"4px" - 2 = ${"4px" - 2} is NaN, не число т.к. оператор - только для чисел, а "4px" нельзя привести к числу`)
  console.log(`7 / 0 = ${7 / 0} is Infinity, т.к. деление на ноль дает бесконечность`)
  console.log(`"  -9  " + 5 = ${"  -9  " + 5} is "  -9  5", т.к. первое значение строка`)
  console.log(`"  -9  " - 5 = ${"  -9  " - 5} is -14, т.к. оператор - приводит к числу`)
  console.log(`null + 1 = ${null + 1} is 1, т.к. null приводится к 0`)
  console.log(`undefined + 1 = ${undefined + 1} is NaN, т.к. undefined становится NaN после численного преобразования `)
  console.log(`" \\t \\n" - 2 = ${" \t \n" - 2} is -2, т.к. непечатные символы игнорируются, что в итоге получаем пустую строку, которая является 0`)

  console.log(+true); // 1 унарные оператор + преобразует true = 1
  console.log(+""); // 0 унарный оператор + преобразует пустую строку к 0
  console.log(+"12px") // NaN

  /*
   Таблицы приоритетов

    16	унарный плюс	+
    16	унарный минус	-
    14	умножение	*
    14	деление	/
    13	сложение	+
    13	вычитание	-
    3	присваивание	=
   */

  console.log((+"12" + +"3") / 5) // 3

  let a, b, c
  a = b = c = 4

  console.log(a) // 4
  console.log(c += (b += 1)) // 9
  console.log(b) // 5
  console.log(`Остаток от деления 8 % 3 = ${8 % 3}`) // 2
  console.log(`Возведение в степень 3 ** 5 = ${3 ** 5}`) // 243
  // eslint-disable-next-line eqeqeq
  console.log(`Не строгое равернство false == 0 is ${false == 0}`)
  console.log(`Cтрогое равернство false === 0 is ${false === 0}`)
  console.log(`null == undefined ${null == undefined}`)
  console.log(`null === undefined ${null === undefined}`)
  console.log(``)

  function writeConsole(message = "Default message") {
    console.log(message || "No message text")
  }

  writeConsole("Fuck the system")
  writeConsole()

  const MY_AGE = 10005n
  writeConsole(MY_AGE)

  function sum(a, b) {
    return (+a + +b);
  }

  console.log(`5 + 3 = ${sum(5, 3)}`)
  console.log(`5 + 3 = ${sum(5, "3")}`)
  console.log(`5 + 3 = ${sum(5, "-3")}`)

  const sayHi = function () {
    console.log("Hi!")
  }

  sayHi()

  function runFunc(func) {
    console.log("Run function!")
    func()
    console.log(func)
  }

  runFunc(sayHi)
  runFunc(() => {
    console.log("Ouch!")
  })

  const anotherFunc = (id, name) => {
    console.log(`${id} - ${name}`)
  }

  anotherFunc(1, "Fuck")

  for (let i = 0; i < 5; i++) {
    console.log(`Number is ${i}`)
  }

  let i = 3
  do {
    // if (i === 2) debugger
    console.log(i--)
  } while (i > 0);

  let user = {
    name: "Anatoly",
    age: 40,
  }

  for(let key in user) {
    console.log(`${key} - ${user[key]}`)
  }

  let userClone = Object.assign({}, user);
  user.age = 41;

  console.log(`Clone age is ${userClone.age}`)

  const id = Symbol("id");
  user[id] = "Hidden field";

  console.log(user[id])

  for(let char of "Some") {
    console.log(char);
  }

  const name = "anatoly";
  console.log(name[1]);
  console.log(name.indexOf("t"))
  console.log(name[0].toUpperCase() + name.slice(1))

  let myArray = ["one", "two", "three"]
  myArray.forEach(item => {
    console.log(item);
  })

  let result = myArray.map((item, index) => {
    console.log(`Index is ${index}`)
    return item.length;
  })
  console.log(result);

  let arrayReduceResult = myArray.reduce((prev, current) => {
    return prev + " " + current;
  })

  console.log(`Array reduce result is ${arrayReduceResult}`)

  let customArray = {
    from: 1,
    to: 5,
    [Symbol.iterator] () {
      return {
        current: this.from,
        last: this.to,
        next() {
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      }
    }
  }

  for(let key of customArray) {
    console.log(key);
  }

  let pseudoArray = {
    0: "You",
    1: "son",
    2: "of",
    3: "a",
    4: "bitch",
    length: 5
  }

  let arr = Array.from(pseudoArray);
  console.log(arr.join(" "));

  let guitarMap = new Map();
  guitarMap.set("bass", 1)
  guitarMap.set("6 string", 2);

  guitarMap.forEach((value, key) => {
    console.log(`${key} is ${value}`);
  })

  let guitarSet = new Set();
  guitarSet.add(1)
  guitarSet.add(2)
  guitarSet.add(2)
  guitarSet.add(3)

  guitarSet.forEach(value => console.log(value));

  // Примеры деструктуризации
  // eslint-disable-next-line no-unused-vars
  let [fullName, title, ...restArr] = "Anatoly Home and some objects".split(' ');
  console.log(`Title is ${title}`)
  console.log(restArr);

  let rect = {
    point: {
      x: 10,
      y: 20,
      toJSON() {
        return `${x}:${y}`;
      }
    },
    size: {
      width: 100,
      height: 150
    },
    name: "Rectangle",
    sex: "Male",
    execDate: "11-12-1979",
    items: ["one", "two", "three"]
  }

  const {
    point: {
      x,
      y
    },
    size: s,
    name: n,
    items: [itemOne, itemTwo],
    formTitle = "Unknown",
    ...restObj} = rect;
  console.log(x)
  console.log(y)
  console.log(s)
  console.log(n)
  console.log(itemOne)
  console.log(itemTwo)
  console.log(formTitle)
  console.log(restObj)

  const showMenu = ({mTitle = "Menu title", mWidth = 200, mHeight = 100} = {}) => {
    console.log(mTitle);
    console.log(mWidth);
    console.log(mHeight);
  }

  showMenu();
  showMenu({ mTitle: "FuckYou" })

  let now = new Date("1979-12-11");
  console.log(now);

  let myBirthDate = new Date(1979, 11, 11);
  console.log(`My birth date is ${myBirthDate}`)

  console.log(JSON.stringify(rect, null, 2))

  // Spread operator
  console.log(Math.max(...[1, 5, 10]))

  let outer = () => {
    let counter = 0;

    return () => {
      return counter++;
    }
  }

  const inner = outer();
  console.log(`Counter is ${inner()}`);
  console.log(`Counter is ${inner()}`);
  console.log(`Counter is ${inner()}`);

  const innerDuplicate = outer();
  console.log(`Counter is ${innerDuplicate()}`);
  console.log(`Counter is ${innerDuplicate()}`);
  console.log(`Counter is ${innerDuplicate()}`);

  // Видимость let переменной
  {
    let myName = "Anatoly";
    console.log(myName);
  }

  // console.log(myName); // myName is not defined

  let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const inBetween = (a, b) => {
    return (x) => {
      return x >= a && x <= b;
    }
  }

  console.log(keys.filter(inBetween(3, 8)))

  const sumDigits = (a) => {
    return (b) => {
      return a + b;
    }
  }

  // Пример замыкания
  console.log(sumDigits(5)(4))

  // eslint-disable-next-line no-new-func
  const dynamicFunc = new Function("a", "b", "return a + b");
  console.log(`Dynamic function call ${dynamicFunc(1, 3)}`)

  function funcWithThis(name) {
    console.log(`${this.mail} - ${name}`)
  }

  // Пример call
  funcWithThis.call({ mail: "kotuza@mail.ru" }, "Me and my friends")
  funcWithThis.call({ mail: "a.sokolov.store@gmail.com" }, "Me and my friends")

  // Пример apply
  function spy(func) {
    function wrapper(...args) {
      wrapper.calls.push(args);
      func.apply(this, args);
    }
    wrapper.calls = [];

    return wrapper;
  }

  let sumWrapped = spy((a, b) => {
    console.log(a + b);
  })

  sumWrapped(1, 2);
  sumWrapped(3, 4);
  sumWrapped(5, 6);

  for(let keys of sumWrapped.calls) {
    console.log(keys);
  }

  // Пример apply
  function delayFunc(func) {
    let isDelay = false;

    function wrapper(...args) {
      if (isDelay) return;
      isDelay = true;
      setTimeout(func.apply(this, args), 1000);
    }

    return wrapper;
  }

  let sumDelayed = delayFunc((a, b) => {
    console.log(a + b);
  })

  sumDelayed(11, 12);
  sumDelayed(11, 12);
  sumDelayed(11, 12);
  sumDelayed(11, 12);

  const sendMessage = (mail, title) => {
    console.log(`${mail} - ${title}`);
  }

  // Частичное применение
  let sendToMe = sendMessage.bind(null, "Anatoly");
  sendToMe("Ну чё, как дела?");

  let myObject = {
    name: "Anatoly",
    surname: "Sokolov",

    get getName() {
      return this.name;
    },

    set setName(name) {
      this.name = name;
    }
  }

  console.log(myObject.name);
  myObject.name = "Holy";
  console.log(myObject.name);
}