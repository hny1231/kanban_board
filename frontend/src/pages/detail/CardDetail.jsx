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
import { filledInputClasses } from "@mui/material";


function CardDetail(props) {
    const cardId = props.cardId;
    const open  = props.openDetailCard;
    console.log("=============",props)
    const { openDetailCard, setOpenDetailCard } = props;
    const serverIp = useSelector((state) => state.SERVER_IP);
    const admin = useSelector((state) => state.b_admin);
    const userId = useSelector((state) => state.u_id);
    const fileUploadPath = useSelector((state) => state.FILE_UPLOAD_PATH);

    const [selectedFiles, setSelectedFiles] = useState([]);

    // CardDetail 기본값 설정
    const [cardInfo, setCardInfo] = useState({
        memberList: "",
        startDate: "",
        endDate: "",
        totalDate: "",
        dDay: "",
        tagList: "",
        cardDescription: "",
    });
    const [fileList, setFileList] = useState({
        fileId: "",
        fileNameList: "",
    })
    function closeModal() {
        setOpenDetailCard(false);
    }


    // 날짜, 카드파트너, 태그, 파일 리스트 조회
    // 더미 파일 주석
    if(openDetailCard === true){
        console.log(true);}

        async function getData() {
            try {
                const response = await axios.get(serverIp + "detail/" + cardId);
                const responseData = response.data;
                setCardInfo((prevState) => {
                    return {
                        ...prevState,
                        memberList:

                            responseData.cardPartners
                                ? Object.values(responseData.cardPartners)
                                    .map((cardPartners) => cardPartners.userTable.u_id)
                                // .join("    ")
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
                        cardDescription: responseData.c_description ? responseData.c_description : ""
                    };
                });
                if (!Object.values(responseData.files)) {
                setFileList({
                    fileId: Object.values(responseData.files).map((files) => files.file_id),
                    fileNameList: Object.values(responseData.files).map((files) => files.file_original_name),
                });
                } else {
                }
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
    function handleChange(e) {
        const content = e.target.value;
        setCardInfo({ ...cardInfo, cardDescription: content });
    }
    // 저장 버튼 동작
    async function saveCard() {
        try {
            await axios.put(serverIp + "card", {
                c_start_date: cardInfo.startDate,
                c_end_date: cardInfo.endDate,
                c_description: cardInfo.cardDescription,
                c_upd_p: userId,
                c_id: cardId
            });
        } catch (error) {
            console.log(error.message);
        }
        saveFile(); 
        closeModal();
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

    // 여기서부터
    function handleFiles(e) {
        setSelectedFiles([...selectedFiles, ...e.target.files]);
      }
    
      function handleRemove(index) {
        const files = [...selectedFiles];
        files.splice(index, 1);
        setSelectedFiles(files);
      }
    
      function renderFileList() {
        return selectedFiles.map((file, index) => (
          <div key={index} className="file-item">
            <span>{file.name}</span>
            <A.Button type="button" onClick={() => handleRemove(index)}>
              X
            </A.Button>
          </div>
        ));
      }
    
      function generateBoundary() {
        let boundary = "--------------------------";
        for (let i = 0; i < 24; i++) {
          boundary += Math.floor(Math.random() * 10).toString(16);
        }
        return boundary;
      }
      function saveFile() {
    
        const formData = new FormData();
    
        formData.boundary = generateBoundary();
        selectedFiles.forEach((file) => {
          formData.append("file", file);
          formData.append("c_id", 17);
        });
    
        const headers = {
          headers: {
            'Content-Type': `multipart/form-data`
    
          }
        };
    
        axios
          .post(fileUploadPath, formData, headers)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        closeModal();
      }
    //   여기까지
    return (

        <div>
            <Modal isOpen={openDetailCard} onRequestClose={closeModal} ariaHideApp={false} style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)", }, content: { width: "500px", height: "50%", margin: "auto", }, }} >
                <A.Div className="modal_box">
                    <A.Button onClick={closeModal} className="btn_close">X</A.Button>
                    <A.Div className="modal_top">
                        <h1>CardDetail2 </h1>
                    </A.Div>
                    <A.Div className="modal_middle">
                    <Member memList={cardInfo.memberList} cardId={cardId} />
                        <Tag props={cardInfo.tagList} cardId={cardId} />
                        <A.Input type="date" value={cardInfo.startDate} onChange={handleStartValueChange} />
                        <A.Input type="date" value={cardInfo.endDate} onChange={handleEndValueChange} />
                        <FileAdd fileLists/>
                        <label htmlFor="file-upload" className="custom-file-upload">
              <i className="fa fa-cloud-upload"></i> FileAdd
            </label>
            <input
              id="file-upload"
              className="fileButton"
              type="file"
              name="profile_files"
              multiple
              onChange={handleFiles}
            />
                            <A.Div className="fileListTable">
                                <A.Div className="cardWrap">
                                    <A.Div className="filebuttons"> File </A.Div></A.Div>
                                <A.Div className="fileTable">
                                    {fileList.fileId && Object.values(fileList.fileNameList).map((file, index) => (
                                        <ul>
                                            <li key={index}>
                                                <FileForm props1={file} props2={fileList.fileId[index]} />

                                            </li>
                                        </ul>
                                    ))}
                                </A.Div>
                            </A.Div>
                            <A.Div className="des">
                                <A.Div className="cardWrap">
                                    <A.Div className="classDes"> Description </A.Div></A.Div>
                                <A.Textarea defaultValue={cardInfo.cardDescription} onInput={handleChange}></A.Textarea>
                            </A.Div>
                        </A.Div>
                    </A.Div>
                <A.Div className="modal_bottom">
                    <A.Input type="button" onClick={saveCard} value="저장"></A.Input>
                    {!admin && <A.Input type="button" onClick={deleteCard} value="요청"></A.Input>}
                    {!admin && <A.Input type="button" onClick={changeTask} value="삭제"></A.Input>}
                </A.Div>
            </Modal>
        </div>
    );
}

export default CardDetail;
