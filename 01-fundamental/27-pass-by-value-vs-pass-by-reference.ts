{
  // pass-by value => primitive data type
  // pass-by reference => non primitive data type

  /* -------------------------- Pass By Value Example ------------------------- */
  let name = "Andhika";
  let newName = name;

  console.log(name);
  console.log(newName);

  newName = "Budi";

  console.log(name);
  console.log(newName);

  /* ------------------------ Pass By Reference Example ----------------------- */
  const classAStudents = ["Joko", "Jono", "Joni", "Juno"];
  const classBStudents = classAStudents;

  console.log(classAStudents);
  console.log(classBStudents);

  classAStudents[0] = "Juna";

  console.log(classAStudents);
  console.log(classBStudents);
}
