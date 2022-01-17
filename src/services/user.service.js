import {axiosService} from "./axios.service";
import {urls} from "../components/configs/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data)
}