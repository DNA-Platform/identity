import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user Doug was traveling with his wife Ana and two children through Istanbul Airport, seeking
            accommodation during a layover before flying to Tbilisi, Georgia. Claude provided detailed information about
            YOTELAIR, an airside transit hotel that allows passengers to rest without going through passport control.
            Doug successfully used the hotel and found it "perfect" for their needs. The conversation then shifted to
            travel planning within Georgia, as Doug mentioned his family is moving to the country. He needed
            transportation from Tbilisi to Batumi and was initially interested in the scenic train route using modern
            Swiss Stadler double-decker trains. Claude provided comprehensive comparisons between train travel (around
            $83 for first-class family tickets) and private taxi transfers (around $110-130), including detailed
            information about booking procedures, pricing structures, scenic routes, and travel experiences. When Ana
            encountered technical difficulties creating an account on the Georgian railway booking site tkt.ge due to
            SMS verification issues with non-Georgian phone numbers, Claude suggested alternative booking platforms and
            workarounds. Ultimately, train tickets were unavailable, so the conversation concluded with arranging a
            private transfer through GoTrip.ge from Tbilisi Airport to Batumi. Claude provided specific booking details,
            confirmed the service includes airport pickup with flight tracking, unlimited stops, and child car seats,
            emphasizing that the driver would wait for them after baggage claim. The user demonstrated a preference for
            detailed, practical information including exact costs, booking procedures, and logistical considerations
            when traveling with children.
        </Paragraph>
    </Chapter>
);
