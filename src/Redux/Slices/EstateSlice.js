import { createSlice } from "@reduxjs/toolkit";
import EstateData from "../../Utils/Data";

const Estate = createSlice({
    name: "estate",
    initialState: {
        allProperties: EstateData,
        filteredProperties: EstateData,
        filters: {
            location: "",
            price: { min: 0, max: 3000 }
        },
        searchText: ""
    },
    reducers: {
        setFilters(state, action) {
            state.filters = action.payload;
            state.filteredProperties = state.allProperties.filter(property =>
                property.address.toLowerCase().includes(state.filters.location.toLowerCase()) &&
                property.price >= state.filters.price.min &&
                property.price <= state.filters.price.max
            );
        },
        setSearchProperties(state, action) {
            state.searchText = action.payload;
            state.filteredProperties = state.allProperties.filter(property =>
                property.propertyName.toLowerCase().includes(state.searchText.toLowerCase())
            );
        }
    }
});

export default Estate.reducer;
export const { setFilters, setSearchProperties } = Estate.actions;
