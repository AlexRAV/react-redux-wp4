import * as constants from '../constants/recipients';

export function fetchRecipientsRequest() {
    return {
        type: constants.FETCH_RECIPIENTS_REQUESTED
    }
}

export function fetchRecipientsSuccess(payload) {
    return {
        type: constants.FETCH_RECIPIENTS_SUCCEEDED,
        payload
    }
}

export function addRecipientRequest(payload) {
    return {
        type: constants.ADD_RECIPIENT_REQUESTED,
        payload
    }
}

export function addRecipientSuccess() {
    return {
        type: constants.ADD_RECIPIENT_SUCCEEDED
    }
}

export function updateRecipientRequest(payload) {
    return {
        type: constants.UPDATE_RECIPIENT_REQUESTED,
        payload
    }
}

export function updateRecipientSuccess() {
    return {
        type: constants.UPDATE_RECIPIENT_SUCCEEDED
    }
}

export function deleteRecipientsRequest(payload) {
    return {
        type: constants.DELETE_RECIPIENTS_REQUESTED,
        payload
    }
}

export function deleteRecipientsSuccess() {
    return {
        type: constants.DELETE_RECIPIENTS_SUCCEEDED
    }
}

export function changeSelectedRecipients(payload) {
    return {
        type: constants.SELECTED_RECIPIENTS_CHANGED,
        payload
    }
}
