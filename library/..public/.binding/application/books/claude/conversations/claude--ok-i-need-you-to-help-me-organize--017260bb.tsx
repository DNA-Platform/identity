import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ok-i-need-you-to-help-me-organize--017260bb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ok-i-need-you-to-help-me-organize--017260bb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ok-i-need-you-to-help-me-organize--017260bb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ok-i-need-you-to-help-me-organize--017260bb/.table';
import January1420261 from '../../../../../../.claude/.conversations/claude--ok-i-need-you-to-help-me-organize--017260bb/1-january-14-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
