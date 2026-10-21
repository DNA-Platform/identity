import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/.book';
import Cover from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/1-conversation';
import MapFeaturesExtractorV1o1 from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/o1-map-features-extractor-v1';
import MapFeaturesIndexerV1o2 from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/o2-map-features-indexer-v1';
import NaturalearthfeatureextractorV1o3 from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/o3-naturalearthfeatureextractor-v1';
import NaturalearthdatasetreaderWithTypescriptFixesV1o4 from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/o4-naturalearthdatasetreader-with-typescript-fixes-v1';
import ExtendedMapIndexGeneratorV1o5 from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/o5-extended-map-index-generator-v1';
import SimplifiedMapDocumentationGeneratorV1o6 from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/o6-simplified-map-documentation-generator-v1';
import MapIndexGeneratorWithDocumentationV1o7 from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/o7-map-index-generator-with-documentation-v1';
import FixedMapIndexGeneratorV1o8 from '../../../../../../.claude/.conversations/claude--indexing-and-mapping-natural-earth-datasets--32d72eac/o8-fixed-map-index-generator-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {MapFeaturesExtractorV1o1()}
        {MapFeaturesIndexerV1o2()}
        {NaturalearthfeatureextractorV1o3()}
        {NaturalearthdatasetreaderWithTypescriptFixesV1o4()}
        {ExtendedMapIndexGeneratorV1o5()}
        {SimplifiedMapDocumentationGeneratorV1o6()}
        {MapIndexGeneratorWithDocumentationV1o7()}
        {FixedMapIndexGeneratorV1o8()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
