import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosMainRequest} from "@/apiConfig/apiConfig";

export const fetchGetDefaultSunBurst = createAsyncThunk(
  'defaultSunBurst',
  async () => {
    const response = await axiosMainRequest.get(`visualizations/sunburst_tree/`);
    return response.data;
  }
);

export const fetchGetNextSunBurst = createAsyncThunk<any, any, any>(
  'nextSunBurst',
  async (element) => {
    try {
      const response = await axiosMainRequest.get(`visualizations/sunburst_tree/?element_name=${element}`);
      if (response.status === 200) {
        return response.data;
      } else {
        return 'error';
      }
    } catch (error) {
      return [];
    }
  }
);

export const fetchGetSunBurstBack = createAsyncThunk(
  'backSunBurst',
  async (element: string) => {
    try {
      const response = await axiosMainRequest.get(`visualizations/sunburst_tree/?element_name=${element}&get_back=true`);
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

export const fetchGetBackData = createAsyncThunk(
  'dataForMoveBack',
  async (element: string) => {
    try {
      const response = await axiosMainRequest.get(`navigator/sunburst_tree_get_parent/?element_name=${element}`);
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