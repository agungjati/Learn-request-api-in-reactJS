import Axios from "axios";

export const getListCategory = () => {
    return Axios.get("https://api.tutorialinaja.tech/pm/v1/category")
}