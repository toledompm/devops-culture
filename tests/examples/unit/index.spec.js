class ZeroError extends Error {}

const divide = (n1, n2) => {
  if (n2 === 0) throw new ZeroError();

  return n1 / n2;
};

describe("#divide", () => {
  describe("when passed valid numbers", () => {
    it("should returns the n1 divided by n2", () => {
      expect(divide(4, 2)).toEqual(2);
    });
  });

  describe("when divisor is zero", () => {
    it("should throws an error", () => {
      expect(() => divide(1, 0)).toThrow(ZeroError);
    });
  });
});
