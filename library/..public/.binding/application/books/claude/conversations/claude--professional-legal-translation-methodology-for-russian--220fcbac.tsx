import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--professional-legal-translation-methodology-for-russian--220fcbac/.book';
import Cover from '../../../../../../.claude/.conversations/claude--professional-legal-translation-methodology-for-russian--220fcbac/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--professional-legal-translation-methodology-for-russian--220fcbac/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--professional-legal-translation-methodology-for-russian--220fcbac/.table';
import January2220261 from '../../../../../../.claude/.conversations/claude--professional-legal-translation-methodology-for-russian--220fcbac/1-january-22-2026';

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
