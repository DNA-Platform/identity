import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--managing-screen-time-on-child-apple-accounts--06c70abc/.cover.tsx';
import TheSynopsis from './claude--managing-screen-time-on-child-apple-accounts--06c70abc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Managing screen time on child Apple accounts ]]( claude--Managing screen time on child Apple accounts--06c70abc )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Managing screen time on child Apple accounts ]]( claude--Managing screen time on child Apple accounts--06c70abc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
