import axios from "axios"
import { FoodData } from "../interface/FoodData";

const API_URL = 'http://Localhost8080';
const fetchData = async () AxiosPomise<FoodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response;
}

export function useFoodData(){


}