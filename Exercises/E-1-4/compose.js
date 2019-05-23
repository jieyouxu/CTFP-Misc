// Composition between two functions:
// Given functions
//  f :: a -> b
//  g :: b -> c
// Then their composition is
//  (g . f) :: a -> c

// compose :: (a -> b) -> (b -> c) -> (a -> c)
const compose = (f, g) => {
    // Note a new function is returned with a single parameter `x` which is
    // the composition between `f` and `g` with `f` applied first.
    return x => g(f(x));
};

export { compose };
