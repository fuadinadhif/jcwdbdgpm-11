export default function Hello(props: { userName: string; age: number }) {
  console.log(props);

  return (
    <div>
      <p>Hello, {props.userName}!</p>
      <p>I am {props["age"]} years old</p>
    </div>
  );
}
