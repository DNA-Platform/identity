import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--eirian-and-patterns--9ee451e7/.book';
import Cover from '../../../../../../.claude/.conversations/claude--eirian-and-patterns--9ee451e7/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--eirian-and-patterns--9ee451e7/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--eirian-and-patterns--9ee451e7/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--eirian-and-patterns--9ee451e7/1-conversation';
import PatternAppTrelloCardsV1o1 from '../../../../../../.claude/.conversations/claude--eirian-and-patterns--9ee451e7/o1-pattern-app-trello-cards-v1';
import PatternAppTrelloCardsV2o2 from '../../../../../../.claude/.conversations/claude--eirian-and-patterns--9ee451e7/o2-pattern-app-trello-cards-v2';
import CardCreateBasicHtmlWithEmbeddedSvgPatternV1o3 from '../../../../../../.claude/.conversations/claude--eirian-and-patterns--9ee451e7/o3-card-create-basic-html-with-embedded-svg-pattern-v1';
import CardSetupNextJsPatternAppWithStaticExportV1o4 from '../../../../../../.claude/.conversations/claude--eirian-and-patterns--9ee451e7/o4-card-setup-next-js-pattern-app-with-static-export-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {PatternAppTrelloCardsV1o1()}
        {PatternAppTrelloCardsV2o2()}
        {CardCreateBasicHtmlWithEmbeddedSvgPatternV1o3()}
        {CardSetupNextJsPatternAppWithStaticExportV1o4()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
