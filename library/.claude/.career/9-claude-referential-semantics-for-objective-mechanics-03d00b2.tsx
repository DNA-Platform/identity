import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--referential-semantics-for-objective-mechanics--03d00b2c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--referential-semantics-for-objective-mechanics--03d00b2c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Referential Semantics for Objective Mechanics ]]( claude--Referential Semantics for Objective Mechanics--03d00b2c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 February 2026: <Means>$[[ Referential Semantics for Objective Mechanics ]]( claude--Referential Semantics for Objective Mechanics--03d00b2c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
