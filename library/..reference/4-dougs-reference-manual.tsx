import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import DougsReferenceManualSynopsis from '../.manual/.synopsis';

export default () => (
    <Chapter>
        <Title>[[ Dougs Reference Manual ]]</Title>
        <Paragraph>
            The book <Means>$[[ Dougs Reference Manual ]]</Means> holds the parts this library is built with.
        </Paragraph>
        <Synopsis>{DougsReferenceManualSynopsis()}</Synopsis>
    </Chapter>
);
