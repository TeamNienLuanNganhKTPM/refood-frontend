/** @format */

import { Button } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "components/error";

const schema = yup.object({
  phoneLogin: yup.string().required("Vui lòng nhập số điện thoại"),
  passwordLogin: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu ít nhất 8 kí tự"),
});

const Login = ({ show }) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleSubmitLogin = (values) => {
    if (!isValid) return;
    console.log("handleSubmitLogin ~ values", values);
  };

  return (
    <>
      {show === true && (
        <form onSubmit={handleSubmit(handleSubmitLogin)} autoComplete="off">
          <Field>
            <Label htmlFor="phoneLogin">Số điện thoại</Label>
            <Input
              type="text"
              name="phoneLogin"
              placeholder="Nhập số điện thoại"
              control={control}
            ></Input>
            <ErrorMessage message={errors.phoneLogin?.message}></ErrorMessage>
          </Field>
          <Field>
            <Label htmlFor="passwordLogin">Mật khẩu</Label>
            <InputPasswordToggle
              name="passwordLogin"
              control={control}
            ></InputPasswordToggle>
            <ErrorMessage
              message={errors.passwordLogin?.message}
            ></ErrorMessage>
          </Field>
          <div className="have-account">
            <a href="/#">Quên mật khẩu?</a>
          </div>
          <Button
            type="submit"
            kind="secondary"
            height="50px"
            className="w-full max-w-[200px] mx-auto uppercase"
            disabled={isSubmitting}
          >
            Đăng nhập
          </Button>
        </form>
      )}
    </>
  );
};

export default Login;
