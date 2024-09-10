import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosMainRequest} from "@/apiConfig/apiConfig";

export const fetchGetSecondDefaultSunBurst = createAsyncThunk(
  'defaultSecondSunBurst',
  async () => {
    const response = await axiosMainRequest.get(`visualizations/sunburst_tree/`);
    return response.data;
  }
);

export const fetchGetSecondNextSunBurst = createAsyncThunk<any, any, any>(
  'nextSecondSunBurst',
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

export const fetchGetSecondSunBurstBack = createAsyncThunk(
  'backSecondSunBurst',
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

export const fetchGetSecondBackData = createAsyncThunk(
  'dataSecondForMoveBack',
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