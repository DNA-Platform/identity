import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--white-dot-on-penelopes-nose--9e92489f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--white-dot-on-penelopes-nose--9e92489f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ White dot on Penelope's nose ]]( claude--White dot on Penelope's nose--9e92489f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 February 2026: <Means>$[[ White dot on Penelope's nose ]]( claude--White dot on Penelope's nose--9e92489f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
