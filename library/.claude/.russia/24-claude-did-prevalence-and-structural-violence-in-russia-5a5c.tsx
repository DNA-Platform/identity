import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--did-prevalence-and-structural-violence-in-russia--5a5cda15/.cover.tsx';
import TheSynopsis from '../.conversations/claude--did-prevalence-and-structural-violence-in-russia--5a5cda15/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ DID prevalence and structural violence in Russia ]]( claude--DID prevalence and structural violence in Russia--5a5cda15 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 February 2026: <Means>$[[ DID prevalence and structural violence in Russia ]]( claude--DID prevalence and structural violence in Russia--5a5cda15 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
