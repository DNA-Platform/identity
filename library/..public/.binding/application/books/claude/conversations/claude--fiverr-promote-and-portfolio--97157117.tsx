import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--fiverr-promote-and-portfolio--97157117/.book';
import Cover from '../../../../../../.claude/.conversations/claude--fiverr-promote-and-portfolio--97157117/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--fiverr-promote-and-portfolio--97157117/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--fiverr-promote-and-portfolio--97157117/.table';
import February1820261 from '../../../../../../.claude/.conversations/claude--fiverr-promote-and-portfolio--97157117/1-february-18-2026';
import February1920262 from '../../../../../../.claude/.conversations/claude--fiverr-promote-and-portfolio--97157117/2-february-19-2026';
import February2020263 from '../../../../../../.claude/.conversations/claude--fiverr-promote-and-portfolio--97157117/3-february-20-2026';
import February2720264 from '../../../../../../.claude/.conversations/claude--fiverr-promote-and-portfolio--97157117/4-february-27-2026';
import March1720265 from '../../../../../../.claude/.conversations/claude--fiverr-promote-and-portfolio--97157117/5-march-17-2026';
import March1920266 from '../../../../../../.claude/.conversations/claude--fiverr-promote-and-portfolio--97157117/6-march-19-2026';
import May2220267 from '../../../../../../.claude/.conversations/claude--fiverr-promote-and-portfolio--97157117/7-may-22-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1820261()}
        {February1920262()}
        {February2020263()}
        {February2720264()}
        {March1720265()}
        {March1920266()}
        {May2220267()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
