import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/.table';
import March2620251 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/1-march-26-2025';
import March2820252 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/2-march-28-2025';
import CreatingArtisticMapsWithReactSimpleMapsV1o1 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o1-creating-artistic-maps-with-react-simple-maps-v1';
import AdvancedReactSimpleMapsCreatingProfessionalCartographyo2 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o2-advanced-react-simple-maps-creating-professional-cartography';
import ProfessionalCartographicComponentsForReactSimpleMapsVo3 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o3-professional-cartographic-components-for-react-simple-maps-v';
import ProfessionalCartographicComponentsInTypescriptV1o4 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o4-professional-cartographic-components-in-typescript-v1';
import CompleteProfessionalCartographicComponentsInTypescripto5 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o5-complete-professional-cartographic-components-in-typescript';
import CompletedMapComponentsWithAdditionalProLevelFeatureso6 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o6-completed-map-components-with-additional-pro-level-features';
import TypescriptFixesForMapComponentsV1o7 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o7-typescript-fixes-for-map-components-v1';
import WorldmapTsxV1o8 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o8-worldmap-tsx-v1';
import UsmapTsxV1o9 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o9-usmap-tsx-v1';
import RussiamapTsxV1o10 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o10-russiamap-tsx-v1';
import NewyorkmapTsxV1o11 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o11-newyorkmap-tsx-v1';
import MapcontainerTsxV1o12 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o12-mapcontainer-tsx-v1';
import WorldmapTsxV12o13 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o13-worldmap-tsx-v1-2';
import UsmapTsxV12o14 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o14-usmap-tsx-v1-2';
import CustomsvgbackgroundTsxV1o15 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o15-customsvgbackground-tsx-v1';
import CustomsvgbackgroundusageTsxV1o16 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o16-customsvgbackgroundusage-tsx-v1';
import SvgiconTsxV1o17 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o17-svgicon-tsx-v1';
import SvgiconusageexampleTsxV1o18 from '../../../../../../.claude/.conversations/claude--claude-the-cartographer--42c78ea0/o18-svgiconusageexample-tsx-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2620251()}
        {March2820252()}
        {CreatingArtisticMapsWithReactSimpleMapsV1o1()}
        {AdvancedReactSimpleMapsCreatingProfessionalCartographyo2()}
        {ProfessionalCartographicComponentsForReactSimpleMapsVo3()}
        {ProfessionalCartographicComponentsInTypescriptV1o4()}
        {CompleteProfessionalCartographicComponentsInTypescripto5()}
        {CompletedMapComponentsWithAdditionalProLevelFeatureso6()}
        {TypescriptFixesForMapComponentsV1o7()}
        {WorldmapTsxV1o8()}
        {UsmapTsxV1o9()}
        {RussiamapTsxV1o10()}
        {NewyorkmapTsxV1o11()}
        {MapcontainerTsxV1o12()}
        {WorldmapTsxV12o13()}
        {UsmapTsxV12o14()}
        {CustomsvgbackgroundTsxV1o15()}
        {CustomsvgbackgroundusageTsxV1o16()}
        {SvgiconTsxV1o17()}
        {SvgiconusageexampleTsxV1o18()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
