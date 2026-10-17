import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--bitcoin--c3b4dd81/.cover.tsx';
import TheSynopsis from '../.conversations/claude--bitcoin--c3b4dd81/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin ]]( claude--Bitcoin--c3b4dd81 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 January 2026: <Means>$[[ Bitcoin ]]( claude--Bitcoin--c3b4dd81 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
