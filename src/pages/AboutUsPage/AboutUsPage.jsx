import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput } from "react-native";
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
  const validateAndSubmit = () => {};
  return (
    <View>
      <Text>Enquiry Form</Text>
      <InputField
        name="customerName"
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
            return { validBool: false, msg: "Phone Number Not Valid 2" };
          }
        }}
      />
      <InputField
        name="customerEmail"
        label="Email: "
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
        validators={() => {
          // const regExNumbersOnly = /^d{10}$/;
          // if (formData.customerPhone.value.match(regExNumbersOnly)) {
          //   return { validBool: false, msg: "Phone Number Not Valid" };
          // }
          return { validBool: true, msg: "success" };
        }}
      />
      <Button name="submit" title="Submit" onPress={validateAndSubmit} setFormData={setFormData} />
    </View>
  );
};

export default AboutUsPage;
