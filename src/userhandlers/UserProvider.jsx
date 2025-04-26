import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      if (Date.now() > parsed.expiry) {
        // Token/user expired
        localStorage.removeItem("user");
      } else {
        setUser(parsed.data);
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      const userWithExpiry = {
        data: user,
        expiry: Date.now() + 1000 * 60 * 90, 
      };
      localStorage.setItem("user", JSON.stringify(userWithExpiry));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);