import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--hypothetical-net-worth--1b3e1cdd/.cover.tsx';
import TheSynopsis from '../.conversations/claude--hypothetical-net-worth--1b3e1cdd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hypothetical Net Worth ]]( claude--Hypothetical Net Worth--1b3e1cdd )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 January 2026: <Means>$[[ Hypothetical Net Worth ]]( claude--Hypothetical Net Worth--1b3e1cdd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
