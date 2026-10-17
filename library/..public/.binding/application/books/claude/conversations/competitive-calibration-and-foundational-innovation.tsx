import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/competitive-calibration-and-foundational-innovation/.book';
import Cover from '../../../../../../.claude/.conversations/competitive-calibration-and-foundational-innovation/.cover';
import Synopsis from '../../../../../../.claude/.conversations/competitive-calibration-and-foundational-innovation/.synopsis';
import Table from '../../../../../../.claude/.conversations/competitive-calibration-and-foundational-innovation/.table';
import January3120261 from '../../../../../../.claude/.conversations/competitive-calibration-and-foundational-innovation/1-january-31-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January3120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
