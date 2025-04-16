# Printful SDK for Node.js (TypeScript) ![Project Status: WIP](https://www.repostatus.org/badges/latest/wip.svg)

[![NPM Version](https://img.shields.io/npm/v/printful-sdk-js-v2)](https://www.npmjs.com/package/printful-sdk-js-v2)
![MIT license](https://img.shields.io/badge/License-MIT-blue.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-Ready-green.svg)
![package size](https://img.shields.io/bundlephobia/minzip/printful-sdk-js-v2)

> 📢 **Notice:** Printful API v2 is currently in beta, and this SDK is still under active development. Breaking changes may occur until the first stable release. If you run into
> any problems, please feel free to raise an issue!

A lightweight SDK for interacting with the Printful RESTful API, written in TypeScript. Designed for server-side use in Node.js environments.

🔗 Official API docs: [developers.printful.com](https://developers.printful.com)

## Documentation

View the site here: [spencerlepine.github.io/printful-sdk-js-v2](https://spencerlepine.github.io/printful-sdk-js-v2/classes/PrintfulClient.html)

## Installation

```sh
# npm
npm install printful-sdk-js-v2

# yarn
yarn add printful-sdk-js-v2

# pnpm
pnpm add printful-sdk-js-v2
```

## Usage

The package needs to be configured with your private token (create one [here](https://developers.printful.com/tokens)).

```ts
// getCountries.ts

import { PrintfulClient, Country } from 'printful-sdk-js-v2';
// const { PrintfulClient } = require('printful-sdk-js-v2'); // CommonJS

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>',
});

(async () => {
  const response = await printful.countriesV2.getCountries();
  const countries: Country[] = response.data;
  console.log(countries);
})();
```

## Configuration

```js
import { PrintfulClient } from 'printful-sdk-js-v2';

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>',
});
```

| Option  | Default | Description                                                                                                                   |
| ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `TOKEN` | `null`  | The private token for authenticating requests. Generate one at [Printful Developers](https://developers.printful.com/tokens). |

## Example Code

- **JavaScript Examples**
  - [example/javascript](https://github.com/spencerlepine/printful-sdk-js-v2/tree/main/examples/typescript)
- **TypeScript Examples**
  - [example/typescript](https://github.com/spencerlepine/printful-sdk-js-v2/tree/main/examples/javascript)

## Contributing

Pull requests welcome! If you're interested in contributing to this project, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file to get started.

## Disclaimer

This SDK is a third-party library and is not officially endorsed or maintained by Printful. It is provided "as is" without warranty of any kind. For official information and
guidelines on using the Printful API, please refer to the [Printful Developer Documentation](https://developers.printful.com/).

## License

[MIT](./LICENSE)
