import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import { Socket } from "phoenix";
import { useLiveState } from "./live-state";

let socket = new Socket("wss://beam-counter.fly.dev/socket", {
  params: { userToken: "1234" },
});
socket.connect();

export default function App() {
  const [pushEvent, state] = useLiveState(socket, "counter", { count: 0 });
  return (
    <View style={styles.container}>
      <Button
        title={`${state.count}`}
        onPress={() => pushEvent("increment", {})}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
