import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";

import { Button, Container, Text } from "../components";
import { Box } from "../components/Theme";
import { StackNavigationProps, Routes } from "../components/Navigation";
import TextInput from "../components/Form/TextInput";

import Footer from "./components/Footer";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required("Required"),
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
        passwordConfirmation: "",
        remember: false,
      },
      onSubmit: (values) => console.log(values),
      validationSchema: SignUpSchema,
    }
  );

  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Already have an account"
      action="Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );

  return (
    <Container pattern={1} {...{ footer }}>
      <Box paddingHorizontal="xl" paddingVertical="s">
        <Text variant="title1" textAlign="center" marginBottom="s">
          Create account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let us know your name, email and password
        </Text>

        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your Email..."
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={password}
              icon="lock"
              placeholder="Enter your Password..."
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              secureTextEntry
              autoCompleteType="password"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => passwordConfirmation.current?.focus()}
            />
          </Box>
          <TextInput
            ref={passwordConfirmation}
            icon="lock"
            placeholder="Confirm your Password..."
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit}
          />
          <Box alignItems="center" marginTop="s">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Create your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
