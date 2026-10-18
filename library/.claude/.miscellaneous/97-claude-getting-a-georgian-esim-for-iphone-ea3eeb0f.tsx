import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--getting-a-georgian-esim-for-iphone--ea3eeb0f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--getting-a-georgian-esim-for-iphone--ea3eeb0f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[27 February 2026](2026-02-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Getting a Georgian eSIM for iPhone ]]( claude--Getting a Georgian eSIM for iPhone--ea3eeb0f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 February 2026: <Means>$[[ Getting a Georgian eSIM for iPhone ]]( claude--Getting a Georgian eSIM for iPhone--ea3eeb0f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
