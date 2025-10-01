import React, { useState } from 'react';
import { Bell, CheckCircle, AlertCircle, Calendar, Heart, Pill, TrendingUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/BackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import MobileLayout from '@/components/MobileLayout';
import { AdaptiveLogo } from '@/components/AdaptiveLogo';
import { ThemeToggle } from '@/components/ThemeToggle';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'cycle',
      icon: Calendar,
      title: 'Cycle Reminder',
      message: 'Your period is expected in 3 days. Track symptoms for better insights.',
      time: '2 hours ago',
      read: false,
      priority: 'high'
    },
    {
      id: 2,
      type: 'wellness',
      icon: Heart,
      title: 'Wellness Check',
      message: 'Great job! You\'ve logged symptoms for 7 days straight.',
      time: '1 day ago',
      read: false,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'medication',
      icon: Pill,
      title: 'Medication Reminder',
      message: 'Time to take your vitamin supplements.',
      time: '2 days ago',
      read: true,
      priority: 'high'
    },
    {
      id: 4,
      type: 'insights',
      icon: TrendingUp,
      title: 'New AI Insights',
      message: 'Your sleep patterns show improvement. Check your detailed report.',
      time: '3 days ago',
      read: true,
      priority: 'low'
    },
    {
      id: 5,
      type: 'cycle',
      icon: Calendar,
      title: 'Cycle Logged',
      message: 'Your cycle data has been successfully recorded.',
      time: '1 week ago',
      read: true,
      priority: 'medium'
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const DesktopNotifications = () => (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pankhai-card mx-6 mt-6 mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <BackButton />
            <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
              <AdaptiveLogo className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                PankhAI
              </h1>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Notifications</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              onClick={() => window.location.href = '/dashboard'}
              size="sm" 
              variant="outline"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="flex gap-6 mx-6">
        {/* Sidebar Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="flex-1 space-y-6">
          {/* Notifications Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h2>
              {unreadCount > 0 && (
                <Badge className="bg-primary text-primary-foreground">
                  {unreadCount} new
                </Badge>
              )}
            </div>
            {unreadCount > 0 && (
              <Button 
                onClick={markAllAsRead}
                size="sm" 
                variant="outline"
              >
                Mark all as read
              </Button>
            )}
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {notifications.length === 0 ? (
              <Card className="pankhai-card p-12 text-center">
                <Bell className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No notifications</h3>
                <p className="text-muted-foreground">You're all caught up! New notifications will appear here.</p>
              </Card>
            ) : (
              notifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <Card 
                    key={notification.id}
                    className={`pankhai-card transition-all duration-200 hover:shadow-lg ${
                      !notification.read ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          notification.type === 'cycle' ? 'bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300' :
                          notification.type === 'wellness' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' :
                          notification.type === 'medication' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' :
                          'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className={`font-semibold ${!notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                  {notification.title}
                                </h3>
                                <Badge className={getPriorityColor(notification.priority)}>
                                  {notification.priority}
                                </Badge>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                )}
                              </div>
                              <p className={`text-sm ${!notification.read ? 'text-gray-700 dark:text-gray-300' : 'text-muted-foreground'} mb-2`}>
                                {notification.message}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {notification.time}
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {!notification.read && (
                                <Button
                                  onClick={() => markAsRead(notification.id)}
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 w-8 p-0"
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </Button>
                              )}
                              <Button
                                onClick={() => deleteNotification(notification.id)}
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </main>
      </div>
    </div>
  );

  const MobileNotifications = () => (
    <div className="p-4 space-y-6">
      <div className="mb-4">
        <BackButton />
      </div>
      {/* Mobile Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Bell className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Notifications</h1>
          {unreadCount > 0 && (
            <Badge className="bg-primary text-primary-foreground text-xs">
              {unreadCount}
            </Badge>
          )}
        </div>
        {unreadCount > 0 && (
          <Button 
            onClick={markAllAsRead}
            size="sm" 
            variant="outline"
            className="text-xs"
          >
            Mark all read
          </Button>
        )}
      </div>

      {/* Mobile Notifications List */}
      <div className="space-y-3">
        {notifications.length === 0 ? (
          <Card className="pankhai-card p-8 text-center">
            <Bell className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
            <h3 className="font-semibold mb-1">No notifications</h3>
            <p className="text-sm text-muted-foreground">You're all caught up!</p>
          </Card>
        ) : (
          notifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <Card 
                key={notification.id}
                className={`pankhai-card ${!notification.read ? 'ring-1 ring-primary/30 bg-primary/5' : ''}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      notification.type === 'cycle' ? 'bg-pink-100 text-pink-600' :
                      notification.type === 'wellness' ? 'bg-green-100 text-green-600' :
                      notification.type === 'medication' ? 'bg-blue-100 text-blue-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-medium text-sm ${!notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-1">
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                          <Button
                            onClick={() => deleteNotification(notification.id)}
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0"
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-muted-foreground">
                          {notification.time}
                        </p>
                        {!notification.read && (
                          <Button
                            onClick={() => markAsRead(notification.id)}
                            size="sm"
                            variant="ghost"
                            className="h-6 text-xs px-2"
                          >
                            Mark read
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <DesktopNotifications />
      </div>
      
      {/* Mobile Layout */}
      <div className="md:hidden">
        <MobileLayout>
          <MobileNotifications />
        </MobileLayout>
      </div>
    </>
  );
};

export default Notifications;