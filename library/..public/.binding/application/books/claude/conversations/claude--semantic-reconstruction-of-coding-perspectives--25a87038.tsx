import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--semantic-reconstruction-of-coding-perspectives--25a87038/.book';
import Cover from '../../../../../../.claude/.conversations/claude--semantic-reconstruction-of-coding-perspectives--25a87038/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--semantic-reconstruction-of-coding-perspectives--25a87038/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--semantic-reconstruction-of-coding-perspectives--25a87038/.table';
import March220251 from '../../../../../../.claude/.conversations/claude--semantic-reconstruction-of-coding-perspectives--25a87038/1-march-2-2025';
import ElementcollectionImplementationV1o1 from '../../../../../../.claude/.conversations/claude--semantic-reconstruction-of-coding-perspectives--25a87038/o1-elementcollection-implementation-v1';
import ElementImplementationV1o2 from '../../../../../../.claude/.conversations/claude--semantic-reconstruction-of-coding-perspectives--25a87038/o2-element-implementation-v1';
import ElementImplementationV2o3 from '../../../../../../.claude/.conversations/claude--semantic-reconstruction-of-coding-perspectives--25a87038/o3-element-implementation-v2';
import ElementImplementationV3o4 from '../../../../../../.claude/.conversations/claude--semantic-reconstruction-of-coding-perspectives--25a87038/o4-element-implementation-v3';
import ElementImplementationV4o5 from '../../../../../../.claude/.conversations/claude--semantic-reconstruction-of-coding-perspectives--25a87038/o5-element-implementation-v4';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March220251()}
        {ElementcollectionImplementationV1o1()}
        {ElementImplementationV1o2()}
        {ElementImplementationV2o3()}
        {ElementImplementationV3o4()}
        {ElementImplementationV4o5()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
