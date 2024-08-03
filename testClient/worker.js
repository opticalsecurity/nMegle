/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-call */

const clientId = process.argv[2];
const testMessage = process.argv[3];

let chatId;

try {
  const ws = new WebSocket("ws://localhost:8787/lobby");

  ws.onopen = () => {
    ws.send(`clientid=${clientId}`);
  };

  ws.onmessage = (event) => {
    if (event.data.toString().includes("chat")) {
      chatId = String(event.data.toString().split("chat ")[1]);
      console.log(`Got assigned to the ${chatId} chat`);
      ws.close();
    }
  };

  ws.onclose = () => {
    if (chatId) {
      console.log(`Connecting to ${chatId}...`);
      ws = new WebSocket("ws://localhost:8787/" + chatId);
      ws.onopen = () => {
        console.log(`Done! Sending message: ${testMessage}`);
        ws.send(`message:${testMessage}`);
      };
      ws.onmessage = (event) => {
        console.log(`Received message from other side: ${event.data}`);
        ws.close();
      };
    }
  };
} catch (e) {
  console.log(e);
}
