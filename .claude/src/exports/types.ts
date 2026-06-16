// Export types — the shape of the data inside a Claude export ZIP.
// See: library/export-format/01-schema.md

export interface ExportUser {
  uuid: string;
  full_name: string;
  email_address: string;
  verified_phone_number: string | null;
}

export interface ExportContentBlock {
  start_timestamp: string;
  stop_timestamp: string;
  flags: unknown;
  type: string;
  text: string;
  citations: unknown[];
}

export interface ExportMessage {
  uuid: string;
  text: string;
  content: ExportContentBlock[];
  sender: 'human' | 'assistant';
  created_at: string;
  updated_at: string;
  attachments: unknown[];
  files: unknown[];
  parent_message_uuid: string;
}

export interface ExportConversation {
  uuid: string;
  name: string;
  summary: string;
  created_at: string;
  updated_at: string;
  account: { uuid: string };
  chat_messages: ExportMessage[];
}

export interface ExportDoc {
  uuid: string;
  filename: string;
  content: string;
}

export interface ExportProject {
  uuid: string;
  name: string;
  description: string;
  is_private: boolean;
  is_starter_project: boolean;
  prompt_template: string;
  created_at: string;
  updated_at: string;
  creator: { uuid: string; full_name: string };
  docs: ExportDoc[];
}

export interface ExportMemory {
  conversations_memory: string;
}
