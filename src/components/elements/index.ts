export { default as Casing } from './Casing';
export { default as Tubing } from './Tubing';
export { default as Fish } from './Fish';

export type WellSketchShape =
  | 'casing'
  | 'cement'
  | 'cement_plug'
  | 'custom_element'
  | 'fish'
  | 'liner'
  | 'open_hole'
  | 'open_hole_closed' // Open Hole with Rat Hole
  | 'packer'
  | 'perforated_section'
  | 'plug'
  | 'screen'
  | 'tubing'
  | 'valve';

export interface WellSketchPiece {
  shape: WellSketchShape;
  title: string;
  top?: number; // packer does not have top?
  bottom?: number; // packer does not have bottom?
  colour: string;
  shoe?: boolean;
  fill?: boolean;
  size?: number;
  weight?: number;
  parent_weight?: number;
  ID?: string;
  OD?: number | null;
  parent_OD?: number;
  parent_ID?: string;
  tubular_OD?: number;
  internal_OD?: number;
  external_OD?: number;
  crossover_OD?: number;
}
