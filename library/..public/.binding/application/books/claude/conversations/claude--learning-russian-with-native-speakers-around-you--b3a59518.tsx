import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--learning-russian-with-native-speakers-around-you--b3a59518/.book';
import Cover from '../../../../../../.claude/.conversations/claude--learning-russian-with-native-speakers-around-you--b3a59518/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--learning-russian-with-native-speakers-around-you--b3a59518/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--learning-russian-with-native-speakers-around-you--b3a59518/.table';
import March420261 from '../../../../../../.claude/.conversations/claude--learning-russian-with-native-speakers-around-you--b3a59518/1-march-4-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
