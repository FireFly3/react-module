import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const photoService = {
    getAll:()=>axiosService.get(urls.photos).then(value => value.data),
    getPhotoById:(id)=>axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}