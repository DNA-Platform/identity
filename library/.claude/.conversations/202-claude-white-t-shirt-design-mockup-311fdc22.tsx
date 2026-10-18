import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--white-t-shirt-design-mockup--311fdc22/.cover.tsx';
import TheSynopsis from './claude--white-t-shirt-design-mockup--311fdc22/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[27 October 2025](2025-10-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ White t-shirt design mockup ]]( claude--White t-shirt design mockup--311fdc22 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ White t-shirt design mockup ]]( claude--White t-shirt design mockup--311fdc22 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
