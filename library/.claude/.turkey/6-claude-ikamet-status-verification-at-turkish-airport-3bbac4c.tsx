import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ikamet-status-verification-at-turkish-airport--3bbac4ce/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ikamet-status-verification-at-turkish-airport--3bbac4ce/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ikamet status verification at Turkish airport ]]( claude--Ikamet status verification at Turkish airport--3bbac4ce )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Ikamet status verification at Turkish airport ]]( claude--Ikamet status verification at Turkish airport--3bbac4ce )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
