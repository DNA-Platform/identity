import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--pdf-translation-to-russian--99dfcfc7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--pdf-translation-to-russian--99dfcfc7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ PDF translation to Russian ]]( claude--PDF translation to Russian--99dfcfc7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 February 2026: <Means>$[[ PDF translation to Russian ]]( claude--PDF translation to Russian--99dfcfc7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
