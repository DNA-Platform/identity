import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/wise-us-listing-and-adr-comparison/.cover.tsx';
import TheSynopsis from '../.conversations/wise-us-listing-and-adr-comparison/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Wise US listing and ADR comparison ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 May 2026: <Means>$[[ Wise US listing and ADR comparison ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
