import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [
        {
            id: 1,
            name: "CSPM Executive Dashboard",
            widgets: []
        },
        {
            id: 2,
            name: "CWPP Dashboard",
            widgets: []
        },
        {
            id: 3,
            name: "Registry Scan", //Images
            widgets: []
        },
        {
            id: 4,
            name: "Ticket",
            widgets: []
        },
    ],
};

export const widgetSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        addWidget: (state, action) => {
            const { categoryId, widget } = action.payload;
            const category = state.categories.find(cat => cat.id === categoryId);
            if (category) {
                category.widgets.push(widget);
            }
        },
        removeWidget: (state, action) => {
            const { categoryId, widgetId } = action.payload;
            const category = state.categories.find(cat => cat.id === categoryId);
            if (category) {
                category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
            }
        },
    },
});

export const { addWidget, removeWidget } = widgetSlice.actions;

export default widgetSlice.reducer;
