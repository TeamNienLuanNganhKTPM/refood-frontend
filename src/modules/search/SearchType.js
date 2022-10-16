/** @format */

import { Checkbox } from "components/checkbox";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SearchType = ({ setTypeSelect }) => {
  const { control } = useForm({
    mode: "onChange",
  });
  const [types, setTypes] = useState([
    { id: 1, checked: false, label: "Khai vị" },
    // {
    //   id: 2,
    //   checked: false,
    //   label: "Món xào",
    // },
    // {
    //   id: 3,
    //   checked: false,
    //   label: "Món chiên",
    // },
    // { id: 4, checked: false, label: "Món hấp" },
  ]);

  const handleCheckedType = (id) => {
    const listTypes = types;
    const chageCheckedType = listTypes.map((item) => {
      return item.id === id
        ? { ...item, checked: !item.checked }
        : { ...item, checked: false };
    });
    let timerInterval;
    Swal.fire({
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      setTypes(chageCheckedType);
    });
  };

  // Update type
  useEffect(() => {
    function updateType() {
      let result = [];
      types.filter((t) => t.checked && result.push({ type: t.label }));
      setTypeSelect(result);
    }
    updateType();
  }, [types]);
  return (
    <>
      <label>Theo loại món ăn</label>
      {types.map((item) => {
        return (
          <Checkbox
            control={control}
            name="type"
            key={item.id}
            checked={item.checked}
            onClick={() => handleCheckedType(item.id)}
          >
            {item.label}
          </Checkbox>
        );
      })}
    </>
  );
};

export default SearchType;