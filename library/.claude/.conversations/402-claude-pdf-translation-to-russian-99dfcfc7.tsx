import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--pdf-translation-to-russian--99dfcfc7/.cover.tsx';
import TheSynopsis from './claude--pdf-translation-to-russian--99dfcfc7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ PDF translation to Russian ]]( claude--PDF translation to Russian--99dfcfc7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ PDF translation to Russian ]]( claude--PDF translation to Russian--99dfcfc7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
