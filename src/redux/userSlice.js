import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    username: null,
    points : null,
    countGuessedWords: {
        animals: null,
        geograpgy: null,
        tools: null,
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId(state, action) {
            state.id = action.payload;
        },
        setUserName(state, action) {
            state.username = action.payload;
        },
        setUserPoints(state, action) {
            state.points = action.payload;
        },
        setUserGuessedWord(state, action) {
            state.countGuessedWords = action.payload;
        },
    }
});

export const { setUserId, setUserName, setUserPoints, setUserGuessedWord, addGamePoints } = userSlice.actions;