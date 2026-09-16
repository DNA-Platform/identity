import { $, $Block, $check, select } from '@dna-platform/chemistry';
import { Specification } from '@dna-platform/public';
import { $Writing } from '@dna-platform/public';
import { $Infobox$, $Infobox, $TypeOfInfobox, InfoboxSpecification, $InfoboxFormat } from '@dna-platform/public/encyclopedia';

// ─── WHAT A CONVERSATION SAYS ABOUT ITSELF ────────────────────────────────────────────────────────
//
// Doug, 2026-09-16: "if we store this, it needs to be a component in our claude book that can be
// reused that allows certain metadata to be associated with a conversation right? WE need to think
// in components."
//
// AND A COMPONENT IS A WRAPPER THAT ASSOCIATES A FORMATTER WITH A SELECTION OF PARTS — his
// definition, given the same day, correcting the first draft of this file. That draft took its
// metadata as PROPS: `<About held="..." length="..." model="..." />`. Doug: "Composition. That
// affords no dynamism." He is right and the reason is worth keeping — a component built from props
// can only ever draw what its author anticipated, so a conversation wanting a portrait, a second
// cast line, a hatnote or a mention has nowhere to put it and the component must grow a prop each
// time. Written as COMPOSITION it holds whatever a person writes, and the formatter styles it.
//
// $Infobox is the pattern and it was read before this was written the wrong way: it takes no props,
// its bond concats $InfoboxFormat onto its block, and everything it LOOKS like lives in the format.
// This is that, one step more particular.
//
// AND IT IS NOT A COPY OF THE CHAT. Doug: "We aren't copying this exactly. We can put metadata about
// the conversation." Claude's own app says "Opus 5 High" in a footer and names nobody; a library
// says who, when, how long and under what, in the box a reader looks in first.
//
// `$About` IS A PROXY NAME, flagged for Doug.
export interface $About$ extends $Infobox$ { }

export class $About extends $Infobox implements $About$ {
    $About(block: $Block) {
        super.$Infobox(this.addType(block, $TypeOfAbout).concat($check(aboutStyle, '!')));
    }
}

export class $TypeOfAbout extends $TypeOfInfobox {
    protected override specification: Specification<$Writing> = new AboutSpecification();
}

export class AboutSpecification extends InfoboxSpecification {
}

// THE FORMATTER, AND IT STYLES THE THINGS THIS BOX HAS THAT AN ARTICLE'S INFOBOX DOES NOT.
// Every value is read off the theme, never named here, so this box is drawn in whichever dress the
// page above it is wearing — which is what lets one conversation stand in a wiki page and in a
// transcript without the box knowing which.
export class $AboutFormat extends $InfoboxFormat {
    // A CONVERSATION'S LABELS ARE LONGER THAN A PERSON'S. An article's infobox sets its label column
    // at 5.4em, which fits "Born" and "Died" and cuts "Filed under" in half.
    @select('> .pd-line::before') label_width = '7.5em';

    // THE CAST READS AS A LIST, NOT AS A SENTENCE. Several participants stand in one line, and
    // without this they run together with no space between two anchors.
    @select('> .pd-line .pd-meaning') said_display = 'inline-block';
    said_marginRight = '0.4em';

    // AND A MENTION IN HERE IS A FACT, NOT PROSE. The names in this box are the conversation's cast
    // and its subject; they are read at a glance rather than in a sentence, so they do not wrap
    // mid-name the way a link in a paragraph may.
    said_whiteSpace = 'nowrap';
}

export const About = $($About);
export const TypeOfAbout = $($TypeOfAbout);
export const AboutFormat = $($AboutFormat);
const aboutStyle = AboutFormat;
