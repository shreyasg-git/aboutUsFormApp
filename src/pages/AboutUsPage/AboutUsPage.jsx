import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet, Pressable, Dimensions } from "react-native";
import InputField from "../../components/InputField";
const AboutUsPage = () => {
  return (
    <View>
      <EnquiryForm />
      {/* <Text>This</Text> */}
      {/* <TextInput /> */}
    </View>
  );
};

export const validationStatusEnum = {
  NOT_VALIDATED: "NOT_VALIDATED",
  RUNNING: "RUNNING",
  SUCCESS: "SUCCESS",
};

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    customerName: { value: "", validationStatus: validationStatusEnum.NOT_VALIDATED },
    customerPhone: { value: "", validationStatus: validationStatusEnum.NOT_VALIDATED },
    customerEmail: { value: "", validationStatus: validationStatusEnum.NOT_VALIDATED },
    customerMsg: { value: "", validationStatus: validationStatusEnum.NOT_VALIDATED },
  });
  useEffect(() => {
    console.log(formData);
  });
  const validateAndSubmit = () => {
    if (
      formData.customerName.validationStatus === validationStatusEnum.SUCCESS &&
      formData.customerPhone.validationStatus === validationStatusEnum.SUCCESS &&
      formData.customerEmail.validationStatus === validationStatusEnum.SUCCESS &&
      formData.customerMsg.validationStatus === validationStatusEnum.SUCCESS
    ) {
      console.log("juasbnduh");
    } else {
      console.log("Validation Incomplete");
    }
  };
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#454545",
        height: Dimensions.get("window").height - 60,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          letterSpacing: 0.25,
          color: "black",
        }}
      >
        Enquiry Form
      </Text>
      <InputField
        name="customerName"
        placeholder="Enter your name"
        label="Name: "
        formData={formData}
        setFormData={setFormData}
        validators={() => {
          if (formData.customerName.value.length === 0) {
            return { validBool: false, msg: "plz enter Name" };
          }
          return { validBool: true, msg: "success" };
        }}
      />
      <InputField
        name="customerPhone"
        placeholder="Enter phone number"
        label="Phone : (10 digits only)"
        formData={formData}
        setFormData={setFormData}
        validators={() => {
          const regExNumbersOnly = /^\d+$/;
          if (formData.customerPhone.value.length === 10) {
            if (formData.customerPhone.value.toString().match(regExNumbersOnly)) {
              return { validBool: true, msg: "success" };
            } else {
              return { validBool: false, msg: "Phone Number Not Valid" };
            }
          } else {
            return { validBool: false, msg: "Phone Number Not Valid" };
          }
        }}
      />
      <InputField
        name="customerEmail"
        label="Email: "
        placeholder="Enter email"
        formData={formData}
        setFormData={setFormData}
        validators={() => {
          let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (formData.customerEmail.value.match(regexEmail)) {
            return { validBool: true, msg: "success" };
          }
          return { validBool: false, msg: "Please Enter Valid Email" };
        }}
      />
      <InputField
        name="customerMsg"
        label="Message: "
        formData={formData}
        setFormData={setFormData}
        multiline={true}
        placeholder="Type in your query..."
        validators={() => {
          if (formData.customerMsg.value.length === 0) {
            return { validBool: false, msg: "plz enter Name" };
          }
          return { validBool: true, msg: "success" };
        }}
      />
      <Pressable style={styles.submitBtn} onPress={validateAndSubmit}>
        <Text style={styles.submitBtnTxt}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    marginTop: 20,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  submitBtnTxt: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default AboutUsPage;
