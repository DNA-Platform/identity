import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[14 July 2026](2026-07-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON and GRAM ecosystem updates ]]( claude--TON and GRAM ecosystem updates--d5d0756e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 July 2026: <Means>$[[ TON and GRAM ecosystem updates ]]( claude--TON and GRAM ecosystem updates--d5d0756e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
