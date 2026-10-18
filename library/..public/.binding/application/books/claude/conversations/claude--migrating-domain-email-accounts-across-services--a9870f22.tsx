import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--migrating-domain-email-accounts-across-services--a9870f22/.book';
import Cover from '../../../../../../.claude/.conversations/claude--migrating-domain-email-accounts-across-services--a9870f22/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--migrating-domain-email-accounts-across-services--a9870f22/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--migrating-domain-email-accounts-across-services--a9870f22/.table';
import May720261 from '../../../../../../.claude/.conversations/claude--migrating-domain-email-accounts-across-services--a9870f22/1-may-7-2026';
import May820262 from '../../../../../../.claude/.conversations/claude--migrating-domain-email-accounts-across-services--a9870f22/2-may-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May720261()}
        {May820262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
