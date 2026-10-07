import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Caption, Volume } from '../.manual/.book';
import DesignCover from '../.design/.cover';
import DesignSynopsis from '../.design/.synopsis';

export default () => (
    <Chapter>
        <Volume>{DesignCover()}</Volume>
        <Title>[[ Dougs Design ]]</Title>
        <Paragraph>
            <Caption />
            The book <Means>$[[ Dougs Design ]]</Means> keeps the design of this library.
        </Paragraph>
        <Synopsis>{DesignSynopsis()}</Synopsis>
    </Chapter>
);
