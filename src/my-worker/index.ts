import PromiseWorker from "promise-worker";
import MyWorker from './worker?worker'

const worker = new MyWorker()
const promiseWorker = new PromiseWorker(worker);

const send = (message: any) =>
  promiseWorker.postMessage({
    type: "message",
    message,
  });

export default {
  send,
};
