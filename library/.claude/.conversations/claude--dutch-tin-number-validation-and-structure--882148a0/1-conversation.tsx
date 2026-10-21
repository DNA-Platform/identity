import { Append, Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[23 February 2026](2026-02-23)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-23T11:43:28.002151Z"
        >
            <Origin>019c8a4f-be7d-7248-90e2-301eeb639aae</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you rigorously look up the constraints for a dutch TIN number and then generate 10-15 random ones and
                for each, prove why it satisfies the constraints? And then tell me if all ID types have this sort of
                structure. It's interesting
            </Paragraph>
        </Message>
        <Message
            at="2026-02-23T11:44:38.664389Z"
        >
            <Origin>019c8a4f-be7d-7248-90e2-301f7915f7e2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me look up the exact constraints for Dutch TIN numbers.</Paragraph>
            <Action>Searched the web for “Dutch TIN BSN number validation rules constraints”</Action>
            <Action>Searched the web for “BSN elfproef 11-check algorithm exact formula”</Action>
            <Paragraph>
                Now I have the full picture. Let me write a script to generate valid BSNs with full proofs.
            </Paragraph>
            <Action>
                Ran cat &lt;&lt; 'EOF' &gt; /home/claude/bsn_gen.py import random def validate_bsn(digits): """Validate BSN
                using elfproef (11-proof) with weights &#91;9,8,7,6,5,4,3,2,-1&#93;""" weights = &#91;9, 8, 7, 6, 5, 4, 3,
                2, -1&#93; total = sum(d * w for d, w in zip(digits, weights)) return total % 11 == 0 and total &gt; 0 def
                generate_bsn(): """Generate a random valid BSN""" while True: # Generate first 8 digits (first digit can be
                0, but not both first two) first8 = &#91;random.randint(0, 9) for _ in range(8)&#93; # Calculate what N9
                needs to be # We need: (9*N1 + 8*N2 + 7*N3 + 6*N4 + 5*N5 + 4*N6 + 3*N7 + 2*N8 - N9) % 11 == 0 # So:
                partial_sum - N9 ≡ 0 (mod 11) # N9 ≡ partial_sum (mod 11) partial = sum(d * w for d, w in zip(first8,
                &#91;9, 8, 7, 6, 5, 4, 3, 2&#93;)) n9 = partial % 11 # N9 must be a single digit (0-9), so if remainder is
                10, skip if n9 &gt; 9: continue digits = first8 + &#91;n9&#93; # Check: no more than one leading zero if
                digits&#91;0&#93; == 0 and digits&#91;1&#93; == 0: continue # Check sum &gt; 0 (almost always true unless
                all zeros) total = sum(d * w for d, w in zip(digits, &#91;9, 8, 7, 6, 5, 4, 3, 2, -1&#93;)) if total &lt;=
                0: continue return digits print("=" * 80) print("DUTCH BSN (Burgerservicenummer) — CONSTRAINT SUMMARY")
                print("=" * 80) print() print("The BSN uses the 'elfproef' (11-proof), a check digit algorithm.") print()
                print("CONSTRAINTS:") print(" 1. Exactly 9 digits: N1 N2 N3 N4 N5 N6 N7 N8 N9") print(" 2. At most one
                leading zero (cannot start with '00')") print(" 3. Weighted sum using weights &#91;9, 8, 7, 6, 5, 4, 3, 2,
                -1&#93;:") print(" S = 9×N1 + 8×N2 + 7×N3 + 6×N4 + 5×N5 + 4×N6 + 3×N7 + 2×N8 + (-1)×N9") print(" 4. S must
                be divisible by 11 (S mod 11 = 0)") print(" 5. S must be &gt; 0") print() print("NOTE: The last weight is -1
                (not +1). This is what distinguishes the BSN") print("variant from the standard elfproef used for old Dutch
                bank account numbers.") print() print("=" * 80) print("GENERATING 12 RANDOM VALID BSNs WITH PROOF")
                print("=" * 80) for i in range(12): digits = generate_bsn() weights = &#91;9, 8, 7, 6, 5, 4, 3, 2, -1&#93;
                products = &#91;d * w for d, w in zip(digits, weights)&#93; total = sum(products) bsn_str = ''.join(str(d)
                for d in digits) print(f"\n&#123;'─' * 70&#125;") print(f" BSN #&#123;i+1&#125;: &#123;bsn_str&#125;")
                print(f"&#123;'─' * 70&#125;") print(f" Digits: &#123;' '.join(f'N&#123;j+1&#125;=&#123;d&#125;' for j, d in
                enumerate(digits))&#125;") print(f" Weights: &#123;weights&#125;") print() # Show the multiplication terms =
                &#91;&#93; for j, (d, w) in enumerate(zip(digits, weights)): if w == -1: terms.append(f"(-1)×&#123;d&#125;")
                else: terms.append(f"&#123;w&#125;×&#123;d&#125;") print(f" S = &#123;' + '.join(terms)&#125;") prod_strs =
                &#91;&#93; for p in products: prod_strs.append(str(p)) print(f" = &#123;' + '.join(prod_strs)&#125;")
                print(f" = &#123;total&#125;") print() print(f" Check: &#123;total&#125; ÷ 11 = &#123;total // 11&#125;
                (remainder &#123;total % 11&#125;)") print(f" ✓ Divisible by 11: &#123;total % 11 == 0&#125;") print(f" ✓
                Sum &gt; 0: &#123;total &gt; 0&#125;") print(f" ✓ 9 digits: &#123;len(digits) == 9&#125;") print(f" ✓ ≤1
                leading zero: &#123;not (digits&#91;0&#93; == 0 and digits&#91;1&#93; == 0)&#125;") print(f" → VALID BSN")
                EOF python3 /home/claude/bsn_gen.py
            </Action>
            <Paragraph>
                There you go — 12 randomly generated, provably valid Dutch BSNs. Here's the summary and the broader question
                you asked:
            </Paragraph>
            <Heading>The Dutch BSN Elfproef</Heading>
            <Paragraph>The algorithm is elegant. For a 9-digit number ABCDEFGHI, you compute:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    S = 9A + 8B + 7C + 6D + 5E + 4F + 3G + 2H − 1·I
                </Word>
            </Paragraph>
            <Paragraph>
                and S must be divisible by 11, positive, with at most one leading zero. That's it. The key quirk is that
                last weight being <Word>
                    <Bold />
                    −1
                </Word> instead of +1 (which is what old Dutch bank account numbers used). This means the check digit N9
                isn't simply "the remainder" — it's determined by N9 ≡ partial_sum (mod 11), and if that remainder equals
                10, no valid single digit exists, so that combination of first-8-digits is simply impossible. This means
                roughly 1 in 11 arbitrary 8-digit prefixes can't produce a valid BSN, which is a nice density property.
            </Paragraph>
            <Heading>Do All ID Numbers Have This Kind of Structure?</Heading>
            <Paragraph>
                Short answer: almost all of them do, but the specific mechanisms vary quite a bit. The general pattern is
                <Word>
                    <Bold />
                    "structured digits + check digit(s) computed via some modular arithmetic."
                </Word> Some examples:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Same family (weighted sum mod prime):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        US Social Security Numbers
                    </Word> are the notable <Word>
                        <Emphasis />
                        exception
                    </Word> — they were purely sequential/regional with no check digit at all until randomization in 2011,
                    and still have no algorithmic validity check. Any 9-digit number in the right format "looks" valid.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ISBN-10
                    </Word> uses the exact same mod-11 weighted sum idea (weights 10,9,8...1), with 'X' representing 10 when
                    needed.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ISBN-13 / EAN
                    </Word> switched to mod-10 with alternating weights of 1 and 3.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Luhn algorithm family (mod 10):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Credit card numbers
                    </Word> (Visa, Mastercard, etc.) all use the Luhn algorithm — double every other digit, sum the results,
                    must be divisible by 10. Much simpler than the elfproef but same spirit.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        IMEI numbers
                    </Word> (cell phone identifiers) also use Luhn.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Canadian SINs
                    </Word> (Social Insurance Numbers) use Luhn.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    More exotic structures:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Brazilian CPF
                    </Word> uses two cascading check digits, each computed from the previous digits with different weight
                    sequences (mod 11).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Chinese national ID
                    </Word> is 18 digits where the last is a check digit computed via mod 11 with weights derived from
                    powers of 2, and 'X' can appear for remainder 2.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Estonian, Finnish, Lithuanian IDs
                    </Word> encode birth dates directly into the number, then append a check digit.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        UK National Insurance Numbers
                    </Word> have a letter-number-letter format with specific letter exclusions but no mathematical check
                    digit — validation is purely structural/syntactic.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The general taxonomy is roughly:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Check-digit IDs
                    </Word> (most countries): Mathematical validation catches typos. Dutch BSN, ISBN, credit cards,
                    Brazilian CPF, etc.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Structurally-constrained IDs
                    </Word> (some countries): Format rules and embedded semantics (birth date, region codes) but no check
                    digit. UK NINO, old US SSN.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Hybrid
                    </Word> (increasingly common): Embedded information <Word>
                        <Emphasis />
                        plus
                    </Word> check digits. Chinese national ID, many European national IDs.
                </Line>
            </Paragraph>
            <Paragraph>
                The trend globally is toward check-digit systems because they're so effective at catching the two most
                common human errors: transposing two adjacent digits and mistyping a single digit. The mod-11 approach (like
                the elfproef) catches <Word>
                    <Emphasis />
                    all
                </Word> single-digit errors and <Word>
                    <Emphasis />
                    all
                </Word> adjacent transpositions — which is mathematically provable and is exactly why it was designed this
                way. Mod-10 (Luhn) catches all single-digit errors but misses some transpositions involving 0↔5, which is
                why higher-stakes identifiers tend to prefer mod-11.
            </Paragraph>
            <Paragraph>
                It's a genuinely beautiful corner of applied number theory — simple enough to compute by hand, powerful
                enough to make entire classes of errors impossible.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-23T11:46:30.482917Z"
        >
            <Origin>019c8a52-86d5-770d-b21d-68af3e3139cc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So each of these satisfies all the constraints? There are no other data constraints besides arithmetical
                ones? Nothing about the number encodes anything?&gt;
            </Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-02-23T11:46:55.173699Z"
        >
            <Origin>019c8a52-86d5-770d-b21d-68b0f776d497</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good question — let me check whether the BSN encodes any semantic information beyond the pure arithmetic.
            </Paragraph>
            <Action>Searched the web for “BSN burgerservicenummer encode birth date gender region meaning digits”</Action>
            <Paragraph>Yes, each of those 12 passes all constraints — the arithmetic is verified line by line.</Paragraph>
            <Paragraph>
                And to your second question: no, the BSN encodes <Word>
                    <Bold />
                    nothing
                </Word>. It's deliberately opaque. The first 8 digits are generated randomly, the 9th is determined by the
                elfproef, and that's it. No birth date, no gender, no region, no municipality, no sequence information.
            </Paragraph>
            <Paragraph>
                This is actually a deliberate design choice that represents a philosophical shift. The BSN's predecessor,
                the <Word>
                    <Bold />
                    SoFi number
                </Word> (Sofinummer), <Word>
                    <Emphasis />
                    did
                </Word> encode personal information — birth date and gender were embedded in the digits. When the
                Netherlands replaced the SoFi with the BSN in 2007, they intentionally stripped out all semantic content and
                made it a pure random identifier + check digit. The IRI documentation explicitly notes that their BSN
                generator function takes no parameters "because there is no personal information used to generate the BSN,"
                whereas their SoFi generator requires PII inputs.
            </Paragraph>
            <Paragraph>
                This is the privacy-by-design approach: the number is a meaningless pointer into a database, not a
                compressed representation of who you are. Knowing someone's BSN tells you literally nothing about them — you
                can't reverse-engineer their age, location, or anything else from the digits alone.
            </Paragraph>
            <Paragraph>
                It's a surprisingly clean design compared to many national ID systems. The Chinese national ID, for example,
                embeds your province, city, district, birth date, gender, <Word>
                    <Emphasis />
                    and
                </Word> a check digit all in 18 digits — which means the number itself is a privacy leak. The BSN avoids
                this entirely. The only constraint on the number space is mathematical (the elfproef), which exists purely
                for error detection, not information encoding.
            </Paragraph>
        </Message>
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
    </Chapter>
);
