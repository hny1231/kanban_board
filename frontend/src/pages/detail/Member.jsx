import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import * as A from "../../style/test";
import axios from "axios";
import { useSelector } from "react-redux";

function Member(memList) {
  const cardMember = memList.memList;
  const cardId = memList.cardId;

  const [isOpen, setIsOpen] = useState(false);
  // const [memberList, setMeberList] = useState("");
  const [memberSearch, setMemberSearch] = useState(null);
  const [selectedList, setSelectedList] = useState([]);

  const serverIp = useSelector((state) => state.SERVER_IP);
  const userID = useSelector((state) => state.u_id);
  // const boardID = useSelector((state)=>state.b_id);
  const boardID = 2;

  const [memberList, setMemberList] = useState({
    u_name: "",
    u_id: "",
    u_email: ""
  })


  // 모달창 Open
  function openModal() {
    setIsOpen(true);
    getData();
  }
  // 모달창 Close
  function closeModal() {
    setIsOpen(false);
  }

  // 보드 멤버 리스트 검색
  async function getData() {
    try {
      const response = await axios.get(serverIp + "boardusers/" + boardID);
      const responseData = response.data;


      const uNames = Object.keys(responseData).map((key) => {
        return responseData[key].u_name;
      });

      const uId = Object.keys(responseData).map((key) => {
        return responseData[key].u_id;
      });

      const uEmail = Object.keys(responseData).map((key) => {
        return responseData[key].u_email;
      });
      
      setMemberList({
        u_name: uNames,
        u_id: uId,
        u_email: uEmail,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  // input 값 받기
  function handleMemberPlusChange(event) {
    setMemberSearch(event.target.value);
  }
  // input 검색
  function handleKeyPress(event) {
    if (memberSearch !== null && memberList !== "") {
      if (
        Object.values(memberList)
          .map((obj) => obj.u_id)
          .includes(memberSearch)
      ) {
        console.log("되고있어요");
        plusMember(memberSearch);
      } else {
        console.log("좆되고 있어요!");
      }
    }
  }
  


  function saveMember() {
    axios
      .post(serverIp + "cardmember", selectedList.map((userId) => ({
          u_id: userId,
          b_id: boardID,
          c_id: cardId
        })),
      )
      .then(function (response) {
        alert("저장이 완료되었습니다.");
      })
      .catch(function (error) {
        console.log(error.message);
      });
    closeModal();
  }

  function plusMember(selectedId) {
    if (selectedList.includes(selectedId)) {
      setSelectedList(selectedList.filter((value) => value !== selectedId));
    } else {
      setSelectedList([...selectedList, selectedId]);
    }
  }


  function handleRemove(index) {
    const tag = [...selectedList];
    tag.splice(index, 1);
    setSelectedList(tag);
  }

  return (
    <div className="member">
      <A.Div onClick={openModal} className="plus mplus">
        <A.Div className="cardWrap">
          <A.Div className="memberbuttons"> Member </A.Div>
          <A.Div className="cardValue">{cardMember}</A.Div>
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
            width: "350px",
            height: "500px",
            margin: "auto",
          },
        }}
      >
        <A.Div className="modal_box">
          <A.Div className="modal_top">
            <A.Button onClick={closeModal} className="btn_close">
              X
            </A.Button>
            <A.Modal_Title>Member</A.Modal_Title>
            <A.Div className="memberList"></A.Div>
          </A.Div>
          <A.Input
            type="text"
            onChange={handleMemberPlusChange}
            placeholder="add member.."
            onKeyPress={handleKeyPress}
          ></A.Input>
          <div>
            {Object.values(selectedList).map((member, index) => (
              <div key={index} className="labelList">
                <A.Span className="labelList">{member}</A.Span>
                <A.Button type="button" onClick={() => handleRemove(index)}>
                  X
                </A.Button>
              </div>
            ))}
          </div>
          <A.Div className="modal_middle">
            <table>
              <tbody>
                {memberList.u_id && memberList.u_id.map((id, index) => (
                  <A.Tr
                    key={index}
                    onClick={() => plusMember(memberList.u_id[index])}
                  >
                    <A.Td className="memberTd">{memberList.u_id[index]}</A.Td>
                    <A.Td className="email">{memberList.u_email[index]}</A.Td>
                  </A.Tr>
                ))}
              </tbody>
            </table>
          </A.Div>
          <A.Div className="modal_bottom">
            <A.Input type="button" value="저장" onClick={saveMember}></A.Input>
          </A.Div>
        </A.Div>
      </Modal>
    </div>
  );
}
export default Member;
