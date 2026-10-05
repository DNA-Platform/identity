import { Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Shelves ]]</Title>
        <Section>
            <Heading>What stands here</Heading>
            <Paragraph>
                Three books stand under this one. <Means>$[[ Dougs Story ]]</Means> is mine, and the one book here
                that is by its own subject. <Means>$[[ Dougs Design ]]</Means> is where the design of this library
                is kept. <Means>$[[ Dougs Reference Manual ]]</Means> holds the parts I build this library with,
                each beside the chapter that says what it is.
            </Paragraph>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </Paragraph>
        </Section>
    </Chapter>
);
