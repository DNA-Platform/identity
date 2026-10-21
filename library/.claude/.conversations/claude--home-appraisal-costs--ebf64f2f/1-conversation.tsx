import { Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2024-11-26T16:56:53.569350Z"
        >
            <Origin>5f2903a4-a71e-41bc-8af1-aee15265f89e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How much does it cost to have a house appraised</Paragraph>
        </Message>
        <Message
            at="2024-11-26T16:56:53.569350Z"
        >
            <Origin>d42f71cf-f199-42d1-b2f6-cc2cb39fea9c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                A typical home appraisal in the US costs between $300 and $600 for most residential properties, though the
                exact cost varies based on several factors:
            </Paragraph>
            <Paragraph>Key factors affecting appraisal cost:</Paragraph>
            <Paragraph>
                <List />
                <Line>Size of the home (larger homes generally cost more to appraise)</Line>
                <Line>Location (urban areas tend to be more expensive than rural)</Line>
                <Line>Property type (single-family homes are usually less expensive than multi-family)</Line>
                <Line>Property complexity (unique features or extensive land can increase cost)</Line>
                <Line>Market conditions (busy housing markets may have higher fees)</Line>
            </Paragraph>
            <Paragraph>Special circumstances that can increase costs:</Paragraph>
            <Paragraph>
                <List />
                <Line>Rush orders (expedited appraisals often cost 20-50% more)</Line>
                <Line>FHA appraisals (typically $50-100 more than conventional)</Line>
                <Line>Properties in remote locations (travel fees may apply)</Line>
                <Line>Complex or unusual properties</Line>
            </Paragraph>
            <Paragraph>
                Most lenders require the buyer to pay for the appraisal upfront, though in some cases this cost can be
                rolled into closing costs. For conventional home purchases, the appraisal fee is typically paid when the
                appraisal is ordered, not at closing.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-26T17:10:32.525036Z"
        >
            <Origin>6e1074a8-8d30-4e3e-a081-124ff2cdfc83</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is 4% per year growth for 15 years - what percentage</Paragraph>
        </Message>
        <Message
            at="2024-11-26T17:10:32.525036Z"
        >
            <Origin>9885ad65-c303-4199-bff1-d55f004f2645</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me solve this step by step.</Paragraph>
            <Paragraph>To find the total growth over 15 years with 4% annual growth:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The formula is: Final = Initial × (1 + r)^t where r = 0.04 (4%) and t = 15 years</Line>
                <Line>Starting with $1 (or 100%): Final = 1 × (1 + 0.04)^15 = 1 × (1.04)^15</Line>
                <Line>Let's calculate: 1.04^15 = 1.80094...</Line>
                <Line>To convert to percentage growth: (1.80094 - 1) × 100 = 80.094%</Line>
            </Paragraph>
            <Paragraph>Therefore, 4% growth per year for 15 years results in approximately 80.1% total growth.</Paragraph>
            <Paragraph>To verify this:</Paragraph>
            <Paragraph>
                <List />
                <Line>Starting with $100</Line>
                <Line>After 15 years at 4% growth</Line>
                <Line>You would have $180.09</Line>
                <Line>Representing an 80.1% increase from the original amount</Line>
            </Paragraph>
        </Message>
        <Message
            at="2024-11-26T17:32:20.150265Z"
        >
            <Origin>22c9135c-27e8-46a0-8845-8565d24b6773</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is it possible to use python to fill in a google sheet column? Or any other language? I know google has
                custom logic you can add
            </Paragraph>
        </Message>
        <Message
            at="2024-11-26T17:32:20.150265Z"
        >
            <Origin>43e15011-61a3-4cc2-b92a-477b1a1f308d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes, there are several ways to interact with and update Google Sheets programmatically:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Using Python with Google Sheets API:</Line>
            </Paragraph>
            <CodeBox
                language="python"
            >
                {`${''}from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from google.oauth2 import service_account

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

def update_sheet(spreadsheet_id, range_name, values):
    creds = service_account.Credentials.from_service_account_file(
        'credentials.json', scopes=SCOPES)
    
    service = build('sheets', 'v4', credentials=creds)
    body = {'values': values}
    
    service.spreadsheets().values().update(
        spreadsheetId=spreadsheet_id,
        range=range_name,
        valueInputOption='USER_ENTERED',
        body=body).execute()`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Google Apps Script (JavaScript):</Line>
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`${''}function updateColumn() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange("A2:A10"); // Adjust range as needed
  
  // Example: Fill with numbers
  var values = [];
  for(var i = 1; i <= range.getNumRows(); i++) {
    values.push([i]); // Each inner array represents a row
  }
  
  range.setValues(values);
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Alternative Python libraries:</Line>
                <Line>
                    <Word>
                        <Verbatim />
                        gspread
                    </Word>: A more user-friendly Python library
                </Line>
            </Paragraph>
            <CodeBox
                language="python"
            >
                {`${''}import gspread
from oauth2client.service_account import ServiceAccountCredentials

gc = gspread.authorize(credentials)
sheet = gc.open("Your Sheet Name").sheet1
sheet.update('A2:A10', [[1], [2], [3]])  # Values in nested list format`}
            </CodeBox>
            <Paragraph>Key things you'll need for any API approach:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Google Cloud Project</Line>
                <Line>Enable Google Sheets API</Line>
                <Line>Create credentials (OAuth 2.0 or Service Account)</Line>
                <Line>Required permissions on the spreadsheet</Line>
            </Paragraph>
            <Paragraph>The easiest approach for non-programmers is Google Apps Script, as it:</Paragraph>
            <Paragraph>
                <List />
                <Line>Requires no external setup</Line>
                <Line>Is built into Google Sheets</Line>
                <Line>Has simpler authentication</Line>
                <Line>Can be triggered from the sheet itself</Line>
            </Paragraph>
            <Paragraph>To get started with Apps Script:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Open your Google Sheet</Line>
                <Line>Click Extensions → Apps Script</Line>
                <Line>Write and run your script</Line>
            </Paragraph>
            <Paragraph>If you prefer Python, start by:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Creating a Google Cloud project</Line>
                <Line>Enabling Sheets API</Line>
                <Line>Creating credentials</Line>
                <Line>
                    Installing required libraries (<Word>
                        <Verbatim />
                        google-api-python-client
                    </Word>, <Word>
                        <Verbatim />
                        google-auth-httplib2
                    </Word>, <Word>
                        <Verbatim />
                        google-auth-oauthlib
                    </Word>)
                </Line>
            </Paragraph>
            <Paragraph>Would you like me to elaborate on any of these approaches?</Paragraph>
        </Message>
        <Message
            at="2024-11-26T17:33:51.609507Z"
        >
            <Origin>b4da59b9-2882-400c-ae6c-a3e354628d08</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What can I do with app scripts? What language is it? Can it do math readonable wekk?</Paragraph>
        </Message>
        <Message
            at="2024-11-26T17:33:51.609507Z"
        >
            <Origin>3a121bad-7254-47c9-9d35-2f633305462d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Google Apps Script uses JavaScript and can do quite a lot! It's quite powerful for math and automation. Here
                are the key capabilities:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Math/Calculations:</Line>
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`${''}function calculateExample() {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // Complex math operations
  var value = Math.pow(2, 8);
  var sqrt = Math.sqrt(144);
  
  // Statistical functions
  var numbers = [1, 2, 3, 4, 5];
  var sum = numbers.reduce((a, b) => a + b, 0);
  var average = sum / numbers.length;
  
  // Can also use built-in Google Sheets formulas
  sheet.getRange("A1").setFormula("=AVERAGE(B1:B10)");
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Common Use Cases:</Line>
                <Line>Automated data cleanup</Line>
                <Line>Custom formatting</Line>
                <Line>Email automation (send emails based on sheet data)</Line>
                <Line>Create custom menus and buttons</Line>
                <Line>Import data from other sources</Line>
                <Line>Schedule recurring tasks</Line>
                <Line>Create custom functions</Line>
                <Line>Example of Custom Menu:</Line>
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Tools')
    .addItem('Clean Data', 'cleanData')
    .addItem('Send Reports', 'sendReports')
    .addToUi();
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Example of Custom Function:</Line>
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// Use in sheet like =DOUBLE(A1)
function DOUBLE(input) {
  return input * 2;
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Data Processing Example:</Line>
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`${''}function processData() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  // Process each row
  data.forEach(function(row, index) {
    if (index === 0) return; // Skip header
    
    // Example calculations
    var quantity = row[1];
    var price = row[2];
    var total = quantity * price;
    
    // Update total column
    sheet.getRange(index + 1, 4).setValue(total);
  });
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Automation Features:</Line>
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// Run every day at midnight
function scheduleDaily() {
  ScriptApp.newTrigger('myFunction')
    .timeBased()
    .everyDays(1)
    .atHour(0)
    .create();
}

// React to sheet changes
function onEdit(e) {
  var range = e.range;
  var value = e.value;
  // Do something when cells are edited
}`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Email Integration:</Line>
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`function sendReport() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  MailApp.sendEmail({
    to: "example@email.com",
    subject: "Daily Report",
    body: "Today's totals: " + calculateTotals(data)
  });
}`}
            </CodeBox>
            <Paragraph>Key Benefits:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Free to use</Line>
                <Line>Runs in the cloud (no local setup needed)</Line>
                <Line>Direct integration with Google services</Line>
                <Line>Can be triggered by events or time</Line>
                <Line>Good for automation and calculations</Line>
                <Line>Built-in version control</Line>
                <Line>Can share scripts with team members</Line>
            </Paragraph>
            <Paragraph>Limitations:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Execution time limits (6 minutes per run)</Line>
                <Line>Quotas on email sending and API calls</Line>
                <Line>Can't use external JavaScript libraries easily</Line>
                <Line>Limited debugging tools compared to full IDEs</Line>
            </Paragraph>
            <Paragraph>It's particularly good for:</Paragraph>
            <Paragraph>
                <List />
                <Line>Automating repetitive tasks</Line>
                <Line>Building custom spreadsheet tools</Line>
                <Line>Creating report automation</Line>
                <Line>Data validation and cleanup</Line>
                <Line>Custom calculations and formulas</Line>
                <Line>Connecting different Google services</Line>
            </Paragraph>
            <Paragraph>The math capabilities are quite robust as it has access to:</Paragraph>
            <Paragraph>
                <List />
                <Line>All JavaScript math functions</Line>
                <Line>Google Sheets' built-in functions</Line>
                <Line>Custom mathematical operations</Line>
                <Line>Array operations for bulk calculations</Line>
            </Paragraph>
            <Paragraph>Would you like me to provide a specific example of any of these capabilities?</Paragraph>
        </Message>
        <Message
            at="2024-11-26T18:31:23.039316Z"
        >
            <Origin>40f5d06e-9226-434a-8a28-055a284ba610</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can I keep some posts private and make others public on reddit?</Paragraph>
        </Message>
        <Message
            at="2024-11-26T18:31:23.039316Z"
        >
            <Origin>37bc892b-91db-4d1a-a758-210a90078430</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, you cannot set individual posts as private on Reddit. Reddit offers these main visibility options for
                posts:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Public - Posted to a public subreddit, visible to everyone</Line>
                <Line>Hidden - Only hides posts from YOUR view (others can still see them)</Line>
                <Line>Deleted - Removes the post entirely but cannot be recovered</Line>
                <Line>Posting to your profile - Still public but appears on your profile</Line>
                <Line>Posting in a private/restricted subreddit - Only approved members can see</Line>
            </Paragraph>
            <Paragraph>If you want to keep some content private, you could:</Paragraph>
            <Paragraph>
                <List />
                <Line>Use a separate Reddit account for private/personal posts</Line>
                <Line>Save posts as drafts in a notes app instead of posting</Line>
                <Line>Post sensitive content only in private subreddits where you trust the members</Line>
                <Line>Use the "Save" feature to bookmark posts privately for yourself</Line>
            </Paragraph>
            <Paragraph>
                Note that even deleted posts may be cached or archived elsewhere, so it's best to assume anything posted to
                Reddit could become permanently public.
            </Paragraph>
        </Message>
    </Chapter>
);
