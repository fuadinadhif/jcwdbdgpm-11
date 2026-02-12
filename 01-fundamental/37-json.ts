// JSON -> JavaScript Object Notation -> String yang formatnya mirip dengan object JS

const people = [
  { name: "Budi", age: 10 },
  { name: "Andi", age: 20 },
];

// 1. dot then
// fetch("https://jsonplaceholder.typicode.com/products")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// 2. async await
async function getUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const jsonData = await response.text();
    const data = JSON.parse(jsonData);
    // console.log(jsonData);
    // console.log(data);

    const dataFilter = data.filter(
      (element: { name: string }) => element.name === "Leanne Graham",
    );

    console.log(dataFilter);
    console.log(JSON.stringify(dataFilter));
  } catch (error) {
    console.error(error);
  }
}

getUserData();

/* ---------------------------------- NOTES --------------------------------- */
// 1. JSON.parse() -> Merubah JSON data menjadi JS data
// 2. JSON.stringify() -> Merubah JS data menjadi JSON data
