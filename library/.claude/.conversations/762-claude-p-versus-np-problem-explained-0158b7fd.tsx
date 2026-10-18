import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--p-versus-np-problem-explained--0158b7fd/.cover.tsx';
import TheSynopsis from './claude--p-versus-np-problem-explained--0158b7fd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ P versus NP problem explained ]]( claude--P versus NP problem explained--0158b7fd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ P versus NP problem explained ]]( claude--P versus NP problem explained--0158b7fd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
