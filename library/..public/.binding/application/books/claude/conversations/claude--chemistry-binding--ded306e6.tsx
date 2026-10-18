import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-binding--ded306e6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-binding--ded306e6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-binding--ded306e6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-binding--ded306e6/.table';
import September1820251 from '../../../../../../.claude/.conversations/claude--chemistry-binding--ded306e6/1-september-18-2025';
import September1920252 from '../../../../../../.claude/.conversations/claude--chemistry-binding--ded306e6/2-september-19-2025';
import September2120253 from '../../../../../../.claude/.conversations/claude--chemistry-binding--ded306e6/3-september-21-2025';
import ChemistryFrameworkADevelopersPerspectiveV1o1 from '../../../../../../.claude/.conversations/claude--chemistry-binding--ded306e6/o1-chemistry-framework-a-developers-perspective-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1820251()}
        {September1920252()}
        {September2120253()}
        {ChemistryFrameworkADevelopersPerspectiveV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
