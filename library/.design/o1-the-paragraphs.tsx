import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Paragraphs ]]</Title>
        <Section>
            <Heading>What a paragraph may be</Heading>
            <Paragraph>
                Most of this book is ordinary paragraphs. Five kinds are not. One is a question I am asked. One is
                what I said, in my own words. One is a design I chose. One is a pain a person met using what was
                built. One is what I think solves it.
            </Paragraph>
            <Paragraph>
                A paragraph says which of these it is. So a page can show a question and its answer differently,
                and everything I said can be found. The questions and my answers are
                in <Means>$[[ What I Am Asked ]]( ./What I Am Asked )</Means>, the designs I chose are
                in <Means>$[[ The Designs I Am Going With ]]( ./The Designs I Am Going With )</Means>, and the
                pains and their solutions are in <Means>$[[ Driving the Build ]]( ./Driving the Build )</Means>.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
    </Chapter>
);
