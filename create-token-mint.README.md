| Concept                             | Meaning                                                                  |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `createMint`                        | Creates a new SPL token (like USDC, your own coin, etc.)                 |
| `getOrCreateAssociatedTokenAccount` | Makes sure a wallet can hold that token (1 account per token per wallet) |
| `mintTo`                            | Actually mints tokens into that account                                  |
| `100_000_000`                       | This equals **100 tokens** (since you defined 6 decimals)                |

✅ In short: Solana Token Minting Flow
Here's a simplified flow to understand what's going on:

🪙 Step-by-step Flow:
Create a Mint (i.e., create your token)

Like creating a brand-new token (e.g., AYA Token).

You define:

Mint Authority – who can mint (create) tokens

Decimals – e.g., 9 for SOL-like tokens

Freeze Authority – who can freeze accounts (optional)

Create an Associated Token Account (ATA)

Each wallet that holds your token needs a token account.

This is the official place where the user's tokens live.

You create this for your own wallet (or any wallet you want to send tokens to).

Mint Tokens

You "print" tokens into the ATA.

Only the Mint Authority can do this.