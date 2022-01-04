import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { validationStatusEnum } from "../../pages/AboutUsPage/AboutUsPage";

const InputField = ({
  formData,
  setFormData,
  validators = () => {
    console.log("ello there");
  },
  name = "Name",
  placeholder = "placeholder",
  label = "label",
}) => {
  const [errMsg, setErrMsg] = useState("");
  const runValidators = () => {
    const { validBool, msg } = validators();
    if (validBool) {
      const newFormData = { ...formData };
      newFormData[`${name}`]["validationStatus"] = validationStatusEnum.SUCCESS;
      setFormData(newFormData);
    } else {
      setErrMsg(msg);
    }
  };
  return (
    <View style={styles.view}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={formData[`${name}`]["value"]}
        onChangeText={(text) => {
          setErrMsg("");
          const newFormData = { ...formData };
          newFormData[`${name}`]["value"] = text;
          setFormData(newFormData);
        }}
        placeholder={placeholder}
        onBlur={runValidators}
        keyboardType={name === "customerPhone" ? "numeric" : null}
        maxLength={name === "customerPhone" ? 10 : null}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}
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
