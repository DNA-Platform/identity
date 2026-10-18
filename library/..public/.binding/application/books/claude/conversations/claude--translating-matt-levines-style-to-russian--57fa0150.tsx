import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--translating-matt-levines-style-to-russian--57fa0150/.book';
import Cover from '../../../../../../.claude/.conversations/claude--translating-matt-levines-style-to-russian--57fa0150/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--translating-matt-levines-style-to-russian--57fa0150/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--translating-matt-levines-style-to-russian--57fa0150/.table';
import March320261 from '../../../../../../.claude/.conversations/claude--translating-matt-levines-style-to-russian--57fa0150/1-march-3-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
