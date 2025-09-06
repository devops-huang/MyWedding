// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Home, Images, Calendar, MessageSquare, MapPin } from 'lucide-react';

export function NavigationTabs({
  activeTab,
  onTabChange
}) {
  const tabs = [{
    id: 'cover',
    icon: Home,
    label: '首页'
  }, {
    id: 'gallery',
    icon: Images,
    label: '相册'
  }, {
    id: 'details',
    icon: Calendar,
    label: '详情'
  }, {
    id: 'blessings',
    icon: MessageSquare,
    label: '祝福'
  }, {
    id: 'navigation',
    icon: MapPin,
    label: '导航'
  }];
  return <div className="fixed bottom-0 left-0 right-0 bg-blue-900/80 backdrop-blur-sm border-t border-blue-700/50">
      <div className="grid grid-cols-5 gap-1 p-2">
        {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return <button key={tab.id} onClick={() => onTabChange(tab.id)} className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-blue-600/50 text-white shadow-lg transform scale-105' : 'text-blue-200 hover:text-white hover:bg-blue-700/30'}`}>
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>;
      })}
      </div>
    </div>;
}