import React, { useState } from "react";
import Modal from "react-modal";
import * as A from "../../style/test";
import axios from "axios";
import { useSelector } from "react-redux";

function Tag(taglist) {
  const test = taglist.props.split('    ');
  const tagList = taglist.props;
  const cardId = taglist.cardId;
  const [isOpen, setIsOpen] = useState(false);
  // const [newTag, setNewTag] = useState([test]);
  const [newTag, setNewTag] = useState([]);
  
  const serverIp = useSelector((state) => state.SERVER_IP);

  // 모달창 Open
  function openModal() {
    setIsOpen(true);
  }
  // 모달창 Close
  function closeModal() {
    setIsOpen(false);
    setNewTag([]);
  }
  
  // 태그 저장
  function saveTag() {
      axios
        .post(serverIp + "Tag", newTag.map((tag) => ({
          tag_name: tag,
          c_id: cardId,
          tag_color:1
        })))
        .then(function (response) {
          alert("저장이 완료되었습니다.");
        })
        .catch(function (error) {
          console.log(error.message);
        });
      closeModal();
    }
  // Enter 입력시 저장 및 라벨 생성
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setNewTag([...newTag, event.target.value]);
      // getRandomColor();
      event.target.value = "";

    }
  }
  function handleRemove(index) {
    const tag = [...newTag];
    tag.splice(index, 1);
    setNewTag(tag);
  }
  return (
    <div>
      
  
      <A.Div onClick={openModal} className="plus tplus">
        <A.Div className="cardWrap">
          <A.Div className="tagbuttons"> Tag </A.Div>
          <A.Div className="cardValue">{test}</A.Div>
          </A.Div> 
        {/* <A.Label className="tagbutton"> Tag</A.Label> {test} */}
      </A.Div>
      
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "300px",
            height: "300px",
            margin: "auto",
          },
        }}
      >
        <A.Div className="modal_box">
          <A.Div className="modal_top">
            <A.Button onClick={closeModal} className="btn_close">
              {" "}
              X{" "}
            </A.Button>
            <A.Modal_Title> Tag</A.Modal_Title>
          </A.Div>
          <A.Div className="modal_middle">
            <A.Input
              type="text"
              className="tagForm"
              placeholder="Tag..."
              onKeyPress={handleKeyPress}
            />
            <div>
              {newTag.map((tag, index) => (
                <div key={index} className="labelList">
                  <A.Span className="labelList">{tag}</A.Span>
                  <A.Button type="button" onClick={() => handleRemove(index)}>
                    X
                  </A.Button>
                </div>
              ))}
            </div>
          </A.Div>
          <A.Div className="modal_bottom">
          <A.Input type="button" value="저장" onClick={saveTag}></A.Input>
          </A.Div>
        </A.Div>
      </Modal>
    </div>
  );
}

export default Tag;
