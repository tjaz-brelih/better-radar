import { Service } from "@angular/core";

import { Coordinates } from "models";
import { StorageService } from "./storage";


type Position = { center: Coordinates, zoom: number };


@Service()
export class PositionStorage extends StorageService<Position> {
  protected override _storageKey = 'position';
  protected override default: Position = { center: [46.120, 14.815] as [number, number], zoom: 8 };

  public get position() { return this._getFromStorage(); }
  public save(p: Position) { this._saveToStorage(p); }
}
