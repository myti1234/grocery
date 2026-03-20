import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import "../../global.css";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-red-300 text-4xl bg-purple-500">
        Edit src/app/index.tsx to edit this screen. 123
      </Text>

      <Image
        source={require("../../assets/images/terry.png")}
        style={{ width: 200, height: 200, borderRadius: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
});
