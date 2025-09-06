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
import { ResponsiveText } from '@/components/ResponsiveText';
import { ResponsiveGrid } from '@/components/ResponsiveGrid';
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
  const [isMobile, setIsMobile] = useState(false);
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
  const weddingPhotos = ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=750&fit=crop', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=750&fit=crop', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=750&fit=crop', 'https://images.unsplash.com/photo-1567532939604-b6b5c0ad2607?w极速快车=500&h=750&fit=crop'];
  const weddingVows = ["两情若是久长时，又岂在朝朝暮暮。", "愿得一心人，白首不相离。", "死生契阔，与子成说。执子之手，与子偕老。", "Love is composed of a single soul inhabiting two bodies.", "Grow old along with me, the best is yet to be.", "The greatest happiness of life is the conviction that we are loved."];
  const [currentVowIndex, setCurrentVowIndex] = useState(0);
  useEffect(() => {
    const photoTimer = setInterval(() => {
      setCurrentPhotoIndex(prev => (prev + 1) % weddingPhotos.length);
    }, 5000);
    const vowTimer = setInterval(() => {
      setCurrentVowIndex(prev => (prev + 1) % weddingVows.length);
    }, 8000);
    // 检测移动端
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      clearInterval(photoTimer);
      clearInterval(vowTimer);
      window.removeEventListener('resize', checkMobile);
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
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 w-full max-w-4xl">
        {/* 新人姓名 - 响应式显示 */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col items-center mb-4 sm:mb-6">
            <ResponsiveText size="3xl" weight="bold" className="mb-1 sm:mb-2">
              {weddingInfo.bride}
            </ResponsiveText>
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300 my-1 sm:my-2 animate-pulse" />
            <ResponsiveText size="3xl" weight="bold">
              {weddingInfo.groom}
            </ResponsiveText>
          </div>
          <ResponsiveText size="lg" className="text-blue-100">
            诚挚邀请您参加我们的婚礼
          </ResponsiveText>
        </div>

        {/* 文学名言 - 响应式显示 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 mb-6 sm:mb-8 mx-2 sm:mx-0">
          <ResponsiveText size="base" className="leading-relaxed italic text-center">
            {weddingVows[currentVowIndex]}
          </ResponsiveText>
        </div>

        {/* 婚礼信息 - 响应式网格 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 mx-2 sm:mx-0">
          <ResponsiveGrid cols={1} sm={3} gap={3} className="items-center">
            <div className="flex items-center justify-center">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mr-2 sm:mr-3" />
              <ResponsiveText size="sm" className="text-white">
                {weddingInfo.date}
              </ResponsiveText>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-blue-300 mr-2 sm:mr-3 text-sm">⏰</span>
              <ResponsiveText size="sm" className="text-white">
                {weddingInfo.time}
              </ResponsiveText>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mr-2 sm:mr-3" />
              <ResponsiveText size="sm" className="text-white">
                {weddingInfo.location}
              </ResponsiveText>
            </div>
          </ResponsiveGrid>
        </div>

        <div className="mt-6 sm:mt-8">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300 mx-auto animate-pulse" />
        </div>
      </div>
    </div>;
  const renderGallery = () => <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 pt-6 sm:pt-8 px-2 sm:px-4">
      <WeddingHeader title="我们的相册" subtitle="记录美好时刻" />
      <PhotoGallery photos={weddingPhotos} />
    </div>;
  const renderDetails = () => <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 pt-6 sm:pt-8 px-4 sm:px-6">
      <WeddingHeader title="婚礼详情" subtitle="深蓝之谜的浪漫盛宴" />
      
      <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 text-white">
        <div className="grid gap-6 sm:gap-8">
          <div>
            <ResponsiveText size="xl" weight="bold" className="text-blue-200 mb-3 sm:mb-4">
              🎉 仪式流程
            </ResponsiveText>
            <div className="space-y-2 sm:space-y-3">
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
            }].map((item, index) => <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 sm:w-16 text-blue-300 font-medium text-sm sm:text-base">
                    {item.time}
                  </div>
                  <div>
                    <ResponsiveText size="sm" weight="medium">
                      {item.event}
                    </ResponsiveText>
                    <ResponsiveText size="xs" className="text-blue-200">
                      {item.desc}
                    </ResponsiveText>
                  </div>
                </div>)}
            </div>
          </div>

          <div>
            <ResponsiveText size="xl" weight="bold" className="text-blue-200 mb-3 sm:mb-4">
              👔 着装要求
            </ResponsiveText>
            <ResponsiveText size="base" className="leading-relaxed">
              请着正装出席，建议女士穿蓝色或银色礼服，男士穿深色西装。
              让我们一起营造深蓝之谜的浪漫氛围。
            </ResponsiveText>
          </div>
        </div>
      </div>
    </div>;
  const renderBlessings = () => <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 pt-6 sm:pt-8 px-4 sm:px-6 relative overflow-hidden">
      {/* 飘动祝福和爱心动画 */}
      <BlessingAnimation />
      
      <WeddingHeader title="送上祝福" subtitle="分享您的祝福与喜悦" />
      
      <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 relative z-20">
        <form onSubmit={handleBlessingSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-blue-200 text-sm font-medium mb-2 font-yahei">
              您的姓名
            </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all font-yahei touch-friendly" placeholder="请输入您的姓名" />
          </div>
          
          <div>
            <label className="block text-blue-200 text-sm font-medium mb-2 font-yahei">
              祝福语
            </label>
            <textarea value={blessing} onChange={e => setBlessing(e.target.value)} rows={isMobile ? 3 : 4} className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none font-yahei touch-friendly" placeholder="请输入您的祝福语..." />
          </div>
          
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-yahei touch-friendly">
            ✨ 发送祝福
          </button>
        </form>
      </div>
    </div>;
  const renderNavigation = () => <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 pt-6 sm:pt-8 px-4 sm:px-6">
      <WeddingHeader title="婚礼地点" subtitle="深蓝之谜动感宴会厅" />
      
      <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 text-white">
        <div className="mb-4 sm:mb-6">
          <ResponsiveText size="lg" weight="bold" className="text-blue-200 mb-2 sm:mb-3">
            📍 地址信息
          </ResponsiveText>
          <ResponsiveText size="sm" className="mb-2">
            {weddingInfo.address}
          </ResponsiveText>
          <div className="flex items-center space-x-3 sm:space-x-4 text-blue-200 mt-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <ResponsiveText size="sm">{weddingInfo.phone}</ResponsiveText>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 text-blue-200 mt-1 sm:mt-2">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
            <ResponsiveText size="sm">{weddingInfo.email}</ResponsiveText>
          </div>
        </div>

        <div className="bg-blue-800/30 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 text-center">
          <MapPin className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 text-blue-300" />
          <ResponsiveText size="sm" className="text-blue-200">
            地图导航
          </ResponsiveText>
        </div>

        <button onClick={handleNavigation} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 mb-4 sm:mb-6 font-yahei touch-friendly">
          🗺️ 打开地图导航
        </button>

        <div className="p-3 sm:p-4 bg-blue-800/20 rounded-lg border border-blue-700/30">
          <ResponsiveText size="sm" weight="medium" className="text-blue-200 mb-2">
            🚗 交通提示
          </ResponsiveText>
          <div className="text-blue-300 space-y-1">
            <ResponsiveText size="xs">• 地铁：1号线星光大道站A出口步行3分钟</ResponsiveText>
            <ResponsiveText size="xs">• 公交：88路、168路星光大道站</ResponsiveText>
            <ResponsiveText size="xs">• 停车：宴会厅提供免费地下停车场</ResponsiveText>
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