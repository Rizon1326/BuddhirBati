import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/axios';

export const CreatePost = () => {
  const [content, setContent] = useState('');
  const [codeSnippet, setCodeSnippet] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/post', { content, codeSnippet });
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create post');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      {error && <div className="mb-4 rounded-md bg-red-50 p-4 text-red-700">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="What's on your mind?" rows="4" required />
        <textarea value={codeSnippet} onChange={(e) => setCodeSnippet(e.target.value)} placeholder="Paste your code here (optional)..." rows="4" />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};
