import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Array Extension Methods v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// selectMany flattens a collection of collections into a single collection
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

// sortCopy returns a new sorted array without modifying the original
sortCopy(compareFunction?: (a: T, b: T) => number): A<T> {
    const copy = this.copy();
    if (!compareFunction) {
        // Default comparison that attempts to coerce values to numbers if possible
        compareFunction = (a: T, b: T): number => {
            const numA = Number(a);
            const numB = Number(b);
            if (!isNaN(numA) && !isNaN(numB)) {
                return numA - numB;
            }
            // Fall back to string comparison if number coercion fails
            return String(a).localeCompare(String(b));
        };
    }
    copy.a.sort(compareFunction);
    return copy;
}`}
        </CodeBox>
    </Chapter>
);
