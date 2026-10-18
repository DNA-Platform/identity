import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--identifying-a-ladybug-pupa-on-a-leaf--bba39ef6/.cover.tsx';
import TheSynopsis from './claude--identifying-a-ladybug-pupa-on-a-leaf--bba39ef6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[4 June 2026](2026-06-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Identifying a ladybug pupa on a leaf ]]( claude--Identifying a ladybug pupa on a leaf--bba39ef6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Identifying a ladybug pupa on a leaf ]]( claude--Identifying a ladybug pupa on a leaf--bba39ef6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
