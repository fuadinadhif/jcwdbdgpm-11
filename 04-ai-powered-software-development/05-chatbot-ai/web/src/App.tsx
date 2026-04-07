import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [prompt, setPrompt] = useState("");

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();

    try {
      if (!prompt.trim()) return;

      const userMessage = { role: "user", content: prompt };

      setMessages((prev) => [...prev, userMessage]);

      const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: prompt }),
      });

      setPrompt("");

      const data = await response.json();

      setMessages((prev) => [...prev, { role: "Bot", content: data.message }]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <h1>🤖 Chatbot</h1>

      {/* percakapan */}
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.role === "user" ? "You" : "Bot"}</strong>
            <p>{message.content}</p>
          </div>
        ))}
      </div>

      {/* prompt input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What are in your mind today?"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
