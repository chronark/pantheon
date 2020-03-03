import Events from "./events"
import { State } from "./store"

export const visibleJobsHook = (currentState: State, nextState: State, events: Events): void => {
  if (JSON.stringify(currentState.jobs.visible) !== JSON.stringify(nextState.jobs.visible)) {
    events.publish("STATE_CHANGE_JOBS_VISIBLE", nextState)
  }
}

export const allJobsHook = (currentState: State, nextState: State, events: Events): void => {
  if (JSON.stringify(currentState.jobs.all) !== JSON.stringify(nextState.jobs.all)) {
    events.publish("STATE_CHANGE_JOBS_ALL", nextState)
  }
}

export const allGeometriesHook = (currentState: State, nextState: State, events: Events): void => {
  if (JSON.stringify(currentState.geometries.all) !== JSON.stringify(nextState.geometries.all)) {
    events.publish("STATE_CHANGE_GEOMETRIES_ALL", nextState)
  }
}

export const selectedGeometriesHook = (currentState: State, nextState: State, events: Events): void => {
  if (JSON.stringify(currentState.geometries.selected) !== JSON.stringify(nextState.geometries.selected)) {
    events.publish("STATE_CHANGE_GEOMETRIES_SELECTED", nextState)
  }
}

export default [visibleJobsHook, allJobsHook, allGeometriesHook, selectedGeometriesHook]
