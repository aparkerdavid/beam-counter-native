import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { View, Pressable, Text } from "react-native";
import { Socket } from "phoenix";
import { useLiveState } from "./live-state";

const socket = new Socket("wss://beam-counter.fly.dev/socket", {});
socket.connect();

export default function App() {
  const [pushEvent, state] = useLiveState(socket, "counter", { count: 0 });
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => pushEvent("increment", {})}
      >
        <Text style={styles.text}>{state.count}</Text>
      </Pressable>
    </View>
  );
}
