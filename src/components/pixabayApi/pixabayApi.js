import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { paramsForNotify } from '../App';

const URL = 'https://pixabay.com/api/';
const API_KEY = '38889455-fd8af79455bb4793a4bd4120e';
export const perPage = 12;

// Getting images from API Pixabay
export async function getImages(query, page) {
    try { 
        const params = new URLSearchParams({
            key: API_KEY,
            q: query,
            per_page: perPage,
            page: page,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        });
        const response = await axios.get(`${URL}?${params}`);
        console.log(response.data);
        return response.data;
          
    } catch (error) {
        Notify.failure('Oops! Something went wrong! Try reloading the page or make another choice!', paramsForNotify);
    }
};

// Normalizing of an image array
export const normalizedImages = imagesArray =>
    imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
        return { id, tags, webformatURL, largeImageURL };
});
console.log(normalizedImages);