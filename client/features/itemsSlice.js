import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  items: [],          
  loading: false,     
  error: null,        
};


export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/items');  
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch items');
    }
  }
);

export const addItem = createAsyncThunk(
  'items/addItem',
  async (newItem, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/items', newItem);  
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to add item');
    }
  }
);


export const updateItem = createAsyncThunk(
  'items/updateItem',
  async ({ id, updatedItem }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/items/${id}`, updatedItem);  
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to update item');
    }
  }
);


export const deleteItem = createAsyncThunk(
  'items/deleteItem',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/items/${id}`);  
      return id;  
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to delete item');
    }
  }
);


const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    
    
    clearItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;  
        state.error = null;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch items';
      })

      
      .addCase(addItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload); 
        state.error = null;
      })
      .addCase(addItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to add item';
      })

      
      .addCase(updateItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        state.loading = false;
    
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        state.error = null;
      })
      .addCase(updateItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to update item';
      })

      
      .addCase(deleteItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.loading = false;
        
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to delete item';
      });
  },
});

export const { clearItems } = itemsSlice.actions;


export default itemsSlice.reducer;
