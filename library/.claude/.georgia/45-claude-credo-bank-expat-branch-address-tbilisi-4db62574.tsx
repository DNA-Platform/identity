import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--credo-bank-expat-branch-address-tbilisi--4db62574/.cover.tsx';
import TheSynopsis from '../.conversations/claude--credo-bank-expat-branch-address-tbilisi--4db62574/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Credo bank expat branch address Tbilisi ]]( claude--Credo bank expat branch address Tbilisi--4db62574 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Credo bank expat branch address Tbilisi ]]( claude--Credo bank expat branch address Tbilisi--4db62574 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
