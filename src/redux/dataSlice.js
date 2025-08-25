import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
const backendUrl = import.meta.env.VITE_BACKEND_URL


const initialState = {
    blogData:[],
    galleryData:[],
    projectData:[],
    status: false,
    error:null,
}

export const fetchBlogData = createAsyncThunk('data/fetchBlogData',async()=>{
    const response = await axios.get(`${backendUrl}/blog/getall`)
    return response.data
})

export const fetchGalleryData = createAsyncThunk('data/fetchGalleryData',async()=>{
    const response = await axios.get(`${backendUrl}/gallery/getall`)
    return response.data
})

export const fetchProjectData = createAsyncThunk('data/fetchProjectData',async()=>{
    const response = await axios.get(`${backendUrl}/project/getall`)
    return response.data
})

const dataSlice = createSlice({
    name:'Data',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchBlogData.pending, 
            (state)=>{state.status = 'loading'; state.error = null})

        .addCase(fetchBlogData.fulfilled,
             (state, action)=>{state.blogData = action.payload ; state.status = 'success'; state.error = null})

        .addCase(fetchBlogData.rejected,
             (state, action)=>{ state.status = 'failed'; state.error = 'Error Fetching Blog Data'})
//gallery             
        .addCase(fetchGalleryData.pending, 
            (state)=>{state.status = 'loading'; state.error = null})

        .addCase(fetchGalleryData.fulfilled,
             (state, action)=>{state.galleryData = action.payload ; state.status = 'success'; state.error = null})

        .addCase(fetchGalleryData.rejected,
             (state, action)=>{ state.status = 'failed'; state.error = 'Error Fetching gallery Data'})
//Project             
        .addCase(fetchProjectData.pending, 
            (state)=>{state.status = 'loading'; state.error = null})

        .addCase(fetchProjectData.fulfilled,
             (state, action)=>{state.projectData = action.payload ; state.status = 'success'; state.error = null})

        .addCase(fetchProjectData.rejected,
             (state, action)=>{ state.status = 'failed'; state.error = 'Error Fetching Project Data'})
    }
})

export default dataSlice.reducer
