/** @format */

import Comment from "modules/comment/Comment";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

const DetailsCommentStyled = styled.div`
  margin-top: 60px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 40px;
  .cmt-heading {
    display: inline;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.textPrimary};
    border-bottom: 3px solid ${(props) => props.theme.primary};
    letter-spacing: 1px;
    cursor: pointer;
  }

  .cmt-content {
    padding: 40px 0;
    border-top: 1px solid ${(props) => props.theme.line};
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .cmt-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .cmt-avatar {
    width: 30px;
    height: 30px;
    background: #ddd;
    color: ${(props) => props.theme.text};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 30px;
  }
  .cmt-name {
    text-transform: capitalize;
    font-size: 16px;
    color: ${(props) => props.theme.text};
  }
  .cmt-question {
    font-size: 14px;
    color: ${(props) => props.theme.text};
    font-weight: 400;
    letter-spacing: 1px;
  }
  .cmt-answer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }
  .cmt-rely {
    color: ${(props) => props.theme.primary};
    font-size: 13px;
    padding: 5px 0;
    cursor: pointer;
  }
  .cmt-time {
    color: ${(props) => props.theme.line};
    font-size: 13px;
    cursor: pointer;
  }
  .cmt-input {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .cmt-input {
      width: auto;
    }
  }
  @media (min-width: 320px) and (max-width: 767px) {
    .cmt-input {
      width: auto;
    }
  }
`;

const DetailsComment = () => {
  const [showCmt, setShowCmt] = useState(false);
  const handleClickCmt = () => {
    setShowCmt(true);
  };
  return (
    <DetailsCommentStyled>
      <h3 className="cmt-heading">Bình luận</h3>
      <Comment className="pt-10 pb-10 cmt-input"></Comment>
      <div className="cmt-content">
        <div className="cmt-info">
          <div className="cmt-avatar">V</div>
          <strong className="cmt-name">Võ Minh Kha</strong>
        </div>
        <div className="cmt-question">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          nostrum eligendi repellat fuga! Illo atque repellat porro quaerat,
          earum adipisci doloribus expedita architecto. Laudantium culpa eius
          accusamus similique beatae debitis.
        </div>
        <div className="cmt-answer">
          <span className="cmt-rely" onClick={handleClickCmt}>
            Trả lời
          </span>
          <span>-</span>
          <span className="cmt-time">1 ngày trước</span>
        </div>
        {showCmt && <Comment className="cmt-input"></Comment>}
      </div>
    </DetailsCommentStyled>
  );
};

export default DetailsComment;
