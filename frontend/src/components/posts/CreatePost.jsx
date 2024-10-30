import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/axios';

export const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [codeSnippet, setCodeSnippet] = useState('');
  const [codeSnippetFile, setCodeSnippetFile] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e, setFileFunction) => {
    setFileFunction(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('codeSnippet', codeSnippet);

    if (codeSnippetFile) {
      formData.append('codeSnippetFile', codeSnippetFile);
    }

    if (file) {
      formData.append('file', file);
    }

    try {
      await api.post('http://localhost/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
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
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows="4"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          value={codeSnippet}
          onChange={(e) => setCodeSnippet(e.target.value)}
          placeholder="Code Snippet (optional)"
          rows="4"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setCodeSnippetFile)}
         
          placeholder="Upload Code Snippet File (optional)"
          accept=".txt"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setFile)}
          placeholder="Upload Additional File (optional)"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};
