import { compose } from "./compose.js";
import { id } from "./id.js";

test("Composition respects identity", () => {
    // f
    const addOne = x => x + 1;
    // `(id . f)` should still be `f`
    const composedFn = compose(
        addOne,
        id
    );

    expect(addOne(0)).toBe(composedFn(0));
});
