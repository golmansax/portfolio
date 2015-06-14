'use strict';

import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
var emitter = new EventEmitter();

var state = { sidebarDocked: false };

export function isSidebarDocked() {
  return state.sidebarDocked;
}

export function addChangeListener(callback) {
  emitter.on(CHANGE_EVENT, callback);
}

export function removeChangeListener(callback) {
  emitter.removeListener(CHANGE_EVENT, callback);
}

export function toggleSidebarDocked(docked) {
  if (docked === true || docked === false) {
    state.sidebarDocked = docked;
  } else {
    state.sidebarDocked = !state.sidebarDocked;
  }

  emitter.emit(CHANGE_EVENT);
}
