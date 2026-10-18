import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ package ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “package.json”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".json"
        >
            ![[ file.json ]]
        </Append>
    </Chapter>
);
