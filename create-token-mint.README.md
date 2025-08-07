| Concept                             | Meaning                                                                  |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `createMint`                        | Creates a new SPL token (like USDC, your own coin, etc.)                 |
| `getOrCreateAssociatedTokenAccount` | Makes sure a wallet can hold that token (1 account per token per wallet) |
| `mintTo`                            | Actually mints tokens into that account                                  |
| `100_000_000`                       | This equals **100 tokens** (since you defined 6 decimals)                |
