import { ADD_BOOK } from '../constants/action-types'

export const addBook = book => ({type: ADD_BOOK, payload: book});
