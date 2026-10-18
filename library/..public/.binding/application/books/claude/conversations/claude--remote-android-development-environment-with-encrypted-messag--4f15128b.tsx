import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--remote-android-development-environment-with-encrypted-messag--4f15128b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--remote-android-development-environment-with-encrypted-messag--4f15128b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--remote-android-development-environment-with-encrypted-messag--4f15128b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--remote-android-development-environment-with-encrypted-messag--4f15128b/.table';
import March1820261 from '../../../../../../.claude/.conversations/claude--remote-android-development-environment-with-encrypted-messag--4f15128b/1-march-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
