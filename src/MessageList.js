import React from 'react';
import Alert from 'react-bootstrap/Alert';

/** List of messages.
 *
 * Props:
 * - messages: array of message objects { text, style }
 *
 * { ImageForm } -> MessageList
 */

function MessageList({ messages }) {
  return (
    <div className="MessageList mt-3">
      { messages.map(m => (
        <Alert variant={m.style} key={`Message: ${m.text}`}>
          {m.text}
        </Alert>
      ))}
    </div>
  )
}

export default MessageList