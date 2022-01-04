import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { validationStatusEnum } from "../../pages/AboutUsPage/AboutUsPage";

const InputField = ({
  formData,
  setFormData,
  multiline,
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
      const newFormData = { ...formData };
      newFormData[`${name}`]["validationStatus"] = validationStatusEnum.NOT_VALIDATED;
      setFormData(newFormData);
      setErrMsg(msg);
    }
  };
  return (
    <View style={styles.view}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={multiline ? styles.multiLineInput : styles.input}
        value={formData[`${name}`]["value"]}
        onChangeText={(text) => {
          setErrMsg("");
          const newFormData = { ...formData };
          newFormData[`${name}`]["value"] = text;
          setFormData(newFormData);
          runValidators();
        }}
        placeholder={placeholder}
        onBlur={runValidators}
        keyboardType={name === "customerPhone" ? "numeric" : null}
        maxLength={name === "customerPhone" ? 10 : null}
        multiline={multiline}
        numberOfLines={multiline ? 5 : null}
      />
      {errMsg ? <Text style={styles.errTxt}>{errMsg}</Text> : null}
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
    marginTop: 15,
    fontSize: 15,
    textAlign: "left",
    width: 300,
  },
  input: {
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#565656",
    borderRadius: 7,
    width: 300,
  },
  multiLineInput: {
    height: 70,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#565656",
    borderRadius: 7,
    width: 300,
    justifyContent: "flex-start",
  },
  errTxt: {
    color: "red",
  },
});
export default InputField;
