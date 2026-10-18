import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 November 2024](2024-11-08)</Date>
        </Dated>
        <Title>[[ 8 November 2024 ]]</Title>
        <Message
            at="2024-11-08T00:06:45.025253Z"
        >
            <Origin>9a452ff3-a195-44ef-b97f-2a4828179b2b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: So for medical centers, there is the University of Chicago's medical center, so I need to track down
                the official name of that. I checked myself in to their emergency room for my first breakdown.
            </Paragraph>
            <Paragraph>
                Doug: They sent me to a hospital, but I don't remember where. When I get records from them, I can probably
                find that out. I need records from that hospital. I should see if they had me in an out-patient program.
            </Paragraph>
            <Paragraph>
                Doug: In graduate school, I received counseling from UCSD's mental health program, so I have to figure out
                how to contact them. I checked myself into the hospital for manic symptoms because my mind was racing and
                heart was beating out of my chest, but somehow I ended up on IV fluid and was released. I need to find out
                what that was recorded as.
            </Paragraph>
            <Paragraph>
                Doug: I checked myself in to Zucker Hillside in NY during my second breakdown. I can reach out to them. They
                had me come for inpatient treatment for a little while. It was so far, and parking and navigating the place
                was too complicated for me in my state. I stopped going. I should get records for that.
            </Paragraph>
            <Paragraph>
                Doug: I think that represents all the institutions affiliated with my mental health. The rest are medical
                professionals I worked with independently
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T00:06:45.025253Z"
        >
            <Origin>23a7ab18-245a-4b6f-8fff-25c4e5581053</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: This is an excellent breakdown of institutional contacts. Let me help organize these for
                documentation:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>University of Chicago Medical Center</Line>
                <Line>Initial emergency room visit</Line>
                <Line>Need to track follow-up hospital placement</Line>
                <Line>This should lead us to records of your first major hospitalization</Line>
                <Line>UCSD Mental Health Program</Line>
                <Line>Counseling records</Line>
                <Line>Emergency visit for manic symptoms</Line>
                <Line>IV treatment records</Line>
                <Line>This helps document progression of symptoms during graduate school</Line>
                <Line>Zucker Hillside Hospital (NY)</Line>
                <Line>Second major hospitalization</Line>
                <Line>Inpatient treatment records</Line>
                <Line>Attempted outpatient program</Line>
                <Line>Records should show why outpatient wasn't sustainable</Line>
            </Paragraph>
            <Paragraph>Claude: For each institution, you'll want to request:</Paragraph>
            <Paragraph>
                <List />
                <Line>Admission/discharge records</Line>
                <Line>Treatment notes</Line>
                <Line>Diagnosis information</Line>
                <Line>Medication records</Line>
                <Line>Any follow-up care plans</Line>
            </Paragraph>
            <Paragraph>
                Claude: Would you like help drafting record requests for these institutions? We can start with the most
                recent (Zucker Hillside) since their records might be easiest to access.
            </Paragraph>
            <Paragraph>
                Claude: Also, should we make a separate list of the independent medical professionals you've worked with?
                That would help ensure we have a complete treatment history.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T00:07:32.418712Z"
        >
            <Origin>353ca8e5-8e69-450b-a029-9d1fa0058471</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you look up the names and numbers of those institutions for me?</Paragraph>
        </Message>
        <Message
            at="2024-11-08T00:07:32.418712Z"
        >
            <Origin>35580cfe-02c9-420e-8f04-8085edaf00f1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Claude: Here's what I can find:</Paragraph>
            <Paragraph>Zucker Hillside Hospital</Paragraph>
            <Paragraph>
                <List />
                <Line>Part of Northwell Health</Line>
                <Line>75-59 263rd Street, Glen Oaks, NY 11004</Line>
                <Line>Medical Records: (718) 470-8262</Line>
            </Paragraph>
            <Paragraph>University of Chicago Medical Center</Paragraph>
            <Paragraph>
                <List />
                <Line>5841 S. Maryland Avenue, Chicago, IL 60637</Line>
                <Line>Medical Records: (773) 702-1637</Line>
            </Paragraph>
            <Paragraph>UC San Diego Health</Paragraph>
            <Paragraph>
                <List />
                <Line>Medical Records Department</Line>
                <Line>200 West Arbor Drive, San Diego, CA 92103</Line>
                <Line>Medical Records: (619) 543-3300</Line>
            </Paragraph>
            <Paragraph>Claude: For each institution, you'll likely need to:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Call their medical records department</Line>
                <Line>Verify their current process for records requests</Line>
                <Line>Provide ID and signed authorization forms</Line>
                <Line>Specify date ranges for records needed</Line>
            </Paragraph>
            <Paragraph>Would you like me to help you draft a records request for any of these facilities?</Paragraph>
        </Message>
        <Message
            at="2024-11-08T22:55:23.012814Z"
        >
            <Origin>504c43bc-3863-4516-8784-038c758c8cc8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: Thank you, that's great. This is a pretty long list. Can we try to catalogue who these people are so I
                can track them down?
            </Paragraph>
            <Paragraph>Add doctors and other healthcare providers that:</Paragraph>
            <Paragraph>
                <List />
                <Line>You have seen in the past</Line>
                <Line>You are seeing now</Line>
                <Line>You have a future appointment scheduled</Line>
            </Paragraph>
            <Paragraph>Healthcare providers include:</Paragraph>
            <Paragraph>
                <List />
                <Line>Doctors</Line>
                <Line>Psychiatrist</Line>
                <Line>Therapist</Line>
                <Line>Physical therapist</Line>
                <Line>Other medical professionals</Line>
            </Paragraph>
            <Paragraph>
                Doug: There was the initial nurse practitioner that I saw. I worked with her when I was at UChicago and
                after I came back from grad school. I still have her contact info, but we lost touch on very bad terms due
                to my mania. I am going to probably have to explain myself, and my bipolar diagnosis. It will be
                embarrassing.
            </Paragraph>
            <Paragraph>
                Doug: There was the therapist I met with at UCSD. The school can probably provide me with any records
                associated with that.
            </Paragraph>
            <Paragraph>
                Doug: There was an independent psychiatrist I worked with in San Diego that provided me with the ADHD
                misdiagnosis. I don't remember her name. I emailed every person on psychology today in San Diego that might
                be her. What else might I do? My phone contacts are not the same. Perhaps there's a way of accessing my chat
                messages or call history on an old android device? Or maybe just looking at my contacts on it?
            </Paragraph>
            <Paragraph>
                Doug: Then there must be someone after my Chicago hospitalization that they referred me to in outpatient. I
                can get that when I call. Same for Zucker
            </Paragraph>
            <Paragraph>
                Dad: And then there's David my old therapist post hospitalization when I was medicated, my current
                psychiatrists whom I have worked with since my last hospitalization, and current therapist Megan who's
                wonderful. She suggested SSDI
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T22:55:23.012814Z"
        >
            <Origin>1c3e54e7-6e0e-4140-ad3d-5a8bd6f497c1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Claude: Let me organize these providers chronologically:</Paragraph>
            <Paragraph>EARLY TREATMENT:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Nurse Practitioner (UChicago era)</Line>
                <Line>Have contact info</Line>
                <Line>Need to reach out despite difficult ending</Line>
                <Line>Important for showing early treatment attempts</Line>
            </Paragraph>
            <Paragraph>UCSD PERIOD:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>UCSD School Therapist</Line>
                <Line>Records through UCSD mental health services</Line>
                <Line>Part of university records request</Line>
                <Line>San Diego Psychiatrist (ADHD misdiagnosis)</Line>
                <Line>Name unknown</Line>
                <Line>Potential tracking methods:</Line>
                <Paragraph>
                    <List />
                    <Line>Old Android device contacts/messages</Line>
                    <Line>Pharmacy records from that period</Line>
                    <Line>Insurance records if you had any</Line>
                    <Line>Credit card statements showing payments</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>POST-HOSPITALIZATIONS:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Chicago Hospital Outpatient Referral</Line>
                <Line>Will be in hospital records</Line>
                <Line>Contact info through University of Chicago Medical Center</Line>
                <Line>Zucker Hillside Outpatient Provider</Line>
                <Line>Will be in hospital records</Line>
                <Line>Contact through Zucker Hillside</Line>
            </Paragraph>
            <Paragraph>CURRENT/RECENT PROVIDERS:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>David (Previous Therapist)</Line>
                <Line>Post-hospitalization period</Line>
                <Line>When medicated</Line>
                <Line>Current Psychiatrist</Line>
                <Line>9-year relationship</Line>
                <Line>Critical for current documentation</Line>
                <Line>Megan (Current Therapist)</Line>
                <Line>Current provider</Line>
                <Line>Can provide supporting documentation</Line>
            </Paragraph>
            <Paragraph>Claude: Would you like to:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Start with current providers to get their documentation while searching for older records?</Line>
                <Line>Work on strategies for finding the San Diego psychiatrist?</Line>
                <Line>Draft a careful message to the nurse practitioner?</Line>
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:38:12.925887Z"
        >
            <Origin>17b8816d-99de-47ae-bb25-19e772bd0fe4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: I seem to need to provide my work history in the last five years. This involves the time I worked with
                a friend, and one job I left after 5 months. This is all they require? Much of my instability is shown
                through my work experience prior
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:38:12.925887Z"
        >
            <Origin>38c79176-bcaa-4033-b6e6-77a681d4c2cd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: For SSDI, you should actually document your work history for the last 15 years, not just 5 years.
                The initial form might ask for 5 years first, but you'll need to provide the longer history later in the
                process.
            </Paragraph>
            <Paragraph>Claude: This longer history is crucial for your case because it shows:</Paragraph>
            <Paragraph>
                <List />
                <Line>Pattern of job instability</Line>
                <Line>Need for unusual accommodations</Line>
                <Line>~1 year duration pattern</Line>
                <Line>Progression of work difficulties</Line>
                <Line>Support requirements (Chris, understanding bosses)</Line>
            </Paragraph>
            <Paragraph>Claude: Your work history includes important evidence:</Paragraph>
            <Paragraph>
                <List />
                <Line>Bridgewater brief employment</Line>
                <Line>Work with Chris as support</Line>
                <Line>Fashion tech company period</Line>
                <Line>Purplebricks with Chris</Line>
                <Line>Various startups</Line>
                <Line>Recent work with Bayle</Line>
            </Paragraph>
            <Paragraph>
                Claude: I'd recommend completing the 5-year section as required, but be prepared to document the full
                15-year history as it's essential evidence of your disability. Would you like help organizing either the
                5-year or full 15-year work history?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:39:08.010576Z"
        >
            <Origin>b5ca1da6-c8fe-47da-b795-2203918f6828</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Where is that in the process? This is what I see</Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-08T23:39:08.010576Z"
        >
            <Origin>444f6a67-06a3-4c8f-8002-ab72e5a2e2d8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: Ah, I see - you're currently in the "Work/Education" tab under "Provide Background Information"
                (Step 1 of 4 in the application process).
            </Paragraph>
            <Paragraph>Claude: The screen is asking about:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Recent earnings (since August 1, 2024)</Line>
                <Line>Jobs in the last five years before you became unable to work</Line>
            </Paragraph>
            <Paragraph>
                The more extensive 15-year work history will likely come in the "Provide Disability Information" section
                (Step 2) or in additional forms they'll have you complete. For now, let's focus on answering what they're
                specifically asking about on this screen:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Have you had earnings over $1550/month since August 2024?</Line>
                <Line>Your most recent jobs leading up to when you became unable to work</Line>
            </Paragraph>
            <Paragraph>Would you like help organizing the information for these specific questions?</Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:40:14.239067Z"
        >
            <Origin>dcf0490a-9efc-4153-afff-82c4a3059ad7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: Look at that photo more carefully. You can see that highlighted. That is where the work history is
                listed. It is the work history of that section. It is asking for 5 years
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:40:14.239067Z"
        >
            <Origin>ae5c9ca5-49be-4ddf-95c7-4cc683a72688</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: Yes, I apologize - I'm now looking at the image more carefully. You're in the "Work/Education"
                section under "Provide Background Information" (Step 1), and it's specifically asking for:
            </Paragraph>
            <Paragraph>
                "List all the jobs that you had in the five years before you became unable to work. Start with your most
                recent"
            </Paragraph>
            <Paragraph>
                That's the only work history they're asking for at this stage. I apologize for speculating about a 15-year
                history that isn't currently being requested. Let's focus on exactly what's on the screen.
            </Paragraph>
            <Paragraph>Would you like help organizing just the 5-year work history they're asking for here?</Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:41:38.004939Z"
        >
            <Origin>dbb2ae20-1b6c-4c9f-a8bf-fa24d7710568</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: I can do it. All I am saying is that it is two jobs. I suppose it's enough to see that I simply worked
                with my friend for 4 years and didn't accomplish anything useful. And the other job I had for 5 months and
                left because I got overwhelmed
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:41:38.004939Z"
        >
            <Origin>a7e4ee08-404b-4ded-bc16-8721d6893835</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: You're right - those two jobs tell an important story even in that shorter timeframe:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Four years with Bayle (hedge fund)</Line>
                <Line>Friend as employer providing maximum accommodation</Line>
                <Line>No revenue/business success despite long duration</Line>
                <Line>Shows inability to succeed even in ideal conditions</Line>
                <Line>Five month position</Line>
                <Line>Quick breakdown</Line>
                <Line>Overwhelmed despite experience</Line>
                <Line>Pattern of inability to sustain regular employment</Line>
            </Paragraph>
            <Paragraph>Claude: Even this abbreviated work history demonstrates key points about your disability:</Paragraph>
            <Paragraph>
                <List />
                <Line>Need for unusual accommodation</Line>
                <Line>Inability to maintain regular employment</Line>
                <Line>Pattern of breakdown in normal work environments</Line>
            </Paragraph>
            <Paragraph>
                Would you like to discuss how to present these jobs in the form to best convey these important aspects?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:42:47.566179Z"
        >
            <Origin>6c371de4-f04a-49b8-8e7c-3e9f20569394</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: But still, I made a high salary at my last job. I have a wealthy friend. He was willing to pay me to
                do this thing that failed. It was just me and him. I did all the work. there were almost no coworker
                interactions until the end, and I had trouble with those interactions
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:42:47.566179Z"
        >
            <Origin>e6278023-e15f-4cd3-8534-f8a7ae8ba054</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Claude: This actually strengthens your case for disability. Consider:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Despite high salary and minimal pressure:</Line>
                <Line>No revenue generation</Line>
                <Line>No business success</Line>
                <Line>Friend essentially funding position</Line>
                <Line>Shows even ideal conditions weren't sustainable</Line>
                <Line>Work structure required:</Line>
                <Line>Almost complete isolation</Line>
                <Line>No coworker interactions</Line>
                <Line>Friend as understanding employer</Line>
                <Line>Extremely unusual accommodation</Line>
                <Line>When interaction was required:</Line>
                <Line>Had difficulties with coworkers</Line>
                <Line>Showed why traditional employment impossible</Line>
                <Line>Demonstrates social functioning limitations</Line>
                <Line>Even minimal workplace interaction was problematic</Line>
            </Paragraph>
            <Paragraph>This shows that even with:</Paragraph>
            <Paragraph>
                <List />
                <Line>Wealthy friend providing support</Line>
                <Line>High salary removing financial pressure</Line>
                <Line>Minimal social requirements</Line>
                <Line>Maximum accommodation</Line>
            </Paragraph>
            <Paragraph>You still couldn't sustain functional employment.</Paragraph>
            <Paragraph>
                Would you like help phrasing this in a way that clearly shows how these circumstances, despite appearing
                privileged, actually demonstrate your inability to maintain regular employment?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:43:43.631795Z"
        >
            <Origin>d4471983-c136-42ae-a1d6-826f35efd07a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Doug: It doesn't give me the space to say that:</Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-08T23:43:43.631795Z"
        >
            <Origin>9c4725cd-1667-41f7-afc2-b989a00b8759</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: You're right - this form is just collecting basic employment facts: job title, business type, dates,
                hours, and pay rate. It doesn't provide space for explaining the circumstances or nature of the work.
            </Paragraph>
            <Paragraph>Claude: For your most recent position, you would need to enter:</Paragraph>
            <Paragraph>
                <List />
                <Line>Job Title: Quantitative Researcher (or similar title)</Line>
                <Line>Type of Business: Investment Management/Hedge Fund</Line>
                <Line>Dates: (When you started with Bayle to June 2023)</Line>
                <Line>Hours per Day: Your typical hours</Line>
                <Line>Days per Week: Your typical schedule</Line>
                <Line>Rate of Pay: Your salary and frequency</Line>
            </Paragraph>
            <Paragraph>The context about:</Paragraph>
            <Paragraph>
                <List />
                <Line>Working with a friend</Line>
                <Line>Lack of revenue</Line>
                <Line>Unusual accommodation</Line>
                <Line>Social difficulties</Line>
                <Line>Nature of the failure</Line>
            </Paragraph>
            <Paragraph>
                Will likely come later in the application process when they ask about how your condition affects your
                ability to work. For now, they just want the basic employment facts.
            </Paragraph>
            <Paragraph>Would you like help with the specific entries for this form?</Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:45:14.774406Z"
        >
            <Origin>836d8023-e909-4c71-871a-074564d4ac05</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: Where is that Claude? Do you see the two steps after? Sign Medical release and confirmation. I don't
                think I have the power to say much. I need to work with my therapist on what to day
            </Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-08T23:45:14.774406Z"
        >
            <Origin>5fc26dc8-f908-473f-acb6-bac9afb5719f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Claude: Ah yes, I see the complete navigation now at the top of the screen:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Provide Background Information (where you are now)</Line>
                <Line>Provide Disability Information</Line>
                <Line>Sign Medical Release</Line>
                <Line>Confirmation</Line>
            </Paragraph>
            <Paragraph>
                You're absolutely right - this current section is just collecting basic facts. The detailed explanation of
                how your condition affects your work will come in the "Provide Disability Information" section, and your
                therapist and other medical providers will provide crucial documentation through the medical release
                process.
            </Paragraph>
            <Paragraph>
                For now, just focus on accurately filling out the basic employment information they're asking for. You'll
                work with your therapist and other providers to document the impact of your condition and why you need
                disability support.
            </Paragraph>
            <Paragraph>
                Would you like help with just the factual information they're requesting in this current section?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:46:27.209895Z"
        >
            <Origin>b7c6ee4c-dede-4277-a398-a93e6f705d30</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: Claude that is the section I am in. Do you not see? This is what there is. Is it possible that you
                don't understand what I patient actually provides in this form? Are you confusing it with what a healthcare
                provider gets to say?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:46:27.209895Z"
        >
            <Origin>237e6c8a-64f7-48a1-a096-4428c666199b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: I apologize - you're absolutely right. Looking at your screenshots more carefully now, I can see
                that these forms are just collecting basic factual information from you as the applicant:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>"Provide Background Information" section includes:</Line>
                <Line>Identification</Line>
                <Line>Medical (basic info)</Line>
                <Line>Work/Education (basic facts)</Line>
                <Line>Remarks (limited to 750 characters)</Line>
                <Line>Review</Line>
                <Line>Then it moves to:</Line>
                <Line>Sign Medical Release</Line>
                <Line>Confirmation</Line>
            </Paragraph>
            <Paragraph>
                I was incorrectly assuming there would be more extensive sections for you to explain your situation. It
                seems the detailed documentation of how your condition affects your ability to work will primarily come from
                your healthcare providers through the medical release process, not from you directly in this application.
            </Paragraph>
            <Paragraph>
                Thank you for the correction. Would you like to focus on just what these forms are actually asking for?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:48:13.573267Z"
        >
            <Origin>1730e035-766a-47de-a3a9-792af0b0a0c1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: Well, I can do the basics. I can write down my jobs. At one point, I coowned the company with my
                friend. How do I account for that in my work history? I am not sure what payment mechanism I had. My friend
                paid me
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:48:13.573267Z"
        >
            <Origin>da15e6bc-a417-4fb9-8275-6346894b8227</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: Since this was effectively self-employment through your friend's hedge fund, you'd list it as
                self-employment income. Given that you mentioned receiving K1/1099s earlier, you would have been either:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>A partner (K1)</Line>
                <Line>An independent contractor (1099)</Line>
            </Paragraph>
            <Paragraph>For the job listing form, you could list:</Paragraph>
            <Paragraph>
                <List />
                <Line>Job Title: Managing Partner or Quantitative Researcher</Line>
                <Line>Type of Business: Investment Management/Hedge Fund</Line>
                <Line>Dates: Your start and end dates</Line>
                <Line>Hours/Days: Your typical schedule</Line>
                <Line>Rate of Pay: Your actual income (which should match your tax records)</Line>
            </Paragraph>
            <Paragraph>If you're unsure about the exact payment mechanism, you can:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Check your tax returns from those years</Line>
                <Line>Ask your friend what forms he issued you</Line>
                <Line>Look for K1s or 1099s in your records</Line>
            </Paragraph>
            <Paragraph>Would you like help determining which payment type you had during that period?</Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:48:37.672594Z"
        >
            <Origin>8f406334-8b4e-4ec8-a341-ba77b88f589f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Doug: We co-owned it at one point</Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:48:37.672594Z"
        >
            <Origin>e9e10353-f0c1-47a9-b2b4-a50e48ec2f0f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: Ah, for co-ownership, you would want to list this as self-employment, specifically as a business
                owner/partner. When you owned part of the company:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Job Title: Co-owner or Managing Partner</Line>
                <Line>Type of Business: Investment Management/Hedge Fund</Line>
                <Line>Dates: Period during which you were co-owner</Line>
                <Line>Hours/Days: Your typical schedule</Line>
                <Line>Rate of Pay: Whatever distributions/income you received</Line>
            </Paragraph>
            <Paragraph>
                The key is having this match your tax records - for the period when you were co-owner, you would have
                received:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>K1 forms as a partner</Line>
                <Line>Documentation of your ownership share</Line>
                <Line>Records of any distributions</Line>
            </Paragraph>
            <Paragraph>
                Would you like to check your tax records to confirm the exact dates of co-ownership and what your official
                role/income was during that period?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:52:42.031849Z"
        >
            <Origin>fb8a5280-3b3a-4e63-b15e-6519fa1d7744</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: I'm not sure. I may have still drawn a salary as an independent contractor. I asked my friend:
            </Paragraph>
            <Paragraph>
                Hi Bayle, I am filling out a work history. When we co-owned Covariant together, do you know how I might
                characterize the nature of my employment? Was I both a co-owner and contractor for the fund? I don't recall
                how we set it up If I was a contractor, do I list two different jobs? Or was I always a contractor and you
                simply purchased equity from me in a way that was related to the business, but that didn't change my
                relationship to the form of my employment? Thanks, Doug
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:52:42.031849Z"
        >
            <Origin>cbbac3ed-bcf2-4423-88bf-492e4af5981b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: That's a good question to ask Bayle. From an SSDI application perspective, they'll want to know:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>How your income was actually reported to the IRS</Line>
                <Line>Whether there were distinct periods with different employment relationships</Line>
                <Line>Whether to list this as one job or two</Line>
            </Paragraph>
            <Paragraph>The difference between:</Paragraph>
            <Paragraph>
                <List />
                <Line>Being a contractor who owned equity</Line>
                <Line>Being a co-owner who drew contractor payments</Line>
            </Paragraph>
            <Paragraph>Could affect how you list it in the work history.</Paragraph>
            <Paragraph>Let's wait for Bayle's response about:</Paragraph>
            <Paragraph>
                <List />
                <Line>What tax forms you received (1099 vs K1)</Line>
                <Line>Whether your employment status changed</Line>
                <Line>How the equity ownership was structured</Line>
            </Paragraph>
            <Paragraph>
                Then we can determine if this should be listed as one position or two different roles in your work history.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:53:29.763043Z"
        >
            <Origin>4be051bf-a3c3-4d2d-a415-ecae4c6d60b8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Doug: Okay I 'll wait. How do I account for different forms of pay?</Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:53:29.763043Z"
        >
            <Origin>28b458eb-1be7-4987-933f-512813724695</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: For different forms of pay on the SSA form, you'll need to be accurate about how you were
                compensated during each period. The form has a dropdown menu for "Frequency" next to the pay amount, which
                typically includes options like:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Hourly</Line>
                <Line>Weekly</Line>
                <Line>Bi-weekly</Line>
                <Line>Monthly</Line>
                <Line>Annually</Line>
            </Paragraph>
            <Paragraph>If your pay structure changed during your time there (for example):</Paragraph>
            <Paragraph>
                <List />
                <Line>Full salary to reduced salary</Line>
                <Line>Contractor rate to ownership distributions</Line>
                <Line>Different payment schedules</Line>
            </Paragraph>
            <Paragraph>
                You'll want to match what was reported on your tax documents. Once Bayle clarifies the employment structure,
                we can determine how to best represent the changes in pay. If there were significant changes in pay
                structure, this might be another reason to list it as separate positions in your work history.
            </Paragraph>
            <Paragraph>
                Would you like to look up your actual compensation amounts from your tax records while we wait for Bayle's
                response?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:54:07.722180Z"
        >
            <Origin>bc916007-175d-45f6-a71b-3eff466ecee6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: No my salary was changed to accommodate my circumstances. It also had a yearly adjustment. So there
                was no one salary
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:54:07.722180Z"
        >
            <Origin>2fd4d816-12f7-4828-a8dc-56a7099ac6a6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Claude: In this case, for the "Rate of Pay" field, you could:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Use your final regular salary before the reduction to 15%</Line>
                <Line>Use an average of your annual compensation</Line>
                <Line>List your highest regular salary</Line>
            </Paragraph>
            <Paragraph>The form doesn't provide a way to show:</Paragraph>
            <Paragraph>
                <List />
                <Line>Salary adjustments over time</Line>
                <Line>Reduction to 15% at the end</Line>
                <Line>Yearly changes</Line>
                <Line>Accommodation-based changes</Line>
            </Paragraph>
            <Paragraph>
                This is one of those situations where the basic form can't capture the full complexity of your employment
                situation. The important thing is to provide a figure that accurately represents your earnings as reported
                to the IRS.
            </Paragraph>
            <Paragraph>
                Would you like help calculating an appropriate figure to enter, either using your final full salary or an
                average?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:55:11.326464Z"
        >
            <Origin>b2e12872-eefc-4a0a-8913-971ecb23ad16</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I could simply provide my average monthly salary over the time by taking all the times I was paid and
                dividing by the number of months. Is that a reasonable measure?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-08T23:55:11.326464Z"
        >
            <Origin>988da364-220c-4910-a324-b408e7148a6a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: Yes, that's a very reasonable and accurate way to represent your pay! Calculating the average
                monthly salary by taking your total compensation divided by number of months worked would:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Account for all variations including:</Line>
                <Line>Yearly adjustments</Line>
                <Line>Changes in circumstances</Line>
                <Line>The final reduced period</Line>
                <Line>Any other fluctuations</Line>
                <Line>Provide a mathematically accurate figure that:</Line>
                <Line>Can be verified against tax records</Line>
                <Line>Represents the overall compensation</Line>
                <Line>Smooths out the variations</Line>
                <Line>Is simple to explain if asked</Line>
            </Paragraph>
            <Paragraph>
                This approach is both truthful and straightforward. You can enter this average amount and select "Monthly"
                from the frequency dropdown menu.
            </Paragraph>
            <Paragraph>Would you like help with the calculation, or do you have those numbers readily available?</Paragraph>
        </Message>
    </Chapter>
);
