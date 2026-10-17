import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--tons-make-ton-great-again-roadmap-explained--3186970a/.cover.tsx';
import TheSynopsis from './claude--tons-make-ton-great-again-roadmap-explained--3186970a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[6 May 2026](2026-05-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON's "Make TON Great Again" roadmap explained ]]( claude--TON's "Make TON Great Again" roadmap explained--3186970a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 34 exchanges: <Means>$[[ TON's "Make TON Great Again" roadmap explained ]]( claude--TON's "Make TON Great Again" roadmap explained--3186970a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
