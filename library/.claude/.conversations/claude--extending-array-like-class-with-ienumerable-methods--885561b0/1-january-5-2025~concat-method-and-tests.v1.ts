// Method
concat(other: T[] | A<T>): A<T> {
    const otherArray = other instanceof Array ? other : other.a;
    return new A<T>([...this.a, ...otherArray]);
}

// Tests
testConcat() {
    let a1 = f([1, 2]); let a2 = f([3, 4]); let arr = [5, 6];
    this.assertEquals(a1.concat(a2).equals([1, 2, 3, 4]), true, "1. Concat with A<T>");
    this.assertEquals(a1.concat(arr).equals([1, 2, 5, 6]), true, "2. Concat with array");
    this.assertEquals(a1.equals([1, 2]), true, "3. Original unchanged");
    this.assertEquals(f([]).concat(a2).equals([3, 4]), true, "4. Empty + nonempty");
    this.assertEquals(a1.concat([]).equals([1, 2]), true, "5. Nonempty + empty");
    this.assertEquals(f([]).concat([]).equals([]), true, "6. Empty + empty");
}