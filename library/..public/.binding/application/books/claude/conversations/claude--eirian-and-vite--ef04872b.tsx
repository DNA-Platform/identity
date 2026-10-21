import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--eirian-and-vite--ef04872b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--eirian-and-vite--ef04872b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--eirian-and-vite--ef04872b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--eirian-and-vite--ef04872b/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--eirian-and-vite--ef04872b/1-conversation';
import PatternArchitectureDecisionsV1o1 from '../../../../../../.claude/.conversations/claude--eirian-and-vite--ef04872b/o1-pattern-architecture-decisions-v1';
import PatternArchitectureDecisionsV2o2 from '../../../../../../.claude/.conversations/claude--eirian-and-vite--ef04872b/o2-pattern-architecture-decisions-v2';
import PatternArchitectureDecisionsV3o3 from '../../../../../../.claude/.conversations/claude--eirian-and-vite--ef04872b/o3-pattern-architecture-decisions-v3';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {PatternArchitectureDecisionsV1o1()}
        {PatternArchitectureDecisionsV2o2()}
        {PatternArchitectureDecisionsV3o3()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
