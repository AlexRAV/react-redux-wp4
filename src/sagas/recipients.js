import {put, takeEvery} from 'redux-saga/effects';
import {
    FETCH_RECIPIENTS_REQUESTED, ADD_RECIPIENT_REQUESTED, ADD_RECIPIENT_SUCCEEDED,
    UPDATE_RECIPIENT_SUCCEEDED, UPDATE_RECIPIENT_REQUESTED, DELETE_RECIPIENTS_SUCCEEDED, DELETE_RECIPIENTS_REQUESTED
} from '../constants/recipients';
import {fetchRecipientsSuccess, addRecipientSuccess, updateRecipientSuccess, deleteRecipientsSuccess} from '../actions/recipients';

const API_URL = 'https://5b3b45c8e7659e00149694a0.mockapi.io/api/db/';

function* fetchRecipientsRequest() {
    try {
        const recipients = yield fetch(`${API_URL}users`)
            .then(response => {
                return response.json()
            });

        yield put(fetchRecipientsSuccess(recipients));
    }
    catch (e) {
        console.log(e);
    }
}

function* addRecipientRequest(data) {
    try {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.payload.name,
                email: data.payload.email,
                status: false,
            })
        };

        yield fetch(`${API_URL}users`, config);
        yield put(addRecipientSuccess());
    } catch (e) {
        console.log(e);
    }
}

function* updateRecipientRequest(data) {
    try {
        const config = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data.payload)
        };

        yield fetch(`${API_URL}users/${data.payload.id}`, config);
        yield put(updateRecipientSuccess());
    }
    catch (e) {
        console.log(e);
    }
}

function* deleteRecipientsRequest(data) {
    try {
        let promises = [];
        const config = {
            method: 'DELETE'
        };

        data.payload.forEach(id => {
            promises.push(fetch(`${API_URL}users/${id}`, config));
        });

        yield Promise.all(promises);
        yield put(deleteRecipientsSuccess());
    }
    catch (e) {
        console.log(e);
    }
}


/* WATCHERS */

export function* watchFetchRecipientsRequest() {
    yield takeEvery(FETCH_RECIPIENTS_REQUESTED, fetchRecipientsRequest);
}

export function* watchAddRecipientRequest() {
    yield takeEvery(ADD_RECIPIENT_REQUESTED, addRecipientRequest);
}

export function* watchRecipientsUpdates() {
    yield takeEvery([ADD_RECIPIENT_SUCCEEDED, UPDATE_RECIPIENT_SUCCEEDED, DELETE_RECIPIENTS_SUCCEEDED], fetchRecipientsRequest)
}

export function* watchUpdateRecipientRequest() {
    yield takeEvery(UPDATE_RECIPIENT_REQUESTED, updateRecipientRequest);
}

export function* watchDeleteRecipientsRequest() {
    yield takeEvery(DELETE_RECIPIENTS_REQUESTED, deleteRecipientsRequest);
}
