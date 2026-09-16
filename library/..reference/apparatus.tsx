import { ReactNode } from 'react';
import { $, $Block } from '@dna-platform/chemistry';
import { Description, Heading, Paragraph, Ref, Section, book as bookMention, $Writing } from '@dna-platform/public';
import { Header, Menu, Option, Search, Summary, Toolbar, $Header, $Toolbar } from '@dna-platform/public/application';
import { Tiles } from './plate';

const Book = $(bookMention);

// ─── THE APPARATUS, WHICH IS WRITING ──────────────────────────────────────────────────────────────
//
// Doug, 2026-09-15: "I expect the things to read like a document. .book is for reusability. Aren't
// you breaking the whole compositional model of the page? How does writing even let you do that? I
// need to tell you to stay closed under writing in a library closed under books?"
//
// He is right and this is the repair. What stood here were two FUNCTIONS returning JSX, spliced into
// a cover as `{chrome()}` and `{tabs(…)}` — so a cover was no longer composed of writing, it was
// composed of writing plus two holes somebody poured markup into. Nothing about them could be
// inherited, nothing about them was in the block, and a specification could not see them.
//
// A KIND OF HEADER AND A KIND OF TOOLBAR. Both already exist in the framework as $Section subclasses
// whose bond concats a format onto the block, which is exactly the seam a kind that supplies its own
// content wants: the writing is built IN THE BOND and concatenated, so it is in the block by the time
// anything reads it, and `$Title` builds its own heading the same way. A cover now writes `<Chrome/>`
// and `<Tabs/>` and is writing all the way down.
export class $Chrome extends $Header {
    $Chrome(block: $Block) {
        // A KIND WRITTEN WITH NO CHILDREN IS HANDED NO BLOCK, so one is made to hold what it supplies.
        super.$Header((block ?? new $Block()).concat(
            $<$Writing>(<Heading>Doug&rsquo;s Library</Heading>),
            $<$Writing>(
                <Menu>
                    <Summary><Description>Main menu</Description></Summary>
                    <Heading>The library</Heading>
                    <Option><Book>Doug&rsquo;s Library</Book></Option>
                    <Option><Book>MY Library Log</Book></Option>
                    <Option><Book>Claude &amp; Our Projects</Book></Option>
                    <Option><Book>Semantic Reference Theory</Book></Option>
                    <Option><Book>Semantics of Types &amp; More</Book></Option>
                </Menu>
            ),
            $<$Writing>(
                <Section>
                    <Heading>a personal library, kept in public</Heading>
                    <Tiles seed={7} tone="mine" still width="34" height="34">Doug&rsquo;s Library</Tiles>
                    <Paragraph><Book>Doug&rsquo;s Library</Book></Paragraph>
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

// THE TABS CARRY THE RELATIONS, AND NOTHING SITS UNDER THE TITLE — Doug, 2026-09-15: "Why not have
// author, subject in those links on the right and not have them at all under the article name so it
// looks more like standard wikipedia… This is about solving problems of information organization."
//
// A labelled byline stood under the title for a while and it was the wrong answer to a real question.
// On a Wikipedia page the strip under the title is NAVIGATION and only navigation: which namespace
// you are in on the left, what you may do with the page on the right. Nothing about the article's
// identity is spelled out there — that belongs in the infobox, where it is read as a fact rather than
// skimmed as a label. Two places, two jobs, and the reason a page can be scanned at all.
//
// So the left tab is the page you are standing on, named, drawn as the tab you are already on; the
// right group carries the two relations that make this a library rather than a shelf. NEITHER IS
// WRITTEN AS AN ADDRESS: a mention says one thing and names another, which the framework already
// does — it SAYS "Subject" and NAMES the book, and the shelf turns that name into its page.
// `$here`, `$about` and `$by` are PROXY NAMES, flagged for Doug.
export class $Tabs extends $Toolbar {
    $here = '';
    $about = '';
    $by = '';

    // AND THERE IS NO TAB FOR THIS PAGE, because the title already is one — Doug, 2026-09-15: "You
    // have the title of the Page. If something would be the self link, it's that. Is a title not a
    // self reference? If you were going to say 'what does it mean' it would be the name of the page.
    // And if someone said — what might be a good proxy for a location in the library to represent
    // that, it would be 'Right here', whereas most meaning refers to somewhere else."
    //
    // That is the rule and it is not a style preference. A title MEANS the thing it titles, and the
    // thing it titles is this page: its address is *here*. Every other reference on the page points
    // somewhere that is not here. A tab naming the page and addressing `#` was the same reference
    // said twice — once where it belongs and once as furniture — so it is gone, and the row carries
    // only what refers elsewhere.
    $Tabs(block: $Block) {
        super.$Toolbar((block ?? new $Block()).concat(
            $<$Writing>(<Heading>{this.$here}</Heading>),
            $<$Writing>(
                <Paragraph>
                    <Book>[Subject]({this.$about})</Book>
                    <Book>[Author]({this.$by})</Book>
                    <Ref>[Source](https://github.com/DNA-Platform/inexplicable-phenomena)</Ref>
                </Paragraph>
            ),
        ));
    }
}

export const Chrome = $($Chrome);
export const Tabs = $($Tabs);

