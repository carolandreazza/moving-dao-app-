# DAO para grupos de atividade física

Neste aplicativo você pode conectar sua carteira → criar uma NFT de membro → receber um token de airdrop → e votar nas propostas.

Com thirdweb para contratos.

![Screenshot_9](https://user-images.githubusercontent.com/29384128/191643735-461a42ca-3646-48ab-acd8-289b9c3dcd23.png)

## **Detalhes**

- O site verifica se o usuário já é membro, se for mostra painel com informações e permite votar nas propostas. Se não permite ser membro e reivindicar a NFT;
- Contrato ERC155 para mintagem de NFT de membro, onde várias pessoas terão a NFT. 
  - Nesse contrato é especificado:
    - Quando as pessoas vão poder reivindicar seus NFTs;
    - Número máximo de NFTs distribuidas;
    - O preço do NFT (grátis);
    - Quantos NFTs podem ser reivindicados por transação;
    - Tempo de espera entre transações (infinito significa que cada pessoa só pode solicitar um único NFT.
- Contrato para criação de Token de Governança ERC20 (aqui foi criado o token MVO)
- Especificado quantos tokens estão em circulação
- Contrato para distribuição do token (airdrop para todos os membros)
- Contrato de governança com especificações
  - Depois de uma proposta ser criada, quando os membros podem começar a votar?
  - Por quanto tempo membros podem votar em uma proposta quando ela é criada?
  - A % mínima da oferta total que precisa votar para que a proposta sejá válida (garantindo que um número minímo de membros tenha votado)
  - Qual a # mínima de tokens que um usuário precisa para poder criar uma proposta?
- Contrato especificando para onde vão os tokens (em %)
- Contrato com propostas
- Contrato que tira as vantagens do admin. Somente por meio de votação é possível criar novos tokens.

Link https://moving-dao-app.vercel.app/

#
To get started with this project, clone the repo and:

1. Run `npm install` in the root directory
2. Run `npm start` to start the project
