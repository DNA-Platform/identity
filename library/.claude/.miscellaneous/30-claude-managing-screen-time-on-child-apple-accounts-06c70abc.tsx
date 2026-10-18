import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--managing-screen-time-on-child-apple-accounts--06c70abc/.cover.tsx';
import TheSynopsis from '../.conversations/claude--managing-screen-time-on-child-apple-accounts--06c70abc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Managing screen time on child Apple accounts ]]( claude--Managing screen time on child Apple accounts--06c70abc )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 January 2026: <Means>$[[ Managing screen time on child Apple accounts ]]( claude--Managing screen time on child Apple accounts--06c70abc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
