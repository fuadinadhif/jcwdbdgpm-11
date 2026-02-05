{
  /* -------------------------------------------------------------------------- */
  /*                                Array Example                               */
  /* -------------------------------------------------------------------------- */
  /* ------------------------ Pass-by reference example ----------------------- */
  // const scores = [100, 200, 300];
  // const newScores = scores;

  // console.log(scores);
  // console.log(newScores);

  // scores[0] = 50;

  // console.log(scores);
  // console.log(newScores);

  /* ---------------------- Menyalin value secara manual ---------------------- */
  // const scores = [100, 200, 300];
  // const newScores = [scores[0], scores[1], scores[2]];

  // console.log(scores);
  // console.log(newScores);

  // scores[0] = 50;

  // console.log(scores);
  // console.log(newScores);

  /* -------------------- Menyalin value menggunakan spread ------------------- */
  const scores = [100, 200, 300];
  const newScores = [...scores];

  console.log(scores);
  console.log(newScores);

  scores[0] = 50;

  console.log(scores);
  console.log(newScores);

  /* -------------------------------------------------------------------------- */
  /*                               Object Example                               */
  /* -------------------------------------------------------------------------- */
  /* ------------------------ Pass-by reference example ----------------------- */
  // const person = { name: "John Doe", age: 50, gender: "Male" };
  // const newPerson = person;

  // console.log(person);
  // console.log(newPerson);

  // person.gender = "Female";

  // console.log(person);
  // console.log(newPerson);

  /* ---------------------- Menyalin value secara manual ---------------------- */
  // const person = { name: "John Doe", age: 50, gender: "Male" };
  // const newPerson = {
  //   name: person.name,
  //   age: person.age,
  //   gender: person.gender,
  // };
  // console.log(person);
  // console.log(newPerson);

  // person.gender = "Female";

  // console.log(person);
  // console.log(newPerson);

  /* -------------------- Menyalin value menggunakan spread ------------------- */
  const person = { name: "John Doe", age: 50, gender: "Male" };
  const newPerson = { ...person };
  console.log(person);
  console.log(newPerson);

  person.gender = "Female";

  console.log(person);
  console.log(newPerson);

  /* ------------------------ Object spread additional ------------------------ */
  const studentData = { name: "Andhika", class: "1A", age: 15 };
  const newStudentData = {
    ...studentData,
    name: "Angel",
    address: "Indonesia",
  };

  console.log(studentData);
  console.log(newStudentData);
}
