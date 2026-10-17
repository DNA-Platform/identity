import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--orchid-and-gitcoin-crypto-projects-solving-fundamental-probl/.book';
import Cover from '../../../../../../.claude/.conversations/claude--orchid-and-gitcoin-crypto-projects-solving-fundamental-probl/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--orchid-and-gitcoin-crypto-projects-solving-fundamental-probl/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--orchid-and-gitcoin-crypto-projects-solving-fundamental-probl/.table';
import March1220261 from '../../../../../../.claude/.conversations/claude--orchid-and-gitcoin-crypto-projects-solving-fundamental-probl/1-march-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
