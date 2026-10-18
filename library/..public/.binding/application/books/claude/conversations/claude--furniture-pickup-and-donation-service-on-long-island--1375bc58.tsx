import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--furniture-pickup-and-donation-service-on-long-island--1375bc58/.book';
import Cover from '../../../../../../.claude/.conversations/claude--furniture-pickup-and-donation-service-on-long-island--1375bc58/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--furniture-pickup-and-donation-service-on-long-island--1375bc58/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--furniture-pickup-and-donation-service-on-long-island--1375bc58/.table';
import November2520251 from '../../../../../../.claude/.conversations/claude--furniture-pickup-and-donation-service-on-long-island--1375bc58/1-november-25-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2520251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
