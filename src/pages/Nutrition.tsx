
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Nutrition = () => {
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-6">Nutrition</h1>
      
      <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-dashed border-primary/40">
        <CardHeader>
          <CardTitle className="text-center">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            Our nutrition tracking and meal planning features are currently under development. 
            Stay tuned for updates!
          </p>
          
          <div className="flex justify-center mt-6">
            <svg
              className="animate-spin h-12 w-12 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Nutrition;
