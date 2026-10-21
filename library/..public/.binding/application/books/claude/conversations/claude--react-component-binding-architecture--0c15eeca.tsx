import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/.book';
import Cover from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/1-conversation';
import ChemistryFrameworkAdvancedExampleAppV1o1 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o1-chemistry-framework-advanced-example-app-v1';
import ChemistryFrameworkAdvancedExampleAppV2o2 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o2-chemistry-framework-advanced-example-app-v2';
import ChemistryFrameworkTodoAppImplementationV1o3 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o3-chemistry-framework-todo-app-implementation-v1';
import ChemistryFrameworkTodoAppImplementationV2o4 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o4-chemistry-framework-todo-app-implementation-v2';
import ChemistryFrameworkTodoAppImplementationV3o5 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o5-chemistry-framework-todo-app-implementation-v3';
import ChemistryFrameworkTodoAppImplementationV4o6 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o6-chemistry-framework-todo-app-implementation-v4';
import ChemistryFrameworkTodoAppImplementationV5o7 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o7-chemistry-framework-todo-app-implementation-v5';
import TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno8 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o8-the-construction-of-symbolic-equality-from-literal-self-iden';
import TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno9 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o9-the-construction-of-symbolic-equality-from-literal-self-iden';
import TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno10 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o10-the-construction-of-symbolic-equality-from-literal-self-iden';
import TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno11 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o11-the-construction-of-symbolic-equality-from-literal-self-iden';
import TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno12 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o12-the-construction-of-symbolic-equality-from-literal-self-iden';
import TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno13 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o13-the-construction-of-symbolic-equality-from-literal-self-iden';
import TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno14 from '../../../../../../.claude/.conversations/claude--react-component-binding-architecture--0c15eeca/o14-the-construction-of-symbolic-equality-from-literal-self-iden';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {ChemistryFrameworkAdvancedExampleAppV1o1()}
        {ChemistryFrameworkAdvancedExampleAppV2o2()}
        {ChemistryFrameworkTodoAppImplementationV1o3()}
        {ChemistryFrameworkTodoAppImplementationV2o4()}
        {ChemistryFrameworkTodoAppImplementationV3o5()}
        {ChemistryFrameworkTodoAppImplementationV4o6()}
        {ChemistryFrameworkTodoAppImplementationV5o7()}
        {TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno8()}
        {TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno9()}
        {TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno10()}
        {TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno11()}
        {TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno12()}
        {TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno13()}
        {TheConstructionOfSymbolicEqualityFromLiteralSelfIdeno14()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
