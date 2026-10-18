import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.dna-patternity/.cover.tsx';
import TheSynopsis from './.dna-patternity/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[18 August 2025](2025-08-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ DNA Patternity ]]( claude--DNA Patternity )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ DNA Patternity ]]( claude--DNA Patternity )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
