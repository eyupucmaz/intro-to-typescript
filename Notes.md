# Intro to Typescript

### - How to convert a TS file to JS?

First of all we need a `tsconfig.json` file. For most basic conversion the config file should have the following content:

    {
        "compilerOptions": {
            "target": "ESNext",
        }
    }

Then we can run the following command:

```bash
npx tsc
```

This will convert all the TS files in the current directory to JS files. If you pass the specific file name as an argument, the typescript compiler will use that file and built-in config for conversion.

### - How to generate a `tsconfig.json` file?

This can be done by running the following command:

```bash
npx tsc --init
```

This will generate a `tsconfig.json` file with all the default options. You can then modify the config file as per your needs. For example, if you want to use ES6 features, you can change the `target` option to `ES6`.

### - TYPES vs INTERFACES

The key distinction between a type and an interface is that a type is not extendable, whereas an interface is extendable. This means that you can use a type alias to create a union or an intersection type, but you cannot extend a type alias.
