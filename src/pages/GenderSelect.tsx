
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const GenderSelect = () => {
  const { setGender } = useAuth();
  const navigate = useNavigate();
  
  const handleGenderSelect = (gender: "male" | "female") => {
    setGender(gender);
    navigate("/");
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Select Your Gender</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div 
          onClick={() => handleGenderSelect("male")}
          className="cursor-pointer transform transition-transform hover:scale-105"
        >
          <Card>
            <CardContent className="p-4">
              <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Male fitness"
                  className="object-cover h-full w-full"
                />
              </AspectRatio>
              <h3 className="mt-4 text-xl font-semibold text-center">Male</h3>
            </CardContent>
          </Card>
        </div>
        
        <div 
          onClick={() => handleGenderSelect("female")}
          className="cursor-pointer transform transition-transform hover:scale-105"
        >
          <Card>
            <CardContent className="p-4">
              <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Female fitness"
                  className="object-cover h-full w-full"
                />
              </AspectRatio>
              <h3 className="mt-4 text-xl font-semibold text-center">Female</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GenderSelect;
