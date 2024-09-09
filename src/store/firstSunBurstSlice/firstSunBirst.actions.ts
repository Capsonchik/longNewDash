import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosMainRequest} from "@/apiConfig/apiConfig";

export const fetchGetDefaultSunBurst = createAsyncThunk(
  'defaultSunBurst',
  async () => {
    const response = await axiosMainRequest.get(`visualizations/sunburst_tree/`);
    return response.data;
  }
);

export const fetchGetNextSunBurst = createAsyncThunk(
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