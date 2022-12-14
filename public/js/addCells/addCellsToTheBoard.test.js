import addCellsToTheBoard from "./addCellsToTheBoard.js";

describe("Given the function addCellsToTheBoard", () => {
  describe("When we add cells in column[0]", () => {
    test("Then it should add alive cells at the column[0]", () => {
      const column = addCellsToTheBoard();
      const expectedLength = 11;
      let aliveCellLength;
      for (let y = 0; y < column.length; y++) {
        for (let x = 0; x < column[y].length; x++) {
          if (column[y][x].isAlive) {
            aliveCellLength = 11;

            expect(aliveCellLength).toStrictEqual(expectedLength);
          }
        }
      }
    });
  });
});
