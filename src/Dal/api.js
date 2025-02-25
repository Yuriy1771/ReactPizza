import axios from "axios";

export const PizzaAPI = {
    getPizza () {
        axios.get('https://67bd631a321b883e790c3eac.mockapi.io/items').then(response => response.data)
    }
}