/** @format */

import styled from "styled-components";
import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "components/textarea";
import { Input } from "components/input";
import { addAddressApi, getDistrictApi, getWardApi } from "api/user";
import { Dropdown } from "components/dropdown";
import { Checkbox } from "components/checkbox";
import { Button } from "components/button";
import useNotification from "hooks/useNotification";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Field } from "components/field";
import { ErrorMessage } from "components/error";

const UserCreateAddressStyled = styled.div`
  width: 500px;
  overflow-y: hidden;
  .ca-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.line};
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
  .ca-heading {
    font-size: 20px;
    font-weight: 500;
    color: ${(props) => props.theme.textPrimary};
  }
  .ca-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .ca-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .ca-drop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .ca-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .ca-dropdown {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .ca-select {
    width: 100%;
    height: 44px;
    border: 1px solid ${(props) => props.theme.line};
    color: ${(props) => props.theme.textPrimary};
  }
  .ca-lists {
    height: 250px;
    overflow-y: scroll;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .ca-option {
    font-size: 16px;
  }

  .ca-lists::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  .ca-lists::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${(props) => props.theme.textLight};
    border-radius: 10px;
  }

  /* Handle */
  .ca-lists::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.blueBold};
  }
`;

const schema = yup.object({
  name: yup.string().required("Vui lòng nhập họ và tên"),
  phonenumber: yup.string().required("Vui lòng nhập số điện thoại"),
  apartmentnumberstreet: yup.string().required("Vui lòng nhập địa chỉ cụ thể"),
  ward: yup.string().required("Vui lòng chọn phường xã"),
  district: yup.string().required("Vui lòng chọn quận huyện"),
});

const UserCreateAddress = ({ closeModal }) => {
  const [listDistrict, setListDistrict] = useState([]);
  const [listWard, setListWard] = useState([]);
  const [selectDistrictName, setSelectDistrictName] = useState("");
  const [selectWardName, setSelectWardName] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const {
    control,
    reset,
    handleSubmit,
    setValue,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      isdefault: false,
    },
  });

  const user = localStorage.getItem("user");
  const { CustomerName, CustomerPhone } = JSON.parse(user);
  const { notifySuccess, notifyError } = useNotification();
  useEffect(() => {
    reset({
      name: CustomerName,
      phonenumber: CustomerPhone,
    });
  }, [CustomerName, CustomerPhone, reset]);

  // Get address district
  useEffect(() => {
    async function getDistrict() {
      try {
        const response = await getDistrictApi();
        if (response.status === 200) {
          setListDistrict(response.data.districts);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getDistrict();
  }, []);

  // Handle click district get district id
  const handleOptionDistrict = async (districtId, districtName) => {
    setSelectDistrictName(districtName);
    setValue("district", districtName);
    try {
      const response = await getWardApi(districtId);
      if (response.status === 200) {
        setListWard(response.data.wards);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle click option ward
  const handleOptionWard = (wardName) => {
    setSelectWardName(wardName);
    setValue("ward", wardName);
  };

  const handleCheckBox = () => {
    setIsCheck((isCheck) => !isCheck);
  };

  // Submit create address
  const handleSubmitAddress = async (values) => {
    if (!isValid) return null;
    try {
      const response = await addAddressApi(values);
      if (response.status === 200) {
        notifySuccess(response.data.message);
      }
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      const { message } = error.response.data;
      notifyError(message);
    }
  };

  return (
    <UserCreateAddressStyled>
      <div className="ca-top">
        <h3 className="ca-heading">Địa chỉ mới</h3>
        <div className="cursor-pointer text-text" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <form className="ca-form" onSubmit={handleSubmit(handleSubmitAddress)}>
        <div className="ca-info">
          <div className="w-full">
            <Input
              type="text"
              name="name"
              control={control}
              kind="secondary"
            ></Input>
            <ErrorMessage message={errors.name?.message}></ErrorMessage>
          </div>
          <div className="w-full">
            <Input
              type="text"
              name="phonenumber"
              control={control}
              kind="secondary"
            ></Input>
            <ErrorMessage message={errors.phonenumber?.message}></ErrorMessage>
          </div>
        </div>
        <div className="ca-drop">
          <div className="ca-item">
            <Dropdown className="ca-dropdown">
              <Dropdown.Select
                placeholder={`${selectDistrictName}` || "Quận/Huyện"}
                className="ca-select"
              ></Dropdown.Select>
              <Dropdown.List className="ca-lists">
                {listDistrict.length > 0 &&
                  listDistrict.map((district) => (
                    <Dropdown.Option
                      key={district.districtid}
                      className="ca-option"
                      onClick={() =>
                        handleOptionDistrict(
                          district.districtid,
                          district.districtname
                        )
                      }
                    >
                      {district.districtname}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
            <ErrorMessage message={errors.district?.message}></ErrorMessage>
          </div>
          <div className="ca-item">
            <Dropdown className="ca-dropdown">
              <Dropdown.Select
                placeholder={`${selectWardName}` || "Phường/Xã"}
                className="ca-select"
              ></Dropdown.Select>
              <Dropdown.List className="ca-lists">
                {listWard.length > 0 &&
                  listWard.map((ward) => (
                    <Dropdown.Option
                      key={ward.wardid}
                      className="ca-option"
                      onClick={() => handleOptionWard(ward.wardname)}
                    >
                      {ward.wardname}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
            <ErrorMessage message={errors.ward?.message}></ErrorMessage>
          </div>
        </div>
        <Field>
          <Textarea
            type="text"
            name="apartmentnumberstreet"
            control={control}
            height="100px"
            placeholder="Địa chỉ cụ thể"
          ></Textarea>
          <ErrorMessage
            message={errors.apartmentnumberstreet?.message}
          ></ErrorMessage>
        </Field>
        <Checkbox
          control={control}
          name="isdefault"
          checked={isCheck}
          value={isCheck}
          onClick={handleCheckBox}
        >
          Đặt làm mặc định
        </Checkbox>
        <div className="flex justify-end">
          <Button
            type="submit"
            kind="none"
            height="44px"
            className="w-full max-w-[100px]"
            onClick={closeModal}
          >
            Hủy
          </Button>
          <Button
            type="submit"
            kind="primary"
            height="44px"
            className="w-full max-w-[150px]"
          >
            Hoàn thành
          </Button>
        </div>
      </form>
    </UserCreateAddressStyled>
  );
};

export default UserCreateAddress;
