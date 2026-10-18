import { Bold, Chapter, Date, Heading, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[25 November 2025](2025-11-25)</Date>
        </Dated>
        <Title>[[ 25 November 2025 ]]</Title>
        <Message
            at="2025-11-25T18:19:53.464545Z"
        >
            <Origin>019abc3e-56bd-7269-b6b5-103df197d279</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Use the web, Is there a service on Long Island that will pick up all of your furniture, donate to charity
                what it can and then junk the rest? I am looking for a service that makes this easy, but also that will come
                in my house, get all the stuff - which restore for instance - doesn't do
            </Paragraph>
        </Message>
        <Message
            at="2025-11-25T18:20:52.871074Z"
        >
            <Origin>019abc3e-56bd-7269-b6b5-103ed0bdbb35</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Long Island furniture donation pickup inside home full service”</Action>
            <Action>Searched the web for “LoadUp furniture donation junk removal Long Island donate or dispose”</Action>
            <Action>
                Searched the web for “"estate cleanout" Long Island donate junk removal full service inside home”
            </Action>
            <Paragraph>
                Based on my research, yes—there are several services on Long Island that do exactly what you're looking for:
                they'll come inside your home, take everything, donate what's usable, and dispose of the rest. Here are your
                best options:
            </Paragraph>
            <Heading>Best Full-Service Options</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    The Junkluggers of Long Island
                </Word> They handle everything—from the lifting and loading to sorting, donating, and recycling—so you never
                have to worry about doing it yourself. Items in good condition are donated to local charities, while
                recyclable materials are processed responsibly. When donations are accepted, they provide donation receipts.
                They serve both Nassau and Suffolk Counties and offer same/next-day service. Call (516) 202-8730 for a free
                on-site estimate.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    LoadUp
                </Word> They offer white glove furniture donation pickups that include all of the heavy lifting from
                anywhere inside your home or property. If your donation does not meet requirements for acceptance, they
                always use an eco-friendly disposal approach. Pricing starts around $80 and you can book online for same or
                next-day service.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1-800-GOT-JUNK (Long Island)
                </Word> They do all the heavy lifting, remove your furniture, and leave your space clean. They'll recycle,
                donate, or dispose of items for you. They offer free on-site estimates and same-day service.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    VanGo Junk Removal
                </Word> They prioritize giving back to the community by donating reusable items to local non-profit
                organizations. Their uniformed staff will work with you if you need to go through items as they're working.
            </Paragraph>
            <Heading>Why ReStore Doesn't Work for You</Heading>
            <Paragraph>
                You're right that Habitat's Open Door Exchange requires furniture to be moved outside or in a garage for
                easy access—they do not move furniture from within the home. The junk removal services above are
                specifically designed to solve that problem.
            </Paragraph>
        </Message>
    </Chapter>
);
