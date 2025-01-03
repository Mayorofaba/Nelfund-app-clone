import React, { useState } from "react";
import Aboutme from "../aboutme";
import PersonalDetailTab from "../profileTabs/personalDetailTab";
import ContactDetailTab from "../profileTabs/contactDetailTab";
import EducationalDetail from "../profileTabs/educationalDetail";
import AccountDetail from "../profileTabs/AccountDetail";

function Tab() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", title: "Personal Details" },
    { id: "tab2", title: "Contact Details" },
    { id: "tab3", title: "Educational Details" },
    { id: "tab4", title: "Account Details" },
  ];

  return (
    <div>
      <div className="max-w-60xl mx-auto bg-white rounded-lg shadow-md">
        <div className="flex justify-center space-x-4 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-4 flex-nowrap rounded-t-lg ${
                activeTab === tab.id
                  ? "bg-white text-green-900 font-extrabold border-b-2 border-green-700 "
                  : "text-gray-400 hover:bg-gray-100 font-bold border-none "
              }  `}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="p-4">
          {/* tab 1 */}
          {activeTab === "tab1" && (
            <div>
              <Aboutme />
              <PersonalDetailTab />
            </div>
          )}

          {/* tab 2 */}
          {activeTab === "tab2" && (
            <div>
              <Aboutme />
              <ContactDetailTab />
            </div>
          )}

          {/* tab 3 */}
          {activeTab === "tab3" && (
            <div>
              <Aboutme />
              <EducationalDetail />
            </div>
          )}

          {/* tab 4 */}
          {activeTab === "tab4" && (
            <div>
              <Aboutme />
              <AccountDetail />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tab;
