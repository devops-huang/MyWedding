// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { useToast } from '@/components/ui';
// @ts-ignore;
import { Calendar, MapPin, Mail, Phone, Sparkles, Heart } from 'lucide-react';

import { WeddingHeader } from '@/components/WeddingHeader';
import { NavigationTabs } from '@/components/NavigationTabs';
import { PhotoGallery } from '@/components/PhotoGallery';
import { BlessingAnimation } from '@/components/BlessingAnimation';
export default function WeddingInvitation(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [activeTab, setActiveTab] = useState('cover');
  const [blessing, setBlessing] = useState('');
  const [name, setName] = useState('');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const weddingInfo = {
    bride: '张美丽',
    groom: '李英俊',
    date: '2025年10月3日',
    time: '下午14:30',
    location: '深蓝之谜动感宴会厅',
    address: '北京市朝阳区星光大道88号',
    phone: '138-8888-8888',
    email: 'wedding@example.com'
  };
  const weddingPhotos = ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=750&fit=crop', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=750&fit=crop', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=750&fit=crop', 'https://images.unsplash.com/photo-1567532939604-b6b5c0ad2607?w=500&h=750&fit=crop'];
  const weddingVows = ["两情若是久长时，又岂在朝朝暮暮。", "愿得一心人，白首不相离。", "死生契阔，与子成说。执子之手，与子偕老。", "Love is composed of a single soul inhabiting two bodies.", "Grow old along with me, the best is yet to be.", "The greatest happiness of life is the conviction that we are loved."];
  const [currentVowIndex, setCurrentVowIndex] = useState(0);
  useEffect(() => {
    const photoTimer = setInterval(() => {
      setCurrentPhotoIndex(prev => (prev + 1) % weddingPhotos.length);
    }, 5000);
    const vowTimer = setInterval(() => {
      setCurrentVowIndex(prev => (prev + 1) % weddingVows.length);
    }, 8000);
    return () => {
      clearInterval(photoTimer);
      clearInterval(vowTimer);
    };
  }, []);
  const handleBlessingSubmit = async e => {
    e.preventDefault();
    if (!name || !blessing) {
      toast({
        title: '请填写完整信息',
        description: '请填写您的姓名和祝福语',
        variant: 'destructive'
      });
      return;
    }
    try {
      toast({
        title: '✨ 祝福发送成功',
        description: '感谢您的真挚祝福！',
        className: 'bg-blue-600 border-blue-700 text-white'
      });
      setBlessing('');
      setName('');
    } catch (error) {
      toast({
        title: '发送失败',
        description: '请稍后重试',
        variant: 'destructive'
      });
    }
  };
  const handleNavigation = () => {
    window.open(`https://maps.google.com?q=${encodeURIComponent(weddingInfo.address)}`);
  };
  const renderCover = () => <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-purple-900/50" />
      <img src={weddingPhotos[currentPhotoIndex]} alt="婚纱照" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000" />
      
      <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl">
        {/* 新人姓名 - 优化显示 */}
        <div className="mb-10">
          <div className="flex flex-col items-center mb-6">
            <div className="text-4xl font-bold mb-2 font-yahei">{weddingInfo.bride}</div>
            <Heart className="w-8 h-8 text-blue-300 my-2 animate-pulse" />
            <div className="text-4xl font-bold font-yahei">{weddingInfo.groom}</div>
          </div>
          <p className="text-xl text-blue-100 font-yahei">诚挚邀请您参加我们的婚礼</p>
        </div>

        {/* 文学名言 - 简化显示，移除标题 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
          <div className="text-lg leading-relaxed text-white italic text-center font-yahei">
            {weddingVows[currentVowIndex]}
          </div>
        </div>

        {/* 婚礼信息 - 优化排版 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="grid gap-4">
            <div className="flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-300 mr-3" />
              <span className="text-white font-yahei text-lg">{weddingInfo.date}</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-blue-300 mr-3">⏰</span>
              <span className="text-white font-yahei text-lg">{weddingInfo.time}</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-5 h-5 text-blue-300 mr-3" />
              <span className="text-white font-yahei text-lg">{weddingInfo.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Sparkles className="w-8 h-8 text-blue-300 mx-auto animate-pulse" />
        </div>
      </div>
    </div>;
  const renderGallery = () => <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 pt-8">
      <WeddingHeader title="我们的相册" subtitle="记录美好时刻" />
      <PhotoGallery photos={weddingPhotos} />
    </div>;
  const renderDetails = () => <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 pt-8 px-6">
      <WeddingHeader title="婚礼详情" subtitle="深蓝之谜的浪漫盛宴" />
      
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-white">
        <div className="grid gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-200 font-yahei">🎉 仪式流程</h3>
            <div className="space-y-3">
              {[{
              time: '14:00',
              event: '宾客入场',
              desc: '深蓝主题迎宾区'
            }, {
              time: '14:30',
              event: '婚礼仪式',
              desc: '星空下的誓言'
            }, {
              time: '15:30',
              event: '婚宴开始',
              desc: '蓝色梦幻晚宴'
            }, {
              time: '18:00',
              event: '婚礼结束',
              desc: '星光送别'
            }].map((item, index) => <div key={index} className="flex items-start space-x-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-16 text-blue-300 font-medium font-yahei">{item.time}</div>
                  <div>
                    <div className="font-medium font-yahei">{item.event}</div>
                    <div className="text-blue-200 text-sm font-yahei">{item.desc}</div>
                  </div>
                </div>)}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-200 font-yahei">👔 着装要求</h3>
            <p className="leading-relaxed font-yahei">
              请着正装出席，建议女士穿蓝色或银色礼服，男士穿深色西装。
              让我们一起营造深蓝之谜的浪漫氛围。
            </p>
          </div>
        </div>
      </div>
    </div>;
  const renderBlessings = () => <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 pt-8 px-6 relative overflow-hidden">
      {/* 飘动祝福和爱心动画 */}
      <BlessingAnimation />
      
      <WeddingHeader title="送上祝福" subtitle="分享您的祝福与喜悦" />
      
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 relative z-20">
        <form onSubmit={handleBlessingSubmit} className="space-y-6">
          <div>
            <label className="block text-blue-200 text-sm font-medium mb-2 font-yahei">
              您的姓名
            </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all font-yahei" placeholder="请输入您的姓名" />
          </div>
          
          <div>
            <label className="block text-blue-200 text-sm font-medium mb-2 font-yahei">
              祝福语
            </label>
            <textarea value={blessing} onChange={e => setBlessing(e.target.value)} rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none font-yahei" placeholder="请输入您的祝福语..." />
          </div>
          
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-yahei">
            ✨ 发送祝福
          </button>
        </form>
      </div>
    </div>;
  const renderNavigation = () => <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 pt-8 px-6">
      <WeddingHeader title="婚礼地点" subtitle="深蓝之谜动感宴会厅" />
      
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-white">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-blue-200 font-yahei">📍 地址信息</h3>
          <p className="mb-2 font-yahei">{weddingInfo.address}</p>
          <div className="flex items-center space-x-4 text-blue-200">
            <Phone className="w-4 h-4" />
            <span className="font-yahei">{weddingInfo.phone}</span>
          </div>
          <div className="flex items-center space-x-4 text-blue-200 mt-2">
            <Mail className="w-4 h-4" />
            <span className="font-yahei">{weddingInfo.email}</span>
          </div>
        </div>

        <div className="bg-blue-800/30 rounded-lg p-6 mb-6 text-center">
          <MapPin className="w-12 h-12 mx-auto mb-3 text-blue-300" />
          <p className="text-blue-200 font-yahei">地图导航</p>
        </div>

        <button onClick={handleNavigation} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 mb-6 font-yahei">
          🗺️ 打开地图导航
        </button>

        <div className="p-4 bg-blue-800/20 rounded-lg border border-blue-700/30">
          <h4 className="font-medium text-blue-200 mb-2 font-yahei">🚗 交通提示</h4>
          <div className="text-blue-300 text-sm space-y-1 font-yahei">
            <p>• 地铁：1号线星光大道站A出口步行3分钟</p>
            <p>• 公交：88路、168路星光大道站</p>
            <p>• 停车：宴会厅提供免费地下停车场</p>
          </div>
        </div>
      </div>
    </div>;
  const renderContent = () => {
    switch (activeTab) {
      case 'cover':
        return renderCover();
      case 'gallery':
        return renderGallery();
      case 'details':
        return renderDetails();
      case 'blessings':
        return renderBlessings();
      case 'navigation':
        return renderNavigation();
      default:
        return renderCover();
    }
  };
  return <div className="relative">
      {renderContent()}
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
    </div>;
}