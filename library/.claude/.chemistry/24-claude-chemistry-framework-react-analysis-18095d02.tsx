import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-framework-react-analysis--18095d02/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-framework-react-analysis--18095d02/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry Framework React Analysis ]]( claude--Chemistry Framework React Analysis--18095d02 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 September 2025: <Means>$[[ Chemistry Framework React Analysis ]]( claude--Chemistry Framework React Analysis--18095d02 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
