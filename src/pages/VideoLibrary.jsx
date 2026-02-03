import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
  {
    id: '1127697487',
    title: 'Installing the HydroFLOW Pearl',
    category: 'Installation'
  },
  {
    id: '1128025470',
    title: 'Installing the HydroFLOW Pearl Plus',
    category: 'Installation'
  },
  {
    id: '742819997',
    title: 'How to detect an electrical loop',
    category: 'Technical'
  },
  {
    id: '755796406',
    title: 'What is voltage potential?',
    category: 'Technical'
  },
  {
    id: '880334527',
    title: 'HydroFLOW foodservice video',
    category: 'Applications'
  },
  {
    id: '723891443',
    title: 'Eaton surge protection device wiring instructions',
    category: 'Technical'
  },
  {
    id: '689045209',
    title: 'How to make hard water',
    category: 'Technical'
  },
  {
    id: '542897277',
    title: 'HydroFLOW Custom I72" installation video',
    category: 'Installation'
  },
  {
    id: '722278472',
    title: 'HydroFLOW 3 head unit bracket and ferrites animation',
    category: 'Technical'
  },
  {
    id: '1142247312',
    title: 'HydroFLOW introduction',
    category: 'Overview'
  },
  {
    id: '806920687',
    title: 'HydroFLOW residential water treatment',
    category: 'Applications'
  },
  {
    id: '447928299',
    title: 'HydroFLOW as a transformer',
    category: 'Technical'
  },
  {
    id: '209619649',
    title: 'HydroFLOW commercial water treatment',
    category: 'Applications'
  },
  {
    id: '201059133',
    title: 'HydroFLOW agricultural water treatment',
    category: 'Applications'
  },
  {
    id: '334474583',
    title: 'HydroFLOW and swimming pools',
    category: 'Applications'
  },
  {
    id: '706623726',
    title: 'HydroFLOW industrial water treatment',
    category: 'Applications'
  },
  {
    id: '655448793',
    title: 'HydroFLOW installation at a combined cycle plant in the Great Lakes region',
    category: 'Case Studies'
  },
  {
    id: '103957209',
    title: 'Hydropath Marine introduction',
    category: 'Overview'
  },
  {
    id: '334472927',
    title: 'HydroFLOW pipe sizes and materials',
    category: 'Technical'
  },
  {
    id: '334469406',
    title: 'HydroFLOW WWTP struvite treatment',
    category: 'Applications'
  },
  {
    id: '334469357',
    title: 'HydroFLOW WWTP polymer reduction',
    category: 'Applications'
  },
  {
    id: '297755376',
    title: 'HydroFLOW and flocculation animation',
    category: 'Technical'
  },
  {
    id: '148682431',
    title: 'HydroFLOW in the news',
    category: 'Media'
  },
  {
    id: '385135360',
    title: 'HydroFLOW and induction furnace cooling systems',
    category: 'Applications'
  },
  {
    id: '107646148',
    title: 'Three minutes with Steve Hester of Baker Produce',
    category: 'Case Studies'
  },
  {
    id: '107484225',
    title: 'G&G orchards cooling tower',
    category: 'Case Studies'
  },
  {
    id: '107645625',
    title: 'Wapato pool interview',
    category: 'Case Studies'
  },
  {
    id: '65602552',
    title: 'Hot water heater in apple processing factory – HydroFLOW scale treatment',
    category: 'Case Studies'
  }
];

const categories = ['All', 'Installation', 'Technical', 'Applications', 'Overview', 'Case Studies', 'Media'];

export default function VideoLibrary() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos = activeCategory === 'All' 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Educational Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Video Library
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Learn about <i>Hydro</i>FLOW technology, installation, and real-world applications through our comprehensive video collection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex bg-slate-100 rounded-full p-1 flex-wrap gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-white text-cyan-600 shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative aspect-video bg-slate-900">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?dnt=1&title=0&byline=0&portrait=0`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}