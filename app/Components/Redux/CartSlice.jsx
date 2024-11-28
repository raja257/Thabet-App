// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// //Sign up *************
// export const createUser = createAsyncThunk(
//   "createUser",
//   async (data, { rejectWithValue }) => {
//     console.log(data,"sliceeeeeeee")
//     try {
//       const response = await fetch("http://localhost:8000/user/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create user");
//       }
//       const res = await response.json(); 
//       // console.log(res);
//       if (res.token) {
//         localStorage.setItem("token", res.token);
//       }
      
//       return res; 
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
// export const loginUser = createAsyncThunk(
//   "loginUser",
//   async (data, { rejectWithValue }) => {
//     console.log(data,"loginnnnnn")
//     try {
//       const response = await fetch("http://localhost:8000/user/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to log in user");
//       }
//       const res = await response.json();
//       if (res.token) {
//         localStorage.setItem("token", res.token); 
//       }
//       return res; 
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const dataSlice = createSlice({
//   name: "data",
//   initialState: {
//     users: [],
//     currentUser: [],
//     error: null,
//     loading: false,
//   },
  
//   extraReducers: (builder) => {
//     builder
//       .addCase(createUser.pending, (state) => {
//         console.log("Pending action dispatched");
//         state.loading = true;
//       })
//       .addCase(createUser.fulfilled, (state, action) => {
//         // console.log("Adding user to state:", action.payload.data);
//         state.loading = false;
//         state.users.push(action.payload.data);
//       })
//       .addCase(createUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       }) ; 
//          builder
//          .addCase(loginUser.pending, (state) => {
//           state.loading = true;
//         })
//         .addCase(loginUser.fulfilled, (state, action) => {
//           state.loading = false;
//           state.currentUser.push(action.payload); 
//         })
//         .addCase(loginUser.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.payload;
//         });
//   },
// });
// export default dataSlice.reducer;
