import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x887ff082696E65F9c5D0aCA171B5cB73fF85947C");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Mantenha o movimento",
        description: "Esse NFT vai te dar acesso ao Moving DAO!",
        image: readFileSync("scripts/assets/mov.gif"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()