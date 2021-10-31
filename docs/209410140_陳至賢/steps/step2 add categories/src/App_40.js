import Menu_40 from "./components/Menu_40";
import items from './data'
import Category_40 from "./components/Category_40";
import { useState } from 'react';

const allCategories = [`all`, ...new Set(items.map(item => item.category))]
console.log('allCategories',allCategories);

function App_40() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  return (
    <div>
     <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Category_40 categories={categories}/>
      <Menu_40 items={items}/>
    </section>
  </main>
    </div>
  );
}

export default App_40;
