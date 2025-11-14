import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Settings as SettingsIcon, Bell, Shield, Globe, User, Moon, Sun } from 'lucide-react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import MobileLayout from '@/components/MobileLayout';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    cycleReminders: true,
    medicationAlerts: false,
    dailyTips: true,
    weeklyReports: true
  });

  const [privacy, setPrivacy] = useState({
    dataSharing: false,
    analytics: true,
    profileVisibility: false
  });

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className="hidden md:block">
        <div className="min-h-screen bg-background">
          <PageHeader title="Settings" showBackButton={false} />
          <div className="flex">
            <Navigation />
            
            <main className="flex-1 p-6">
              <div className="max-w-4xl mx-auto">

            <div className="space-y-6">
              {/* Profile Settings */}
              <Card className="pankhai-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Profile Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">Display Name</label>
                      <input 
                        type="text" 
                        defaultValue="Priya" 
                        className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <input 
                        type="email" 
                        defaultValue="priya@example.com" 
                        className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                      />
                    </div>
                  </div>
                  <Button className="pankhai-button">Update Profile</Button>
                </CardContent>
              </Card>

              {/* Notification Settings */}
              <Card className="pankhai-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notification Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { key: 'cycleReminders', label: 'Cycle Reminders', description: 'Get notified about cycle predictions' },
                      { key: 'medicationAlerts', label: 'Medication Alerts', description: 'Reminders for supplements and medications' },
                      { key: 'dailyTips', label: 'Daily Health Tips', description: 'Receive personalized daily wellness tips' },
                      { key: 'weeklyReports', label: 'Weekly Reports', description: 'Summary reports of your health data' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 rounded-lg border border-border">
                        <div>
                          <div className="font-medium text-foreground">{item.label}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                        <Switch
                          checked={notifications[item.key as keyof typeof notifications]}
                          onCheckedChange={(checked) => 
                            setNotifications(prev => ({ ...prev, [item.key]: checked }))
                          }
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Privacy Settings */}
              <Card className="pankhai-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Privacy & Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { key: 'dataSharing', label: 'Data Sharing', description: 'Allow anonymized data for research' },
                      { key: 'analytics', label: 'Usage Analytics', description: 'Help improve the app with usage data' },
                      { key: 'profileVisibility', label: 'Profile Visibility', description: 'Make profile visible to healthcare providers' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 rounded-lg border border-border">
                        <div>
                          <div className="font-medium text-foreground">{item.label}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                        <Switch
                          checked={privacy[item.key as keyof typeof privacy]}
                          onCheckedChange={(checked) => 
                            setPrivacy(prev => ({ ...prev, [item.key]: checked }))
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <Button variant="outline" className="mr-3">Change Password</Button>
                    <Button variant="outline">Two-Factor Authentication</Button>
                  </div>
                </CardContent>
              </Card>

              {/* App Preferences */}
              <Card className="pankhai-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <SettingsIcon className="w-5 h-5" />
                    App Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Theme Toggle */}
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3">
                        {darkMode ? <Moon className="w-5 h-5 text-foreground" /> : <Sun className="w-5 h-5 text-foreground" />}
                        <div>
                          <div className="font-medium text-foreground">Dark Mode</div>
                          <div className="text-sm text-muted-foreground">Switch between light and dark themes</div>
                        </div>
                      </div>
                      <Switch
                        checked={darkMode}
                        onCheckedChange={setDarkMode}
                      />
                    </div>

                    {/* Language Selection */}
                    <div className="p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="w-5 h-5 text-foreground" />
                        <div className="font-medium text-foreground">Language</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">English</Button>
                        <Button variant="outline" size="sm">हिंदी</Button>
                      </div>
                    </div>

                    {/* Data Export */}
                    <div className="p-4 rounded-lg border border-border">
                      <div className="font-medium text-foreground mb-2">Data Management</div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Export Data</Button>
                        <Button variant="outline" size="sm">Delete Account</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="pankhai-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Support & Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      📞 Contact Support
                    </Button>
                    <Button variant="outline" className="justify-start">
                      📝 Send Feedback
                    </Button>
                    <Button variant="outline" className="justify-start">
                      📚 Help Center
                    </Button>
                    <Button variant="outline" className="justify-start">
                      🔄 App Version: 1.0.0
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
  
  <div className="md:hidden">
    <MobileLayout>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">⚙️ Settings</h1>
      </div>
    </MobileLayout>
  </div>
</>
  );
};

export default Settings;