import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ok-i-need-you-to-help-me-organize--017260bb/.cover.tsx';
import TheSynopsis from './claude--ok-i-need-you-to-help-me-organize--017260bb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ OK, I need you to help me organize ]]( claude--OK, I need you to help me organize--017260bb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 1 exchange: <Means>$[[ OK, I need you to help me organize ]]( claude--OK, I need you to help me organize--017260bb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
