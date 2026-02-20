import { useEffect } from 'react';
import Data from '../assets/Internship.json';
import { Briefcase, Calendar } from 'lucide-react';

const Internships = () => {
  useEffect(() => {
    document.title = 'Sarankiruthik | Internships';
  }, []);

  return (
    <div className="bg-gray-900 text-white py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-12">
          Professional Experience
        </h1>

        {/* Timeline container */}
        <div className="relative">
          {/* Center line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-cyan-400/40 to-cyan-400/10" />

          <div className="space-y-10">
            {Data.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse" />
                  </div>

                  {/* Card */}
                  <div className="w-full md:w-[46%]">
                    <div className="bg-slate-800/70 backdrop-blur border border-gray-700 rounded-xl p-5 shadow-lg hover:shadow-cyan-400/10 transition duration-300 hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex items-start gap-4">
                        {/* Company circle */}
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                          <Briefcase className="text-cyan-300" size={22} />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">
                            {item.course}
                          </h3>

                          <p className="text-cyan-300 font-medium">
                            {item.conductor}
                          </p>

                          <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                            <Calendar size={14} />
                            <span>{item.DataofIssue}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
