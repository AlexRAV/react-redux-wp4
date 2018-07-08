import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import {
    watchAddRecipientRequest, watchDeleteRecipientsRequest,
    watchFetchRecipientsRequest,
    watchUpdateRecipientRequest,
    watchRecipientsUpdates
} from '../sagas/recipients';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(watchFetchRecipientsRequest);
    sagaMiddleware.run(watchAddRecipientRequest);
    sagaMiddleware.run(watchUpdateRecipientRequest);
    sagaMiddleware.run(watchDeleteRecipientsRequest);
    sagaMiddleware.run(watchRecipientsUpdates);

    return store;
}
