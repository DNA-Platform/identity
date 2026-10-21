import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--integrating-viewbox-and-centering-svg-content--1a1de1ef/.cover.tsx';
import TheSynopsis from './claude--integrating-viewbox-and-centering-svg-content--1a1de1ef/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[25 March 2025](2025-03-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Integrating ViewBox and Centering SVG Content ]]( claude--Integrating ViewBox and Centering SVG Content--1a1de1ef )</Title>
        <Paragraph>
            <Caption />
            A conversation, 68 exchanges: <Means>$[[ Integrating ViewBox and Centering SVG Content ]]( claude--Integrating ViewBox and Centering SVG Content--1a1de1ef )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
