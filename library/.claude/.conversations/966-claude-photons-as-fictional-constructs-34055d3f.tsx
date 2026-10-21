import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--photons-as-fictional-constructs--34055d3f/.cover.tsx';
import TheSynopsis from './claude--photons-as-fictional-constructs--34055d3f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[2 October 2026](2026-10-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Photons as fictional constructs ]]( claude--Photons as fictional constructs--34055d3f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Photons as fictional constructs ]]( claude--Photons as fictional constructs--34055d3f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
