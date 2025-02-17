# CS Schemas

Types and schemas for the CS ecosystem.

## Installation

```sh
npm i @stellab/cs-schemas
```

## Usage

### Types

```ts
import { GetFilesByIdsActionParams } from "@stellab/cs-schemas";

const params: GetFilesByIdsActionParams = {
  ids: [
    "e2f3f1e2717072d5966af119a871d7c9d859f1ddff1ab04a0e7672298e1e1cf0",
    "66b2a03838fb832876a3a69c8ce97cfa14d5b6f31432d2af2ba0c241a82c3735",
  ],
  limit: -1,
};
```

### Schemas (validation)

```ts
import { GetFilesByIdsActionParamsSchema } from "@stellab/cs-schemas";

GetFilesByIdsActionParamsSchema.parse(params);
```

## License

[AGPL-3.0](LICENSE)
