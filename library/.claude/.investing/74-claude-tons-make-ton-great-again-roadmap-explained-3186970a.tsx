import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--tons-make-ton-great-again-roadmap-explained--3186970a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tons-make-ton-great-again-roadmap-explained--3186970a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[5 May 2026](2026-05-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON's "Make TON Great Again" roadmap explained ]]( claude--TON's "Make TON Great Again" roadmap explained--3186970a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 May 2026: <Means>$[[ TON's "Make TON Great Again" roadmap explained ]]( claude--TON's "Make TON Great Again" roadmap explained--3186970a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
