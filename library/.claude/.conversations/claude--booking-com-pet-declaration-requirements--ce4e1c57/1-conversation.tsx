import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-05T08:41:13.138151Z"
        >
            <Origin>019c2cf6-9d67-76f5-9cea-74def8a4c3ec</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Does booking.com require you to specify pets if pets are allowed in the listing like AirBnB does
            </Paragraph>
        </Message>
        <Message
            at="2026-02-05T08:41:29.252179Z"
        >
            <Origin>019c2cf6-9d68-7bce-afc5-0b911cc5f911</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “booking.com pet policy specify pets reservation”</Action>
            <Paragraph>Short answer: no, not in the same structured way as Airbnb.</Paragraph>
            <Paragraph>
                Booking.com lets you filter search results for "Pets allowed" properties, and pet policies are displayed in
                the property's "House rules" and "Facilities" sections. But there's no mandatory step during the booking
                flow where you formally declare you're bringing pets the way Airbnb requires.
            </Paragraph>
            <Paragraph>
                The practical reality is messier than that, though. A few things to be aware of, especially with two cats:
            </Paragraph>
            <Paragraph>
                The "pets allowed" filter works at the property level, not the room level — so a "pet-friendly" hotel might
                have some rooms that accept pets and others that don't, and Booking.com will show you all available rooms
                regardless. You could accidentally book a non-pet-friendly room in an otherwise pet-friendly property.
            </Paragraph>
            <Paragraph>
                Pet fees are also not clearly listed on Booking.com — you'll typically just see "charges may apply" rather
                than a specific amount, even when other booking platforms list the exact fee for the same hotel.
            </Paragraph>
            <Paragraph>
                Some properties accommodate pets with additional fees or restrictions such as size limitations, and each
                property sets its own policies, so guests are advised to contact the accommodation directly.
            </Paragraph>
            <Paragraph>
                So the move here is: filter for "Pets allowed," read the fine print and house rules carefully, and then
                <Word>
                    <Bold />
                    contact the property directly
                </Word> to confirm they can take two cats and what the actual fees are. Given your situation with the
                Georgia move, this is especially important since pet policies in the Caucasus region can be less
                standardized than in Western Europe.
            </Paragraph>
        </Message>
    </Chapter>
);
