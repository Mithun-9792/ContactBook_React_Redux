import { createSlice } from "@reduxjs/toolkit";

export const ContactSlice = createSlice({
    name: "contact",
    initialState: { 'contactDetails': [] },

    reducers: {
        add: (state, action) => {
            // console.log(state, "add");
            state.contactDetails = [...state.contactDetails, action.payload]
        },
        remove: (state, action) => {
            console.log(action.payload);
            state.contactDetails.splice(action.payload, 1)
        },
        update: (state, action) => {
            state.contactDetails = state.contactDetails.map((item) =>
                item.id == action.payload.id ? action.payload : item
                // console.log(item, "payload")
            )
        }
    }
})

export const { add, remove, update } = ContactSlice.actions
    // export const authContact = (state) => {
    //     return state
    // }
export default ContactSlice.reducer