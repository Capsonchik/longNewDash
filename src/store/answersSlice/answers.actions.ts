import {axiosMainRequest} from "@/apiConfig/apiConfig";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchGetAnswers = createAsyncThunk(
  'answers',
  async (id: number) => {
    try {
      const response = await axiosMainRequest.get(`navigator/get_question_variants/?question_id=${id}`);
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

export const fetchGetSecondAnswers = createAsyncThunk(
  'secondAnswers',
  async (id: number) => {
    try {
      const response = await axiosMainRequest.get(`navigator/get_question_variants/?question_id=${id}`);
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

export const fetchPostGraphData = createAsyncThunk(
  'postGraphInfo',
  async (data: any) => {
    try {
      const response = await axiosMainRequest.post(`/visualizations/crosstabulation_barcharts_percentage/`, data);
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