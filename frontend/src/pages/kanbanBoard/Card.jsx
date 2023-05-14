import { useState, useRef, useEffect } from "react";

// COMPONENT
import CardDetail from "../detail/CardDetail";
import CardDropdownComponent from "../../components/CardDropdownComponent";

// STYLE
import styled from "styled-components";
import icons from "../../style/icons/icons";

// API
import { CARD_POST_API } from "../../api/postAxios";

// TODO: add card 누르면 input 포커스 주기
function Card({ taskData }) {
    const [openDetailCard, setOpenDetailCard] = useState(false);
    const [addCard, setAddCard] = useState(false);
    const [cardTitle, setCardTitle] = useState("");
    const [cardInfo, setCardInfo] = useState({
        c_title: cardTitle,
        c_position: 0,
        c_creator: "",
        c_description: "",
        b_id: 1,
        t_id: null
    });
    const inputRef = useRef();

    const handleCardClick = (e) => {
        const classListArr = [...e.target.classList];

        if (classListArr.includes("card")) {
            setOpenDetailCard(true);
        }

        if (classListArr.includes("add_card")) {
            setAddCard(true);
        }
    };

    const handleCardChange = (e) => {
        setCardTitle(e.target.value);
        setCardInfo({
            ...cardInfo,
            c_title: cardTitle,
            t_id: e.target.name,
        });
        console.log();
        console.log();
    };

    const handleKeydown = (e) => {
        if (!inputRef.current.value && e.keyCode === 13) {
            setAddCard(false);
            return;
        }

        if (inputRef.current.value && e.keyCode === 13) {
            CARD_POST_API(
                "https://port-0-java-springboot-test-1maxx2alguzrmcx.sel3.cloudtype.app/card",
                cardInfo
            // ).then((res) => window.location.reload());
            
            ).then();
            console.log(cardInfo);
        }
    };

    return (
        <>
            {taskData.cards.map((card, index) => {
                return (
                    <CardWrapper
                        key={index}
                        onClick={handleCardClick}
                        className="card"
                    >
                        <CardTitle className="card">{card.c_title}</CardTitle>
                        <CardDropdownMenu>
                            {icons.menuKebabIcon}
                        </CardDropdownMenu>
                        <CardDropdownComponent cardID={card.c_id} />
                    </CardWrapper>
                );
            })}

            <AddCardBox
                className="add_card"
                onClick={handleCardClick}
                addCardState={addCard}
            >
                {addCard ? (
                    <AddCardInput
                        placeholder="내용을 입력하세요."
                        className="add_card"
                        onChange={handleCardChange}
                        onKeyDown={handleKeydown}
                        ref={inputRef}
                        name={taskData.t_id}
                    />
                ) : (
                    <AddCard className="add_card">
                        {icons.plusIcon}
                        <span className="add_card">카드를 추가하세요</span>
                    </AddCard>
                )}
            </AddCardBox>

            {openDetailCard ? (
                <CardDetail
                    cardId= {17}
                    // openModal ={true}
                    openDetailCard={openDetailCard}
                    setOpenDetailCard={setOpenDetailCard}
                />
            ) : null}
        </>
    );
}

export default Card;

const CardWrapper = styled.div`
    width: 300px;
    min-width: 300px;
    min-height: 120px;
    -webkit-text-stroke: 0;
    margin: 12px 0 24px 0;
    padding: 12px 10px;
    color: black;
    border-radius: ${({ theme }) => theme.borderRadius.basic};
    box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.06);
    position: relative;

    &:hover {
        background-color: rgba(0, 0, 0, 0.02);
    }
`;

const CardTitle = styled.h2`
    font-size: 1.6rem;
`;

const CardDropdownMenu = styled.span`
    font-size: 18px;
    color: ${({ theme }) => theme.color.grey};
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(90deg);
    padding: 8px 12px;

    &:hover {
        color: ${({ theme }) => theme.color.black};
    }
`;

const AddCardBox = styled.div`
    width: 100%;
    min-width: 300px;
    max-width: 300px;
    min-height: 45px;
    max-height: 45px;
    padding: ${({ addCardState }) => (addCardState ? "0px" : "10px")};
    font-size: 20px;
    color: ${({ theme }) => theme.color.darkerGrey};
    border-radius: ${({ theme }) => theme.borderRadius.basic};
    box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    transition: color 0.15s ease-in-out;
    margin-top: 12px;

    &:hover {
        color: ${({ theme }) => theme.color.main};
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.1);
    }
`;

const AddCard = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    span {
        font-size: 12px;
        padding-left: 8px;
    }
`;

const AddCardInput = styled.input`
    display: inline-block;
    width: 100%;
    height: 100%;
    min-height: 45px;
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    font-size: 14px;
    border-radius: ${({ theme }) => theme.borderRadius.basic};
    width: 100%;
    outline: 1px solid ${({ theme }) => theme.color.main};

    &::placeholder {
        font-size: 12px;
    }
`;
