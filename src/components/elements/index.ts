export { default as Casing } from './Casing';

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
  top: number;
  bottom: number;
  colour?: string; // Default to "light grey"
  shoe?: boolean; // Default false
  fill?: boolean; // Default false
  size: number | null;
  weight: number | null;
  parent_weight: number | null;
  ID: number | null;
  OD: number | null;
  parent_OD: number | null;
  parent_ID: number | null;
  tubular_OD: number | null;
  internal_OD: number | null;
  external_OD: number | null;
  crossover_OD: number | null;
}
