import { create, Whatsapp, Message, SocketState } from "venom-bot";
const venom = require("venom-bot");

class Sender {
  private client: Whatsapp;

  constructor() {
    this.initialize();
  }

  async sendText(to: string, body: string){
    this.client.sendText(to, body)
  }

  private initialize() {
    venom
      .create({
        session: "session-name", //name of session
        multidevice: true, // for version not multidevice use false.(default: true)
      })
      .then((client: Whatsapp) => start(client))
      .catch((error: any) => {
        console.log(error);
      });

    const qr = (base64Qrimg: string) => {};

    const status = (statusSession: string) => {};

    const start = (client: Whatsapp) => {
      this.client = client;

      for(let i = 0; i<10;i++){
        this.sendText("5584988795816@c.us", "Teste")
      }
    };

    create("ws-sender-dev", qr, status)
      .then((client) => start(client))
      .catch((error) => console.log(error));
  }
}

export default Sender;
