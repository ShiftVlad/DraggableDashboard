import { Draggable, GridsterConfig, PushDirections, Resizable } from "angular-gridster2";

export interface Safe extends GridsterConfig {
    draggable: Draggable;
    resizable: Resizable;
    pushDirections: PushDirections;
  }