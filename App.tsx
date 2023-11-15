import {
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View className="bg-zinc-700  relative h-full w-full">
      <ImageBackground
        resizeMode="cover"
        className="flex-1 w-full flex items-center justify-between h-full"
        source={require("./assets/bg.jpg")}
      >
        <Text className="text-zinc-200 font-bold pt-10">13k+ recipes</Text>
        <View className="flex flex-col items-center justify-center">
          <Text className="text-3xl flex text-zinc-200 font-bold leading-[4rem]">
            Let's
          </Text>
          <Text className="text-5xl flex text-zinc-200 font-bold leading-[4rem]">
            Cook
          </Text>
          <Text className="text-base text-zinc-200 -mt-2">
            Find best recipes
          </Text>
          <TouchableOpacity
            onPress={() => {
              console.log("teste");
            }}
            className="bg-red-500 flex items-center justify-center w-80 p-4 rounded-md mb-10 mt-5"
          >
            <Text className="text-white text-base">Start Cooking ➤</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
