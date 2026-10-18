import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Seren: The Qualitative Structure of Conscious Experience ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Seren: The Qualitative Structure of Conscious Experience”, as it was
            uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
