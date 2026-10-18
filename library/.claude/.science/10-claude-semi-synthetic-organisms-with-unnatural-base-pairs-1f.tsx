import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semi-synthetic-organisms-with-unnatural-base-pairs--1f66d32d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semi-synthetic-organisms-with-unnatural-base-pairs--1f66d32d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[1 July 2026](2026-07-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semi-synthetic organisms with unnatural base pairs ]]( claude--Semi-synthetic organisms with unnatural base pairs--1f66d32d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 July 2026: <Means>$[[ Semi-synthetic organisms with unnatural base pairs ]]( claude--Semi-synthetic organisms with unnatural base pairs--1f66d32d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
