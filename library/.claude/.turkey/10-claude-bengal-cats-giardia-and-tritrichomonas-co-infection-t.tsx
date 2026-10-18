import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--bengal-cats-giardia-and-tritrichomonas-co-infection-treatmen--62c5a076/.cover.tsx';
import TheSynopsis from '../.conversations/claude--bengal-cats-giardia-and-tritrichomonas-co-infection-treatmen--62c5a076/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bengal cat's giardia and tritrichomonas co-infection treatment ]]( claude--Bengal cat's giardia and tritrichomonas co-infection treatment--62c5a076 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 July 2026: <Means>$[[ Bengal cat's giardia and tritrichomonas co-infection treatment ]]( claude--Bengal cat's giardia and tritrichomonas co-infection treatment--62c5a076 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
