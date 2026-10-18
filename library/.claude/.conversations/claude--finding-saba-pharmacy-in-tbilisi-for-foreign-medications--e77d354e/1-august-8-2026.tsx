import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 August 2026](2026-08-08)</Date>
        </Dated>
        <Title>[[ 8 August 2026 ]]</Title>
        <Message
            at="2026-08-08T13:39:11.501095Z"
        >
            <Origin>019fe19a-5337-73d5-8eb8-0ae816991916</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is there a pharmacy saba in tbilisi where I can buy foreign drugs</Paragraph>
        </Message>
        <Message
            at="2026-08-08T13:39:48.765933Z"
        >
            <Origin>019fe19a-533d-77bb-9849-ac86736a6867</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “аптека Саба Тбилиси иностранные лекарства”</Action>
            <Action>Searched the web for “აფთიაქი საბა თბილისი უცხოური მედიკამენტები”</Action>
            <Action>Searched the web for “"Saba" pharmacy Tbilisi imported foreign medicines”</Action>
            <Action>Searched the web for “llcsaba.ge Saba pharmacy Tbilisi”</Action>
            <Paragraph>
                Yes, there's a company called "Saba" (შპს საბა) that matches what you're describing, though I couldn't
                verify much beyond directory listings:
            </Paragraph>
            <Paragraph>
                SABA — Tbilisi, Digomi district, 13b Ljubljana St. Tel: 251 70 66, 252 13 32. Email: info@llcsaba.ge.
                Category: pharmaceutical depots and medicaments import. Working hours: Monday–Friday 10:00–17:00.
            </Paragraph>
            <Paragraph>Caveats, clearly tagged:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Verified:
                    </Word> It exists in the yell.ge business directory as a licensed medicine importer with a registered ID
                    number (202157593).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Not verified:
                    </Word> Whether it sells retail to walk-in customers, what specific foreign drugs it stocks, or whether
                    it's still operating in 2026 — the listing has no reviews, and I found no working website for it
                    (llcsaba.ge appears only as an email domain; saba.ge is an unrelated site). The Mon–Fri 10–17 hours and
                    "depot" classification suggest a wholesale importer rather than a normal pharmacy.
                </Line>
            </Paragraph>
            <Paragraph>
                I'd call before going — Digomi is a trek from Saburtalo for a business that may be wholesale-only. If it
                would help, tell me which drug you're actually after and I'll search the retail chains (GPC, PSP, Aversi,
                Pharmadepot) in Georgian, Latin, and by active ingredient — that's usually the faster route.
            </Paragraph>
        </Message>
    </Chapter>
);
