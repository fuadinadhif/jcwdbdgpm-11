import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [adminMessage, setAdminMessage] = useState("");

  useEffect(() => {
    async function getAdminData() {
      const response = await axios.get(
        "http://localhost:8000/api/authorization/protected/admin",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        },
      );

      console.log(response);
    }

    getAdminData();
  }, []);

  return (
    <main>
      <h1>Admin Page</h1>
      <p>{adminMessage}</p>
    </main>
  );
}
