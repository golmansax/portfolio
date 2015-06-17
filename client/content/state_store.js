'use strict';

import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
var emitter = new EventEmitter();

var state = { menuShowing: false };

export function isMenuShowing() {
  return state.menuShowing;
}

export function addChangeListener(callback) {
  emitter.on(CHANGE_EVENT, callback);
}

export function removeChangeListener(callback) {
  emitter.removeListener(CHANGE_EVENT, callback);
}

export function toggleMenuShowing(docked) {
  if (docked === true || docked === false) {
    state.menuShowing = docked;
  } else {
    state.menuShowing = !state.menuShowing;
  }

  emitter.emit(CHANGE_EVENT);
}
