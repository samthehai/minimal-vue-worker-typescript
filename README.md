# Minimal example of using a Web Worker with Vue in Typescript
I have forked this sample from https://github.com/dynamind/minimal-vue-worker
All I have done is converting from Javascript to Typescript.

## Requirements

- Vue CLI 3 (see [https://cli.vuejs.org]() for installation instructions)
- `worker-loader` to let Webpack load the worker for you
- `promise-worker` to simplify communication with the worker

## Running the example

This example uses the standard Vue CLI 3 commands:

```bash
yarn serve
```

#### Stand-alone build

```bash
yarn build
```

You could use Python's SimpleHTTPServer to check out the build locally:

```bash
cd dist
python -m SimpleHTTPServer
```
