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
            Every page of this library was decided in <Means>$[[ Dougs Design ]]</Means> first.
        </Paragraph>
        <Synopsis>{DesignSynopsis()}</Synopsis>
    </Chapter>
);
