import { Append, Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[25 March 2026](2026-03-25)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-03-25T07:28:06.770033Z"
        >
            <Origin>019d23e4-bfb8-7e33-bbf2-148a76b8b18e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude, refresh this conversation. we ned to add minor changes: " Claude, after these words "Wallpaper
                panels — map as a large wall piece. No repeat needed. Buyer orders by the linear foot.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Fabric yardage — map printed on a yard of fabric; buyer sews it into a pillow, tote, wall hanging, etc.
                </Line>
                <Line>
                    Cartographic patterns — street grids abstracted into repeating geometric ornament. The classic
                    Spoonflower format." add pictures
                </Line>
            </Paragraph>
            <Paragraph>
                and say about that investigation whre they found out thta increase of interest to this sphere "
            </Paragraph>
            <Paragraph>Claude, keep working on this editable artifact and add the last info I gave you</Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded “1774423636637_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1774423641175_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1774423647537_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1774423652393_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1774423656634_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-25T07:29:56.946190Z"
        >
            <Origin>019d23e4-bfb8-7b86-bb98-f726a76de10f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Ran ls /mnt/user-data/outputs/ 2&gt;/dev/null &amp;&amp; cat /mnt/user-data/outputs/*.html 2&gt;/dev/null |
                head -200
            </Action>
            <Action>Ran find /home/claude -name "*.html" 2&gt;/dev/null | head -5</Action>
            <Action>Ran ls /mnt/user-data/uploads/177442*.png 2&gt;/dev/null</Action>
            <Action>
                Ran for f in /mnt/user-data/uploads/177442*.png; do echo "=== $f ===" base64 "$f" | wc -c done
            </Action>
            <Action>
                Ran python3 -c " import base64 files = &#91; '/mnt/user-data/uploads/1774423636637_image.png',
                '/mnt/user-data/uploads/1774423641175_image.png', '/mnt/user-data/uploads/1774423647537_image.png',
                '/mnt/user-data/uploads/1774423652393_image.png', '/mnt/user-data/uploads/1774423656634_image.png', &#93;
                for i, f in enumerate(files): with open(f, 'rb') as fp: b64 = base64.b64encode(fp.read()).decode()
                print(f'IMG&#123;i+1&#125;=&#123;b64&#91;:20&#93;&#125;...') print('Done') "
            </Action>
            <Action>
                Ran python3 &lt;&lt; 'EOF' import base64 files = &#91; '/mnt/user-data/uploads/1774423636637_image.png',
                '/mnt/user-data/uploads/1774423641175_image.png', '/mnt/user-data/uploads/1774423647537_image.png',
                '/mnt/user-data/uploads/1774423652393_image.png', '/mnt/user-data/uploads/1774423656634_image.png', &#93;
                imgs = &#91;&#93; for f in files: with open(f, 'rb') as fp: data = fp.read() b64 =
                base64.b64encode(data).decode() imgs.append(b64) html = '''&lt;!DOCTYPE html&gt; &lt;html lang="en"&gt;
                &lt;head&gt; &lt;meta charset="UTF-8"&gt; &lt;meta name="viewport" content="width=device-width,
                initial-scale=1.0"&gt; &lt;title&gt;Spoonflower Brief — Doug&lt;/title&gt; &lt;style&gt; body &#123;
                font-family: Georgia, serif; max-width: 760px; margin: 40px auto; padding: 0 24px; color: #1a1a1a;
                background: #fafaf8; line-height: 1.7; &#125; h1 &#123; font-size: 1.5rem; font-weight: normal;
                letter-spacing: 0.04em; text-transform: uppercase; color: #555; border-bottom: 1px solid #ddd;
                padding-bottom: 10px; margin-bottom: 8px; &#125; h2 &#123; font-size: 1rem; font-weight: bold;
                text-transform: uppercase; letter-spacing: 0.06em; color: #333; margin-top: 2.2em; margin-bottom: 0.4em;
                &#125; p &#123; margin: 0.5em 0 1em; &#125; ul &#123; margin: 0.4em 0 1em 1.2em; padding: 0; &#125; li
                &#123; margin-bottom: 0.4em; &#125; .meta &#123; color: #888; font-size: 0.85rem; margin-bottom: 2em; &#125;
                .question &#123; background: #fff8e6; border-left: 3px solid #e6b800; padding: 10px 14px; margin: 1em 0;
                font-style: italic; &#125; .note &#123; background: #f0f4ff; border-left: 3px solid #5b7fe6; padding: 10px
                14px; margin: 1em 0; font-size: 0.9rem; &#125; .images-grid &#123; display: grid; grid-template-columns: 1fr
                1fr; gap: 10px; margin: 1.2em 0; &#125; .images-grid img &#123; width: 100%; border-radius: 4px; display:
                block; &#125; .images-grid img.full &#123; grid-column: 1 / -1; &#125; .trend-box &#123; background:
                #f3f7f0; border-left: 3px solid #5a8a4a; padding: 12px 16px; margin: 1em 0; font-size: 0.92rem; &#125; hr
                &#123; border: none; border-top: 1px solid #e0e0e0; margin: 2em 0; &#125; &lt;/style&gt; &lt;/head&gt;
                &lt;body&gt; &lt;h1&gt;Spoonflower Launch Plan&lt;/h1&gt; &lt;div class="meta"&gt;Prepared by Ana · For Doug
                · March 2026&lt;/div&gt; &lt;h2&gt;A note on what Spoonflower actually is&lt;/h2&gt; &lt;p&gt;Most people
                think Spoonflower = seamless repeat patterns. That's part of it — but the platform also sells
                &lt;strong&gt;panel designs&lt;/strong&gt;: a single image printed once on fabric or wallpaper. This matters
                because our existing map catalog can go there largely as-is.&lt;/p&gt; &lt;p&gt;Three formats we can
                use:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;strong&gt;Wallpaper panels&lt;/strong&gt; — map as a large wall
                piece. No repeat needed. Buyer orders by the linear foot.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;Fabric
                yardage&lt;/strong&gt; — map printed on a yard of fabric; buyer sews it into a pillow, tote, wall hanging,
                etc.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;Cartographic patterns&lt;/strong&gt; — street grids abstracted into
                repeating geometric ornament. The classic Spoonflower format.&lt;/li&gt; &lt;/ul&gt; &lt;div
                class="images-grid"&gt; &lt;img src="data:image/jpeg;base64,''' + imgs&#91;0&#93; + '''" alt="World map on
                fabric"&gt; &lt;img src="data:image/jpeg;base64,''' + imgs&#91;1&#93; + '''" alt="City grid cartographic
                pattern"&gt; &lt;img src="data:image/jpeg;base64,''' + imgs&#91;3&#93; + '''" alt="USA map fabric panel"&gt;
                &lt;img src="data:image/jpeg;base64,''' + imgs&#91;2&#93; + '''" alt="Map printed skirt"&gt; &lt;img
                src="data:image/jpeg;base64,''' + imgs&#91;4&#93; + '''" class="full" alt="Vintage atlas maps pattern"&gt;
                &lt;/div&gt; &lt;div class="trend-box"&gt; &lt;strong&gt;📈 Spoonflower 2025 Trend
                Report&lt;/strong&gt;&lt;br&gt; Spoonflower's own published trend research identifies city and
                location-themed designs as one of the growth categories for 2025. The buyer motivation is emotional: "the
                streets where I grew up," "the city where we met." Map art sells because it means something personal to the
                buyer — which is exactly what our catalog offers. &lt;/div&gt; &lt;hr&gt; &lt;h2&gt;Step 1 — Seller
                Verification&lt;/h2&gt; &lt;p&gt;The account exists. Four items must be checked off before anything goes on
                sale:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;✅ Confirm email&lt;/li&gt; &lt;li&gt;✅ Accept seller
                agreement&lt;/li&gt; &lt;li&gt;⬜ Submit tax form (W-8BEN or W-9 — see Tax section below)&lt;/li&gt;
                &lt;li&gt;⬜ Confirm shipping address by placing one order with our own design (a small swatch, ~$5, shipped
                to our Georgia address)&lt;/li&gt; &lt;/ul&gt; &lt;div class="note"&gt;Go to &lt;strong&gt;Account Settings
                → Verify Account&lt;/strong&gt; to check which items are already done.&lt;/div&gt; &lt;hr&gt; &lt;h2&gt;Step
                2 — Shop Profile&lt;/h2&gt; &lt;p&gt;Profile photo, banner image, and short bio. Takes about 30
                minutes.&lt;/p&gt; &lt;div class="question"&gt;Doug — do you want to handle this yourself, review what Ana
                sets up, or fully trust Ana to do it?&lt;/div&gt; &lt;hr&gt; &lt;h2&gt;Step 3 — Tax Form&lt;/h2&gt;
                &lt;p&gt;Spoonflower requires a tax form before paying out royalties. Two options:&lt;/p&gt; &lt;ul&gt;
                &lt;li&gt;&lt;strong&gt;W-9 (US individual)&lt;/strong&gt; — if filed under Doug's name as a private person.
                Zero withholding at source; Doug reports the income in his regular US tax return.&lt;/li&gt;
                &lt;li&gt;&lt;strong&gt;W-9 (LLC)&lt;/strong&gt; — if DNA Patternity is or becomes a registered US LLC, the
                entity files its own W-9. Royalties go to the business, not Doug personally.&lt;/li&gt; &lt;/ul&gt; &lt;div
                class="question"&gt;Doug — should the account be filed under your name as an individual, or under DNA
                Patternity LLC? If the LLC route makes sense, is it already registered?&lt;/div&gt; &lt;hr&gt;
                &lt;h2&gt;Step 4 — Uploading Designs&lt;/h2&gt; &lt;p&gt;Current limit: &lt;strong&gt;50 designs per
                calendar week&lt;/strong&gt;. Files are JPG or PNG. Each design must be digitally proofed (zoom/pan check)
                before it can be set for sale. No batch editing — titles, tags, and descriptions are filled in per
                design.&lt;/p&gt; &lt;p&gt;At 50/week, uploading 500 designs takes 10 weeks of steady uploading.&lt;/p&gt;
                &lt;hr&gt; &lt;h2&gt;Step 5 — Distribution (Etsy &amp; Amazon)&lt;/h2&gt; &lt;p&gt;Once verified,
                Spoonflower can list our designs on Etsy and Amazon at no cost to us — they handle listing, fees, and
                product descriptions. We keep our rights and can opt out anytime.&lt;/p&gt; &lt;p&gt;&lt;strong&gt;Not
                guaranteed:&lt;/strong&gt; Spoonflower curates what actually gets placed on those channels. Opting in
                doesn't mean everything appears there automatically.&lt;/p&gt; &lt;div class="note"&gt;Enable in
                &lt;strong&gt;Account Settings → Design Distribution&lt;/strong&gt; after verification.&lt;/div&gt;
                &lt;/body&gt; &lt;/html&gt;''' with open('/mnt/user-data/outputs/spoonflower_brief_doug.html', 'w') as f:
                f.write(html) print("Written:", len(html), "chars") EOF
            </Action>
            <Action>Presented files</Action>
            <Paragraph>
                All five images are now embedded directly after the three bullet points, followed by the Spoonflower 2025
                Trend Report callout. The rest of the brief is rebuilt from the full conversation — verification steps, shop
                profile question, tax question (LLC vs. individual only, no Ana/Georgia discussion), upload cap, and
                distribution. Let me know what to adjust.
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
