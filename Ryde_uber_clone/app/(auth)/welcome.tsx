import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { onboarding } from "@/constants";

import Swiper from "react-native-swiper";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className="flex h-full justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-lg font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
      >
        {onboarding.map((item) => {
          return (
            <View key={item.id} className="flex flex-col items-center h-screen">
              <Image
                source={item.image}
                className="w-full h-[300px]"
                resizeMode="contain"
              />
              <View className="mt-20 px-3">
                <Text className="text-center text-3xl font-JakartaBold">
                  {item.title}
                </Text>
                <Text className="text-center text-md text-gray-600 mt-5">
                  {item.description}
                </Text>
              </View>
            </View>
          );
        })}
      </Swiper>
      <View className="w-full items-center justify-center">
        <CustomButton title="Next" className="w-11/12 my-10" />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
