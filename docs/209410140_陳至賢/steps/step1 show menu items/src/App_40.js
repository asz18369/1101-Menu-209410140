import Menu_40 from "./components/Menu_40";
import items from './data'
import { useState } from 'react';

function App_40() {
  const [menuItems,setMenuItems] = useState(items);
  return (
    <div>
     <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Menu_40 items={items}/>
    </section>
  </main>
    </div>
  );
}

export default App_40;
