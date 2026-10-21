import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-15T16:17:44.523051Z"
        >
            <Origin>019bc272-d4a1-777d-8995-57f4a04e7d71</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am at Istanbul airport. I am on crutches due to a recent surgery and I have a connecting flight and I
                think I have to go through passport control because I flew from another country. They dropped me off from
                this fight at a handicap area and told me to wait for a ride. But my flight is boarding soon and no one is
                picking me up. Istanbul airport is huge and I can’t just go.. how do I get in touch with whoever is
                responsible for picking me up? Is there a number I can call?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-15T16:17:58.626307Z"
        >
            <Origin>019bc272-d4a1-777d-8995-57f5410a8eeb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                At Istanbul Airport, special assistance is handled by <Word>
                    <Bold />
                    HAVAŞ
                </Word> (the airport's ground services). Here's what you need to do right now:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Call the airport's Special Assistance Service directly:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        +90 212 465 3000
                    </Word> (main airport information - ask for special assistance/handicap services)
                </Line>
                <Line>
                    Or dial <Word>
                        <Bold />
                        444 1 442
                    </Word> (HAVAŞ ground services hotline)
                </Line>
            </Paragraph>
            <Paragraph>
                You can also try to flag down any airport staff member immediately and explain the situation - they should
                be able to radio for a wheelchair/assistance to come get you urgently since your flight is boarding.
            </Paragraph>
            <Paragraph>
                If you're in the international arrivals area, there should also be information desks with staff who can call
                for immediate assistance. Look for anyone with an airport uniform or badge.
            </Paragraph>
            <Paragraph>
                Given that your flight is boarding, I'd recommend calling one of those numbers immediately while also trying
                to get the attention of any visible airport staff. Don't wait passively - they may have forgotten you were
                waiting or there may have been a miscommunication about your location.
            </Paragraph>
            <Paragraph>
                Which terminal are you in, and is this a domestic or international connection? That might help determine if
                you actually need to clear passport control or if you can stay airside.
            </Paragraph>
        </Message>
    </Chapter>
);
