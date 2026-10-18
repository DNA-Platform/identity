import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--spacex-valuation-trajectory-and-funding-milestones--1c383188/.book';
import Cover from '../../../../../../.claude/.conversations/claude--spacex-valuation-trajectory-and-funding-milestones--1c383188/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--spacex-valuation-trajectory-and-funding-milestones--1c383188/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--spacex-valuation-trajectory-and-funding-milestones--1c383188/.table';
import June2120261 from '../../../../../../.claude/.conversations/claude--spacex-valuation-trajectory-and-funding-milestones--1c383188/1-june-21-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
