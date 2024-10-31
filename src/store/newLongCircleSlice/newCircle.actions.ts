import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosMainRequest} from "@/apiConfig/apiConfig";

export const fetchPostNewSunData = createAsyncThunk(
  'postNewGraphInfo',
  async (data: any) => {
    try {
      const response = await axiosMainRequest.post(`/visualizations/crosstabulation_barcharts_percentage_literal/`, data);
      if (response.status === 200) {
        return response.data;
      } else {
        return 'error';
      }
    } catch (error) {
      return 'throwError(error)';
    }
  }
);

export const fetchGetNewFirstAnswer = createAsyncThunk(
  'newFirstAnswers',
  async (id: string) => {
    try {
      const response = await axiosMainRequest.get(`navigator/get_question_variants_literal/?question=${id}`);
      if (response.status === 200) {
        return response.data;
      } else {
        return 'error';
      }
    } catch (error) {
      return 'throwError(error)';
    }
  }
);

export const fetchGetNewSecondAnswer = createAsyncThunk(
  'newSecondAnswers',
  async (question: string) => {
    try {
      const response = await axiosMainRequest.get(`navigator/get_question_variants_literal/?question=${question}`);
      if (response.status === 200) {
        return response.data;
      } else {
        return 'error';
      }
    } catch (error) {
      return 'throwError(error)';
    }
  }
);