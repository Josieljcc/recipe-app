import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import clsx from "clsx";

type LoginFormData = z.infer<typeof loginSchema>;

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(3)
    .toLowerCase(),
  password: z.string().min(8, "The password must have at least 8 characters"),
});

function Login() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  return (
    <ImageBackground
      resizeMode="cover"
      className="w-full flex items-center justify-center h-full"
      source={require("../../assets/loginBg.jpg")}
    >
      <View
        className="flex rounded-md py-10 gap-4 flex-col w-5/6
        bg-black/70"
      >
        {!!errors.email && (
          <Text className="text-red-500">{errors.email.message}</Text>
        )}
        <TextInput
          className={`border-2 focus:border-zinc-700
          focus:outline-double bg-zinc-100
          outline-zinborder-zinc-700 
         rounded-md p-3 font-bold ps-4
         text-zinc-800 w-[90%]`}
          onChangeText={(text) => setValue("email", text.toLowerCase().trim())}
          placeholder="Email"
          textContentType="emailAddress"
        />
        {!!errors.password && (
          <Text className=" text-red-500">{errors.password.message}</Text>
        )}
        <TextInput
          className={`border-2 focus:border-zinc-700
          focus:outline-double bg-zinc-100
          outline-zinborder-zinc-700 
         rounded-md p-3 font-bold ps-4
         text-zinc-800 w-[90%]`}
          onChangeText={(text) => setValue("password", text.toLowerCase())}
          placeholder="Password"
          secureTextEntry={true}
          autoCorrect={false}
        />

        <TouchableOpacity
          onPress={() => {
            handleSubmit((data) => {
              console.log(data);
            })();
          }}
          className={clsx(
            "flex bg-red-500 items-center justify-center w-[90%] p-3 rounded-md mb-10 mt-5"
          )}
        >
          <Text className="text-white font-bold text-lg">Enter</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default Login;
