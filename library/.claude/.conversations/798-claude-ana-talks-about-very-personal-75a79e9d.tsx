import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ana-talks-about-very-personal--75a79e9d/.cover.tsx';
import TheSynopsis from './claude--ana-talks-about-very-personal--75a79e9d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[5 July 2026](2026-07-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ana talks about very personal… ]]( claude--Ana talks about very personal…--75a79e9d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ Ana talks about very personal… ]]( claude--Ana talks about very personal…--75a79e9d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
