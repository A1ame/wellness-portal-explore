
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  gender?: "male" | "female";
  stats?: {
    weight: number;
    height: number;
    bmi: number;
    workoutsCompleted: number;
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isRegistrationComplete: boolean;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  setGender: (gender: "male" | "female") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);

  useEffect(() => {
    // Check for existing user in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string) => {
    // In a real app, you would validate credentials with an API
    // For demo purposes, we'll use a mock user
    const mockUser: User = {
      id: "1",
      name: "Demo User",
      email: email,
      gender: "male",
      stats: {
        weight: 70,
        height: 175,
        bmi: 22.9,
        workoutsCompleted: 12
      }
    };
    
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
  };

  const register = (name: string, email: string, password: string) => {
    // In a real app, you would send this data to your API
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      stats: {
        weight: 0,
        height: 0,
        bmi: 0,
        workoutsCompleted: 0
      }
    };
    
    setUser(newUser);
    setIsRegistrationComplete(true);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const setGender = (gender: "male" | "female") => {
    if (user) {
      const updatedUser = { ...user, gender };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setIsRegistrationComplete(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        isRegistrationComplete,
        login,
        register,
        setGender,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
