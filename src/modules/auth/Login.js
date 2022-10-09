/**
 * /* eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */

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
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_REQUEST } from "store/user/slice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  phonenumber: yup.string().required("Vui lòng nhập số điện thoại"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu ít nhất 8 kí tự"),
});

const Login = ({ show }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      phonenumber: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, message, success } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      toast.error(message);
    }
    if (success) {
      toast.success(message);
      navigate("/");
      window.location.reload();
    }
  }, [error, message, navigate, success]);

  // Submit Form Login
  const handleSubmitLogin = (values) => {
    if (!isValid) return;
    try {
      dispatch(LOGIN_REQUEST(values));
      reset({
        phonenumber: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {show === true && (
        <form onSubmit={handleSubmit(handleSubmitLogin)} autoComplete="off">
          <Field>
            <Label htmlFor="phonenumber">Số điện thoại</Label>
            <Input
              type="text"
              name="phonenumber"
              placeholder="Nhập số điện thoại"
              control={control}
            ></Input>
            <ErrorMessage message={errors.phonenumber?.message}></ErrorMessage>
          </Field>
          <Field>
            <Label htmlFor="password">Mật khẩu</Label>
            <InputPasswordToggle
              name="password"
              control={control}
            ></InputPasswordToggle>
            <ErrorMessage message={errors.password?.message}></ErrorMessage>
          </Field>
          <div className="have-account">
            <a href="/#">Quên mật khẩu?</a>
          </div>
          <Button
            type="submit"
            kind="secondary"
            height="44px"
            className="w-full max-w-[180px] mx-auto uppercase"
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
