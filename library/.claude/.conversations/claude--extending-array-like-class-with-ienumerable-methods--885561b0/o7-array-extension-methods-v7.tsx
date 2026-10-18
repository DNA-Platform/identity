import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Array Extension Methods v7 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}private getComparer(arr: T[], selector?: (item: T) => any, desc: boolean = false): (a: T, b: T) => number {
    const getValue = selector || ((x: T) => x);
    const first = getValue(arr[0]);
    const type = typeof first;
    
    if (type === 'number') return (a, b) => desc ? getValue(b) - getValue(a) : getValue(a) - getValue(b);
    if (type === 'string') return (a, b) => desc ? getValue(b).toString().localeCompare(getValue(a)) : getValue(a).toString().localeCompare(getValue(b));
    if (type === 'boolean') return (a, b) => desc ? (getValue(b) === getValue(a) ? 0 : getValue(b) ? -1 : 1) : (getValue(a) === getValue(b) ? 0 : getValue(b) ? 1 : -1);
    if (first instanceof Date) return (a, b) => desc ? getValue(b).getTime() - getValue(a).getTime() : getValue(a).getTime() - getValue(b).getTime();
    
    return (a, b) => {
        const valA = getValue(a), valB = getValue(b);
        return desc ? (valA < valB ? 1 : valA > valB ? -1 : 0) : (valA < valB ? -1 : valA > valB ? 1 : 0);
    };
}

orderBy(selector?: (item: T) => any): A<T> {
    if (this.length() === 0) return f([]);
    return this.copy().sort(this.getComparer(this.a, selector));
}

orderByDescending(selector?: (item: T) => any): A<T> {
    if (this.length() === 0) return f([]);
    return this.copy().sort(this.getComparer(this.a, selector, true));
}`}
        </CodeBox>
    </Chapter>
);
