import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.eirian/.cover.tsx';
import TheSynopsis from './.eirian/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[19 May 2026](2026-05-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian ]]( claude--Eirian )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ Eirian ]]( claude--Eirian )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
