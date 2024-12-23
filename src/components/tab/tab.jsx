import React, { useState } from 'react';

function Tab() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', title: 'Personal Details' },
    { id: 'tab2', title: 'Contact Details' },
    { id: 'tab3', title: 'Educational Details' },
    { id: 'tab4', title: 'Account Details' },

  ];

  return (
   <div className='ml-20 mt-20' > 
     <div className="max-w-10xl mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-center space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={(tab.id)}
            className={`py-2 px-4 rounded-t-lg ${activeTab === (tab.id) ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab((tab.id))}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        {activeTab === 'tab1' && <div>Tab 1 content</div>}
        {activeTab === 'tab2' && <div>Tab 2 content</div>}
        {activeTab === 'tab3' && <div>Tab 3 content</div>}
        {activeTab === 'tab4' && <div>Tab 4 content</div>}

      </div>
    </div>
   </div>
  );
}

export default Tab;
