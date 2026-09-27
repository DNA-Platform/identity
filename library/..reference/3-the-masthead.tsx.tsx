import { ReactNode } from 'react';
import { $, $Block } from '@dna-platform/chemistry';
import { Description, Heading, Paragraph, Ref, Reference, Section, book as bookMention, $Section, $Writing } from '@dna-platform/public';
import { Header, Search, Summary, Toolbar, $Header, $Menu, $Toolbar } from '@dna-platform/public/application';
import { Tiles } from './5-the-plate.tsx.tsx';

const Book = $(bookMention);

export class $Contents extends $Menu {
    $Contents(block: $Block) {
        super.$Menu(block);
    }

    override print(): ReactNode {
        return <>{super.print()}{this.book?.tableOfContents?.print()}</>;
    }
}

export const Contents = $($Contents);

export class $Chrome extends $Header {
    $Chrome(block: $Block) {
        super.$Header((block ?? new $Block()).concat(
            $<$Writing>(<Heading>Dougs Library</Heading>),
            $<$Writing>(
                <Contents>
                    <Summary><Description>Main menu</Description></Summary>
                </Contents>
            ),
            $<$Writing>(
                <Section>
                    <Reference>[[ Dougs Library / Everything I Keep ]]</Reference>
                    <Heading>The mark</Heading>
                    <Tiles seed={7} tone="mine" still width="34" height="34">Dougs Library</Tiles>
                </Section>
            ),
            $<$Writing>(
                <Section>
                    <Reference>[[ Dougs Library ]]</Reference>
                    <Heading>Dougs Library</Heading>
                    <Paragraph>a personal library, kept in public</Paragraph>
                </Section>
            ),
            $<$Writing>(<Search said="Search" where="/">Search this library</Search>),
            $<$Writing>(
                <Paragraph>
                    <Ref>[The repository](https://github.com/DNA-Platform/inexplicable-phenomena)</Ref>
                </Paragraph>
            ),
        ));
    }
}

export class $Tabs extends $Toolbar {
    $here = '';
    $about = '';
    $by = '';

    $Tabs(block: $Block) {
        super.$Toolbar((block ?? new $Block()).concat(
            $<$Writing>(<Heading>{this.$here}</Heading>),
            $<$Writing>(
                <Paragraph>
                    <Book>{this.$about}</Book>
                    <Book>{this.$by}</Book>
                    <Ref>[Source](https://github.com/DNA-Platform/inexplicable-phenomena)</Ref>
                </Paragraph>
            ),
        ));
    }
}

export const Chrome = $($Chrome);
export const Tabs = $($Tabs);

