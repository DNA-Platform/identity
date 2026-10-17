import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/microsofts-earnings-surge-and-ai-competition-outlook/.cover.tsx';
import TheSynopsis from '../.conversations/microsofts-earnings-surge-and-ai-competition-outlook/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Microsoft's earnings surge and AI competition outlook ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 July 2026: <Means>$[[ Microsoft's earnings surge and AI competition outlook ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
