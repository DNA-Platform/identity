// selectMany flattens a collection of collections into a single collection
selectMany<U>(selector: (element: T) => U[]): A<U> {
    const result = new A<U>();
    for (let i = 0; i < this.a.length; i++) {
        const selectedArray = selector(this.a[i]);
        result.insertManyAt(result.length(), selectedArray);
    }
    return result;
}

// aggregate performs a reduction operation on the array
aggregate<U>(seed: U, func: (acc: U, current: T) => U): U {
    let result = seed;
    for (let i = 0; i < this.a.length; i++) {
        result = func(result, this.a[i]);
    }
    return result;
}

// copy returns a shallow copy of the array
copy(): A<T> {
    return new A<T>([...this.a]);
}

// orderBy returns a new sorted array in ascending order
orderBy(selector?: (item: T) => any): A<T> {
    if (this.length() === 0) return f([]);
    const result = this.copy();
    
    const firstValue = selector ? selector(this.first()) : this.first();
    const type = typeof firstValue;
    
    if (type === 'number') {
        result.a.sort((a, b) => (selector ? selector(a) : a) - (selector ? selector(b) : b));
        return result;
    }
    
    if (type === 'string') {
        result.a.sort((a, b) => (selector ? selector(a) : a).toString().localeCompare((selector ? selector(b) : b).toString()));
        return result;
    }
    
    if (firstValue instanceof Date) {
        result.a.sort((a, b) => (selector ? selector(a) : a).getTime() - (selector ? selector(b) : b).getTime());
        return result;
    }
    
    if (type === 'boolean') {
        result.a.sort((a, b) => {
            const boolA = selector ? selector(a) : a;
            const boolB = selector ? selector(b) : b;
            return boolA === boolB ? 0 : boolB ? 1 : -1;
        });
        return result;
    }
    
    // Default sorting for other types
    result.a.sort((a, b) => {
        const valueA = selector ? selector(a) : a;
        const valueB = selector ? selector(b) : b;
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
    });
    return result;
}

// orderByDescending returns a new sorted array in descending order
orderByDescending(selector?: (item: T) => any): A<T> {
    if (this.length() === 0) return f([]);
    const result = this.copy();
    
    const firstValue = selector ? selector(this.first()) : this.first();
    const type = typeof firstValue;
    
    if (type === 'number') {
        result.a.sort((a, b) => (selector ? selector(b) : b) - (selector ? selector(a) : a));
        return result;
    }
    
    if (type === 'string') {
        result.a.sort((a, b) => (selector ? selector(b) : b).toString().localeCompare((selector ? selector(a) : a).toString()));
        return result;
    }
    
    if (firstValue instanceof Date) {
        result.a.sort((a, b) => (selector ? selector(b) : b).getTime() - (selector ? selector(a) : a).getTime());
        return result;
    }
    
    if (type === 'boolean') {
        result.a.sort((a, b) => {
            const boolA = selector ? selector(a) : a;
            const boolB = selector ? selector(b) : b;
            return boolA === boolB ? 0 : boolA ? 1 : -1;
        });
        return result;
    }
    
    // Default sorting for other types
    result.a.sort((a, b) => {
        const valueA = selector ? selector(a) : a;
        const valueB = selector ? selector(b) : b;
        if (valueA < valueB) return 1;
        if (valueA > valueB) return -1;
        return 0;
    });
    return result;
}