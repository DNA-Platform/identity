import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--react-component-type-inference-strategy--b6ef4d66/.book';
import Cover from '../../../../../../.claude/.conversations/claude--react-component-type-inference-strategy--b6ef4d66/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--react-component-type-inference-strategy--b6ef4d66/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--react-component-type-inference-strategy--b6ef4d66/.table';
import September920251 from '../../../../../../.claude/.conversations/claude--react-component-type-inference-strategy--b6ef4d66/1-september-9-2025';
import September1020252 from '../../../../../../.claude/.conversations/claude--react-component-type-inference-strategy--b6ef4d66/2-september-10-2025';
import September1320253 from '../../../../../../.claude/.conversations/claude--react-component-type-inference-strategy--b6ef4d66/3-september-13-2025';
import September1420254 from '../../../../../../.claude/.conversations/claude--react-component-type-inference-strategy--b6ef4d66/4-september-14-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September920251()}
        {September1020252()}
        {September1320253()}
        {September1420254()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
