import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--optimizing-extendscript-abstractions-for-illustrator--e5eb0991/.cover.tsx';
import TheSynopsis from './claude--optimizing-extendscript-abstractions-for-illustrator--e5eb0991/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2025</Part>
        <Dated>
            <Date>[11 February 2025](2025-02-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Optimizing ExtendScript Abstractions for Illustrator ]]( claude--Optimizing ExtendScript Abstractions for Illustrator--e5eb0991 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ Optimizing ExtendScript Abstractions for Illustrator ]]( claude--Optimizing ExtendScript Abstractions for Illustrator--e5eb0991 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
