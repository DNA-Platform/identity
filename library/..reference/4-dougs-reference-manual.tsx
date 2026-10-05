import { Chapter, Synopsis, Title } from '@dna-platform/public';
import DougsReferenceManualSynopsis from '../.manual/.synopsis';

export default () => (
    <Chapter>
        <Title>[[ Dougs Reference Manual ]]</Title>
        <Synopsis>{DougsReferenceManualSynopsis()}</Synopsis>
    </Chapter>
);
