import {
    Connection,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
    PublicKey
} from "@solana/web3.js"

const connection = new Connection(clusterApiUrl("devnet"));

async function airdrop(publicKey, amount) {
    const airdropSignature = await connection.requestAirdrop(new PublicKey(publicKey), amount);
    await connection.confirmTransaction({
        signature: airdropSignature,
    });
}

airdrop("8NUEf7aGTGnYoVBgTmyGPi37SCBYHGGfCbP4AhsGn2BZ", LAMPORTS_PER_SOL).then(() => {
    console.log("Airdropped 1 SOL to the address");
}).catch((error) => {
    console.log(error);
});