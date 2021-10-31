import Menu_40 from "./components/Menu_40";
import items from './data'
import Category_40 from "./components/Category_40";
import { useState } from 'react';

const allCategories = [`all`, ...new Set(items.map(item => item.category))]
console.log('allCategories',allCategories);

function App_40() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
        setMenuItems(items);
    }else{
      const newItems = items.filter((item)=>item.category===category);
      setMenuItems(newItems);
    }
    }

  return (
    <div>
     <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Category_40 categories={categories} filterItems={filterItems}/>
      <Menu_40 items={menuItems}/>
    </section>
    </main>
    </div>
  );
}

export default App_40;
