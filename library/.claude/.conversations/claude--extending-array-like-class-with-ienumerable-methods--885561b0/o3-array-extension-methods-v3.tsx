import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Array Extension Methods v3 ]]</Title>
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

// Helper function to compare values of any type
private compareValues(a: any, b: any, descending: boolean = false): number {
    // Handle null/undefined
    if (a == null && b == null) return 0;
    if (a == null) return descending ? 1 : -1;
    if (b == null) return descending ? -1 : 1;

    // Handle dates
    const dateA = a instanceof Date ? a : new Date(a);
    const dateB = b instanceof Date ? b : new Date(b);
    if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
        return descending 
            ? dateB.getTime() - dateA.getTime()
            : dateA.getTime() - dateB.getTime();
    }

    // Handle booleans
    if (typeof a === 'boolean' && typeof b === 'boolean') {
        return descending 
            ? (b === a ? 0 : b ? -1 : 1)
            : (b === a ? 0 : a ? -1 : 1);
    }

    // Handle numbers
    const numA = Number(a);
    const numB = Number(b);
    if (!isNaN(numA) && !isNaN(numB)) {
        return descending ? numB - numA : numA - numB;
    }

    // Handle strings (case-insensitive by default)
    const strA = String(a).toLowerCase();
    const strB = String(b).toLowerCase();
    return descending 
        ? strB.localeCompare(strA)
        : strA.localeCompare(strB);
}

// orderBy returns a new sorted array in ascending order
orderBy(selector?: (item: T) => any): A<T> {
    const copy = this.copy();
    const compareFunction = (a: T, b: T): number => {
        const valueA = selector ? selector(a) : a;
        const valueB = selector ? selector(b) : b;
        return this.compareValues(valueA, valueB);
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
        return this.compareValues(valueA, valueB, true);
    };
    copy.a.sort(compareFunction);
    return copy;
}`}
        </CodeBox>
    </Chapter>
);
