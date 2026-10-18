import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--tbilisi-tap-water-safety-for-humans-and-cats--04003294/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tbilisi-tap-water-safety-for-humans-and-cats--04003294/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Tbilisi tap water safety for humans and cats ]]( claude--Tbilisi tap water safety for humans and cats--04003294 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 January 2026: <Means>$[[ Tbilisi tap water safety for humans and cats ]]( claude--Tbilisi tap water safety for humans and cats--04003294 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
