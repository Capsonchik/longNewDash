import {createSlice} from "@reduxjs/toolkit";
import {fetchGetAnswers, fetchGetSecondAnswers, fetchPostGraphData} from "@/store/answersSlice/answers.actions";

const initialState = {
  answers: [],
  secondAnswers: [],
  answerResponse: []
}

export const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    resetResponse: (state) => {
      state.answerResponse = []
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetAnswers.fulfilled, (state, action) => {
        state.answers = action.payload
      })
      .addCase(fetchGetSecondAnswers.fulfilled, (state, action) => {
        state.secondAnswers = action.payload
      })
      .addCase(fetchPostGraphData.fulfilled, (state, action) => {
        state.answerResponse = action.payload
      })
      .addCase(fetchPostGraphData.pending, (state) => {
        state.answerResponse = []
      })
  }
})

export const {
  resetResponse,
} = answersSlice.actions;

export default answersSlice.reducer