import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--masonic-lapel-pin-identification--0d0bf232/.cover.tsx';
import TheSynopsis from './claude--masonic-lapel-pin-identification--0d0bf232/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[23 February 2026](2026-02-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Masonic lapel pin identification ]]( claude--Masonic lapel pin identification--0d0bf232 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Masonic lapel pin identification ]]( claude--Masonic lapel pin identification--0d0bf232 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
