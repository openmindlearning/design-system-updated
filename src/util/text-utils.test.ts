import { pluralize } from "./text-utils";
import { describe, it, expect } from "vitest";

describe("text-utils", () => {
  describe("pluralize", () => {
    it("should handle singularity", () => {
      expect(pluralize(1, "apple", "apples")).toBe("apple");
    });

    it("should handle plurality", () => {
      expect(pluralize(3, "banana", "bananas")).toBe("bananas");
    });
  });
});
