import axios from "axios";

const sendRequest = async (type: "success" | "canceled" | "terminated") => {
  try {
    const response = await axios.post(
      "http://localhost:3000/new-transaction",
      {
        type,
      },
      {
        timeout: 60000,
      }
    );
    console.log(response.data);
  } catch (error: any) {
    console.error(error.message);
    return -1;
  }
};

const main = async () => {
  console.log("Sending request");
  const res = await sendRequest("terminated");
  while (res === -1) {
    console.log("Retrying request");
    await sendRequest("terminated");
  }
  console.log("Success");
};

main();
