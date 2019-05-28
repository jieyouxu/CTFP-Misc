const memoize = f => {
    let cache = {};
    return x => {
        // Already computed, get result from cache.
        if (x in cache) {
            return cache[x];
        }

        // Not yet computed, compute and store to cache.
        cache[x] = f(x);
        return cache[x];
    };
};
