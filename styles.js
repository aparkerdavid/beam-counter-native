import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: 275,
    height: 275,
    borderRadius: 200,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 72,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default styles;
