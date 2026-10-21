import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[7 May 2026](2026-05-07)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-07T05:47:06.660853Z"
        >
            <Origin>019e00f9-a406-7c1a-a2ee-1cbd62da93bd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am trying to find what the people at Tulsi events are calling my US divorce certificate. It’s optional in
                a wedding, but we want to have it in for interfacing with the US. Which of these migjt they be talking about
            </Paragraph>
            <Attachment>Uploaded “IMG_3235.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3236.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3237.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3234.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-07T05:47:56.958078Z"
        >
            <Origin>019e00f9-a406-71d4-9d19-6316bac33e64</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Almost certainly the <Word>
                    <Bold />
                    certified Judgment of Divorce
                </Word> — that's the Suffolk County Clerk's certification page (Vincent Puleo, certifying the Judgment filed
                11/23/2021), together with the actual multi-page Judgment of Divorce (Rubino v. Rubino, Index 615428/2020,
                signed by Hon. Caren Loguercio, entered Nov 23, 2021), plus its apostille. In your screenshots, that's the
                document you captioned "record from my county where I was divorced" and the four-tile set in Image 3.
            </Paragraph>
            <Paragraph>Two caveats worth flagging before you assume:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    "Divorce certificate" isn't a precise term in New York. NY courts issue a <Word>
                        <Bold />
                        Judgment of Divorce
                    </Word> (what you have). Separately, NYS Department of Health Vital Records issues a <Word>
                        <Bold />
                        Certificate of Dissolution of Marriage
                    </Word> — a one-page summary document, different from the court judgment. You don't appear to have that
                    one. Some agencies — and some non-US wedding offices working from translated checklists — actually mean
                    the DOH certificate when they say "divorce certificate."
                </Line>
                <Line>
                    The <Word>
                        <Bold />
                        Certificate of No Appeals
                    </Word> (last document, Image 3) literally has "Certificate" in the name and confirms the divorce is
                    final. Some jurisdictions specifically want this alongside the judgment.
                </Line>
            </Paragraph>
            <Paragraph>
                My recommendation: don't guess — ask Tbili Events directly which they want. Something like:
            </Paragraph>
            <Paragraph>
                <Quoted />
                "To confirm — by 'US divorce certificate' do you mean (a) the certified Judgment of Divorce from the Suffolk
                County Court (which I have, apostilled), or (b) the Certificate of Dissolution of Marriage from the NY State
                Department of Health Vital Records (a separate document)? I want to make sure I'm sending the right one."
            </Paragraph>
            <Paragraph>
                If they say (b), that's a separate request to NYS DOH and takes time — better to find out now.
            </Paragraph>
        </Message>
    </Chapter>
);
