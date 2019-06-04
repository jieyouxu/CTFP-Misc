# 3.6 Challenges

## Q1

### Q1(a)

A free category `C` can be generated from a graph with:

1. 1 node
2. 0 edges

- Let the single node be the single object `a` of the category `C`.
- Add the identity morphism `a -> a`.

Then it is in fact a monoid category since the morphism is the identity which
is trivially composable and associative as the domain and codomain are the same
object.

### Q1(b)

A free category `C` can be generated from a graph with

1. 1 node
2. 1 directed edge (from the single node to itself)

- Let the single node be the single object `a` of the category `C`.
- Let the directed edge `E(a, a)` be the identity morphism `a -> a`.

Then this forms a monoid category, with the identity morphism being trivially
composable and is associative.

### Q1(c)

A free category `C` can be generated from a graph with:

1. 2 nodes, `a` and `b`
2. 1 directed edge, `a -> b`

- Let the two nodes correspond to the objects `a` and `b` of category `C` 
respectively.
- Add identity morphisms `a -> a` and `b -> b`.
- Let the directed edge be the morphism `a -> b`.

Then this forms a category with two objects.

### Q1(d)

A free category `C` can be generated from a graph with:

1. 1 node
2. 26 directed arrows, marked as `a`, `b`, ..., `z`

- Let the single node be the single object `\alpha` in the category `C`
- Let each of the directed arrows `a`, `b`, ..., `z` be identity morphisms
`a -> a`.

Then this forms a monoid category, with `HomSet(a, a)` consisting of 
`{a, b, ..., z}`.

## Q2

### Q2(a)

A set of sets with *inclusion* relation

> `A` is *included* in `B` iff every element of `A` is also an element of `B`

Then this relation is a preorder as it is:

1. **Reflexive**. Every element of `A` is trivially element of `A`, hence A is
trivially included in `A`.
2. **Transitive**. If `A` is included in `B`, and `B` is included in `C`, then
it is the case that every element in `A` is in `C` too by implication.

It is additionally a partial order since it satisfies:

1. **Antisymmetric**. If every element in `A` is in `B` and vice versa, that is
if `A` is included in `B` and vice versa, then `A` equals `B`.

### Q2(b)

C++ types with *subtyping* relation

> `T1` is a *subtype* of `b` iff `*T1` can be passed to some function expecting
> `*T2`, i.e. `f(*T2)`, without triggering a compilation error.

Then this relation is a preorder since:

1. **Reflexive**. The pointer to type `T1`, `*T1` can obviously be passed into
a function `f(*T1)`. Hence `T1` is trivially a subtype of itself.
2. **Transitive**. If `T3` is a subtype of `T2`, and `T2` is a subtype of `T1`,
then `T3` is a subtype of `T1`. A pointer of type `T3`, `*T3`, can be passed to
a function `f(*T1)` without triggering a compilation error.

This relation is also a partial order since:

1. **Antisymmetric**. If there are two types `A` and `B` such that `A` and `B`
are subtypes of each other in that they can be passed into `f(*A)` and `g(*B)`
both without triggering a compilation error, then `A` must be equal to `B`.

## Q3

Given `Bool` is defined as

```haskell
data Bool = True | False
```

It forms two monoids, with operators `(&&)` and `(||)` respectively.

### AND-Bool Monoid

Let there be two objects in the monoid, `True` and `False`.

Then the monoid can be defined as

```haskell
instance Monoid Bool where
    mempty = True
    mappend = (&&)
```

| `(&&)`  | `True`  | `False` |
|---------|---------|---------|
| `True`  | `True`  | `False` |
| `False` | `False` | `False` |

### OR-Bool Monoid

The monoid can be defined as

```haskell
instance Monoid Bool where
    mempty = False
    mappend = (||)
```

| `(||)`  | `True` | `False` |
|---------|--------|---------|
| `True`  | `True` | `True`  |
| `False` | `True` | `False` |

## Q4

Represent `Bool` monoid and `(&&)` as a category.

There may be two morphisms as partially applied `(&&)` functions

```haskell
(&& True) :: Bool -> Bool
(|| False) :: Bool -> Bool
```

Then since `True` is the neutral element, `(&& True)` is in fact the identity
morphism.

They can be composed as

```haskell
id = (&& True)
id . (&& False) = (&& False)
(&& False) . (&& False) = (&& False)
(&& False) . id = (&& False)
id . id = id
```

Reference: [awalterschulze](https://github.com/awalterschulze/category-theory-for-programmers-challenges/blob/master/103-Categories-Great-and-Small.md).

## Q5

Represent `(mod 3) . (+)` with `Int` as a monoid category (addition modulo 3).

There are three equivalence classes on `+ mod 3`, namely `[0]`, `[1]` and `[2]`.

Then there are three morphisms, with `add0` being the identity morphism since 
`0` is the neutral element.

```haskell
add0 = (`mod` 3) . (+ 0)
add1 = (`mod` 3) . (+ 1)
add2 = (`mod` 3) . (+ 2)
id = add0
```
