import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/.cover.tsx';
import TheSynopsis from '../.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Category theory and type theory foundations ]]( claude--Category theory and type theory foundations--672c6bed )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 February 2026: <Means>$[[ Category theory and type theory foundations ]]( claude--Category theory and type theory foundations--672c6bed )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
