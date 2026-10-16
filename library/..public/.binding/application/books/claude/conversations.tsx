import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.conversations/.book';
import Cover from '../../../../../.claude/.conversations/.cover';
import Synopsis from '../../../../../.claude/.conversations/.synopsis';
import Table from '../../../../../.claude/.conversations/.table';
import SemanticPrimes1 from '../../../../../.claude/.conversations/1-semantic-primes';
import ConvertingSharedConversationToDocument2 from '../../../../../.claude/.conversations/2-converting-shared-conversation-to-document';
import UnifyingSrtAxiomsWithSymbolization3 from '../../../../../.claude/.conversations/3-unifying-srt-axioms-with-symbolization';
import SrtAsAGithubProject4 from '../../../../../.claude/.conversations/4-srt-as-a-github-project';
import SpecifyingSrt5 from '../../../../../.claude/.conversations/5-specifying-srt';
import FrustrationWithAiReasoningAndCommunicationGaps6 from '../../../../../.claude/.conversations/6-frustration-with-ai-reasoning-and-communication-gaps';
import OnticStructuralRealism7 from '../../../../../.claude/.conversations/7-ontic-structural-realism';
import RepresentationAndThePartWholeDichotomy8 from '../../../../../.claude/.conversations/8-representation-and-the-part-whole-dichotomy';
import SrtAxiomsAndSpecialization9 from '../../../../../.claude/.conversations/9-srt-axioms-and-specialization';
import SemanticReferenceTheoryFoundationsAndPhilosophicalConu10 from '../../../../../.claude/.conversations/10-semantic-reference-theory-foundations-and-philosophical-conu';
import DistinguishingTypeCategoryAndKindInEnglish11 from '../../../../../.claude/.conversations/11-distinguishing-type-category-and-kind-in-english';
import RelationshipsAndInheriance12 from '../../../../../.claude/.conversations/12-relationships-and-inheriance';
import InexplicablePhenomena13 from '../../../../../.claude/.conversations/13-inexplicable-phenomena';
import TheSemanticsOfBooks14 from '../../../../../.claude/.conversations/14-the-semantics-of-books';
import CollectionSemanticsAndCanonicalRepresentatives15 from '../../../../../.claude/.conversations/15-collection-semantics-and-canonical-representatives';
import StringLengthNotationAndFoundationalSketchGeneralizatio16 from '../../../../../.claude/.conversations/16-string-length-notation-and-foundational-sketch-generalizatio';
import LearningSrtSyntaxAndTranspilerFundamentals17 from '../../../../../.claude/.conversations/17-learning-srt-syntax-and-transpiler-fundamentals';
import FoundationsTypesAndProperties18 from '../../../../../.claude/.conversations/18-foundations-types-and-properties';
import SemanticsOfTypesAndMore19 from '../../../../../.claude/.conversations/19-semantics-of-types-and-more';
import SemanticsOfRepresentation20 from '../../../../../.claude/.conversations/20-semantics-of-representation';
import MetalogicalSubjectivity21 from '../../../../../.claude/.conversations/21-metalogical-subjectivity';
import ConservationOfTimeComplexity22 from '../../../../../.claude/.conversations/22-conservation-of-time-complexity';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {SemanticPrimes1()}
        {ConvertingSharedConversationToDocument2()}
        {UnifyingSrtAxiomsWithSymbolization3()}
        {SrtAsAGithubProject4()}
        {SpecifyingSrt5()}
        {FrustrationWithAiReasoningAndCommunicationGaps6()}
        {OnticStructuralRealism7()}
        {RepresentationAndThePartWholeDichotomy8()}
        {SrtAxiomsAndSpecialization9()}
        {SemanticReferenceTheoryFoundationsAndPhilosophicalConu10()}
        {DistinguishingTypeCategoryAndKindInEnglish11()}
        {RelationshipsAndInheriance12()}
        {InexplicablePhenomena13()}
        {TheSemanticsOfBooks14()}
        {CollectionSemanticsAndCanonicalRepresentatives15()}
        {StringLengthNotationAndFoundationalSketchGeneralizatio16()}
        {LearningSrtSyntaxAndTranspilerFundamentals17()}
        {FoundationsTypesAndProperties18()}
        {SemanticsOfTypesAndMore19()}
        {SemanticsOfRepresentation20()}
        {MetalogicalSubjectivity21()}
        {ConservationOfTimeComplexity22()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
