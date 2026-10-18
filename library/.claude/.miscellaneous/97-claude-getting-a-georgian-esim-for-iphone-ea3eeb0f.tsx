import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--getting-a-georgian-esim-for-iphone--ea3eeb0f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--getting-a-georgian-esim-for-iphone--ea3eeb0f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Getting a Georgian eSIM for iPhone ]]( claude--Getting a Georgian eSIM for iPhone--ea3eeb0f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 February 2026: <Means>$[[ Getting a Georgian eSIM for iPhone ]]( claude--Getting a Georgian eSIM for iPhone--ea3eeb0f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
