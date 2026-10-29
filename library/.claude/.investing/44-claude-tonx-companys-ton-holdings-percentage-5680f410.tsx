import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--tonx-companys-ton-holdings-percentage--5680f410/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tonx-companys-ton-holdings-percentage--5680f410/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX company's TON holdings percentage ]]( claude--TONX company's TON holdings percentage--5680f410 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ TONX company's TON holdings percentage ]]( claude--TONX company's TON holdings percentage--5680f410 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
