{
  /* ---------------------------------- Basic --------------------------------- */
  // Promise statuses:
  // 1. Pending
  // 2. Resolve
  // 3. Reject

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        return resolve("Promise success");
      } else {
        return reject("Promise rejected");
      }
    }, 1000);
  });

  // 1. Dot then
  // console.log(myPromise);

  // myPromise
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error(error));

  // 2. Async await
  async function runMyPromise() {
    try {
      const data = await myPromise;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  runMyPromise();

  /* --------------------------------- Example -------------------------------- */
  function boilWater() {
    return new Promise((resolve) => {
      const delay = Math.ceil(Math.random() * 2000);
      setTimeout(() => {
        console.log("Water boiled");
        resolve("");
      }, delay);
    });
  }

  function addCoffee() {
    return new Promise((resolve) => {
      const delay = Math.ceil(Math.random() * 2000);
      setTimeout(() => {
        console.log("Coffee added");
        resolve("");
      }, delay);
    });
  }

  function serveCoffee() {
    return new Promise((resolve) => {
      const delay = Math.ceil(Math.random() * 2000);
      setTimeout(() => {
        console.log("Coffee served ☕");
        resolve("");
      }, delay);
    });
  }

  // boilWater()
  //   .then(() => addCoffee())
  //   .then(() => serveCoffee())
  //   .then(() => console.log("Enjoy!"));

  async function makeCoffee() {
    try {
      await boilWater();
      await addCoffee();
      await serveCoffee();
      console.log("Enjoy!");
    } catch (error) {
      console.error(error);
    }
  }

  makeCoffee();
}
