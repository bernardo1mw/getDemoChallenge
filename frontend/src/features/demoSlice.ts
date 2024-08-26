import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../services/api'; // Importa a instância do axios

interface Demo {
  id: number;
  name: string;
}

interface DemoState {
  demos: Demo[];
  loading: boolean;
}

const initialState: DemoState = {
  demos: [],
  loading: false,
};

// Ação assíncrona para buscar demos
export const fetchDemos = createAsyncThunk(
  'demos/fetchDemos',
  async () => {
    const response = await axiosInstance.get('/demos');
    return response.data; // Assume que o backend retorna um array de demos
  }
);

const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    setDemos: (state, action: PayloadAction<Demo[]>) => {
      state.demos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDemos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDemos.fulfilled, (state, action: PayloadAction<Demo[]>) => {
        state.demos = action.payload;
        state.loading = false;
      })
      .addCase(fetchDemos.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setDemos } = demoSlice.actions;
export default demoSlice.reducer;
