
import { useAuth } from "../context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="py-6 space-y-6">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold">
          {user?.name?.charAt(0) || 'U'}
        </div>
        <h1 className="mt-4 text-2xl font-bold">{user?.name}</h1>
        <p className="text-muted-foreground">{user?.gender?.charAt(0).toUpperCase() + user?.gender?.slice(1) || ''}</p>
      </div>
      
      <h2 className="text-xl font-semibold mb-4">Your Fitness Stats</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Weight</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{user?.stats?.weight || 0} kg</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Height</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{user?.stats?.height || 0} cm</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">BMI</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{user?.stats?.bmi || 0}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Workouts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{user?.stats?.workoutsCompleted || 0}</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              <div className="p-4">
                <p className="font-medium">Completed Strength Training</p>
                <p className="text-sm text-muted-foreground">Yesterday at 5:30 PM</p>
              </div>
              <div className="p-4">
                <p className="font-medium">Updated Weight</p>
                <p className="text-sm text-muted-foreground">2 days ago</p>
              </div>
              <div className="p-4">
                <p className="font-medium">Completed Cardio Workout</p>
                <p className="text-sm text-muted-foreground">3 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
