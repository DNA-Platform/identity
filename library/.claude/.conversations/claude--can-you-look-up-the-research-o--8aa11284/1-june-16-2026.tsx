import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Title>[[ 16 June 2026 ]]</Title>
        <Message
            at="2026-06-16T08:23:47.694872Z"
        >
            <Origin>019ecf87-e3b9-77a1-9974-4ea808d81b09</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you look up the research on semantic primes? I heard that they were 65 of them. And can you put them in
                an editable artifacts where you describe the research that summarize them? Include the categories that they
                were presented in too
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T08:25:22.490997Z"
        >
            <Origin>019ecf87-e3bc-7cf0-8256-ce1e5db70edd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll look up the current research on this. Semantic primes come from a specific linguistic theory, and the
                exact inventory has changed over the years, so let me verify the count and the categories rather than work
                from memory.
            </Paragraph>
            <Action>Searched the web for “semantic primes Natural Semantic Metalanguage 65 list Goddard Wierzbicka”</Action>
            <Paragraph>
                Confirmed at 65. Now let me get the official categorized inventory — the NSM approach publishes a canonical
                chart, which is the authoritative version.
            </Paragraph>
            <Action>
                Fetched
                https://nsm-approach.net/wp-content/uploads/2022/05/Chart-of-NSM-Semantic-Primes_English_v20_May-2022.pdf
            </Action>
            <Paragraph>
                Confirmed: 65 semantic primes, and I pulled the canonical inventory from the official NSM chart (v20, May
                2022) so the list and frames are accurate rather than reconstructed from memory.
            </Paragraph>
            <Paragraph>
                A quick orientation before the artifact: semantic primes come from the <Word>
                    <Bold />
                    Natural Semantic Metalanguage (NSM)
                </Word>, a theory developed by Anna Wierzbicka and Cliff Goddard over more than five decades. The core claim
                is that every human language shares a small set of indefinable, universal word-meanings — primes — that can
                be translated literally into any language and cannot be defined using anything simpler. After more than four
                decades of cross-linguistic research covering roughly thirty languages, the list reached 65 elements,
                grouped into "onto-syntactic" categories. The 65 figure is current; notably, DON'T WANT was restored to the
                inventory as a separate prime in Goddard &amp; Wierzbicka (2014), having earlier been folded into WANT + NOT
                — which is part of why the count settled at 65.
            </Paragraph>
            <Paragraph>Here's the editable reference document.</Paragraph>
            <Action>Created /mnt/user-data/outputs/semantic-primes-NSM.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Done. The document covers the theory (NSM, Wierzbicka &amp; Goddard), how the inventory was built and grew
                to 65, all 65 primes organized into the canonical 16 onto-syntactic categories, and notes on how to read the
                list (allolexes, the BE/BE disambiguation, canonical frames). It's plain markdown, so fully editable.
            </Paragraph>
            <Paragraph>
                One thing worth flagging given your own work: the category counts I gave sum exactly to 65, and I drew the
                prime list directly from the official v20 chart rather than reconstructing it — but the <Word>
                    <Emphasis />
                    grouping into 16 categories
                </Word> follows the standard published presentation, not a fresh derivation, so if you want I can
                cross-check any individual category against a second primary source before you build on it.
            </Paragraph>
        </Message>
    </Chapter>
);
