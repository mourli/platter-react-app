import { configureStore, createSlice } from "@reduxjs/toolkit";
import { json } from "stream/consumers";
import { AuthUser } from "../_models/User";

const initialAuthState: AuthUser = { isLoggedIn: false };

const getAuthStorage = () => {
    const storedUser = localStorage.getItem('platterUser');
    console.log("User Storage:", JSON.stringify(storedUser));

    if (storedUser) {
        return JSON.parse(storedUser);
    }
    return initialAuthState;
}

const authUserSlice = createSlice({
    name: "authUser",
    initialState: { value: getAuthStorage() },
    reducers: {
        login: (state: any, action) => {
            console.log("userAuth payload: ", action.payload);
            localStorage.setItem('platterUser', JSON.stringify(action.payload));
            state.value = getAuthStorage();
        },
        logout: (state: any) => {
            localStorage.removeItem('platterUser');
            state.value = { value: getAuthStorage() };
        }
    }
});

const appSettingsSlice = createSlice({
    name: "appSettings",
    initialState: { value: { mainNavToggle: false } },
    reducers: {
        toggleMainNav: (state: any, action) => {

            state.value = { ...state.value, mainNavToggle: !state.value.mainNavToggle };
        }
    }
});

export const { login, logout } = authUserSlice.actions;

export const { toggleMainNav } = appSettingsSlice.actions;

export const store = configureStore({ reducer: { authUser: authUserSlice.reducer, appSettings: appSettingsSlice.reducer } })