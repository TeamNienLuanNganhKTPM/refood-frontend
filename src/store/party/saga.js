/** @format */

import { takeLatest } from "redux-saga/effects";
import { handleCreateParty, handlePartyAll, handlePartyType } from "./handlers";
import { createParty, findPartyAll, findSearchParty } from "./slice";

export default function* partyWatcher() {
  yield takeLatest(findSearchParty.type, handlePartyType);
  yield takeLatest(findPartyAll.type, handlePartyAll);
  yield takeLatest(createParty.type, handleCreateParty);
}
