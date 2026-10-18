import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--watermarking-images-and-nfts--8d6e372c/.cover.tsx';
import TheSynopsis from './claude--watermarking-images-and-nfts--8d6e372c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2024</Part>
        <Dated>
            <Date>[29 October 2024](2024-10-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Watermarking Images and NFTs ]]( claude--Watermarking Images and NFTs--8d6e372c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Watermarking Images and NFTs ]]( claude--Watermarking Images and NFTs--8d6e372c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
