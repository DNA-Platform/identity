import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[23 June 2025](2025-06-23)</Date>
        </Dated>
        <Title>[[ 23 June 2025 ]]</Title>
        <Message
            at="2025-06-23T18:10:37.035009Z"
        >
            <Origin>b0fd1e44-6944-4212-9659-ab7f3d32a482</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2025-06-23T18:17:19.428818Z"
        >
            <Origin>e4f840e0-d1a0-43fe-a2f2-0fce411e8244</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
