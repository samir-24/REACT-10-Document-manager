import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const uploadFile = createAsyncThunk(
  "files/uploadFile",
  async (file, { rejectWithValue }) => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "document-manager");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/diyaiwnto/auto/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();

      return {
        name: file.name,
        type: file.type,
        size: file.size,
        url: result.secure_url,
        public_id: result.public_id,
        date: new Date().toLocaleString(),
        category: "General",
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteFile = createAsyncThunk(
  "files/deleteFile",
  async (file, { rejectWithValue }) => {
    try {
      return file.url;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const fileSlice = createSlice({
  name: "files",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Upload
      .addCase(uploadFile.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete 
      .addCase(deleteFile.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (file) => file.url !== action.payload
        );
      });
  },
});

export default fileSlice.reducer;