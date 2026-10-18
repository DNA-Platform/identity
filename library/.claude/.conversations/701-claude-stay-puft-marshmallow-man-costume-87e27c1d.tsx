import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--stay-puft-marshmallow-man-costume--87e27c1d/.cover.tsx';
import TheSynopsis from './claude--stay-puft-marshmallow-man-costume--87e27c1d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2024</Part>
        <Dated>
            <Date>[31 October 2024](2024-10-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Stay Puft Marshmallow Man Costume ]]( claude--Stay Puft Marshmallow Man Costume--87e27c1d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Stay Puft Marshmallow Man Costume ]]( claude--Stay Puft Marshmallow Man Costume--87e27c1d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
