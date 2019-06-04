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
