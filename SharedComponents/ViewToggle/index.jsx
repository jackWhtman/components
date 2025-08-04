import { LuGrid2X2, LuList } from "react-icons/lu";
import "./index.css";

export default function ViewToggle({ view, onChange }) {
  return (
    <div className="view-toggle">
      <button
        onClick={() => onChange("list")}
        className={view === "list" ? "active" : ""}
        title="List View"
      >
        <LuList size={18} />
      </button>
      <button
        onClick={() => onChange("grid")}
        className={view === "grid" ? "active" : ""}
        title="Grid View"
      >
        <LuGrid2X2 size={18} />
      </button>
    </div>
  );
}
