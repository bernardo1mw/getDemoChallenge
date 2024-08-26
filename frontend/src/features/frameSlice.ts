import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../services/api'; // Importa a instância do axios

interface Frame {
  id: number;
  demo_id: number;
  frame_html: string;
}

interface FrameState {
  frames: Frame[];
  selectedFrame: Frame | null;
  loading: boolean;
}

const initialState: FrameState = {
  frames: [],
  selectedFrame: null,
  loading: false,
};

// Ação assíncrona para buscar frames por demo
export const fetchFramesByDemo = createAsyncThunk(
  'frames/fetchFramesByDemo',
  async (demoId: number) => {
    const response = await axiosInstance.get(`/demos/${demoId}/frames`);
    return response.data; // Assume que o backend retorna um array de frames
  }
);

// Ação assíncrona para atualizar um frame
export const updateFrame = createAsyncThunk(
  'frames/updateFrame',
  async (frame: Frame) => {
    await axiosInstance.put(`/frames/${frame.id}`, frame);
    return frame;
  }
);

const frameSlice = createSlice({
  name: 'frame',
  initialState,
  reducers: {
    setFrames: (state, action: PayloadAction<Frame[]>) => {
      state.frames = action.payload;
    },
    setSelectedFrame: (state, action: PayloadAction<Frame | null>) => {
      state.selectedFrame = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFramesByDemo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFramesByDemo.fulfilled, (state, action: PayloadAction<Frame[]>) => {
        state.frames = action.payload;
        state.loading = false;
      })
      .addCase(fetchFramesByDemo.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateFrame.fulfilled, (state, action: PayloadAction<Frame>) => {
        const updatedFrame = action.payload;
        const index = state.frames.findIndex(frame => frame.id === updatedFrame.id);
        if (index !== -1) {
          state.frames[index] = updatedFrame;
        }
        if (state.selectedFrame?.id === updatedFrame.id) {
          state.selectedFrame = updatedFrame;
        }
      });
  },
});

export const { setFrames, setSelectedFrame } = frameSlice.actions;
export default frameSlice.reducer;
