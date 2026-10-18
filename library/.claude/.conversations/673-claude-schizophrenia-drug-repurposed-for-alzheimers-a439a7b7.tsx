import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--schizophrenia-drug-repurposed-for-alzheimers--a439a7b7/.cover.tsx';
import TheSynopsis from './claude--schizophrenia-drug-repurposed-for-alzheimers--a439a7b7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[21 November 2024](2024-11-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Schizophrenia Drug Repurposed for Alzheimer's ]]( claude--Schizophrenia Drug Repurposed for Alzheimer's--a439a7b7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Schizophrenia Drug Repurposed for Alzheimer's ]]( claude--Schizophrenia Drug Repurposed for Alzheimer's--a439a7b7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
