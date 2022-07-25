import Type from "../types";
export default (coordinates: [number, number, number]): Type.completionMarksPosition => ({
  left: coordinates[0],
  top: coordinates[1],
  width: coordinates[2],
});
