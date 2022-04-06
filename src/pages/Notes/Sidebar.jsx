import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon">
        <div className="sidebar-icon-option">
          <Link className="link" to="/notes">
            Notes
          </Link>
        </div>
        <div className="sidebar-icon-option">
          <Link className="link" to="/archives">
            Archives
          </Link>
        </div>
        <div className="sidebar-icon-option">
          <Link className="link" to="/trash">
            Trash
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
