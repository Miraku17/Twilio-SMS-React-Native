import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const TwilioVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");

  const sendVerificationCode = async () => {

    console.log("Phone number is: ", phoneNumber);
    try {
      const response = await axios.post(
        "POST REQUEST HERE",
        {
          phoneNumber: phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const verifyCode = async () => {

    try {
      const response = await axios.post(
        "POST REQUEST HERE",

        {
          phoneNumber: phoneNumber,
          otp: otpCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error verification:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter your phone number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />

      <Button title="Send Verification Code" onPress={sendVerificationCode} />

      <Text>Enter the OTP:</Text>
      <TextInput
        style={styles.input}
        placeholder="OTP"
        keyboardType="numeric"
        value={otpCode}
        onChangeText={(text) => setOtpCode(text)}
      />

      <Button title="Verify Code" onPress={verifyCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: "100%",
  },
});

export default TwilioVerification;
