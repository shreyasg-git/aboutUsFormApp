import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const InputField = ({
  validators = () => {
    console.log("ello there");
  },
  name = "Name",
  placeholder = "placeholder",
  label = "label",
}) => {
  const [fieldValue, setFieldValue] = useState("");
  const runValidators = () => {
    validators();
  };
  return (
    <View style={styles.view}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={fieldValue}
        onChangeText={(text) => {
          setFieldValue(text);
        }}
        placeholder={placeholder}
        onBlur={runValidators}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 15,
    textAlign: "left",
    // backgroundColor: "#000000",
    width: 300,
  },
  input: {
    height: 40,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#565656",
    width: 300,
    borderRadius: 7,
  },
});
export default InputField;
