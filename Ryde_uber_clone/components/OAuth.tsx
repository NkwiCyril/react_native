import { Image, Text, View } from "react-native";
import { icons } from "@/constants";
import CustomButton from "./CustomButton";
import { ButtonProps } from "@/types/type";

const OAuth = ({ title }: ButtonProps) => {

  const handleGoogleSignIn = async () => {
    // Implement Google Sign-In logic here
  };

  return (
    <View>
      <View className="flex flex-row flex-grow justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-gray-400"></View>
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-gray-400"></View>
      </View>
      <CustomButton
        title={title}
        className="mt-4 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={() => {
          handleGoogleSignIn;
        }}
      />
    </View>
  );
};

export default OAuth;
