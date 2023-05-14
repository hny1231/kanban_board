import axios from "axios";

export const CARD_POST_API = async (URL, CARDINFO) => {
    return await axios.post(URL, CARDINFO);
};
