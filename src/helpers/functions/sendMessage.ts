const sendMessage = async (message: string): Promise<void> => {
  try {
    const response = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    const data = await response.json();
    console.log(data);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};

export default sendMessage;
