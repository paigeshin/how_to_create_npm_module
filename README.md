# Create your organization

- on npm website

# Create a new npm package

```bash
mkdir common
cd common 
npm init --yes 
```

# package.json

```json
  "name": "@paigesfirstmicroservice/common",
```

```json
{
  "name": "@paigesfirstmicroservice/common",
  "version": "1.0.13",
  "description": "",
  "main": "./build/index.js",
  "types": "./build/index.d.ts",
  "files": [
    "build/**/*"
  ],
  "scripts": {
    "clean": "del ./build/*",
    "build": "npm run clean && tsc",
    "pub": "git add . && git commit -m \"Updates\" && npm version patch && npm run build && npm publish"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "del-cli": "^4.0.0",
    "typescript": "^4.3.2"
  }
}
```

# publish source code

```bash
npm login 
git add .
git commit -m "message"
npm publish --access public
```

# Resolving Typescript Issue

### Issues

- There might be differences in out TS settings between the common lib and our services - don't want to deal with that
- Services might not be written with TS at all!
- Our common library will be written as Typescript and published as Javascript

### on module

```bash
tsc --init 
npm install typescript del-cli --save-dev 
```

### create typescript file

```bash
mkdir src
cd src
touch index.ts
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./build",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

```bash
tsc
```

### .gitignore

```
build
node_modules
```

### update only version

```bash
npm version patch
```

### with our custom command

```bash
git add .
git commit -m "blabla"
# npm run build
# npm publish
npm pub 
```

# Relocating Shared Code

### index.ts

```tsx
export * from "./errors/bad-request-error";
export * from "./errors/custom-error";
export * from "./errors/database-connection-error";
export * from "./errors/not-authorized-error";
export * from "./errors/not-found-error";
export * from "./errors/request-validation-error";

export * from "./middlewares/current-user";
export * from "./middlewares/error-handler";
export * from "./middlewares/require-auth";
export * from "./middlewares/validate-request";
```

### get necessary dependencies

```json
{
  "name": "@paigesfirstmicroservice/common",
  "version": "1.0.15",
  "description": "",
  "main": "./build/index.js",
  "types": "./build/index.d.ts",
  "files": [
    "build/**/*"
  ],
  "scripts": {
    "clean": "del ./build/*",
    "build": "npm run clean && tsc",
    "pub": "git add . && git commit -m \"Updates\" && npm version patch && npm run build && npm publish"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "del-cli": "^4.0.1",
    "typescript": "^4.3.5"
  },
  "dependencies": {
    "@types/cookie-session": "^2.0.43",
    "@types/express": "^4.17.13",
    "@types/jsonwebtoken": "^8.5.5",
    "cookie-session": "^1.4.0",
    "express": "^4.17.1",
    "express-validator": "^6.12.1",
    "jsonwebtoken": "^8.5.1"
  }
}
```

# Import our common modules

```bash
npm install @paigesfirstmicroservice/common
```

```tsx
import { errorHandler, NotFoundError } from "@paigesfirstmicroservice/common";
```

# Updating Common Modules

```bash
npm update @paigesfirstmicroservice/common
```
