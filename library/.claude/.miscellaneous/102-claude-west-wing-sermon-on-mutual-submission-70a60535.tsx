import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--west-wing-sermon-on-mutual-submission--70a60535/.cover.tsx';
import TheSynopsis from '../.conversations/claude--west-wing-sermon-on-mutual-submission--70a60535/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ West Wing sermon on mutual submission ]]( claude--West Wing sermon on mutual submission--70a60535 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 February 2026: <Means>$[[ West Wing sermon on mutual submission ]]( claude--West Wing sermon on mutual submission--70a60535 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
