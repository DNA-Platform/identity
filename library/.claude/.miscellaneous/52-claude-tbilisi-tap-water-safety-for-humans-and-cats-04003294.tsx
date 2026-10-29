import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--tbilisi-tap-water-safety-for-humans-and-cats--04003294/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tbilisi-tap-water-safety-for-humans-and-cats--04003294/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[21 January 2026](2026-01-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Tbilisi tap water safety for humans and cats ]]( claude--Tbilisi tap water safety for humans and cats--04003294 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 January 2026: <Means>$[[ Tbilisi tap water safety for humans and cats ]]( claude--Tbilisi tap water safety for humans and cats--04003294 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
