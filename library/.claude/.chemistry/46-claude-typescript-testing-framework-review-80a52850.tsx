import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--typescript-testing-framework-review--80a52850/.cover.tsx';
import TheSynopsis from '../.conversations/claude--typescript-testing-framework-review--80a52850/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Typescript testing framework review ]]( claude--Typescript testing framework review--80a52850 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 October 2025: <Means>$[[ Typescript testing framework review ]]( claude--Typescript testing framework review--80a52850 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
