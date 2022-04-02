import { Routes, Route } from "react-router-dom";
import IndexPage from "../../pages";
import ProjectPage from "../../pages/projects";
import TasksPage from "../../pages/tasks";
import UsersPage from "../../pages/users";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
};

export default RouteList;
