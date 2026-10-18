import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--switching-primary-domain-in-google-workspace--eef74580/.book';
import Cover from '../../../../../../.claude/.conversations/claude--switching-primary-domain-in-google-workspace--eef74580/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--switching-primary-domain-in-google-workspace--eef74580/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--switching-primary-domain-in-google-workspace--eef74580/.table';
import May2720261 from '../../../../../../.claude/.conversations/claude--switching-primary-domain-in-google-workspace--eef74580/1-may-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
