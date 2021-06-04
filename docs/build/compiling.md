# Typescript Compiling

TypeScript can be described as JavaScript that scales. Adding static types can help prevent many common errors (i.e. ` cannot read property xxx of 'undefined'.`), and helps to identify some breaking changes before run time execution. Tools like interfaces and class parameters allows for a more robust development experience overall.

An important point, is that Typescript is just a superset of Javascript, every `.ts` file gets compiled into a `.js` file, and therefore is completely disposable for production like environments.

## Transpiling

The easiest way to download Typescript (and it`s compiler), is through npm:

- global install: `npm install -g typescript`
- local install: `npm install --save-dev typescript`

After that, the projects settings must be defined. For that a `tsconfig.json` file is needed.

```json
# simple tsconfig.json example
{
  "compilerOptions": {
    "outDir": "./dist",
    "allowJs": true,
    "target": "es5"
  },
  "include": ["./src/**/*"]
}
```

The next step, is to actually transpile the project!

```bash
$ tsc index.ts
```

This will generate a `.js` counterpart in the directory defined in the `outDir` option that can be directly executed.

```bash
$ node ./dist/index.js
```

The entire output directory can now be transported, without any need for the dependencies associated with typescript development needed to run it.

## References

- https://code.visualstudio.com/docs/typescript/typescript-compiling
- https://serokell.io/blog/why-typescript

## See more

- [Using docker images](./docker_images.md)
- [Deploying applications on cloud](../infrastructure/readme.md)
