# Bitcoin address explorer


This is a web application that can compute and display the historical balances of a Bitcoin address.

-----
## Technologies


### Back-end
- The back-end is a [Node.js](https://nodejs.org/en/) application using [Express](https://expressjs.com/) and TypeScript.
- The address data is gathered from [BlockCypher](https://www.blockcypher.com/dev/bitcoin/#introduction) API.
- The price data is gathered from [CoinGecko](https://www.coingecko.com/en/api) API.
- It has been done using the [Clean Architecture](https://www.freecodecamp.org/news/a-quick-introduction-to-clean-architecture-990c014448d2/) pattern.
- A documentation of the API is available at this [link](https://crayze.notion.site/Documentation-Bitcoin-address-explorer-0d1c3ac41f2b4411b39e50f2440656fe).

### Front-end
- The front is a [React](https://reactjs.org/) application using TypeScript.
- Also a figma mockup is available at this [link](https://www.figma.com/file/b5qR86z4lEF7RPXc6eSyPU/Untitled?node-id=0%3A1&t=0rmRbsU05gNj8SzG-1).

-----
## How to run the project?

### Back-end

To install the dependencies and run the back-end, you need to be in the `back` folder and run the following commands:
```bash
npm i
``` 
```bash
npm run start
```

You can then access the back-end at `http://localhost:8080`.

#### Tests

To run the tests, you need to be in the `back` folder and run the following command:
```bash
npm run test
```

### Front-end

To install the dependencies and run the front-end, you need to be in the `front` folder and run the following commands:
```bash
npm i
``` 
```bash
npm run start
```

You can then access the front-end at `http://localhost:3000`.