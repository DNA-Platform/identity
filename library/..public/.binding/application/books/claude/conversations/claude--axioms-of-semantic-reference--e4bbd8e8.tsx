import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/.table';
import October1020251 from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/1-october-10-2025';
import October1120252 from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/2-october-11-2025';
import TheFiveAxiomsOfSemanticReferenceTheoryV1o1 from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/o1-the-five-axioms-of-semantic-reference-theory-v1';
import TheFiveAxiomsOfSemanticReferenceTheoryV2o2 from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/o2-the-five-axioms-of-semantic-reference-theory-v2';
import TheFiveAxiomsOfSemanticReferenceTheoryV3o3 from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/o3-the-five-axioms-of-semantic-reference-theory-v3';
import TheFiveAxiomsOfSemanticReferenceTheoryV4o4 from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/o4-the-five-axioms-of-semantic-reference-theory-v4';
import TheFiveAxiomsOfSemanticReferenceTheoryV5o5 from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/o5-the-five-axioms-of-semantic-reference-theory-v5';
import TheFiveAxiomsOfSemanticReferenceTheoryV6o6 from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/o6-the-five-axioms-of-semantic-reference-theory-v6';
import TheFiveAxiomsOfSemanticReferenceTheoryV7o7 from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/o7-the-five-axioms-of-semantic-reference-theory-v7';
import TheFiveAxiomsOfSemanticReferenceTheoryV8o8 from '../../../../../../.claude/.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/o8-the-five-axioms-of-semantic-reference-theory-v8';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1020251()}
        {October1120252()}
        {TheFiveAxiomsOfSemanticReferenceTheoryV1o1()}
        {TheFiveAxiomsOfSemanticReferenceTheoryV2o2()}
        {TheFiveAxiomsOfSemanticReferenceTheoryV3o3()}
        {TheFiveAxiomsOfSemanticReferenceTheoryV4o4()}
        {TheFiveAxiomsOfSemanticReferenceTheoryV5o5()}
        {TheFiveAxiomsOfSemanticReferenceTheoryV6o6()}
        {TheFiveAxiomsOfSemanticReferenceTheoryV7o7()}
        {TheFiveAxiomsOfSemanticReferenceTheoryV8o8()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
