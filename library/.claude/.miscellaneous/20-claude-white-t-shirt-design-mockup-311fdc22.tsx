import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--white-t-shirt-design-mockup--311fdc22/.cover.tsx';
import TheSynopsis from '../.conversations/claude--white-t-shirt-design-mockup--311fdc22/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ White t-shirt design mockup ]]( claude--White t-shirt design mockup--311fdc22 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 October 2025: <Means>$[[ White t-shirt design mockup ]]( claude--White t-shirt design mockup--311fdc22 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
