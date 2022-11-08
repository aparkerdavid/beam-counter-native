import { proxy, useSnapshot } from "valtio";

let stateProxy: any;
let channel: any;

export function useLiveState(socket, topic, initialState) {
  if (!stateProxy) {
    stateProxy = proxy(initialState);
  }
  if (!channel) {
    channel = socket.channel(topic, {});
    channel.join();
    channel.on("state:change", (payload) => {
      Object.assign(stateProxy, payload.state);
    });
  }

  const pushFn = (evt, payload) => {
    channel.push(`lvs_evt:${evt}`, payload);
  };
  const state = useSnapshot(stateProxy);
  return [pushFn, state];
}
