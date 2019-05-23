### Is the World Wide Web a category?

- There are objects, e.g. servers and pages
- There are arrows / morphisms, e.g. hyperlinks, between the objects.
- There may be composition between hyperlinks:
  - E.g. 
    - hyperlink f: page A -> page B
    - hyperlink g: page B -> page C
    - hyperlink (g . f) takes us from page A to page C
- There may be identity morphisms:
  - A page may have a hyperlink to itself.
    - hyperlink f: page A -> page B
    - hyperlink id: page A -> page A
    - hyperlink (f . id) takes us first to page A itself, then to page B
  - But perhaps it is not guaranteed that a self-link exists for every page.
- Are hyperlink composition associative? Perhaps so:
  - Given:
    - hyperlink f: page A -> page B
    - hyperlink g: page B -> page C
    - hyperlink h: page C -> page D
    - Then `(f . g) . h == f . (g . h) == f . g . h` all takes us from page A to 
    page D

So perhaps the WWW is not a category since maybe each webpage is not necessarily
guaranteed to have a link to itself.

### Is Facebook a category, with people as objects and friendships as morphisms?

- The problem is with identity morphisms:
  - > Can you be your own friend?
    - Even if the answer is yes, is it necessarily true that each person is 
    friends with himself/herself?
- Also, just because person A is friends with person B, and person B is friends 
with person C, it does not imply person A is friends with person C. This means 
that the "friendship" relationship is not composable.

Hence, Facebook is probably not a category.

### When is a directed graph a category?

A directed graph satisfies the requirements of
1. Composable edges
2. Associative composition
3. Each node has an identity edge (a self-loop)

When each node of the graph has an outwards edge to every node in the graph,
including itself. There is probably a stronger / more specific constraint than 
this.
