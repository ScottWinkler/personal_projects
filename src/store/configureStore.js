import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';
import { routerForBrowser } from 'redux-little-router';

const routes = {
  '/login': {
    title: 'Login'
  },
  '/signup': {
    title: 'Signup'
  },
  '/profile': {
    title: 'Profile'
  },
    '/gallery': {
    title: 'Gallery'
  },
   '/blog': {
    title: 'Blog'
  },
  '/': {
    title: 'Home',
  }
};


const logger=createLogger();
const {reducer,middleware,enhancer} = routerForBrowser({routes});

export default function configureStore(initialState){
    return createStore(
        combineReducers({router:reducer,rootReducer}),
        initialState,
        compose(enhancer,applyMiddleware(thunk,promise,logger,middleware))
    )
}
