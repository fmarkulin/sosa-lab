"use client";

import axios from "axios";

export default function Home() {
  const handleSuccess = async () => {
    const response = await axios.post("http://localhost:3000/new-transaction", {
      type: "success",
    });
    console.log(response.data);
  };

  const handleCancel = async () => {
    const response = await axios.post("http://localhost:3000/new-transaction", {
      type: "canceled",
    });
    console.log(response.data);
  };

  const handleTerminated = async () => {
    const response = await axios.post("http://localhost:3000/new-transaction", {
      type: "terminated",
    });
    console.log(response.data);
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-4">
      <button
        className="px-2 py-1 border-solid border-2"
        onClick={handleSuccess}
      >
        Transaction success
      </button>
      <button
        className="px-2 py-1 border-solid border-2"
        onClick={handleCancel}
      >
        Transaction cancel
      </button>
      <button
        className="px-2 py-1 border-solid border-2"
        onClick={handleTerminated}
      >
        Transaction terminated
      </button>
    </main>
  );
}
