import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--managing-screen-time-on-child-apple-accounts--06c70abc/.cover.tsx';
import TheSynopsis from '../.conversations/claude--managing-screen-time-on-child-apple-accounts--06c70abc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Managing screen time on child Apple accounts ]]( claude--Managing screen time on child Apple accounts--06c70abc )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 January 2026: <Means>$[[ Managing screen time on child Apple accounts ]]( claude--Managing screen time on child Apple accounts--06c70abc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
