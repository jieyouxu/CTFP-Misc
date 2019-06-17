# 4.4 Challenges

**Partial function**:

- A function which is not defined for all possible values of its input type.

## Q1

The Kleisli category for partial functions:

*Composition* for `optional`:

- function 1: `A -> optional<B>`
- function 2: `B -> optional<C>`
- Desired: `A -> optional<C>`

```c++
template <class A, class B, class C>
std::function<optional<C>(A)> composeOptional(
    std::function<optional<B>(A)> f,
    std::function<optional<C>(B)> g)
{
    return [](A a) {
        optional<B> b = f(a);
        if (b.isValid())
            return g(b.value());
        else
            // Should `f` be ill-defined for `a`, i,e. `f(a) == Nothing`
            // Then we directly short-circuit and return `Nothing`.
            // This is analogous to composing the `Maybe` monad with
            // the Kleisli arrow `(>=>)`, or monadic composition `chain`, with
            // `(>=>) :: Monad m => (a -> m b) -> (b -> m c) -> a -> m c`
            // With `f :: Monad m => a -> m b` and
            // `g :: Monad m => b -> m c`
            return g();
    };
}
```

*Identity* for `optional`:

```c++
template <class A>
optional<A> identityOptional(A a)
{
    // This is in fact `return :: Monad m => a -> m a` which is necessary
    // to introduce a layer of wrapper around some value `a`.
    return optional(a);
}
```

## Q2

```c++
// safe_reciprocal :: Double -> Maybe Double
optional<double> safe_reciprocal(double n)
{
    if (x == 0)
        // Nothing
        return optional<double>{};
    else
        // Just Double
        return optional<double>{ 1/x };
}
```

## Q3

```c++
optional<double> safe_root_reciprocal =
    composeOptional(safe_reciprocal, safe_root);

// This is in fact just
// safe_reciprocal :: Double -> Maybe Double
// safe_root :: Double -> Maybe Double
// safe_root_reciprocal :: Double -> Maybe Double
// safe_root_reciprocal = safe_reciprocal >=> safe_root
```
