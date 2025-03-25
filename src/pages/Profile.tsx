
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Profile = () => {
  const { user, logout } = useAuth();
  const [weight, setWeight] = useState(user?.stats?.weight?.toString() || "");
  const [height, setHeight] = useState(user?.stats?.height?.toString() || "");
  
  const handleUpdateStats = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update the user in the database
    toast.success("Profile updated successfully");
  };
  
  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };
  
  return (
    <div className="py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input value={user?.name} readOnly />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={user?.email} readOnly />
            </div>
            <div className="space-y-2">
              <Label>Gender</Label>
              <Input 
                value={user?.gender?.charAt(0).toUpperCase() + user?.gender?.slice(1) || ''} 
                readOnly 
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Update Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpdateStats} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your weight"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height"
                />
              </div>
            </div>
            <Button type="submit" className="w-full">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Button variant="outline" className="w-full">Change Password</Button>
          </div>
          <div>
            <Button variant="outline" className="w-full">Notification Settings</Button>
          </div>
          <div>
            <Button variant="destructive" className="w-full" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
