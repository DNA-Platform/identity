import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--bitcoin--c3b4dd81/.cover.tsx';
import TheSynopsis from '../.conversations/claude--bitcoin--c3b4dd81/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin ]]( claude--Bitcoin--c3b4dd81 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 January 2026: <Means>$[[ Bitcoin ]]( claude--Bitcoin--c3b4dd81 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
