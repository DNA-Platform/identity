import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/.table';
import September1620251 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/1-september-16-2025';
import September2020252 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/2-september-20-2025';
import SemanticReferenceTheoryQuantificationAndSymbolismV1o1 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o1-semantic-reference-theory-quantification-and-symbolism-v1';
import SemanticReferenceTheoryQuantificationAndSymbolismV2o2 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o2-semantic-reference-theory-quantification-and-symbolism-v2';
import SemanticReferenceTheoryQuantificationAndSymbolismV3o3 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o3-semantic-reference-theory-quantification-and-symbolism-v3';
import SemanticReferenceTheoryQuantificationAndSymbolismV4o4 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o4-semantic-reference-theory-quantification-and-symbolism-v4';
import SemanticReferenceTheoryQuantificationAndSymbolismV5o5 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o5-semantic-reference-theory-quantification-and-symbolism-v5';
import SemanticReferenceTheoryAFormalFoundationV1o6 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o6-semantic-reference-theory-a-formal-foundation-v1';
import SemanticReferenceTheoryAFormalFoundationV2o7 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o7-semantic-reference-theory-a-formal-foundation-v2';
import SemanticReferenceTheoryAFormalFoundationV3o8 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o8-semantic-reference-theory-a-formal-foundation-v3';
import TheSemanticsOfPerspectiveInSrtV1o9 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o9-the-semantics-of-perspective-in-srt-v1';
import PerspectiveAsConsciousnessACompleteSemanticTheoryV1o10 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o10-perspective-as-consciousness-a-complete-semantic-theory-v1';
import TheAlgebraOfPerspectiveV1o11 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o11-the-algebra-of-perspective-v1';
import TheAlgebraOfPerspectiveV2o12 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o12-the-algebra-of-perspective-v2';
import TheAlgebraOfPerspectiveV3o13 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o13-the-algebra-of-perspective-v3';
import TheAlgebraOfPerspectiveV4o14 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o14-the-algebra-of-perspective-v4';
import TheAlgebraOfPerspectiveV5o15 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o15-the-algebra-of-perspective-v5';
import QualifyingTheTheoryAPaperOnPerspectiveV1o16 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o16-qualifying-the-theory-a-paper-on-perspective-v1';
import QualifyingTheTheoryAPaperOnPerspectiveV2o17 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o17-qualifying-the-theory-a-paper-on-perspective-v2';
import QualifyingTheTheoryAPaperOnPerspectiveV3o18 from '../../../../../../.claude/.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror/o18-qualifying-the-theory-a-paper-on-perspective-v3';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1620251()}
        {September2020252()}
        {SemanticReferenceTheoryQuantificationAndSymbolismV1o1()}
        {SemanticReferenceTheoryQuantificationAndSymbolismV2o2()}
        {SemanticReferenceTheoryQuantificationAndSymbolismV3o3()}
        {SemanticReferenceTheoryQuantificationAndSymbolismV4o4()}
        {SemanticReferenceTheoryQuantificationAndSymbolismV5o5()}
        {SemanticReferenceTheoryAFormalFoundationV1o6()}
        {SemanticReferenceTheoryAFormalFoundationV2o7()}
        {SemanticReferenceTheoryAFormalFoundationV3o8()}
        {TheSemanticsOfPerspectiveInSrtV1o9()}
        {PerspectiveAsConsciousnessACompleteSemanticTheoryV1o10()}
        {TheAlgebraOfPerspectiveV1o11()}
        {TheAlgebraOfPerspectiveV2o12()}
        {TheAlgebraOfPerspectiveV3o13()}
        {TheAlgebraOfPerspectiveV4o14()}
        {TheAlgebraOfPerspectiveV5o15()}
        {QualifyingTheTheoryAPaperOnPerspectiveV1o16()}
        {QualifyingTheTheoryAPaperOnPerspectiveV2o17()}
        {QualifyingTheTheoryAPaperOnPerspectiveV3o18()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
