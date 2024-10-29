// src/components/notifications/NotificationList.jsx
import React, { useState, useEffect } from 'react';
import { NotificationCard } from './NotificationCard';
import api from '../../utils/axios';

export const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await api.get('/notification');
        setNotifications(response.data);
      } catch (err) {
        setError('Failed to fetch notifications');
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (loading) {
    return <div className="text-center">Loading notifications...</div>;
  }

  if (error) {
    return <div className="text-red-600 text-center">{error}</div>;
  }

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <NotificationCard key={notification._id} notification={notification} />
      ))}
    </div>
  );
};