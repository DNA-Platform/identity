import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--accessing-xmp-metadata-in-illustrator-extendscript--2ed8084d/.cover.tsx';
import TheSynopsis from './claude--accessing-xmp-metadata-in-illustrator-extendscript--2ed8084d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2025</Part>
        <Dated>
            <Date>[24 January 2025](2025-01-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Accessing XMP Metadata in Illustrator ExtendScript ]]( claude--Accessing XMP Metadata in Illustrator ExtendScript--2ed8084d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 106 exchanges: <Means>$[[ Accessing XMP Metadata in Illustrator ExtendScript ]]( claude--Accessing XMP Metadata in Illustrator ExtendScript--2ed8084d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
