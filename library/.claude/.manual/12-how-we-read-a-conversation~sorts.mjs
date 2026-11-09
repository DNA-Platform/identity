export const sorts = ['Matter', 'Summary', 'Result', 'Formalism', 'Correction', 'Importance', 'Revision', 'Archive', 'Idea', 'Question', 'Reminder', 'Remark', 'Note', 'Turn', 'Thought', 'Comment', 'Reaction', 'Description'];
export const marked = new RegExp(`<(${sorts.join('|')})>[\\s\\S]*?</\\1>`, 'gu');
