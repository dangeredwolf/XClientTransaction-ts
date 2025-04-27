# X-Client-Transaction-Id implementation in TypeScript

Generates the X-Client-Transaction-Id header for automating some Twitter GraphQL requests with accounts

Technical readup by obfio on how to generate them: [Part 1](https://antibot.blog/posts/1741552025433), [2](https://antibot.blog/posts/1741552092462), [3](https://antibot.blog/posts/1741552163416)

Inspired heavily by [iSarabjitDhiman/XClientTransaction](https://github.com/iSarabjitDhiman/XClientTransaction) (legit was extremely useful to reference and test!!!)

## Usage

```bash
npm run build
```

Run the example:

```bash
node example.js
```

Or implement it like so:

```ts
import { ClientTransaction } from './dist/transaction';
(async () => {

  // Initialize transaction generator
  const tx = await ClientTransaction.create();

  // Generate a new transaction ID
  const id = await tx.generateTransactionId('GET', '/i/api/graphql/_8aYOgEDz35BrBcBal1-_w/TweetDetail');
  console.log('X-Client-Transaction-Id:', id);
})();
```

Also thanks to Gliglue on Discord (not sure what their GitHub is) for some additional context