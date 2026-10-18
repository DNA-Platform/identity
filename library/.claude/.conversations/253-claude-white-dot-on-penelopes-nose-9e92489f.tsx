import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--white-dot-on-penelopes-nose--9e92489f/.cover.tsx';
import TheSynopsis from './claude--white-dot-on-penelopes-nose--9e92489f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[16 February 2026](2026-02-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ White dot on Penelope's nose ]]( claude--White dot on Penelope's nose--9e92489f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ White dot on Penelope's nose ]]( claude--White dot on Penelope's nose--9e92489f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
