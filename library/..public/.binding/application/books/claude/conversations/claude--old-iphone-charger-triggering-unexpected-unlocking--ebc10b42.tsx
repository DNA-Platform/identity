import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--old-iphone-charger-triggering-unexpected-unlocking--ebc10b42/.book';
import Cover from '../../../../../../.claude/.conversations/claude--old-iphone-charger-triggering-unexpected-unlocking--ebc10b42/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--old-iphone-charger-triggering-unexpected-unlocking--ebc10b42/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--old-iphone-charger-triggering-unexpected-unlocking--ebc10b42/.table';
import August520261 from '../../../../../../.claude/.conversations/claude--old-iphone-charger-triggering-unexpected-unlocking--ebc10b42/1-august-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
