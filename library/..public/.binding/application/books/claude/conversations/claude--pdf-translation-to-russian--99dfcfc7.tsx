import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--pdf-translation-to-russian--99dfcfc7/.book';
import Cover from '../../../../../../.claude/.conversations/claude--pdf-translation-to-russian--99dfcfc7/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--pdf-translation-to-russian--99dfcfc7/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--pdf-translation-to-russian--99dfcfc7/.table';
import February520261 from '../../../../../../.claude/.conversations/claude--pdf-translation-to-russian--99dfcfc7/1-february-5-2026';
import February1420262 from '../../../../../../.claude/.conversations/claude--pdf-translation-to-russian--99dfcfc7/2-february-14-2026';
import February1820263 from '../../../../../../.claude/.conversations/claude--pdf-translation-to-russian--99dfcfc7/3-february-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February520261()}
        {February1420262()}
        {February1820263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
