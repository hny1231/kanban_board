import styled from 'styled-components';


// -   Main color: #3cb371;
// -   Main color rgba : (60, 179, 113);
// -   darker main color : #0D8541;
// -   daraker main color rgba : (13, 133, 65, 1);
// -   brighter main color : #90E0B3;
// -   brighter main color rgba : (144, 224, 179, 1);
// -   neon green : #10E56D (16, 229, 109, 1);
// -   red : #FB7754 (251, 119, 84, 1);
// -   orange : #FBAD54 (251, 173, 84, 1);
// -   blue : #3a7e9f (58, 126, 159, 1);
// -   black: 404040;


export const Button = styled.button`
  background-color: #3cb371;
  color: white;
  border: none;
  border-radius: 4px;
  &.btn_close {
    color: #3cb371;
    float: right;
    background-color: white;
  }
`;

export const Modal_Title = styled.h1`
    color :  #3cb371;
`;

export const Input = styled.input`
    &[type="button"]{
        background-color: white;
        color: #3cb371;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        width: 100%;
        &:hover {
            background-color: #3cb371;
            color: white;
            cursor: pointer;
        }
    }
    &[type="date"]{
        float: right;
        border: none;
        // border-bottom:  1px  solid  #3cb371;
        text-align: center;
        color: #3cb371;
        &:focus {
            outline: none;    
            border-bottom:  1px  solid  #3cb371;
        }
       
    }
    &[type="text"]{
        width: 99%;
        border: none;
        border-bottom: 1px  solid  #3cb371;
        &:focus {
            outline: none;    
        }
        &:default {
          color: red;
        }
    }
    &[type="file"]{
        width: 99%;
        border: none;
        border-bottom: 1px  solid  #3cb371;
        &:focus {
            outline: none;    
        }
        &:default {
          color: red;
        }
    }
`;

export const Div = styled.div`

    &.modal_box {
        flex-direction: column;
        height: auto;
        width: 100%;
        position: relative;
        flex-direction: column;
    }
    &.modal_top {
        flex-direction: column;
        padding: 0 0 20px 0;
        width: 100%;
        /* display: flex; */
        /* display: inline-block; */
        justify-content: space-between;
        
        
    }
    &.modal_middle {
        flex-direction: column;
        width: 100%;
        height: auto;
        position: relative;
        /* overflow-y: scroll;  */
        /* overflow-x: scroll;  */

        /*  스크롤 바 설정 */
        /* &::-webkit-scrollbar {
        width: 10px;  
        height: 20px; 
        border: 1px solid black;
    } */

    } 

    &.modal_bottom {
        position: relative;
        width: 98%;
    }

    &.labelList{

      width: 100%;
      height: 10px;
      background-color: black;
    }
    &.tagbuttons{
      color: white;
      text-align: center;
      flex-direction: column;
      width: 100px;
      height: 100%;
      min-height: 20px;
      background-color: #FBAD54;
    }
    &.memberbuttons{
      color: white;
      text-align: center;
      width: 100px;
      height: 100%;
      min-height: 20px;
      background-color: #3cb371;
    }
    .filebuttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100px;
    height: 100%;
    background-color: #FB7754;
    color: white;
    }
    .classDes {
      display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100px;
    height: 100%;
    background-color: #3a7e9f;
    color: white;
    }
    &.mplus{
    border:  1.5px solid #3cb371;
    color: black;
    border-radius: 4px;
    height: 100%;
  }
  &.tplus{
    border:  1.5px solid #FBAD54;
    color: black;
    border-radius: 4px;
    height: 100%;
  }
&.plus{
    /* min-height: 30px; */
    height: 100%;
    color: white;
    width: 100%;
    text-align: left;
    background-color: white;
    padding: 0;
    margin: 3px;
    font-size:15px;
  }
    &.fileListTable{
      display: flex;
      width: 100%;
      min-height: 30px;
      border: 1.5px solid #FB7754;
      border-radius: 4px;
      margin: 3px;
      height: 100%;
      color: white;
      width: 100%;
      text-align: left;
      background-color: white;
      padding: 0;
      margin: 3px;

    }
    &.des{
      display: flex;
      width: 100%;
      border: 1.5px solid #3a7e9f;
      border-radius: 4px;
    }
    &.cardWrap{
      /* flex-direction: column ; */
      display: flex;
      /* height: 100%; */
    }
    &.cardValue{
      background-color: white;
      color: black;
      padding-left: 10px;
    }

`;
export const Table = styled.table`

`;
export const Td = styled.td`
  width: 100%;
  &.num {
    /* border-right: 1px solid #3cb371; */
    width: 20px;
    text-align: right;
    color: #3cb371;
    padding-right: 5px;
    background-color: white;
  }
`;

export const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #f5f5f5;
    
  }
`;

export const Textarea = styled.textarea`
  border: none;
  border-radius: 4px;
  width: 100%;
  /* max-width: 99%; */
  /* min-width: 99%; */
  min-height: 50px;
  &:hover{
    border: none;
  }
  &:focus {
    border: none;
  }
`;

export const Span = styled.span`
  width: auto;
  max-width: 99%;
  min-width: 99%;
`;


