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
            return g();
    };
}
```

*Identity* for `optional`:

```c++
template <class A>
optional<A> identityOptional(A a)
{
    return optional(a);
}
```
