import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--pdf-translation-to-russian--99dfcfc7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--pdf-translation-to-russian--99dfcfc7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ PDF translation to Russian ]]( claude--PDF translation to Russian--99dfcfc7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 February 2026: <Means>$[[ PDF translation to Russian ]]( claude--PDF translation to Russian--99dfcfc7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
