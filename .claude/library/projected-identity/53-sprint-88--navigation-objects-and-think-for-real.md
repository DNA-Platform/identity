# Sprint 88 — Navigation Objects and Think for Real

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Sprint 87 failed. The think pipeline broke on every real test. The write phase used transient status indicators instead of content. The read phase didn't poll. The navigation couldn't reach project conversations. Each fix was declared "working" without testing the hard case. Doug is disappointed and right to be.

The root cause: the code doesn't model the app as screens. It has flat methods callable from anywhere, manual sidebar refreshing, and navigation that skips screens. The app is a thing you point and click through. The code should mirror that.

## What must change

### 1. Navigation returns objects

Every navigation produces the next screen's object. The object's existence IS the verification.

```
app.sidebar.openProjects()     → ProjectsPage (has .cards list)
projectsPage.open('Claude')    → ProjectPage (has .conversations, .files)
projectPage.openConversation('Test') → ConversationPage (has .compose, .send, .read)
```

You can't call project methods without a project object. You can't call conversation methods without a conversation object. The types enforce the navigation.

### 2. Pages use inheritance

Base Page class with shared elements (sidebar). Specialized subclasses for each screen type. The sidebar content changes per page — on projects grid it shows project cards, on a project page it shows project conversations. The page object reads its sidebar automatically on construction.

### 3. Simplify response detection

Watch the text. If it's getting longer, Desktop is working. When it stops, it's done. No streaming indicators. No stop buttons. Just the text length stabilizing.

### 4. Remove send method complexity

Six send methods exist because the verify was broken. With proper content-based verification: one `send()` that waits for content, one `sendAsync()` that returns after confirmation. Remove the rest.

### 5. Test think through the real flow

Navigate to Claude project → open Test conversation → send a question → wait for text to appear and stop growing → read it. Objects all the way through. If any step fails, the object graph has a gap.

## Who does what

**Adam:** Refactor the navigation to return objects. Fix the project page to expose conversations. Simplify send methods. Implement text-growth response detection.

**Arthur:** Define the page inheritance hierarchy. Review the object graph.

**Claude:** Test think end to end once the navigation works. Create the Libraries topic conversation in the Claude project.

**Libby:** Update Reference Desk Architecture Patterns (ch 10) with the navigation-returns-objects pattern. Remove documentation that claims think works when it doesn't.
