import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--notary-appointments-in-georgia-for-russian-citizens--55d9d950/.book';
import Cover from '../../../../../../.claude/.conversations/claude--notary-appointments-in-georgia-for-russian-citizens--55d9d950/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--notary-appointments-in-georgia-for-russian-citizens--55d9d950/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--notary-appointments-in-georgia-for-russian-citizens--55d9d950/.table';
import January1120261 from '../../../../../../.claude/.conversations/claude--notary-appointments-in-georgia-for-russian-citizens--55d9d950/1-january-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
