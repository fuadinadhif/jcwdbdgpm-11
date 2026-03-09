import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateArticlePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/events`,
        {
          method: "POST",
          body: JSON.stringify({
            title,
            price,
            description,
          }),
        },
      );

      if (response.ok === false) {
        alert("Some error happend");
      } else {
        alert("New article created!");
        navigate("/");
      }

      setTitle("");
      setDescription("");
      setPrice(0);
    } catch (error) {
      console.error(error);
      alert("Create article failed!");
    }
  }

  return (
    <main>
      <h1>Create Article Page</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Some title..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Some content here..."
            rows={15}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Some price..."
            value={price}
            onChange={(event) => setPrice(+event.target.value)}
          />
        </div>

        <button type="submit">Create Event</button>
      </form>
    </main>
  );
}
