import { useEffect, useState } from "react";
import { userService } from "../services/userService";
import type { User } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] =
    useState(false);
  const [error, setError] =
    useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res =
        await userService.getUsers();

      setUsers(res.data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    setUsers,
    loading,
    error,
    fetchUsers,
  };
};