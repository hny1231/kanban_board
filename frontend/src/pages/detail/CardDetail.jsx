import React, { useEffect, useState } from "react";
import axios from "axios";

import * as A from "../../style/test";

// Redux
import { useSelector } from "react-redux";

// Modal Component
import Tag from "./Tag";
import Member from "./Member";
import Modal from "react-modal";
import FileForm from "./FileForm";
import FileAdd from "./FileAdd";

function CardDetail(props) {
    const cardId = props.props;
    const [isOpen, setIsOpen] = useState(false);

<<<<<<< Updated upstream
    const serverIp = useSelector((state) => state.SERVER_IP);
    const admin = useSelector((state) => state.b_admin);
    const userId = useSelector((state) => state.u_id);
    let sdate = "";
    let edate = "";
    let ctxt = "";

    // CardDetail 기본값 설정
    const [cardInfo, setCardInfo] = useState({
        memberList: "",
        startDate: "",
        endDate: "",
        totalDate: "",
        dDay: "",
        tagList: "",
        file_id: "",
        fileList: "",
        cardDescription: "",
    });

    // 모달창 Open
    function openModal() {
        setIsOpen(true);

        getData();
    }
    // 모달창 Close
    function closeModal() {
        setIsOpen(false);
=======
  const serverIp = useSelector((state)=>state.SERVER_IP);
  const admin = useSelector((state)=>state.b_admin);
  const userId = useSelector((state)=>state.u_id);


  // CardDetail 기본값 설정
  const [cardInfo, setCardInfo] = useState({
    memberList: "",
    startDate: "",
    endDate: "",
    totalDate: "",
    dDay: "",
    tagList: "",
    file_id: "",
    fileList: "",
    cardDescription: "",
  });
  const [filetest, setFileTest] = useState({
    f_id:"",
    f_name:""
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

  // 날짜, 카드파트너, 태그, 파일 리스트 조회
  // 더미 파일 주석
  async function getData() {
    try {
      // const response = await axios.get("/fileList/response.json");
      const response = await axios.get(serverIp+"detail/1");
      // const response = await axios.get(serverIp+"/c_id/"+cardId);
      const responseData = response.data;
      setCardInfo((prevState) => {
        return {
          ...prevState,
          memberList: responseData.cardPartners
            ? Object.values(responseData.cardPartners)
                .map((cardPartners) => cardPartners.userTable.u_id)
                .join("    ")
            : "",
          startDate: responseData.c_start_date ? responseData.c_start_date : "",
          endDate: responseData.c_end_date ? responseData.c_end_date : "",
          dDay: "D-" + responseData.d_day,
          totalDate:
            responseData.c_start_date || responseData.c_end_date
              ? responseData.c_start_date + " ~ " + responseData.c_end_date
              : null,
          tagList: responseData.tags
            ? Object.values(responseData.tags).map((tags) => tags.tag_name).join("    ")
            : "",
          fileList: Object.values(responseData.files).map(
            (files) => files.file_id+ files.file_name
          ),
          cardDescription: responseData.c_description,
          file_id: Object.values(responseData.files).map((files) => files.file_id)
        };
      });
      setFileTest({
        f_id:Object.values(responseData.files).map((files) => files.file_id),
        f_name: Object.values(responseData.files).map((files) => files.file_original_name),
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  // startDate 값 받아오기
  function handleStartValueChange(event) {
    setCardInfo({ ...cardInfo, startDate: event.target.value });
  }
  // endDate 값 받아오기
  function handleEndValueChange(event) {
    setCardInfo({ ...cardInfo, endDate: event.target.value });
  }
  // textArea 값 받아오기
  function handleChange(e){
    const content =e.target.value;
    setCardInfo({...cardInfo, cardDescription: content});  
  }
  // 저장 버튼 동작
  async function saveCard() {
      try {
        await axios.post(serverIp, {
          u_id: userId,
          c_start_date: cardInfo.startDate,
          c_end_date: cardInfo.endDate,
          c_description: cardInfo.cardDescription,
        });
      } catch (error) {
        console.log(error.message);
      }
    
  }
  // 삭제 버튼 동작
  async function deleteCard() {
    try{
      await axios.post(serverIp+"/"+cardId);
    } catch(error){
      console.log(error.message);
    }
    closeModal();
  }
  // 요청 버튼 동작
  async function changeTask(){
    try{
      await axios.post(serverIp+"/"+cardId);
    } catch(error){
      console.log(error.message);
>>>>>>> Stashed changes
    }

    // 날짜, 카드파트너, 태그, 파일 리스트 조회
    // 더미 파일 주석
    async function getData() {
        try {
            const response = await axios.get();
            // const response = await axios.get("/fileList/response.json");
            // const response = await axios.get(serverIp+"/c_id/"+cardId);
            const responseData = response.data;
            setCardInfo((prevState) => {
                return {
                    ...prevState,
                    memberList: responseData.cardPartners
                        ? Object.values(responseData.cardPartners)
                              .map(
                                  (cardPartners) => cardPartners.userTable.u_id
                              )
                              .join("    ")
                        : "",
                    startDate: responseData.c_start_date
                        ? responseData.c_start_date
                        : "",
                    endDate: responseData.c_end_date
                        ? responseData.c_end_date
                        : "",
                    dDay: "D-" + responseData.d_day,
                    totalDate:
                        responseData.c_start_date || responseData.c_end_date
                            ? responseData.c_start_date +
                              " ~ " +
                              responseData.c_end_date
                            : null,
                    tagList: responseData.tags
                        ? Object.values(responseData.tags)
                              .map((tags) => tags.tag_name)
                              .join("    ")
                        : "",
                    fileList: Object.values(responseData.files).map(
                        (files) => files.file_name + "." + files.file_ext
                    ),
                    cardDescription: responseData.c_description,
                    file_id: Object.values(responseData.files).map(
                        (files) => files.file_id
                    ),
                };
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    // startDate 값 받아오기
    function handleStartValueChange(event) {
        sdate = cardInfo.startDate;
        setCardInfo({ ...cardInfo, startDate: event.target.value });
    }
    // endDate 값 받아오기
    function handleEndValueChange(event) {
        edate = cardInfo.endDate;
        setCardInfo({ ...cardInfo, endDate: event.target.value });
    }
    // textArea 값 받아오기
    function handleChange(e) {
        ctxt = e.target.value;
    }
    // 저장 버튼 동작
    async function saveCard() {
        try {
            await axios.post(serverIp, {
                u_id: userId,
                c_start_date: cardInfo.startDate,
                c_end_date: cardInfo.endDate,
                c_: cardInfo.endDate,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    // 삭제 버튼 동작
    async function deleteCard() {
        try {
            await axios.post(serverIp + "/" + cardId);
        } catch (error) {
            console.log(error.message);
        }
        closeModal();
    }
    // 요청 버튼 동작
    async function changeTask() {
        try {
            await axios.post(serverIp + "/" + cardId);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <A.Button onClick={openModal}>카드 상세 2버전</A.Button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                    content: {
                        width: "600px",
                        height: "50%",
                        margin: "auto",
                    },
                }}
            >
                <A.Div className="modal_box">
                    {/* 모달 TOP 시작 */}
                    <A.Div className="modal_top">
                        <A.Button onClick={closeModal} className="btn_close">
                            X
                        </A.Button>
                        <A.Modal_Title>CardDetail2</A.Modal_Title>
                        <A.Div className="top2">
                            <A.Div className="top2-middle">
                                <Member props={cardInfo.memberList} />
                                <A.Div className="search">
                                    {cardInfo.memberList}
                                </A.Div>
                            </A.Div>
                            <A.Div className="top2-middle">
                                <A.Input
                                    type="date"
                                    value={cardInfo.startDate}
                                    onChange={handleStartValueChange}
                                />
                                <A.Input
                                    type="date"
                                    value={cardInfo.endDate}
                                    onChange={handleEndValueChange}
                                />
                            </A.Div>
                            <A.Div className="top2-middle">
                                <Tag props={cardInfo.tagList} />
                                <A.Div className="search">
                                    {cardInfo.tagList}
                                </A.Div>
                            </A.Div>
                        </A.Div>
                    </A.Div>
                    {/* 모달 TOP 끝 */}

<<<<<<< Updated upstream
                    {/* 모달 Middle 시작*/}
                    <A.Div className="modal_middle">
                        <A.Div className="middle_top">
                            {/* 리스트 파일 목록 구현 */}
                            <FileAdd />
                            <A.Modal_Title>Code</A.Modal_Title>
                            <ul>
                                {Object.values(cardInfo.fileList).map(
                                    (file, index) => (
                                        <li key={index}>
                                            <FileForm props={file} />
                                        </li>
                                    )
                                )}
                            </ul>
                        </A.Div>
                        <A.Div className="middle_middle">
                            <A.Modal_Title>Description</A.Modal_Title>
                            <A.Textarea
                                defaultValue={cardInfo.cardDescription}
                                onInput={handleChange}
                            ></A.Textarea>
                        </A.Div>
                        <A.Div className="middle_bottom"></A.Div>
                    </A.Div>
                </A.Div>
                {/* 모달 Middle 끝 */}
                {/* 모달 Bottom 시작*/}
                <A.Div className="modal_bottom">
                    <A.Input
                        type="button"
                        onClick={saveCard}
                        value="저장"
                    ></A.Input>
                    {!admin && (
                        <A.Input
                            type="button"
                            onClick={deleteCard}
                            value="요청"
                        ></A.Input>
                    )}
                    {!admin && (
                        <A.Input
                            type="button"
                            onClick={changeTask}
                            value="삭제"
                        ></A.Input>
                    )}
                </A.Div>
                {/* 모달 Bottom 끝 */}
            </Modal>
        </div>
    );
=======
          {/* 모달 Middle 시작*/}
          <A.Div className="modal_middle">
            <A.Div className="middle_top">
              {/* 리스트 파일 목록 구현 */}
              <FileAdd />
              <A.Modal_Title>Code</A.Modal_Title>
              <ul>
                {Object.values(filetest.f_name).map((file, index) => (
                //  {Object.values(cardInfo.fileList).map((file, index) => (
                  <li key={index}>
                    <FileForm props1={file} props2={filetest.f_id[index]} />
                  </li>
                ))}
              </ul>
            </A.Div>
            <A.Div className="middle_middle">
              <A.Modal_Title>Description</A.Modal_Title>
              <A.Textarea defaultValue={cardInfo.cardDescription} onInput={handleChange}></A.Textarea>
            </A.Div>
            <A.Div className="middle_bottom">
            </A.Div>
          </A.Div>
        </A.Div>
        {/* 모달 Middle 끝 */}
        {/* 모달 Bottom 시작*/}
        <A.Div className="modal_bottom">
          <A.Input type="button" onClick={saveCard} value="저장"></A.Input>
          {!admin&&<A.Input type="button" onClick={deleteCard} value="요청"></A.Input>}
          {!admin&&<A.Input type="button" onClick={changeTask} value="삭제"></A.Input>}
        </A.Div>
        {/* 모달 Bottom 끝 */}
      </Modal>
    </div>
  );
>>>>>>> Stashed changes
}

export default CardDetail;
