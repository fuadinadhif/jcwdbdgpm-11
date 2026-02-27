export default function PropDrillingExamplePage() {
  const username = "Budiman";

  return (
    <main className="border p-12">
      <h1>Prop Drilling</h1>
      <Level1 username={username} />
    </main>
  );
}

function Level1(props: { username: string }) {
  return (
    <div className="border p-12">
      <h2>Level 1</h2>
      <Level2 username={props.username} />
    </div>
  );
}

function Level2({ username }: { username: string }) {
  return (
    <div className="border p-12">
      <h3>Level 2</h3>
      <Level3 username={username} />
    </div>
  );
}

function Level3({ username }: { username: string }) {
  return (
    <div className="border p-12">
      <h4>Level 3</h4>
      <Level4 username={username} />
    </div>
  );
}

function Level4({ username }: { username: string }) {
  return (
    <div className="border p-12">
      <h5>Level 4</h5>
      <p>My username is {username}</p>
    </div>
  );
}
