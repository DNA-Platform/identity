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
    const copy = this.copy();
    const compareFunction = (a: T, b: T): number => {
        const valueA = selector ? selector(a) : a;
        const valueB = selector ? selector(b) : b;
        
        const numA = Number(valueA);
        const numB = Number(valueB);
        if (!isNaN(numA) && !isNaN(numB)) {
            return numA - numB;
        }
        return String(valueA).localeCompare(String(valueB));
    };
    copy.a.sort(compareFunction);
    return copy;
}

// orderByDescending returns a new sorted array in descending order
orderByDescending(selector?: (item: T) => any): A<T> {
    const copy = this.copy();
    const compareFunction = (a: T, b: T): number => {
        const valueA = selector ? selector(a) : a;
        const valueB = selector ? selector(b) : b;
        
        const numA = Number(valueA);
        const numB = Number(valueB);
        if (!isNaN(numA) && !isNaN(numB)) {
            return numB - numA;
        }
        return String(valueB).localeCompare(String(valueA));
    };
    copy.a.sort(compareFunction);
    return copy;
}