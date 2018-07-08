import {
    DELETE_RECIPIENTS_SUCCEEDED, FETCH_RECIPIENTS_SUCCEEDED,
    SELECTED_RECIPIENTS_CHANGED
} from "../constants/recipients";

const initialState = {
    recipientList: [],
    selectedRecipients: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_RECIPIENTS_SUCCEEDED:
            return {
                ...state,
                recipientList: action.payload
            };
        case SELECTED_RECIPIENTS_CHANGED:
            return {
                ...state,
                selectedRecipients: action.payload
            };
        case DELETE_RECIPIENTS_SUCCEEDED:
            return {
                ...state,
                selectedRecipients: []
            };
        default:
            return state;
    }
}
