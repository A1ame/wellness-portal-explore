
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Exercise {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: string;
}

const exerciseCategories = {
  strength: [
    {
      id: "s1",
      name: "Bench Press",
      description: "Targets chest, shoulders, and triceps",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "3 sets x 10 reps"
    },
    {
      id: "s2",
      name: "Squats",
      description: "Works your thighs, glutes, and core",
      image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "3 sets x 12 reps"
    },
    {
      id: "s3",
      name: "Deadlift",
      description: "Full body workout focusing on back",
      image: "https://images.unsplash.com/photo-1598575285627-d1f27d98a9b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "3 sets x 8 reps"
    },
  ],
  cardio: [
    {
      id: "c1",
      name: "Running",
      description: "Improves cardiovascular fitness and endurance",
      image: "https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "30 minutes"
    },
    {
      id: "c2",
      name: "Cycling",
      description: "Low-impact cardio that targets legs",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "45 minutes"
    },
    {
      id: "c3",
      name: "Jump Rope",
      description: "Full body cardio workout",
      image: "https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "15 minutes"
    },
  ],
  warmup: [
    {
      id: "w1",
      name: "Stretching",
      description: "Improves flexibility and prevents injury",
      image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "10 minutes"
    },
    {
      id: "w2",
      name: "Jumping Jacks",
      description: "Gets your heart rate up and blood flowing",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "5 minutes"
    },
    {
      id: "w3",
      name: "Arm Circles",
      description: "Warms up shoulders and improves mobility",
      image: "https://images.unsplash.com/photo-1597452485677-d661670d9640?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "2 minutes"
    },
  ],
};

const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-40 overflow-hidden">
        <img
          src={exercise.image}
          alt={exercise.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold">{exercise.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{exercise.description}</p>
        <p className="text-sm font-medium">{exercise.duration}</p>
      </CardContent>
    </Card>
  );
};

const Exercises = () => {
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-6">Exercises</h1>
      
      <Tabs defaultValue="strength">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="warmup">Warm Up</TabsTrigger>
        </TabsList>
        
        <TabsContent value="strength" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {exerciseCategories.strength.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="cardio" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {exerciseCategories.cardio.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="warmup" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {exerciseCategories.warmup.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Exercises;
