import { NavLink } from "react-router-dom";
import "./Sidebar.css";

// Only pages that actually exist get a nav item -- more get added here as
// each screen is built, same way endpoints were added one at a time on
// the backend.
const NAV_ITEMS = [
  { label: "Dashboard", path: "/", end: true },
  { label: "Job Profiles", path: "/profiles", end: false },
];

export default function Sidebar() {
  return (
    <aside className="sidebar glass-card">
      <div className="sidebar-brand">
        <div className="sidebar-eyebrow">IHMCL</div>
        <div className="sidebar-title">HR Screening</div>
      </div>

      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

