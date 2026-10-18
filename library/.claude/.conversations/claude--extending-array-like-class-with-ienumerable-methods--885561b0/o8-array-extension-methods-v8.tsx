import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Array Extension Methods v8 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}private getTypedComparer(arr: T[], selector?: (item: T) => any, desc: boolean = false): (a: T, b: T) => number {
    if (arr.length === 0) return () => 0;
    const getValue = selector || ((x: T) => x);
    const first = getValue(arr[0]);
    const type = typeof first;

    if (type === 'number') 
        return desc 
            ? (a, b) => getValue(b) - getValue(a)
            : (a, b) => getValue(a) - getValue(b);

    if (type === 'string') 
        return desc
            ? (a, b) => getValue(b).toString().localeCompare(getValue(a))
            : (a, b) => getValue(a).toString().localeCompare(getValue(b));

    if (type === 'boolean')
        return desc
            ? (a, b) => getValue(a) === getValue(b) ? 0 : getValue(a) ? -1 : 1
            : (a, b) => getValue(a) === getValue(b) ? 0 : getValue(b) ? 1 : -1;

    if (first instanceof Date)
        return desc
            ? (a, b) => getValue(b).getTime() - getValue(a).getTime()
            : (a, b) => getValue(a).getTime() - getValue(b).getTime();

    return desc
        ? (a, b) => getValue(a) < getValue(b) ? 1 : getValue(a) > getValue(b) ? -1 : 0
        : (a, b) => getValue(a) < getValue(b) ? -1 : getValue(a) > getValue(b) ? 1 : 0;
}

orderBy(selector?: (item: T) => any): A<T> {
    if (this.length() === 0) return f([]);
    const copy = this.copy();
    copy.a.sort(this.getTypedComparer(this.a, selector));
    return copy;
}

orderByDescending(selector?: (item: T) => any): A<T> {
    if (this.length() === 0) return f([]);
    const copy = this.copy();
    copy.a.sort(this.getTypedComparer(this.a, selector, true));
    return copy;
}`}
        </CodeBox>
    </Chapter>
);
