import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 November 2024](2024-11-15)</Date>
        </Dated>
        <Title>[[ 15 November 2024 ]]</Title>
        <Message
            at="2024-11-15T17:18:30.584325Z"
        >
            <Origin>789346d8-2d1a-41f8-8e2f-608ba2f66d26</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am reaching out to zucker hillside hospital to get medical records from 2016. Can I do that online?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-15T17:18:30.584325Z"
        >
            <Origin>cff5477a-2d1b-42cf-8844-46bf7456086c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                For Zucker Hillside Hospital (part of Northwell Health), you can request records through:
                https://www.northwell.edu/medical-records
            </Paragraph>
            <Paragraph>Options:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Create a Northwell Patient Portal account</Line>
                <Line>Use their external request portal</Line>
                <Line>Call Medical Records: (718) 470-8262</Line>
            </Paragraph>
            <Paragraph>
                For fastest service, I'd recommend calling first to confirm their current process for psychiatric records
                from 2016.
            </Paragraph>
            <Paragraph>Would you like the specific steps for any of these methods?</Paragraph>
        </Message>
        <Message
            at="2024-11-15T17:35:03.484248Z"
        >
            <Origin>34cb9ef9-2d22-464b-824b-ee23c7b51e08</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Excellent. I need records from UCSD health from the 2005 - 2010 range. Is there any way I could get them
                online?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-15T17:35:03.484248Z"
        >
            <Origin>37dbbe98-de9e-4be4-9120-64a18c128cad</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>UCSD Health has several options for older records:</Paragraph>
            <Paragraph>
                <List />
                <Line>MyUCSDChart patient portal: health.ucsd.edu</Line>
                <Line>Medical Records direct line: (619) 543-3300</Line>
                <Line>Health Information Management Records Request Form online</Line>
            </Paragraph>
            <Paragraph>
                For records that old (2005-2010), I recommend calling first. They may have special procedures for accessing
                archived psychiatric/counseling records from that time period.
            </Paragraph>
        </Message>
    </Chapter>
);
