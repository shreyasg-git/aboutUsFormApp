import React from "react";
import { View, Text, Button } from "react-native";
import InputField from "../../components/InputField";
const AboutUsPage = () => {
  return (
    <View>
      <Text>What About Us?</Text>
      <EnquiryForm />
    </View>
  );
};

const EnquiryForm = () => {
  return (
    <View>
      <CustomForm>
        <InputField name="customerName" label="Name: "></InputField>
        <InputField name="customerPhone" label="Phone No.: "></InputField>
        <InputField name="customerEmail" label="Email: "></InputField>
        <InputField name="customerMsg" label="Message: "></InputField>
        <Text>Enquiry Form</Text>
        <Button title="Submit" onPress={validateAndSubmit} />
      </CustomForm>
    </View>
  );
};

const CustomForm = ({ children }) => {
  validateAndSubmit = () => {
    console.log("Validation Run Success");
  };
  return <View>{children}</View>;
};

export default AboutUsPage;
