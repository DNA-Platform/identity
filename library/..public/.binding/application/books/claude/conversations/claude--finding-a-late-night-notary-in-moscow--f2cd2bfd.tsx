import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--finding-a-late-night-notary-in-moscow--f2cd2bfd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--finding-a-late-night-notary-in-moscow--f2cd2bfd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--finding-a-late-night-notary-in-moscow--f2cd2bfd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--finding-a-late-night-notary-in-moscow--f2cd2bfd/.table';
import January1120261 from '../../../../../../.claude/.conversations/claude--finding-a-late-night-notary-in-moscow--f2cd2bfd/1-january-11-2026';

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
