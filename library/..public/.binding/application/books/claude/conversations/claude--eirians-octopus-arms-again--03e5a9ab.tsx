import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/.book';
import Cover from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/.table';
import February2220261 from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/1-february-22-2026';
import March120262 from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/2-march-1-2026';
import March220263 from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/3-march-2-2026';
import March720264 from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/4-march-7-2026';
import March1020265 from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/5-march-10-2026';
import March1420266 from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/6-march-14-2026';
import March1520267 from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/7-march-15-2026';
import March1820268 from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/8-march-18-2026';
import March1920269 from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/9-march-19-2026';
import March22202610 from '../../../../../../.claude/.conversations/claude--eirians-octopus-arms-again--03e5a9ab/10-march-22-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February2220261()}
        {March120262()}
        {March220263()}
        {March720264()}
        {March1020265()}
        {March1420266()}
        {March1520267()}
        {March1820268()}
        {March1920269()}
        {March22202610()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
