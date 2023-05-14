import axios from "axios";

export const CARD_DEL = async (URL) => {
    return await axios.delete(URL);
};
