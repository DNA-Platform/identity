import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semi-synthetic-organisms-with-unnatural-base-pairs--1f66d32d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semi-synthetic-organisms-with-unnatural-base-pairs--1f66d32d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semi-synthetic organisms with unnatural base pairs ]]( claude--Semi-synthetic organisms with unnatural base pairs--1f66d32d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 July 2026: <Means>$[[ Semi-synthetic organisms with unnatural base pairs ]]( claude--Semi-synthetic organisms with unnatural base pairs--1f66d32d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
