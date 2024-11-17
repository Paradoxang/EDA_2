
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, googleProvider } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const loginWithEmail = createAsyncThunk(
    'auth/loginWithEmail',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Otras acciones
export const loginWithGoogle = createAsyncThunk(
    'auth/loginWithGoogle',
    async (_, { rejectWithValue }) => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            return result.user;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await signOut(auth);
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginWithEmail.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginWithEmail.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = 'authenticated';
            })
            .addCase(loginWithEmail.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(loginWithGoogle.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = 'authenticated';
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.status = 'unauthenticated';
                state.error = null;
            });
    },
});

export default authSlice.reducer;
