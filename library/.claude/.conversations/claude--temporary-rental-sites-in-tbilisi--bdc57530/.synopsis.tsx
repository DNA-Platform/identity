import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user asked about temporary rental platforms in Tbilisi beyond Airbnb, indicating they are seeking
            short-term accommodation options in the Georgian capital. Claude provided comprehensive alternatives
            including Booking.com for apartments and apart-hotels, local Georgian platforms like Korter.ge, ss.ge, and
            myhome.ge with specific filtering instructions for daily rentals using Georgian language terms. Claude also
            recommended Facebook groups such as "Tbilisi Apartments for Rent" and "Expats in Tbilisi" for sublet
            opportunities, apart-hotels and serviced apartments that offer negotiable monthly rates, and local rental
            agencies that specialize in furnished short-term accommodations for relocating individuals. The response
            included specific search strategies and noted that for the Saburtalo district specifically, Georgian
            platforms would likely yield better results than Airbnb since it's a residential area popular with locals
            rather than tourists. Claude offered to provide additional assistance with Georgian or Russian search terms,
            suggesting familiarity with the user's language needs and location-specific rental market dynamics.
        </Paragraph>
    </Chapter>
);
