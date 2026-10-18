import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[17 March 2026](2026-03-17)</Date>
        </Dated>
        <Title>[[ 17 March 2026 ]]</Title>
        <Message
            at="2026-03-17T10:37:01.477555Z"
        >
            <Origin>019cfb5e-d20d-711c-b91a-a917c7d3100b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay here is your next task, and it might be harder. I want you to be able to execute a line in the context
                of a line with a goal! So imagine the person is drawing the grid, but they can rotate it to make drawing the
                line as easy as possible. But here's the thing, existing lines exist on the grid already, and they change
                the persons goal. We will still need to make the seamless adjustment, but when the person is close to an
                edge, imagine that they are better at intersecting it perpendicular to it because they can see it. That will
                make the seamless effect more consistent. There would be randomness in the spacing of the grid - perhaps you
                can find a way of simulating a person drawing a line across the edge of the grid leaving a dot every so
                often (trying to do it perfectly) but, like - putting the evenly spaced marks on that line, stretching out
                that line to be straight, scaling that back to the size of the paper, and use those transformed starting
                spots. Then, in the equations, if a person is drawing a line next to another, they are much less likely to
                veer into it because they can see the collision. When they are crossing a line, they are probably more
                likely to be perpendicular to it (unless it was very off) just because they can see What in your model
                controls would need to be locally adjusted in space as the human approaches parts of the paper, to implement
                the sort of model where a human draws the whole grid at once?
            </Paragraph>
        </Message>
    </Chapter>
);
