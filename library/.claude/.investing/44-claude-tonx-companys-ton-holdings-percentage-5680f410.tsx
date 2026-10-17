import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--tonx-companys-ton-holdings-percentage--5680f410/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tonx-companys-ton-holdings-percentage--5680f410/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX company's TON holdings percentage ]]( claude--TONX company's TON holdings percentage--5680f410 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ TONX company's TON holdings percentage ]]( claude--TONX company's TON holdings percentage--5680f410 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
