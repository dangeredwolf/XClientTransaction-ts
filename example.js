const { ClientTransaction } = require('./dist/transaction');
(async () => {

  // Initialize transaction generator
  const tx = await ClientTransaction.create();

  // Generate a new transaction ID
  const id = await tx.generateTransactionId('GET', '/i/api/graphql/_8aYOgEDz35BrBcBal1-_w/TweetDetail');
  console.log('X-Client-Transaction-Id:', id);
})();