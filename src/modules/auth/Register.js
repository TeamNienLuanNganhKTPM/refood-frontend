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
  name: yup.string().required("Vui lòng nhập họ và tên"),
  phoneRegister: yup.string().required("Vui lòng nhập số điện thoại"),
  passwordRegister: yup
    .string()
    .min(8, "Mật khẩu ít nhất 8 kí tự")
    .required("Vui lòng nhập mật khẩu"),
  passwordComfirm: yup.string().required("Vui lòng nhập lại mật khẩu"),
});

const Register = ({ show }) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleSubmitRegister = (values) => {
    if (!isValid) return;
    console.log("handleSubmitRegister ~ values", values);
  };

  return (
    <>
      {show === false && (
        <form onSubmit={handleSubmit(handleSubmitRegister)} autoComplete="off">
          <Field>
            <Label htmlFor="name">Họ và tên</Label>
            <Input
              type="text"
              name="name"
              placeholder="Nhập họ và tên"
              control={control}
            ></Input>
            <ErrorMessage message={errors.name?.message}></ErrorMessage>
          </Field>
          <Field>
            <Label htmlFor="phoneRegister">Số điện thoại</Label>
            <Input
              type="text"
              name="phoneRegister"
              placeholder="Nhập số điện thoại"
              control={control}
            ></Input>
            <ErrorMessage
              message={errors.phoneRegister?.message}
            ></ErrorMessage>
          </Field>
          <Field>
            <Label htmlFor="passwordRegister">Mật khẩu</Label>
            <InputPasswordToggle
              name="passwordRegister"
              control={control}
            ></InputPasswordToggle>
            <ErrorMessage
              message={errors.passwordRegister?.message}
            ></ErrorMessage>
          </Field>
          <Field>
            <Label htmlFor="passwordComfirm">Xác nhận lại mật khẩu</Label>
            <InputPasswordToggle
              name="passwordComfirm"
              control={control}
            ></InputPasswordToggle>
            <ErrorMessage
              message={errors.passwordComfirm?.message}
            ></ErrorMessage>
          </Field>
          <Button
            type="submit"
            kind="secondary"
            height="44px"
            className="w-full mt-10 max-w-[180px] mx-auto uppercase"
            disabled={isSubmitting}
          >
            Đăng ký
          </Button>
        </form>
      )}
    </>
  );
};

export default Register;
