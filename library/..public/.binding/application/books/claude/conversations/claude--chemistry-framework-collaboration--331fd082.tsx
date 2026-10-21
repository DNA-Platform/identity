import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-framework-collaboration--331fd082/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-framework-collaboration--331fd082/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-framework-collaboration--331fd082/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-framework-collaboration--331fd082/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--chemistry-framework-collaboration--331fd082/1-conversation';
import DiagramClassWithBondConfigurationV1o1 from '../../../../../../.claude/.conversations/claude--chemistry-framework-collaboration--331fd082/o1-diagram-class-with-bond-configuration-v1';
import SetterInterfaceAndSentinelV1o2 from '../../../../../../.claude/.conversations/claude--chemistry-framework-collaboration--331fd082/o2-setter-interface-and-sentinel-v1';
import SetterInterfaceAndSentinelV2o3 from '../../../../../../.claude/.conversations/claude--chemistry-framework-collaboration--331fd082/o3-setter-interface-and-sentinel-v2';
import UpdatedPropertiesTypeV1o4 from '../../../../../../.claude/.conversations/claude--chemistry-framework-collaboration--331fd082/o4-updated-properties-type-v1';
import Chemistry2BasicTestComponentV1o5 from '../../../../../../.claude/.conversations/claude--chemistry-framework-collaboration--331fd082/o5-chemistry2-basic-test-component-v1';
import Chemistry2WithFixedClassOrderV1o6 from '../../../../../../.claude/.conversations/claude--chemistry-framework-collaboration--331fd082/o6-chemistry2-with-fixed-class-order-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {DiagramClassWithBondConfigurationV1o1()}
        {SetterInterfaceAndSentinelV1o2()}
        {SetterInterfaceAndSentinelV2o3()}
        {UpdatedPropertiesTypeV1o4()}
        {Chemistry2BasicTestComponentV1o5()}
        {Chemistry2WithFixedClassOrderV1o6()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
