import axios from 'axios'

const API_URL = '/api/tickets/'

// Get ticket notes
const getNotes = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL + ticketId + '/notes', config)

    return response.data
}

// Add note to ticket
const addNote = async (noteText, ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(
        API_URL + ticketId + '/notes',
        { text: noteText },
        config
    )

    return response.data
}

const noteService = {
    getNotes,
    addNote,
}

export default noteService
