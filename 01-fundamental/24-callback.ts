{
  // Callback: sebuah fungsi yang akan dipanggil 'nanti'
  function createLogger(type: logType) {
    return function (message: string) {
      return `[${type}]: ${message}`;
    };
  }

  // Real Implementation
  // 1. Array Methods
  const employees = ["Andi", "Budi", "Zaki"];
  employees.push("Joko");

  const scores = [10, 20, 30];

  /* --------------------------------- Filter --------------------------------- */
  // Filter: method yang akan memfilter array yang diberikan sesuai kondisi yang ditentukan
  // Rules: Kalau return callback adalah false, current element dibuang. Kalau true, current element disimpan
  const filterResult = scores.filter(function (element, index, array) {
    if (element > 20) {
      return true;
    } else {
      return false;
    }
  });

  // LOOP 1
  // newArray = []
  /* 
  params:
    - element: 10
    - index: 0
    - array: [10, 20, 30]

  element > 20
  10 > 20 = false

  newArray = []
  */

  // LOOP 2
  // newArray = []
  /* 
  params:
    - element: 20
    - index: 1
    - array: [10, 20, 30]

  element > 20
  20 > 20 = false

  newArray = []
  */

  // LOOP 3
  // newArray = []
  /* 
  params:
    - element: 30
    - index: 2
    - array: [10, 20, 30]

  element > 20
  30 > 20 = true

  newArray = [30]
  */
  console.log(filterResult);

  /* ----------------------------------- Map ---------------------------------- */
  const mapResult = employees.map(function (element) {
    return `Mr. ${element}`;
  });
  console.log(mapResult);

  /* --------------------------------- Reduce --------------------------------- */
  const reduceResult = scores.reduce((prev, curr) => {
    return prev + curr;
  });
  console.log(reduceResult);
}
