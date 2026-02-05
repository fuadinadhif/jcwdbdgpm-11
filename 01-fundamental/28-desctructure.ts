{
  // Desctructure: melucuti/mengambil value element/property ke dalam variable individual

  // 1. mengambil value TANPA desctructure
  const scores = [10, 20, 30];
  const people = { name: "John Doe", age: 70, gender: "Male" };

  const score1 = scores[0];
  const score2 = scores[1];
  const score3 = scores[2];
  console.log(score1);
  console.log(score2);
  console.log(score3);

  const name = people.name;
  const age = people.age;
  const gender = people.gender;
  console.log(name);
  console.log(age);
  console.log(gender);

  // 2. mengambil value DENGAN desctructure
  const scoresArray = [10, 20, 30];
  const peopleObject = {
    nameObject: "John Doe",
    ageObject: 70,
    genderObject: "Male",
  };

  const [scoreArray1, scoreArray2, scoreArray3, scoreArray4, scoreArray5] =
    scoresArray;
  console.log(scoreArray1);
  console.log(scoreArray2);
  console.log(scoreArray3);
  console.log(scoreArray4);
  console.log(scoreArray5);

  const { nameObject, genderObject, ageObject } = peopleObject;
  console.log(nameObject);
  console.log(genderObject);
  console.log(ageObject);
}
