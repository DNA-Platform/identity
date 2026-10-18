import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ursodeoxycholic-acid-medications-in-tbilisi-pharmacies--cc78631a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ursodeoxycholic-acid-medications-in-tbilisi-pharmacies--cc78631a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ursodeoxycholic-acid-medications-in-tbilisi-pharmacies--cc78631a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ursodeoxycholic-acid-medications-in-tbilisi-pharmacies--cc78631a/.table';
import June120261 from '../../../../../../.claude/.conversations/claude--ursodeoxycholic-acid-medications-in-tbilisi-pharmacies--cc78631a/1-june-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
