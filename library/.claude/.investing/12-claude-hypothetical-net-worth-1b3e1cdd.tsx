import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--hypothetical-net-worth--1b3e1cdd/.cover.tsx';
import TheSynopsis from '../.conversations/claude--hypothetical-net-worth--1b3e1cdd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hypothetical Net Worth ]]( claude--Hypothetical Net Worth--1b3e1cdd )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 January 2026: <Means>$[[ Hypothetical Net Worth ]]( claude--Hypothetical Net Worth--1b3e1cdd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
