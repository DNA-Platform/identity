import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import DesignSynopsis from '../.design/.synopsis';

export default () => (
    <Chapter>
        <Title>[[ Dougs Design ]]</Title>
        <Paragraph>
            The book <Means>$[[ Dougs Design ]]</Means> keeps the design of this library.
        </Paragraph>
        <Synopsis>{DesignSynopsis()}</Synopsis>
    </Chapter>
);
