import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--tonx-companys-ton-holdings-percentage--5680f410/.cover.tsx';
import TheSynopsis from './claude--tonx-companys-ton-holdings-percentage--5680f410/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX company's TON holdings percentage ]]( claude--TONX company's TON holdings percentage--5680f410 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 95 exchanges: <Means>$[[ TONX company's TON holdings percentage ]]( claude--TONX company's TON holdings percentage--5680f410 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
