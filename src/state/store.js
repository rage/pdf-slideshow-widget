// @flow
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import ReduxActionAnalytics from 'redux-action-analytics';
import createHash from 'sha.js';
import * as storejs from 'store';
import rootReducer from './reducer';

export type ThunkArgument = {
}

export default function makeStore(identifier: string) {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable no-underscore-dangle */
  const analytics = new ReduxActionAnalytics('https://usage.testmycode.io/api/v0/data', 'pdf-slideshow', identifier, 10000, () => {
    const user = storejs.get('tmc.user');
    if (user === undefined) {
      return {};
    }
    return {
      username: user.username,
    };
  });
  const store = createStore(
    rootReducer(),
    composeEnhancers(
      applyMiddleware(
        analytics.getMiddleware(),
        thunk.withExtraArgument(),
      ),
    ),
  );
  return store;
}
