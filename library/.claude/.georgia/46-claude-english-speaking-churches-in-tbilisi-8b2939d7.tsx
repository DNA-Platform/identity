import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--english-speaking-churches-in-tbilisi--8b2939d7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--english-speaking-churches-in-tbilisi--8b2939d7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ English-speaking churches in Tbilisi ]]( claude--English-speaking churches in Tbilisi--8b2939d7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 April 2026: <Means>$[[ English-speaking churches in Tbilisi ]]( claude--English-speaking churches in Tbilisi--8b2939d7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
