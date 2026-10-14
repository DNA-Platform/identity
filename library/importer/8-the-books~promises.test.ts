import { describe, expect, it } from 'vitest';
import { orderedTableText } from './8-the-books~books.ts';

const section = (heading: string, name: string): string => [
    '        <Section>',
    `            <Heading>${heading}</Heading>`,
    '            <Paragraph>',
    `                <Content>$[[ ./${name} ]]</Content>`,
    '            </Paragraph>',
    '        </Section>',
    '',
].join('\n');
const table = (...sections: string[]): string => `    <Chapter>\n${sections.join('')}    </Chapter>\n`;

describe('the books', () => {
    it("keeps a register's month sections newest first, whatever order they were written in, the rest in place", () => {
        const written = table(
            section('June 2026', 'Semantic Primes'),
            section('May 2026', 'Converting shared conversation to document'),
            section('July 2026', 'Inexplicable Phenomena'),
            section('Where this book stands', 'Our Conversations'),
        );
        expect(orderedTableText(written)).toBe(table(
            section('July 2026', 'Inexplicable Phenomena'),
            section('June 2026', 'Semantic Primes'),
            section('May 2026', 'Converting shared conversation to document'),
            section('Where this book stands', 'Our Conversations'),
        ));
        expect(orderedTableText(orderedTableText(written))).toBe(orderedTableText(written));
    });
});
