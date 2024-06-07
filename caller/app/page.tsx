export default function Home() {
  const handleSuccess = async () => {
    const response = await fetch("/api/new-transaction", {
      method: "POST",
      body: JSON.stringify({ type: "success" }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button>Transaction success</button>
    </main>
  );
}
