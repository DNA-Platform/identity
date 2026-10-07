import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Caption, Volume } from '../.manual/.book';
import ManualCover from '../.manual/.cover';
import ManualSynopsis from '../.manual/.synopsis';

export default () => (
    <Chapter>
        <Volume>{ManualCover()}</Volume>
        <Title>[[ Dougs Reference Manual ]]</Title>
        <Paragraph>
            <Caption />
            What the library is built with, and how to build with it: <Means>$[[ Dougs Reference Manual ]]</Means>.
        </Paragraph>
        <Synopsis>{ManualSynopsis()}</Synopsis>
    </Chapter>
);
