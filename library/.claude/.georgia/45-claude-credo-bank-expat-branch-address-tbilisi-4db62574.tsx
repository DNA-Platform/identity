import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--credo-bank-expat-branch-address-tbilisi--4db62574/.cover.tsx';
import TheSynopsis from '../.conversations/claude--credo-bank-expat-branch-address-tbilisi--4db62574/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Credo bank expat branch address Tbilisi ]]( claude--Credo bank expat branch address Tbilisi--4db62574 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Credo bank expat branch address Tbilisi ]]( claude--Credo bank expat branch address Tbilisi--4db62574 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
