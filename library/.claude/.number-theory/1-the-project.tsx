import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Project ]]</Title>
        <Paragraph>
            <Brief />
            An exploration into a framework that helps give meaning to the unsolved prime number theorems while
            simultaneously asking "what is the semantic commitment we are making by admitting an unprovable universal
            quantification that leads to w-inconsistency into PA, Q and related formalisms as an axiom?"
        </Paragraph>
        <Section>
            <Heading>Its instructions</Heading>
            <Paragraph>
                No instructions were set on this project.
            </Paragraph>
        </Section>
    </Chapter>
);
