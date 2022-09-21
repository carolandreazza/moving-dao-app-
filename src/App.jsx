import { useAddress, useMetamask, useEditionDrop } from '@thirdweb-dev/react';
import { useState, useEffect } from 'react';

const App = () => {
  //hook conectWallet que o thirdweb dá
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

    // inicializar o contrato editionDrop
    const editionDrop = useEditionDrop("0x887ff082696E65F9c5D0aCA171B5cB73fF85947C");

    // Variável de estado para sabermos se o usuário tem nosso NFT.
    const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
    
    // isClaiming nos ajuda a saber se está no estado de carregando enquanto o NFT é cunhado.
    const [isClaiming, setIsClaiming] = useState(false);

    useEffect(() => {
      // Se ele não tiver uma carteira conectada, saia!
      if (!address) {
        return;
      }
      
      const checkBalance = async () => {
      try {
        const balance = await editionDrop.balanceOf(address, 0);
        // Se o saldo for maior do que 0, ele tem nosso NFT!
        if (balance.gt(0)) {
          setHasClaimedNFT(true);          
          console.log("🌟 esse usuário tem o NFT de membro!");
        } else {
          setHasClaimedNFT(false);
          console.log("😭 esse usuário NÃO tem o NFT de membro.");
        }
      } catch (error) {
        setHasClaimedNFT(false);
        console.error("Falha ao ler saldo", error);
      }
    };
    checkBalance();
    }, [address, editionDrop]);


    const mintNft = async () => {
      try {
        setIsClaiming(true);
        await editionDrop.claim("0", 1);
        console.log(`🌊 Cunhado com sucesso! Olhe na OpenSea: https://testnets.opensea.io/assets/${editionDrop.getAddress()}/0`);
        setHasClaimedNFT(true);
      } catch (error) {
        setHasClaimedNFT(false);
        console.error("Falha ao cunhar NFT", error);
      } finally {
        setIsClaiming(false);
      }
    };


  //Se o usuário ainda não conectou sua carteira, chama o connectWallet
  if (!address) {
    return (
      <div className="landing">
        <h1>Bem-vindo ao Moving DAO</h1>
        <h2>A DAO de quem ama movimentar o corpo 🧡</h2>
        <button onClick={connectWithMetamask} className="btn-hero">
          Conecte sua carteira
        </button>
      </div>
    );
  }
  if (hasClaimedNFT) {
    return (
      <div className="member-page">
        <h1>🧘‍♀️ Página dos membros da DAO</h1>
        <p>Parabéns por fazer parte desse clube!</p>
      </div>
    )
   };
  // Renderiza a tela de cunhagem do NFT.
  return (
    <div className="mint-nft">
      <h1>Cunhe gratuitamente seu NFT de membro da Moving DAO</h1>
      <button
        disabled={isClaiming}
        onClick={mintNft}
      >
        {isClaiming ? "Cunhando..." : "Cunhe seu NFT (GRÁTIS)"}
      </button>
    </div>
  );
};


export default App
