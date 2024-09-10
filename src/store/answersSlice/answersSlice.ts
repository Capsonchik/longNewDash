import {createSlice} from "@reduxjs/toolkit";
import {fetchGetAnswers} from "@/store/answersSlice/answers.actions";

const initialState = {
  answers: [],
}

export const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGetAnswers.fulfilled, (state, action) => {
        state.answers = action.payload
      })
  }
})

export const {} = answersSlice.actions;

export default answersSlice.reducer