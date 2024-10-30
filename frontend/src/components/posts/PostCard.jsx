import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4">
      <p className="text-gray-800">{post.content}</p>
      {post.codeSnippetUrl && <pre className="mt-4 bg-gray-800 text-white p-4 rounded-md">{post.codeSnippetUrl}</pre>}
      <span className="text-sm text-gray-500">{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</span>
    </div>
  );
};
