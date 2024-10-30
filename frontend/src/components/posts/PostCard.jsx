import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4">
      <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
      <p className="text-gray-800">{post.content}</p>

      {post.codeSnippet && (
        <pre className="mt-4 bg-gray-100 text-gray-700 p-2 rounded-md">
          {post.codeSnippet}
        </pre>
      )}
      
      {post.codeSnippetUrl && (
        <a
          href={post.codeSnippetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 bg-blue-500 text-white p-2 rounded-md text-center"
        >
          View Code Snippet File
        </a>
      )}

      {post.fileUrl && (
        <a
          href={post.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 bg-green-500 text-white p-2 rounded-md text-center"
        >
          View Attached File
        </a>
      )}

      <span className="text-sm text-gray-500">
        {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
      </span>
    </div>
  );
};
