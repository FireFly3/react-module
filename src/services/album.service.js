import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumsService = {
    getAllAlbums:()=>axiosService.get(urls.albums).then(value => value.data),
    getByIdAlbums:(id)=>axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data)
}