import { $Chapter, Heading, Ref, Section, TableOfContents, Title, chapter as Chapter } from '@dna-platform/public';
import { Option } from '@dna-platform/public/application';

export default class $Contents extends $Chapter {
    print() {
        return (
            <TableOfContents>
                <Title print={false}>Table of Contents</Title>
                <Section>
                    <Heading>Contents</Heading>
                    <Option><Ref>[Why a log and not a memoir](#why-a-log-and-not-a-memoir)</Ref></Option>
                    <Option><Chapter>{"Librarian's Log: Stardate 2026-09-15"}</Chapter></Option>
                    <Option><Ref>[Current location: Tbilisi](#current-location-tbilisi)</Ref></Option>
                    <Chapter print={false}>MY Library Log</Chapter>
                    <Chapter print={false}>A Life</Chapter>
                    <Chapter print={false}>Table of Contents</Chapter>
                    <Chapter print={false}>Lead</Chapter>
                </Section>
            </TableOfContents>
        );
    }
}
