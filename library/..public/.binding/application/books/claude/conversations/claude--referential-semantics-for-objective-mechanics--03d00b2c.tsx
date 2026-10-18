import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--referential-semantics-for-objective-mechanics--03d00b2c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--referential-semantics-for-objective-mechanics--03d00b2c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--referential-semantics-for-objective-mechanics--03d00b2c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--referential-semantics-for-objective-mechanics--03d00b2c/.table';
import February2420261 from '../../../../../../.claude/.conversations/claude--referential-semantics-for-objective-mechanics--03d00b2c/1-february-24-2026';
import February2520262 from '../../../../../../.claude/.conversations/claude--referential-semantics-for-objective-mechanics--03d00b2c/2-february-25-2026';
import February2620263 from '../../../../../../.claude/.conversations/claude--referential-semantics-for-objective-mechanics--03d00b2c/3-february-26-2026';
import February2720264 from '../../../../../../.claude/.conversations/claude--referential-semantics-for-objective-mechanics--03d00b2c/4-february-27-2026';
import February2820265 from '../../../../../../.claude/.conversations/claude--referential-semantics-for-objective-mechanics--03d00b2c/5-february-28-2026';
import March120266 from '../../../../../../.claude/.conversations/claude--referential-semantics-for-objective-mechanics--03d00b2c/6-march-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February2420261()}
        {February2520262()}
        {February2620263()}
        {February2720264()}
        {February2820265()}
        {March120266()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
