import React from 'react';

const Achievements = ({ achievements }) => {
  if (achievements.length === 0) return null;

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-red-900 dark:text-red-400 mb-8">Logros Desbloqueados</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="bg-red-50 dark:bg-red-900/30 border border-red-400 dark:border-red-800 rounded-lg p-4 animate-fade-in"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏆</span>
              <div>
                <h3 className="font-bold text-red-900 dark:text-red-400">{achievement.title}</h3>
                <p className="text-red-800 dark:text-red-300">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;