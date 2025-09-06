// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Heart } from 'lucide-react';

export function BlessingAnimation() {
  const [blessings] = useState([{
    name: '张三',
    message: '祝你们永浴爱河，白头偕老！'
  }, {
    name: '李四',
    message: '恭喜新婚，幸福美满！'
  }, {
    name: '王五',
    message: '愿你们的爱情如美酒般醇香！'
  }, {
    name: '赵六',
    message: '祝福新人，百年好合！'
  }, {
    name: '钱七',
    message: '爱情甜蜜，生活美满！'
  }]);
  const [hearts, setHearts] = useState([]);
  useEffect(() => {
    // 爱心生成器
    const heartInterval = setInterval(() => {
      if (hearts.length < 15) {
        setHearts(prev => [...prev, {
          id: Date.now(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 3 + 2
        }]);
      }
    }, 800);

    // 清理过期爱心
    const cleanupInterval = setInterval(() => {
      setHearts(prev => prev.filter(heart => Date.now() - heart.id < heart.duration * 1000));
    }, 1000);
    return () => {
      clearInterval(heartInterval);
      clearInterval(cleanupInterval);
    };
  }, [hearts.length]);
  return <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* 飘动爱心 */}
      {hearts.map(heart => <div key={heart.id} className="absolute animate-float" style={{
      left: `${heart.left}%`,
      top: '100%',
      animationDuration: `${heart.duration}s`,
      animationDelay: `${Math.random() * 0.5}s`
    }}>
          <Heart className="text-pink-400 opacity-70" style={{
        width: heart.size,
        height: heart.size
      }} />
        </div>)}

      {/* 飘动祝福文字 */}
      {blessings.map((blessing, index) => <div key={index} className="absolute text-white text-sm bg-blue-600/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg animate-blessing-float" style={{
      left: `${20 + index * 15}%`,
      animationDuration: `${8 + index * 2}s`,
      animationDelay: `${index * 0.5}s`
    }}>
          <span className="font-bold text-blue-100">{blessing.name}：</span>
          {blessing.message}
        </div>)}
    </div>;
}