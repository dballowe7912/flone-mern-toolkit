import axios from 'axios'
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
    user: null
}

// /api/v1/users
// login
// logout
// register
// updateUserDetails
// listUsers
// deleteUser
// updateUser

export const login = createAsyncThunk(
    'user/login',
    async (email, password) => {
        try {

            const config = {
                headers: {
                  'Content-Type': 'application/json',
                }
            }
          
            const response = await axios.post(
                '/api/v1/users/login',
                { email, password },
                config
            )

            console.log(response);
            return await response
        } catch (err) {
            console.log(err);
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    // extraReducers(builder) {

    // }
});

export default userSlice.reducer;
