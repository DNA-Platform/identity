import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/.table';
import September920251 from '../../../../../../.claude/.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/1-september-9-2025';
import CallableChemicalImplementationV1o1 from '../../../../../../.claude/.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/o1-callable-chemical-implementation-v1';
import CallableChemicalImplementationV2o2 from '../../../../../../.claude/.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/o2-callable-chemical-implementation-v2';
import CallableChemicalImplementationV3o3 from '../../../../../../.claude/.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/o3-callable-chemical-implementation-v3';
import CallableChemicalImplementationV4o4 from '../../../../../../.claude/.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/o4-callable-chemical-implementation-v4';
import MinimalCallableClassExampleV1o5 from '../../../../../../.claude/.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/o5-minimal-callable-class-example-v1';
import TypescriptProxyBehaviorTestsV1o6 from '../../../../../../.claude/.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/o6-typescript-proxy-behavior-tests-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September920251()}
        {CallableChemicalImplementationV1o1()}
        {CallableChemicalImplementationV2o2()}
        {CallableChemicalImplementationV3o3()}
        {CallableChemicalImplementationV4o4()}
        {MinimalCallableClassExampleV1o5()}
        {TypescriptProxyBehaviorTestsV1o6()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
