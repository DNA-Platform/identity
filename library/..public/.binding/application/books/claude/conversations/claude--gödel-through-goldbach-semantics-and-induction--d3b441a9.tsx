import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/.table';
import TheDivisionOfLabour1 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/1-the-division-of-labour';
import SemanticReference2 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/2-semantic-reference';
import TheEpistemicCommitment3 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/3-the-epistemic-commitment';
import ExpressivePower4 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/4-expressive-power';
import GDelAndShannon5 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/5-g-del-and-shannon';
import TheOriginOfTheResult6 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/6-the-origin-of-the-result';
import DroppingInduction7 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/7-dropping-induction';
import TheUnverifiable8 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/8-the-unverifiable';
import TheSurvivingInduction9 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/9-the-surviving-induction';
import TheTitleAsACode10 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/10-the-title-as-a-code';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheDivisionOfLabour1()}
        {SemanticReference2()}
        {TheEpistemicCommitment3()}
        {ExpressivePower4()}
        {GDelAndShannon5()}
        {TheOriginOfTheResult6()}
        {DroppingInduction7()}
        {TheUnverifiable8()}
        {TheSurvivingInduction9()}
        {TheTitleAsACode10()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
