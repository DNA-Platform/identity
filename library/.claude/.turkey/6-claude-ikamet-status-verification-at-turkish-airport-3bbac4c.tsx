import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--ikamet-status-verification-at-turkish-airport--3bbac4ce/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ikamet-status-verification-at-turkish-airport--3bbac4ce/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ikamet status verification at Turkish airport ]]( claude--Ikamet status verification at Turkish airport--3bbac4ce )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Ikamet status verification at Turkish airport ]]( claude--Ikamet status verification at Turkish airport--3bbac4ce )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
