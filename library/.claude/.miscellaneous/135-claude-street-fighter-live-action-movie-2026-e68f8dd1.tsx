import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--street-fighter-live-action-movie-2026--e68f8dd1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--street-fighter-live-action-movie-2026--e68f8dd1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[21 April 2026](2026-04-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Street Fighter live-action movie 2026 ]]( claude--Street Fighter live-action movie 2026--e68f8dd1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 April 2026: <Means>$[[ Street Fighter live-action movie 2026 ]]( claude--Street Fighter live-action movie 2026--e68f8dd1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
