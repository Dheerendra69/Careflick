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

  const createUser = async (
    data: any
  ) => {
    await userService.createUser(data);

    await fetchUsers();
  };

  const updateUser = async (
    id: string,
    data: any
  ) => {
    await userService.updateUser(
      id,
      data
    );

    await fetchUsers();
  };

  const deleteUser = async (
    id: string
  ) => {
    await userService.deleteUser(id);

    await fetchUsers();
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
    createUser,
    deleteUser,
    updateUser
  };
};