import { Chapter, Date, Line, List, Math, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[25 November 2024](2024-11-25)</Date>
        </Dated>
        <Title>[[ 25 November 2024 ]]</Title>
        <Message
            at="2024-11-25T20:07:23.793783Z"
        >
            <Origin>11e24de4-1029-43c3-adf7-63aa591c1a72</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yeah let's work on the math! Here's what I set up in the spreadsheet so far. I think these are good columns.
                Our goal is to calculate the Projected Effort and Suggested Cost at her time of entry.
            </Paragraph>
            <Paragraph>
                Notice there are three sheets - projects, log and calculations. Why don't we use the columns of the
                calculation. Notice that I didn't put log fields in but I put in the three value fields we discussed
            </Paragraph>
            <Paragraph>
                Why don't we add semantic value to our calculations, use the columns in the calculations sheet to compute
                comprehensible things so that Ana can use it as analytics if she's interested. But let's still be as
                sophisticated as required to get this right
            </Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-25T20:07:23.793783Z"
        >
            <Origin>86eb35e8-e445-44db-aaf6-8ecab429979f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let's use the Calculations sheet to break this down into meaningful components that will feed into our final
                formulas. Here's what we could compute:
            </Paragraph>
            <Paragraph>CALCULATIONS SHEET:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Workload Analysis:</Line>
                <Line>Average Weekly Hours (last 4 weeks)</Line>
                <Line>Hours Above Target (vs 30hr target)</Line>
                <Line>Typical Project Overlap</Line>
                <Line>Estimation Accuracy:</Line>
                <Line>Recent Accuracy Ratio (actual/estimated)</Line>
                <Line>Accuracy Trend (improving/declining)</Line>
                <Line>Confidence Factor</Line>
                <Line>Value-Based Metrics:</Line>
                <Line>Base Hourly Rate (from value of money)</Line>
                <Line>Time Premium (from workload + value of time)</Line>
                <Line>Enjoyment Impact (from past pricing patterns)</Line>
            </Paragraph>
            <Paragraph>The suggested cost formula could then be:</Paragraph>
            <CodeBox>
                {`Projected Effort = Expected Effort * Recent Accuracy Ratio * (1 + Confidence Factor)

Base Cost = Projected Effort * Base Hourly Rate

Suggested Cost = Base Cost * 
                 (1 + Time Premium * (Hours Above Target/10)) *
                 (1 + (10 - Enjoyment) * (Value of Enjoyment/100)) *
                 (1 + (30/Deadline) * (Value of Time/100))`}
            </CodeBox>
            <Paragraph>
                Want to refine any of these components or work on specific formulas for the intermediate calculations?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:24:36.520274Z"
        >
            <Origin>78f7a4ae-8cb7-44c8-854e-402ae35df616</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                That's a good start! How about we calculate a few things first. We need to deal with normalization. How
                about we use zscores? We can store the Enjoyment Mean and Enjoyment STD, so we can use those in other
                calculations. We need normalized versions of the value columns. We can just divide each by the sum of all
                three, and those can be columns
            </Paragraph>
            <Paragraph>Oh and what are we tracking in the log? I propose the ones in the picture</Paragraph>
            <Paragraph>What do you think of that as a start? Then we can start our model</Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-25T20:24:36.520274Z"
        >
            <Origin>5b690d5c-68c9-4c47-8734-d1434e3f8626</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, using z-scores for normalization is smart. From the log columns shown, we can calculate:
            </Paragraph>
            <Paragraph>CALCULATIONS:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Normalization stats:</Line>
                <Line>Enjoyment Mean</Line>
                <Line>Enjoyment STD</Line>
                <Line>Normalized Value of Time = Value of Time / (Sum of Values)</Line>
                <Line>Normalized Value of Enjoyment = Value of Enjoyment / (Sum of Values)</Line>
                <Line>Normalized Value of Money = Value of Money / (Sum of Values)</Line>
                <Line>Workload stats:</Line>
                <Line>Hours per week (rolling)</Line>
                <Line>Z-score of current workload</Line>
                <Line>Project density (projects/week)</Line>
            </Paragraph>
            <Paragraph>
                This gives us normalized metrics that we can use to build our model. The log tracking date, project, effort,
                and enjoyment gives us enough data to compute these while keeping it simple for Ana.
            </Paragraph>
            <Paragraph>Want to work on the actual formulas for these calculations?</Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:29:16.482237Z"
        >
            <Origin>57dfb45b-a3d0-46d0-ba0e-6ec0158490ef</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Why don't we do everything rolling on the calculations sheet. We can pull in the dates and project names and
                compute zscores at each moment of time. How do I pull in a column from one sheet to another
            </Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:29:16.482237Z"
        >
            <Origin>90875500-75dc-440e-9335-50ad41a4394f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                To reference data from another sheet, use this syntax: <Word>
                    <Verbatim />
                    =INDIRECT("SheetName!A1")
                </Word> or just <Word>
                    <Verbatim />
                    =SheetName!A1
                </Word>
            </Paragraph>
            <Paragraph>
                For a whole column: <Word>
                    <Verbatim />
                    =SheetName!A:A
                </Word>
            </Paragraph>
            <Paragraph>
                For example, to pull the dates from the log: <Word>
                    <Verbatim />
                    =Log!A:A
                </Word>
            </Paragraph>
            <Paragraph>Want to work out the rolling calculations formulas next?</Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:30:21.988327Z"
        >
            <Origin>0bfa0328-79ad-417f-bd51-61bf94acd071</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay so to pull in date and project name from the Projects sheet, what do I do</Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:30:21.988327Z"
        >
            <Origin>016d4050-0c03-4471-8791-e40f0e599c35</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>To pull from the Projects sheet to Calculations:</Paragraph>
            <Paragraph>
                For date: <Word>
                    <Verbatim />
                    =Projects!A:A
                </Word>
            </Paragraph>
            <Paragraph>
                For project names: <Word>
                    <Verbatim />
                    =Projects!B:B
                </Word>
            </Paragraph>
            <Paragraph>
                Both formulas should go in columns A and B of your Calculations sheet. Want to work on the rolling z-score
                formulas next?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:33:10.274819Z"
        >
            <Origin>d87e1ed6-af2d-43f4-a2d2-4f5b4d4e8a08</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don't know google sheets. I don't know how to put in an entry for a whole column. Can you use the pictures
                to infer the schema? If I want to pull in the whole columns - Date and Project Name and from Projects into
                Calculations what exactly do I have to do
            </Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:33:10.274819Z"
        >
            <Origin>17eb8057-7b72-4624-ad8b-7dcf6bc6945e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                In the Calculations sheet, go to cell A2 and enter: <Word>
                    <Verbatim />
                    =ARRAYFORMULA(IF(ROW(Projects!A:A)=1,"Date",Projects!A2:A))
                </Word>
            </Paragraph>
            <Paragraph>
                In cell B2 enter: <Word>
                    <Verbatim />
                    =ARRAYFORMULA(IF(ROW(Projects!B:B)=1,"Project Name",Projects!B2:B))
                </Word>
            </Paragraph>
            <Paragraph>This will copy the headers and all data below them from the Projects sheet.</Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:34:15.445819Z"
        >
            <Origin>2a5e4eb7-7e1c-45f0-a352-d3ff35601438</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>It didn't seem to. It just put the column name in there</Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:34:15.445819Z"
        >
            <Origin>2abccbf6-7347-4a2b-ab77-820a62c6994c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Try this in cell A1: <Word>
                    <Verbatim />
                    =Projects!A:A
                </Word>
            </Paragraph>
            <Paragraph>
                And in B1: <Word>
                    <Verbatim />
                    =Projects!B:B
                </Word>
            </Paragraph>
            <Paragraph>
                This should pull both columns directly. The ARRAYFORMULA approach may have been too complex. Let me know if
                this works better.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:35:33.163694Z"
        >
            <Origin>508ff9ba-e120-4d60-a8e7-2297d852517a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is there a special way to enter full column equations? Enterting those in one cell add a value to that cell.
                Can you research google sheets in 10 relevant paragraphs and come back to this
            </Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:35:33.163694Z"
        >
            <Origin>d8795e14-0877-4b82-a3a5-4eb1034bc999</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>In Google Sheets, to reference full columns:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>First select the entire column where you want the formula (click column letter)</Line>
                <Line>Type your formula (=Projects!A:A) in the formula bar</Line>
                <Line>Press Ctrl+Enter (Command+Enter on Mac) to apply to whole column</Line>
            </Paragraph>
            <Paragraph>Alternative method:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Enter formula in top cell</Line>
                <Line>Double-click bottom-right corner of cell to auto-fill down</Line>
            </Paragraph>
            <Paragraph>For our case:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Click column A in Calculations</Line>
                <Line>Enter =Projects!A:A in formula bar</Line>
                <Line>Press Ctrl+Enter</Line>
                <Line>Repeat for column B with =Projects!B:B</Line>
            </Paragraph>
            <Paragraph>Want to try this approach?</Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:36:17.158742Z"
        >
            <Origin>4a04aa10-786d-4c2a-80b9-0ae83db7e5fa</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                That's not what I asked you. Can you please do some free form research on complex calulations on Google
                Sheets and teach us a little tutorial
            </Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:36:17.158742Z"
        >
            <Origin>23ab39d4-7e02-4373-838b-8aff4a855d8f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Google Sheets Calculation Essentials:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>ARRAYFORMULA: Key for column-wide calculations</Line>
            </Paragraph>
            <Paragraph>
                Example: <Word>
                    <Verbatim />
                    =ARRAYFORMULA(B2:B * C2:C)
                </Word> Processes entire columns without dragging
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Dynamic Ranges:</Line>
                <Line>
                    <Word>
                        <Verbatim />
                        INDIRECT("A"&amp;ROW():ROW()+5)
                    </Word>: References dynamic cell ranges
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        OFFSET(A1, 0, 0, COUNTA(A:A))
                    </Word>: Creates ranges that auto-adjust
                </Line>
                <Line>Rolling Calculations:</Line>
            </Paragraph>
            <CodeBox>
                {`=ARRAYFORMULA(
  AVERAGE(
    OFFSET(A1, ROW(A1)-1-6, 0, 7, 1)
  )
)`}
            </CodeBox>
            <Paragraph>Gets 7-day rolling average</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Z-scores:</Line>
            </Paragraph>
            <CodeBox>
                {`=ARRAYFORMULA(
  (B2:B - AVERAGE(B2:B)) / STDEV(B2:B)
)`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Query Language:</Line>
            </Paragraph>
            <CodeBox>
                {`=QUERY(A:D, "select A,B,C where D > 0")`}
            </CodeBox>
            <Paragraph>SQL-like operations on ranges</Paragraph>
            <Paragraph>Want to try implementing rolling z-scores for our workload analysis?</Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:37:20.141238Z"
        >
            <Origin>048e9e92-4d02-4305-91e4-98b11c392338</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude can you please write more? Or do I have to switch to another AI? Why are you being so terse
            </Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:37:20.141238Z"
        >
            <Origin>7059e225-e26a-43f3-9e6b-af08091d1217</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I understand you want a comprehensive tutorial on Google Sheets calculations. Here's a deep dive:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>ARRAYFORMULA Fundamentals</Line>
                <Line>Essential for column-wide operations without dragging</Line>
                <Line>
                    Syntax: <Word>
                        <Verbatim />
                        =ARRAYFORMULA(calculation)
                    </Word>
                </Line>
                <Line>
                    Example: <Word>
                        <Verbatim />
                        =ARRAYFORMULA(A2:A + B2:B)
                    </Word>
                </Line>
                <Line>
                    Can handle multiple columns: <Word>
                        <Verbatim />
                        =ARRAYFORMULA(&#123;A2:A, B2:B * 2&#125;)
                    </Word>
                </Line>
                <Line>
                    Nesting allowed: <Word>
                        <Verbatim />
                        =ARRAYFORMULA(IF(A2:A&gt;0, B2:B*2, C2:C))
                    </Word>
                </Line>
                <Line>Rolling Windows</Line>
                <Line>Use OFFSET for moving calculations</Line>
                <Line>
                    Basic syntax: <Word>
                        <Verbatim />
                        =OFFSET(reference, rows, cols, &#91;height&#93;, &#91;width&#93;)
                    </Word>
                </Line>
                <Line>
                    Rolling average: <Word>
                        <Verbatim />
                        =AVERAGE(OFFSET(A1, ROW(A1)-7, 0, 7))
                    </Word>
                </Line>
                <Line>Combine with ARRAYFORMULA for full columns:</Line>
            </Paragraph>
            <CodeBox>
                {`=ARRAYFORMULA(
  AVERAGE(
    OFFSET(A2:A, SEQUENCE(ROWS(A2:A))-7, 0, 7)
  )
)`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Statistical Functions</Line>
                <Line>Z-scores: (value - mean) / standard deviation</Line>
                <Line>Rolling z-scores:</Line>
            </Paragraph>
            <CodeBox>
                {`=ARRAYFORMULA(
  (A2:A - AVERAGE(A2:A)) / STDEV(A2:A)
)`}
            </CodeBox>
            <Paragraph>
                <List />
                <Line>
                    Percentiles: <Word>
                        <Verbatim />
                        =PERCENTILE(range, k)
                    </Word>
                </Line>
                <Line>Moving correlations possible with CORREL</Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Dynamic References</Line>
                <Line>
                    INDIRECT: <Word>
                        <Verbatim />
                        =INDIRECT("Sheet1!A"&amp;ROW())
                    </Word>
                </Line>
                <Line>
                    ADDRESS: <Word>
                        <Verbatim />
                        =ADDRESS(ROW(), COLUMN())
                    </Word>
                </Line>
                <Line>OFFSET + COUNTA for variable ranges:</Line>
            </Paragraph>
            <CodeBox>
                {`=OFFSET(Sheet1!A1, 0, 0, COUNTA(Sheet1!A:A))`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Conditional Logic</Line>
                <Line>
                    IF with arrays: <Word>
                        <Verbatim />
                        =ARRAYFORMULA(IF(A2:A&gt;0, "Positive", "Negative"))
                    </Word>
                </Line>
                <Line>Multiple conditions:</Line>
            </Paragraph>
            <CodeBox>
                {`=ARRAYFORMULA(
  IF(A2:A>0,
     IF(B2:B>0, "Both Positive", "A Only"),
     "Neither")
)`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Date and Time Functions</Line>
                <Line>DATEDIF: Calculate intervals</Line>
                <Line>WORKDAY: Skip weekends</Line>
                <Line>NETWORKDAYS: Business days between dates</Line>
                <Line>Rolling date windows:</Line>
            </Paragraph>
            <CodeBox>
                {`=ARRAYFORMULA(
  COUNTIFS(
    A2:A, ">="&OFFSET(A2,ROW(A2)-7,0),
    A2:A, "<="&A2
  )
)`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Query Language</Line>
            </Paragraph>
            <CodeBox>
                {`=QUERY(A:D, 
  "select A, sum(B) 
   where C > 0 
   group by A 
   pivot D")`}
            </CodeBox>
            <Paragraph>
                <List />
                <Line>SQL-like operations</Line>
                <Line>Aggregations, grouping, pivoting</Line>
                <Line>Dynamic parameters possible</Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Advanced Array Operations</Line>
                <Line>
                    Sequence generation: <Word>
                        <Verbatim />
                        =SEQUENCE(100)
                    </Word>
                </Line>
                <Line>
                    Array literals: <Word>
                        <Verbatim />
                        =&#123;1,2,3; 4,5,6&#125;
                    </Word>
                </Line>
                <Line>Array functions: MMULT, TRANSPOSE</Line>
                <Line>Combining arrays:</Line>
            </Paragraph>
            <CodeBox>
                {`=ARRAYFORMULA(
  {A2:A, B2:B * 2, 
   VLOOKUP(C2:C, range, 2, FALSE)}
)`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Error Handling</Line>
                <Line>IFERROR for graceful fallbacks</Line>
                <Line>ISERROR for conditional logic</Line>
                <Line>Example:</Line>
            </Paragraph>
            <CodeBox>
                {`=ARRAYFORMULA(
  IFERROR(
    1/A2:A,
    IF(A2:A=0, "Division by zero", "Other error")
  )
)`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Performance Considerations</Line>
                <Line>ARRAYFORMULA vs dragged formulas</Line>
                <Line>Minimize volatile functions (NOW, RAND, OFFSET)</Line>
                <Line>Use structured references when possible</Line>
                <Line>Cache intensive calculations in helper columns</Line>
            </Paragraph>
            <Paragraph>For our project, we could use these techniques to:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Calculate rolling workload averages</Line>
                <Line>Compute z-scores for enjoyment</Line>
                <Line>Create dynamic pricing models</Line>
                <Line>Track project density over time</Line>
            </Paragraph>
            <Paragraph>Want to implement any of these specific calculations?</Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:39:09.446085Z"
        >
            <Origin>bd6813e7-7880-4f8a-911d-e69d05d2743e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Good! Thank you. That was useful. Now, how do we get test data? This won't work if we don't have anything in
                our sheet? We need to create sample projects and logs
            </Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:39:09.446085Z"
        >
            <Origin>ea8136fe-7bd7-4006-9d3e-7c1a097609e9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let's create realistic test data. For a freelancer, we might see:</Paragraph>
            <Paragraph>PROJECTS:</Paragraph>
            <CodeBox>
                {`Date, Project Name, Deadline (days), Enjoyment, Expected Effort (hours)
2024-11-01, Website Redesign, 14, 7, 20
2024-11-03, Logo Design, 5, 4, 8
2024-11-05, Brand Guidelines, 10, 8, 15
2024-11-08, Social Media Templates, 7, 6, 12
2024-11-10, Landing Page, 3, 3, 10`}
            </CodeBox>
            <Paragraph>LOG (daily work):</Paragraph>
            <CodeBox>
                {`Date, Project, Effort (hours), Enjoyment
2024-11-01, Website Redesign, 4, 7
2024-11-02, Website Redesign, 5, 6
2024-11-02, Logo Design, 3, 4
2024-11-03, Logo Design, 4, 3
2024-11-04, Brand Guidelines, 6, 8
2024-11-05, Website Redesign, 6, 7
2024-11-05, Logo Design, 2, 4`}
            </CodeBox>
            <Paragraph>Want me to add more entries or modify these before we implement our calculations?</Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:40:16.843547Z"
        >
            <Origin>8a9e4a7b-fe87-4614-8ac1-75535d3cae1a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Please use my columns and give me information that I can paste into google. Give me a bunch
            </Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-25T20:40:16.843547Z"
        >
            <Origin>5a0172c8-a8c3-46fc-98a6-f36aaf174de1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the data in paste-ready format for Projects sheet:</Paragraph>
            <Paragraph>
                Date Project Name Deadline (days) Projected Duration (days) Enjoyment (number) Expected Effort (hours)
                Projected Effort (hours) Actual Effort (hours) Suggested Cost (<Math>{")\tActual Cost ("}</Math>) 2024-10-01
                Brand Redesign 14 8 25 28 3200 3000 2024-10-15 Email Templates 7 6 12 15 1800 1500 2024-10-22 Landing Page 5
                4 8 12 1400 1200 2024-11-01 Website Rebuild 21 9 40 45 5000 4800 2024-11-10 Logo Package 10 7 15 18 2200
                2000 2024-11-15 Social Campaign 14 5 20 24 2800 2500 2024-11-20 UI Animation 7 8 10 14 1600 1500 2024-11-23
                Style Guide 10 7 18 22 2400 2200
            </Paragraph>
            <Paragraph>Want the Log data next?</Paragraph>
        </Message>
        <Message
            at="2024-11-25T20:41:14.285754Z"
        >
            <Origin>d1e9584d-5eff-4b3e-a7a4-40f743f305cc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>We need to use my actual columns and I need data I can paste into google sheet</Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-25T20:41:14.285754Z"
        >
            <Origin>c9b24e1b-604b-4818-8fe0-f2ddb7537335</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me provide tab-separated data exactly matching your columns that you can directly paste into Google
                Sheets:
            </Paragraph>
            <Paragraph>
                Date Project Name Deadline (days) Projected Duration (days) Enjoyment (number) Expected Effort (hours)
                Projected Effort (hours) Actual Effort (hours) Suggested Cost (<Math>{")\tActual Cost ("}</Math>) 2024-11-01
                Website Redesign 14 12 7 20 24 22 2400 2200 2024-11-03 Logo Design 5 4 4 8 10 12 1200 1000 2024-11-05 Brand
                Guidelines 10 8 8 15 18 16 1800 1700 2024-11-08 Social Templates 7 6 6 12 15 14 1500 1400 2024-11-10 Landing
                Page 3 3 3 10 12 15 1600 1400 2024-11-12 Email Campaign 8 7 5 16 20 18 2000 1800 2024-11-15 Product Icons 4
                3 8 6 8 7 900 800 2024-11-18 Mobile App UI 15 12 9 30 35 38 3500 3200
            </Paragraph>
            <Paragraph>Need the Log sheet data next?</Paragraph>
        </Message>
        <Message
            at="2024-11-25T21:00:41.298800Z"
        >
            <Origin>c0cacd18-b05d-4315-82f4-5f08b02a7584</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay I have some mock data. How about we do a rolling enjoyment zscore calculation. What's the formulae
            </Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-25T21:00:41.298800Z"
        >
            <Origin>8b910d10-f1ed-4117-ba8b-73232ea65663</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>For a rolling enjoyment z-score, use this formula in the Calculations sheet:</Paragraph>
            <CodeBox>
                {`=ARRAYFORMULA(
  IF(ROW(A:A)=1, "Enjoyment Z-Score",
  (D:D - 
   AVERAGE(OFFSET(D2, MAX(ROW(D2:D)-10-ROW(D2),0), 0, MIN(ROW(D2:D)-ROW(D2)+1,10)))) /
   STDEV(OFFSET(D2, MAX(ROW(D2:D)-10-ROW(D2),0), 0, MIN(ROW(D2:D)-ROW(D2)+1,10)))
  )
)`}
            </CodeBox>
            <Paragraph>This:</Paragraph>
            <Paragraph>
                <List />
                <Line>Uses 10-day rolling window</Line>
                <Line>Calculates z-score using (value - mean) / std</Line>
                <Line>Handles header row</Line>
                <Line>Adjusts window size for start of dataset</Line>
            </Paragraph>
            <Paragraph>Want to add this to your sheet and test?</Paragraph>
        </Message>
    </Chapter>
);
