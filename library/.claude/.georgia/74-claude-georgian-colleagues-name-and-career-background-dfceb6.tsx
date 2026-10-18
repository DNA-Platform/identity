import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgian-colleagues-name-and-career-background--dfceb666/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgian-colleagues-name-and-career-background--dfceb666/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian colleague's name and career background ]]( claude--Georgian colleague's name and career background--dfceb666 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 July 2026: <Means>$[[ Georgian colleague's name and career background ]]( claude--Georgian colleague's name and career background--dfceb666 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
