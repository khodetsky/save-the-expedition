import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    username: null,
    points : 0,
    countGuessedWords: {
        animals: 0,
        geograpgy: 0,
        tools: 0,
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
            state.countGuessedWords[action.payload] += 1;
        },
    }
});

export const { setUserId, setUserName, setUserPoints, setUserGuessedWord } = userSlice.actions;