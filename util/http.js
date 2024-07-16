import axios from "axios";

const BACKEND_URL = 'https://react-native-course-59aee-default-rtdb.firebaseio.com'
export async function storeExpense(expenseData) {
    const response = await axios.post(BACKEND_URL + '/expense.json', expenseData);
    const id =  response.data.name;
    return id;
}

export async function fetchExpenses() {
    const response = await axios.get(BACKEND_URL + '/expense');
    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            ammount: response.data[key].ammount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expenses.push(expenseObj);
    }

    return expenses;
}

export async function updateExpense(id, expeseData){
   return axios.put(BACKEND_URL + `/expense/${id}.json`, expeseData);
}

export function deleteExpense(id){
    return axios.delete(BACKEND_URL + `/expense/${id}.json`);
}