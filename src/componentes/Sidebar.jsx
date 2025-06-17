import products from "../assets/products.json";

const Sidebar = ({ setSelectedCategory }) => {
  const uniqueCategories = [...new Set(products.map((item) => item.category))];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <nav>
        <ul className="sidebar-menu">
          <li>
            <button
              className="sidebar-link"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
          </li>
          {uniqueCategories.map((category, index) => (
            <li key={index}>
              <button
                className="sidebar-link"
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
