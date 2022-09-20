/** @format */

import { Button } from "components/button";
import { Textarea } from "components/textarea";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const CommentStyled = styled.div`
  width: 750px;
  .cmt-textarea {
    min-height: 100px;
    border-radius: 4px 4px 0 0;
    resize: vertical;
  }
`;

const Comment = ({ className = "" }) => {
  const { control } = useForm({
    mode: "onChange",
  });
  return (
    <CommentStyled className={className}>
      <Textarea
        name="cmttextarea"
        type="textarea"
        control={control}
        className="cmt-textarea"
        placeholder="Mời bạn để lại bình luận"
      ></Textarea>
      <div className="flex justify-end">
        <Button className="inline" height="40px">
          Gửi bình luận
        </Button>
      </div>
    </CommentStyled>
  );
};

export default Comment;
