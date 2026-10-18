import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--dental-clinic-referral-gone-wrong--d7ed553b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--dental-clinic-referral-gone-wrong--d7ed553b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--dental-clinic-referral-gone-wrong--d7ed553b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--dental-clinic-referral-gone-wrong--d7ed553b/.table';
import January2320261 from '../../../../../../.claude/.conversations/claude--dental-clinic-referral-gone-wrong--d7ed553b/1-january-23-2026';
import January2420262 from '../../../../../../.claude/.conversations/claude--dental-clinic-referral-gone-wrong--d7ed553b/2-january-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2320261()}
        {January2420262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
