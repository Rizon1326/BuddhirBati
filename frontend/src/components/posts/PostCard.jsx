// src/components/posts/PostCard.jsx
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4">
      <div className="mb-4">
        <p className="text-gray-800">{post.content}</p>
      </div>
      {post.codeSnippetUrl && (
        <div className="mt-4 bg-gray-800 rounded-md p-4">
          <pre className="text-white font-mono text-sm overflow-x-auto">
            {post.codeSnippetUrl}
          </pre>
        </div>
      )}
      <div className="mt-4 text-sm text-gray-500">
        {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
      </div>
    </div>
  );
};
