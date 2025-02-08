// tsc && node getStoresV2.ts

import { PrintfulClient } from 'printful-sdk-js-v2';

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>',
});

(async () => {
  const response = await printful.storesV2.getStores();
  const stores = response.data;
  console.log(stores);
  // Expected response:
  // [
  //  { id: 1234567, name: 'MyStoreName', type: 'etsy' }
  //  ...
  // ]
})();
