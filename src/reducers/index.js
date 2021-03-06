import { combineReducers } from 'redux';
import account from './account';
import session from './session';
import user from './user';
import character from './character';
import pet from './pet';
import game from './game';
import metrics from './metrics';
import log from './log';

const rootReducer = combineReducers({
  session,
  account,
  user,
  character,
  pet,
  game,
  metrics,
  log
});

export default rootReducer;
