import { Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Shelves ]]</Title>
        <Section>
            <Heading>What stands here</Heading>
            <Paragraph>
                Three books stand under this one. <Means>$[[ Dougs Story ]]</Means> is mine, and the one book here
                that is by its own subject. It is the place to begin from, and it begins
                with <Means>$[[ starting over ]]( Dougs Story / Starting Over )</Means>. <Means>$[[ Dougs Design ]]</Means> is where the design of this library
                is kept. <Means>$[[ Dougs Reference Manual ]]</Means> holds the parts I build this library with,
                each beside the chapter that says what it is.
            </Paragraph>
        </Section>
    </Chapter>
);
