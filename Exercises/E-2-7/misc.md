## Q2

Trying to memoize a pseudorandom number generator function does not work (not
specifying an initial seed causes different outputs to correspond with the same
input at different times). 

## Q3

Memoizing a pseudorandom number generator function with a specified initial seed
works because the each input predictably maps to its corresponding output. Note 
that this requires the psuedonumber generator *not* have access to external 
information such as accumulated entropy, time, etc.

Using David Bau's `seedrandom` library [SeedRandom](https://github.com/davidbau/seedrandom)
then

```javascript
const seedrandom = require('seedrandom');

import { memoize } from './memoize.js';

const gen = memoize(seed => seedrandom(seed));
```

## Q4

### Q4(a)

The factorial function 
```c++
int fact(int n)
{
    int result = 1;
    for (int i = 2; i <= n; i++)
        result *= i;
    return result;
}
```

Is pure, which can be memoized.

### Q4(b)

The `std::getchar()` function is *not* pure; can't be memoized since user input
is a side-effect.

### Q4(c)

The function
```c++
bool f()
{
    std::cout << "Hello!" << std::endl;
    return true;
}
```

Is impure due to writing to output stream which mutates global state, hence
can't be memoized.

### Q4(d)

The function
```c++
int f(int x)
{
    static int y = 0;
    y += x;
    return y;
}
```

Can be memoized -- even though `y` is declared static, i.e. lifetime beyond the
function `f`, it is explicitly reinitialized to zero.

## Q5

There are exactly 4 functions between `Bool` and `Bool`
```haskell
id :: Bool -> Bool
id True = True
id False = False

neg :: Bool -> Bool
neg True = False
neg False = True
```
