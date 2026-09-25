import type { GIFResponse } from "../interfaces/gif.response";
import { giphyApi } from "./axios";

export const getImage = async() => {
    try{
        const resp=await giphyApi.get<GIFResponse>("/random");
        return resp.data.data.images.downsized_large.url;
        // return 'https://url-de-mi-sitio-web/image1.jpg'
    }catch(error){
        return 'imageurlnotfound'
    }
}

/*export const getImagePromise = () =>  {
    return new Promise(resolve => {
        resolve('https://url-de-mi-sitio-web/image1.jpg');
    });
}*/


getImage().then((url)=>console.log({url}));
// console.log(getImagePromise());