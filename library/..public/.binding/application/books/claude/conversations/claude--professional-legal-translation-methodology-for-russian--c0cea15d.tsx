import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--professional-legal-translation-methodology-for-russian--c0cea15d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--professional-legal-translation-methodology-for-russian--c0cea15d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--professional-legal-translation-methodology-for-russian--c0cea15d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--professional-legal-translation-methodology-for-russian--c0cea15d/.table';
import January2220261 from '../../../../../../.claude/.conversations/claude--professional-legal-translation-methodology-for-russian--c0cea15d/1-january-22-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
