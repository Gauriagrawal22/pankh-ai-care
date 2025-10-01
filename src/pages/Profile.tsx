import React, { useState } from 'react';
import { User, Edit, Camera, Bell, Shield, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import Navigation from '@/components/Navigation';
import MobileLayout from '@/components/MobileLayout';
import BackButton from '@/components/BackButton';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Priya Sharma',
    email: 'priya@example.com',
    age: '28',
    height: '165',
    weight: '58',
    conditions: 'PCOS, Irregular Cycles'
  });

  const [notifications, setNotifications] = useState({
    cycleReminders: true,
    symptomTracking: true,
    wellness: true,
    reports: false
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save to backend in real app
  };

  const DesktopProfile = () => (
    <div className="min-h-screen bg-background">
      <header className="pankhai-card mx-6 mt-6 mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <BackButton />
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                पंखAI
              </h1>
              <p className="text-sm text-muted-foreground">Profile Settings</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex gap-6 mx-6">
        <Navigation />
        
        <main className="flex-1 space-y-8">
          {/* Profile Information */}
          <Card className="pankhai-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Personal Information</CardTitle>
              <Button
                variant={isEditing ? "default" : "outline"}
                size="sm"
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              >
                {isEditing ? 'Save' : <><Edit className="w-4 h-4 mr-2" />Edit</>}
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-glow">
                    <Camera className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{profile.name}</h3>
                  <p className="text-muted-foreground">{profile.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    disabled={!isEditing}
                    className="pankhai-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    disabled={!isEditing}
                    className="pankhai-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    value={profile.age}
                    onChange={(e) => setProfile({...profile, age: e.target.value})}
                    disabled={!isEditing}
                    className="pankhai-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    value={profile.height}
                    onChange={(e) => setProfile({...profile, height: e.target.value})}
                    disabled={!isEditing}
                    className="pankhai-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    value={profile.weight}
                    onChange={(e) => setProfile({...profile, weight: e.target.value})}
                    disabled={!isEditing}
                    className="pankhai-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="conditions">Health Conditions</Label>
                  <Input
                    id="conditions"
                    value={profile.conditions}
                    onChange={(e) => setProfile({...profile, conditions: e.target.value})}
                    disabled={!isEditing}
                    className="pankhai-input"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="pankhai-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <Label className="capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {key === 'cycleReminders' && 'Get reminded about your cycle predictions'}
                      {key === 'symptomTracking' && 'Daily reminders to log symptoms'}
                      {key === 'wellness' && 'Weekly wellness tips and insights'}
                      {key === 'reports' && 'Monthly health reports and analysis'}
                    </p>
                  </div>
                  <Switch
                    checked={value}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, [key]: checked})
                    }
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="pankhai-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Download My Data
              </Button>
              <Button variant="destructive" className="w-full justify-start">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );

  const MobileProfile = () => (
    <div className="p-4 space-y-6">
      <Card className="pankhai-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-muted-foreground">{profile.email}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Age</p>
              <p className="font-medium">{profile.age} years</p>
            </div>
            <div>
              <p className="text-muted-foreground">Height</p>
              <p className="font-medium">{profile.height} cm</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="pankhai-card">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Quick Settings</h3>
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <Label className="text-sm capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </Label>
                <Switch
                  checked={value}
                  onCheckedChange={(checked) => 
                    setNotifications({...notifications, [key]: checked})
                  }
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <>
      <div className="hidden md:block">
        <DesktopProfile />
      </div>
      
      <div className="md:hidden">
        <MobileLayout>
          <MobileProfile />
        </MobileLayout>
      </div>
    </>
  );
};

export default Profile;