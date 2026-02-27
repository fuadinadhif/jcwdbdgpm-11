import React, { useState } from "react";

export default function CreateArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://directtent-us.backendless.app/api/data/articles",
        {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ title, content, imageUrl }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to create new article");
      }

      alert("New article created!");

      setTitle("");
      setContent("");
      setImageUrl("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <h1>Create Article</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Article title"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            placeholder="Article content here..."
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            placeholder="Article image url"
            id="image"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </div>

        <button type="submit">Create</button>
      </form>
    </main>
  );
}
