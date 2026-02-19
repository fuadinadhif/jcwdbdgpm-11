export default function Nihao(props: { userName: string }) {
  console.log(props);

  return <p>Nihao, {props.userName}!</p>;
}
