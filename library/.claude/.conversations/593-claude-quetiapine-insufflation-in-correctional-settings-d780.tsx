import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--quetiapine-insufflation-in-correctional-settings--d780635a/.cover.tsx';
import TheSynopsis from './claude--quetiapine-insufflation-in-correctional-settings--d780635a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[18 May 2026](2026-05-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Quetiapine insufflation in correctional settings ]]( claude--Quetiapine insufflation in correctional settings--d780635a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Quetiapine insufflation in correctional settings ]]( claude--Quetiapine insufflation in correctional settings--d780635a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
