import { Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Dated } from '../.manual/.book';

export default () => (
    <Chapter>
        <Dated>[2 October 2026](2026-10-02)</Dated>
        <Title>[[ Starting Over ]]</Title>
        <Section>
            <Heading>What this library is for</Heading>
            <Paragraph>
                This library is a home for the raw materials of IXP: my primary source, which is my conversations,
                including my conversations with Claude. It has to bring me a sense of pride, fit in, make me happy,
                and be an effective way to store, annotate and explore those materials.
            </Paragraph>
            <Paragraph>
                The conversations are not here yet. They wait on an importer, and
                on <Means>$[[ the designs ]]( Dougs Story / Choosing a Design )</Means> being built.
            </Paragraph>
        </Section>
        <Section>
            <Heading>From scratch</Heading>
            <Paragraph>
                I had a library before this one. I set it aside and started from scratch. It is kept, and I can
                refer to it if I need it.
            </Paragraph>
            <Paragraph>
                The new one began as four books. <Means>$[[ Dougs Library ]]</Means> is the catalogue, and
                everything I keep stands on <Means>$[[ its shelves ]]( Dougs Library / The Shelves )</Means>. This
                book is <Means>$[[ Dougs Story ]]</Means>. The design of the library is kept
                in <Means>$[[ Dougs Design ]]</Means>, and the parts I build the library with are
                in <Means>$[[ Dougs Reference Manual ]]</Means>, which also says
                how <Means>$[[ a library like this is begun ]]( Dougs Reference Manual / Initializing a Library )</Means>.
            </Paragraph>
        </Section>
    </Chapter>
);
